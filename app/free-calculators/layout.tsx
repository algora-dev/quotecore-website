import type { ReactNode } from 'react';
import { FreeToolsAuthProvider } from '../_components/FreeToolsAuthProvider';
import FreeToolsHeader from '../_components/FreeToolsHeader';
import SiteFooter from '@/components/SiteFooter';

const SITE_URL = 'https://quote-core.com';

export const metadata = {
  title: 'Free Trade Calculators - Roofing, Construction, Concrete & More | QuoteCore+',
  description:
    'Free online calculators for trades: roofing, construction, concrete, and landscaping. Areas, volumes, angles, material quantities and pricing. No signup required.',
  alternates: { canonical: `${SITE_URL}/free-calculators` },
  openGraph: {
    title: 'Free Trade Calculators - Roofing, Construction, Concrete & More',
    description:
      'Free online calculators for trades. Areas, volumes, angles, material quantities and pricing. No signup required.',
    url: `${SITE_URL}/free-calculators`,
    type: 'website',
  },
};

export default function FreeCalculatorsLayout({ children }: { children: ReactNode }) {
  return (
    <FreeToolsAuthProvider>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <FreeToolsHeader />
        {children}
        <SiteFooter />
      </div>
    </FreeToolsAuthProvider>
  );
}
