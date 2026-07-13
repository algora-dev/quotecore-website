'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { User, SupabaseClient } from '@supabase/supabase-js';

interface FreeToolsAuthState {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<{ error: string | null }>;
  signUpWithEmail: (email: string, password: string) => Promise<{ error: string | null; needsConfirmation: boolean }>;
  signOut: () => Promise<void>;
}

const FreeToolsAuthContext = createContext<FreeToolsAuthState>({
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  signInWithEmail: async () => ({ error: null }),
  signUpWithEmail: async () => ({ error: null, needsConfirmation: false }),
  signOut: async () => {},
});

export function FreeToolsAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);

  useEffect(() => {
    let mounted = true;
    import('@/app/lib/supabase/free-client').then(({ createFreeToolsClient }) => {
      if (!mounted) return;
      const client = createFreeToolsClient();
      setSupabase(client);
      client.auth.getSession().then(({ data: { session } }) => {
        setUser(session?.user ?? null);
        setLoading(false);
      });
      const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      });
      // Store cleanup on the client instance
      (client as any)._cleanup = () => subscription.unsubscribe();
    });
    return () => { mounted = false; if (supabase && (supabase as any)._cleanup) (supabase as any)._cleanup(); };
  }, []);

  const signInWithGoogle = async () => {
    if (!supabase) return;
    const redirectTo = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : undefined;
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo },
    });
  };

  const signInWithEmail = async (email: string, password: string) => {
    if (!supabase) return { error: 'Not ready' };
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message ?? null };
  };

  const signUpWithEmail = async (email: string, password: string) => {
    if (!supabase) return { error: 'Not ready', needsConfirmation: false };
    const redirectTo = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : undefined;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: redirectTo },
    });
    return {
      error: error?.message ?? null,
      needsConfirmation: !error && !data.session,
    };
  };

  const signOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
  };

  return (
    <FreeToolsAuthContext.Provider
      value={{ user, loading, signInWithGoogle, signInWithEmail, signUpWithEmail, signOut }}
    >
      {children}
    </FreeToolsAuthContext.Provider>
  );
}

export function useFreeToolsAuth() {
  return useContext(FreeToolsAuthContext);
}
