import { createClient } from '@supabase/supabase-js';

/**
 * Browser-side Supabase client for the free tools project
 * (quote-core-free-tools, ref: dhpfjjbiobrrbvzdqyur).
 * Separate from the main app's Supabase project.
 * 
 * Uses @supabase/supabase-js (not @supabase/ssr) since the website
 * project doesn't have the ssr package installed.
 */
export function createFreeToolsClient() {
  return createClient(
    process.env.NEXT_PUBLIC_FREE_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_FREE_SUPABASE_ANON_KEY!,
  );
}
