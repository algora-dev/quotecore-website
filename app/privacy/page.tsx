import type { Metadata } from "next";
import BlogHeader from "@/components/BlogHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | QuoteCore+",
  description: "How QuoteCore+ collects, uses, and protects your personal data when you visit quote-core.com and use the QuoteCore+ service.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <BlogHeader />

      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-zinc-400">Effective date: 17 June 2026</p>

        <div className="prose prose-zinc mt-10 max-w-none">
          <p>This Privacy Policy explains how QuoteCore+ (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) handles personal data when you visit our website at <strong>quote-core.com</strong> and when you use the QuoteCore+ service, including free trials and paid subscriptions.</p>
          <p>We are based in New Zealand but our visitors and users are in many countries. We treat every person according to the strictest privacy law that applies to them, which in most cases is the EU/UK GDPR.</p>

          <hr />

          <h2>Who we are</h2>
          <p>The data controller for quote-core.com and the QuoteCore+ service is:</p>
          <p><strong>T3 Play Limited</strong><br />New Zealand<br />Email: <a href="mailto:info@quote-core.com">info@quote-core.com</a></p>

          <hr />

          <h2>What we collect</h2>

          <h3>When you browse the website</h3>
          <ul>
            <li>Standard server-side request data: IP address, user-agent string, referrer, and page paths - used for security and operational diagnostics.</li>
            <li>Analytics data from Google Analytics 4 and Microsoft Clarity (with your consent) - pages visited, time on site, approximate location, device and browser type, clicks, and scrolling behaviour.</li>
            <li>Marketing and conversion data from Meta Pixel and LinkedIn Insight Tag (with your consent) - used to measure advertising performance and understand how users reach us.</li>
          </ul>

          <h3>When you create an account or use the Service</h3>
          <ul>
            <li>Name and email address (required to create your account).</li>
            <li>Password (stored as a hashed value - we never see your plain-text password).</li>
            <li>Billing information - processed and stored by our payment provider (Stripe). We do not store full card details.</li>
            <li>Usage data - features used, quotes created, jobs managed, and interaction logs to support the Service and diagnose issues.</li>
            <li>Any data you upload or create within the Service (quotes, job details, customer records) - this is Your Data; see section &ldquo;Your Data&rdquo; below.</li>
          </ul>

          <h3>Cookies and tracking</h3>
          <p>We use cookies and similar technologies including analytics cookies (GA4, Microsoft Clarity) and marketing pixels (Meta Pixel, LinkedIn Insight Tag). Optional cookies are only set with your consent. For full details, see our <a href="/cookie-policy">Cookie Policy</a>.</p>

          <hr />

          <h2>Why we use it</h2>
          <ul>
            <li>To run and improve the website and Service.</li>
            <li>To create and manage your account.</li>
            <li>To process payments and manage your subscription.</li>
            <li>To send transactional emails (account confirmations, invoices, important service updates).</li>
            <li>To understand how the Service is used so we can improve it (analytics).</li>
            <li>To measure the effectiveness of our marketing (advertising pixels, with consent).</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <hr />

          <h2>Lawful basis (GDPR)</h2>
          <ul>
            <li><strong>Contract</strong> (Art. 6(1)(b)) - to create and manage your account, process payments, and provide the Service you have signed up for.</li>
            <li><strong>Consent</strong> (Art. 6(1)(a)) - for analytics cookies, marketing pixels, and any optional email marketing. You can withdraw at any time.</li>
            <li><strong>Legitimate interests</strong> (Art. 6(1)(f)) - to keep the website and Service secure and to improve them, where this does not override your rights.</li>
            <li><strong>Legal obligation</strong> (Art. 6(1)(c)) - to retain records required by law (for example, billing and tax records).</li>
          </ul>

          <hr />

          <h2>Who we share with</h2>
          <ul>
            <li><strong>Supabase</strong> - database and storage. Hosted in the EU (Frankfurt).</li>
            <li><strong>Vercel</strong> - web hosting. Global edge network; data may transit US infrastructure.</li>
            <li><strong>Stripe</strong> - payment processing. US-based; handles billing and card data under its own PCI-compliant controls.</li>
            <li><strong>Resend</strong> - transactional email delivery. US-based.</li>
            <li><strong>Google</strong> - Google Analytics 4 and Google advertising tags, if enabled (analytics and advertising measurement, with consent). Data may be processed in the US.</li>
            <li><strong>Microsoft</strong> - Microsoft Clarity (session analytics, with consent). Data may be processed in the US.</li>
            <li><strong>Meta</strong> - Meta Pixel (advertising measurement, with consent). Data processed by Meta Platforms Inc.</li>
            <li><strong>LinkedIn</strong> - LinkedIn Insight Tag (advertising measurement, with consent). Data processed by LinkedIn Corporation.</li>
          </ul>
          <p>We do not sell your data and we do not share it with any other third parties for advertising purposes.</p>

          <hr />

          <h2>Your Data</h2>
          <p>Any data you create or upload within the Service - quotes, job records, customer details - belongs to you. We process it only to provide the Service. We do not analyse it for advertising or share it with third parties beyond the infrastructure providers listed above.</p>
          <p>On account closure, we retain Your Data for 30 days to allow export, then delete it.</p>

          <hr />

          <h2>Where data is stored</h2>
          <p>Your account and service data is stored in the EU (Supabase eu-central-1, Frankfurt). Payment data is handled by Stripe. Email delivery transits the US via Resend. Analytics and advertising pixel data is processed by the respective providers listed above, potentially in the US. For transfers outside the EEA/UK, we rely on Standard Contractual Clauses (SCCs) or other lawful transfer mechanisms.</p>

          <hr />

          <h2>How long we keep it</h2>
          <ul>
            <li><strong>Account data</strong> - kept for as long as your account is active, plus 30 days after closure.</li>
            <li><strong>Billing and payment records</strong> - retained for the period required by applicable tax and accounting law (typically 7 years).</li>
            <li><strong>Server and application logs</strong> - per provider retention policies (typically 30-90 days).</li>
            <li><strong>Analytics data</strong> - per the retention settings of the respective provider (GA4 default: 14 months).</li>
          </ul>

          <hr />

          <h2>Your rights</h2>
          <p>Contact us at <a href="mailto:info@quote-core.com">info@quote-core.com</a> to exercise any of these rights - we will respond within one month.</p>
          <ul>
            <li><strong>Access</strong> - get a copy of the personal data we hold about you.</li>
            <li><strong>Rectification</strong> - correct inaccurate data.</li>
            <li><strong>Erasure</strong> - request deletion of your data, subject to legal retention requirements.</li>
            <li><strong>Portability</strong> - receive your data in a machine-readable format.</li>
            <li><strong>Restriction</strong> - pause our processing while a dispute is resolved.</li>
            <li><strong>Objection</strong> - object to processing based on our legitimate interests.</li>
            <li><strong>Withdraw consent</strong> - at any time for analytics or marketing cookies, via the cookie banner or by emailing us.</li>
          </ul>
          <p>You also have the right to lodge a complaint with a supervisory authority. In the UK this is the ICO (<a href="https://ico.org.uk" rel="noopener noreferrer">ico.org.uk</a>). In New Zealand this is the Privacy Commissioner (<a href="https://www.privacy.org.nz" rel="noopener noreferrer">privacy.org.nz</a>).</p>

          <hr />

          <h2>Security</h2>
          <p>We take reasonable technical and organisational measures including HTTPS everywhere, encrypted-at-rest storage, row-level security on the database, hashed passwords, and rate-limiting. If we ever suffer a breach that affects your data, we will notify you and relevant regulators within statutory timeframes.</p>

          <hr />

          <h2>Children&rsquo;s data</h2>
          <p>QuoteCore+ is a business tool for trades professionals. We do not knowingly collect data from anyone under 18. If you believe a minor has created an account, contact us and we will delete it.</p>

          <hr />

          <h2>Changes to this policy</h2>
          <p>When we update this policy materially, we will update the effective date at the top and notify account holders by email if the change affects how we use their data.</p>

          <hr />

          <h2>Contact us</h2>
          <p>Privacy queries, rights requests, or anything else:<br /><a href="mailto:info@quote-core.com">info@quote-core.com</a></p>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
