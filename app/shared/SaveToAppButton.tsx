'use client';

import { useState, useCallback } from 'react';
import { useFreeToolsAuth } from '../_components/FreeToolsAuthProvider';

/**
 * Website-specific "Save to App" button for free tools on quote-core.com.
 * Different from the app version: redirects cross-domain to app.quote-core.com
 * with encoded draft data (no localStorage dependency).
 * 
 * Flow:
 * 1. Resolve email from FreeToolsAuth or localStorage
 * 2. If no email -> show email input modal
 * 3. Encode draft data as base64 URL param
 * 4. Redirect to app.quote-core.com/api/app/import-free-document?external_draft=<base64>
 *    The app handles eligibility checks, login redirect, and import.
 */

export type DocumentType = 'quote' | 'order' | 'invoice';

export interface FreeDocumentData {
  companyName: string;
  fromName?: string;
  fromPhone?: string;
  fromEmail?: string;
  clientName: string;
  clientEmail?: string;
  clientAddress?: string;
  documentNumber: string;
  documentDate: string;
  validDays?: string;
  notes?: string;
  footer?: string;
  logo?: string | null;
  currency: string;
  taxRate?: number;
  taxName?: string;
  taxEnabled?: boolean;
  lines: { description: string; qty: number; unit: string; rate: number }[];
}

type ModalState =
  | { type: 'none' }
  | { type: 'loading' }
  | { type: 'need_email' }
  | { type: 'error'; message: string };

interface SaveToAppButtonProps {
  documentType: DocumentType;
  documentData: FreeDocumentData;
  userEmail?: string;
}

const APP_URL = 'https://app.quote-core.com';

export function SaveToAppButton({ documentType, documentData, userEmail }: SaveToAppButtonProps) {
  const [modal, setModal] = useState<ModalState>({ type: 'none' });
  const { user: authUser } = useFreeToolsAuth();

  const handleSaveToApp = useCallback(async () => {
    setModal({ type: 'loading' });

    try {
      // Resolve email: auth user email > prop > localStorage
      let email = authUser?.email || userEmail || '';
      if (!email) {
        try {
          email = localStorage.getItem('free-tools-email') || '';
        } catch {}
      }

      if (!email) {
        setModal({ type: 'need_email' });
        return;
      }

      // Encode draft data as base64 URL param
      const draftPayload = {
        documentType,
        documentData,
        email,
        savedAt: new Date().toISOString(),
      };
      const jsonStr = JSON.stringify(draftPayload);
      const base64 = btoa(unescape(encodeURIComponent(jsonStr)));

      // Redirect to app with encoded draft data
      window.location.href = `${APP_URL}/api/app/import-free-document?external_draft=${base64}`;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setModal({ type: 'error', message });
    }
  }, [documentType, documentData, userEmail, authUser]);

  const [emailInput, setEmailInput] = useState('');

  const handleSaveToAppWithEmail = useCallback(async (email: string) => {
    setModal({ type: 'loading' });
    try {
      // Save email to localStorage for future use
      try { localStorage.setItem('free-tools-email', email); } catch {}

      const draftPayload = {
        documentType,
        documentData,
        email,
        savedAt: new Date().toISOString(),
      };
      const jsonStr = JSON.stringify(draftPayload);
      const base64 = btoa(unescape(encodeURIComponent(jsonStr)));

      window.location.href = `${APP_URL}/api/app/import-free-document?external_draft=${base64}`;
    } catch (err: unknown) {
      setModal({ type: 'error', message: err instanceof Error ? err.message : 'Unknown error' });
    }
  }, [documentType, documentData]);

  const closeModal = () => setModal({ type: 'none' });

  if (modal.type === 'none') {
    return (
      <button
        onClick={handleSaveToApp}
        className="inline-flex items-center gap-1.5 rounded-full bg-[#FF6B35] px-5 py-2 text-sm font-semibold text-white hover:bg-[#ff5722] transition"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
        </svg>
        Save to app
      </button>
    );
  }

  return (
    <>
      {/* Loading modal */}
      {modal.type === 'loading' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
          <div className="bg-white rounded-xl border border-slate-200 shadow-xl w-full max-w-sm mx-4 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-300 border-t-[#FF6B35]" />
              <p className="text-sm text-slate-600">Saving to your QuoteCore+ account...</p>
            </div>
          </div>
        </div>
      )}

      {/* Need email modal */}
      {modal.type === 'need_email' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
          <div className="bg-white rounded-xl border border-slate-200 shadow-xl w-full max-w-sm mx-4 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Save to app</h2>
              <button onClick={closeModal} className="p-1 text-slate-400 hover:text-slate-600 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-slate-600">Enter your email to save this {documentType} to your QuoteCore+ account.</p>
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
              placeholder="your@email.com"
              autoFocus
              onKeyDown={(e) => { if (e.key === 'Enter' && emailInput.trim()) handleSaveToAppWithEmail(emailInput.trim()); }}
            />
            <div className="flex flex-col gap-2">
              <button
                onClick={() => { if (emailInput.trim()) handleSaveToAppWithEmail(emailInput.trim()); }}
                className="w-full px-5 py-2.5 text-sm font-semibold rounded-full bg-black text-white hover:bg-slate-800 transition"
              >
                Save to app
              </button>
              <button
                onClick={closeModal}
                className="w-full text-center px-5 py-2 text-sm font-medium rounded-full border border-slate-300 hover:bg-slate-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error modal */}
      {modal.type === 'error' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
          <div className="bg-white rounded-xl border border-slate-200 shadow-xl w-full max-w-sm mx-4 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Something went wrong</h2>
              <button onClick={closeModal} className="p-1 text-slate-400 hover:text-slate-600 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-red-600">{modal.message}</p>
            <button
              onClick={closeModal}
              className="w-full px-5 py-2 text-sm font-medium rounded-full border border-slate-300 hover:bg-slate-50 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
