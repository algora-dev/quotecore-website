import type { Metadata } from "next";
import BlogHeader from "@/components/BlogHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms & Conditions | QuoteCore+",
  description: "Terms and conditions governing your access to and use of QuoteCore+, including free trial and paid subscription terms.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <BlogHeader />

      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-zinc-400">Effective date: 17 June 2026</p>

        <div className="prose prose-zinc mt-10 max-w-none">
          <p>These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the QuoteCore+ website at <strong>quote-core.com</strong> (the &ldquo;Site&rdquo;) and the QuoteCore+ web application and services (the &ldquo;Service&rdquo;), including any free trial or paid subscription.</p>
          <p>The Service is operated by <strong>T3 Play Limited</strong>, a company incorporated in New Zealand (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). You can reach us at <a href="mailto:info@quote-core.com">info@quote-core.com</a>.</p>
          <p>By using the Site or Service you agree to these Terms. If you do not agree, please do not use them.</p>

          <hr />

          <h2>1. The Service</h2>
          <p>QuoteCore+ is a quoting and job management platform for tradespeople and contractors. We provide the Service on a subscription basis, with a free trial available as described below.</p>
          <p>We may update, modify, or discontinue features of the Service at any time. Where a change materially affects your use of the Service, we will give you reasonable notice.</p>

          <hr />

          <h2>2. Accounts and eligibility</h2>
          <p>To use the Service you must create an account. You must be at least 18 years old and have the authority to enter into a binding contract on behalf of yourself or any business you represent.</p>
          <p>You are responsible for keeping your login credentials secure and for all activity that occurs under your account. Notify us immediately at <a href="mailto:info@quote-core.com">info@quote-core.com</a> if you suspect unauthorised access.</p>
          <p>We may suspend or terminate accounts that we reasonably believe have been compromised or are being used in breach of these Terms.</p>

          <hr />

          <h2>3. Free trial</h2>
          <p>We offer a 14-day free trial. No payment details are required to start a trial. At the end of the trial period your account will move to a limited free access state or prompt you to choose a paid plan - we will make this clear before it happens.</p>
          <p>We reserve the right to modify or end the free trial offering at any time for new users. If you are already in a trial when we make a change, your existing trial will complete as stated.</p>

          <hr />

          <h2>4. Paid subscriptions</h2>
          <p>Paid plans are billed on a monthly or annual basis, as selected at checkout. Prices are displayed in GBP or USD based on your location and are inclusive of any applicable taxes where required by law.</p>
          <p>Subscriptions renew automatically at the end of each billing period unless you cancel before the renewal date. You can cancel at any time from your account settings.</p>
          <p>We may change subscription prices with at least 30 days&rsquo; notice. If you do not agree to a price change, you may cancel before it takes effect.</p>

          <hr />

          <h2>5. Refunds and cancellations</h2>
          <p>We do not offer automatic refunds on paid subscriptions. If you cancel your subscription, access continues until the end of your current billing period and no further charges are made.</p>
          <p>However, we consider refund requests case by case. If you have paid for a subscription, have not meaningfully used the Service during that billing period, and believe you are entitled to a refund, you can email us at <a href="mailto:info@quote-core.com">info@quote-core.com</a> to request one. We will review your request and respond within a reasonable timeframe. We are not obligated to grant refunds but we will always aim to act fairly.</p>
          <p>Nothing in this section affects any statutory rights you may have under the laws of your country.</p>

          <hr />

          <h2>6. Permitted use</h2>
          <p>You may use the Service for your own lawful business purposes. You may not:</p>
          <ul>
            <li>Use the Service to break any law or infringe any third party&rsquo;s rights.</li>
            <li>Share your account credentials with people outside your organisation, or resell access to the Service.</li>
            <li>Attempt to gain unauthorised access to the Service or underlying infrastructure.</li>
            <li>Probe, scan, or test the vulnerability of the Service or any connected system.</li>
            <li>Introduce malicious code or otherwise interfere with the operation of the Service.</li>
            <li>Reverse-engineer, decompile, or attempt to extract source code from the Service.</li>
            <li>Use automated means to scrape, mirror, or reproduce any part of the Service.</li>
            <li>Use the Service in a way that places excessive or unreasonable load on our infrastructure.</li>
          </ul>

          <hr />

          <h2>7. Your data</h2>
          <p>You retain ownership of any data, content, and files you upload or create through the Service (&ldquo;Your Data&rdquo;). By using the Service, you grant us a limited licence to store, process, and back up Your Data solely to provide the Service to you.</p>
          <p>We do not sell Your Data and we do not use it for advertising. Our full data handling practices are set out in the <a href="/privacy">Privacy Policy</a>.</p>
          <p>You are responsible for the accuracy and legality of Your Data. Do not upload data that you do not have the right to use.</p>

          <hr />

          <h2>8. Intellectual property</h2>
          <p>All content on the Site and within the Service - including text, graphics, logos, the &ldquo;QuoteCore+&rdquo; name and brand, and the underlying software - is owned by us or licensed to us. Nothing in these Terms transfers any intellectual property rights to you.</p>
          <p>You may not reproduce, distribute, or create derivative works from any part of the Service without our prior written permission.</p>

          <hr />

          <h2>9. Third-party integrations and links</h2>
          <p>The Service may integrate with or link to third-party tools and websites. We are not responsible for the content, availability, or practices of those third parties. Your use of any third-party service is governed by that provider&rsquo;s own terms.</p>

          <hr />

          <h2>10. Service availability</h2>
          <p>We aim to keep the Service available at all times but we do not guarantee uninterrupted access. We may carry out planned maintenance (we will try to give advance notice) and we are not responsible for downtime caused by factors outside our reasonable control.</p>

          <hr />

          <h2>11. No warranty</h2>
          <p>The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the maximum extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, accuracy, and non-infringement.</p>
          <p>Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited.</p>

          <hr />

          <h2>12. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill arising out of your use of the Service.</p>
          <p>Our total aggregate liability to you in any 12-month period is limited to the greater of: (a) the total fees you paid to us in that period; or (b) NZD 100.</p>
          <p>Nothing in this section limits your rights under mandatory consumer-protection law in your jurisdiction.</p>

          <hr />

          <h2>13. Indemnity</h2>
          <p>You agree to defend, indemnify, and hold us harmless from any claim, loss, or expense (including reasonable legal costs) arising out of your breach of these Terms, your misuse of the Service, or your violation of any law or third-party right.</p>

          <hr />

          <h2>14. Changes to these Terms</h2>
          <p>We may update these Terms from time to time. For material changes, we will notify you by email or via an in-app notice at least 14 days before the change takes effect. Continued use of the Service after that date means you accept the updated Terms. If you do not accept the changes, you may cancel your account before they take effect.</p>

          <hr />

          <h2>15. Termination</h2>
          <p>You may close your account at any time from your account settings or by emailing <a href="mailto:info@quote-core.com">info@quote-core.com</a>.</p>
          <p>We may suspend or terminate your access if you breach these Terms, if your payment fails and is not resolved within a reasonable period, or if we cease operating the Service. Where we terminate without cause, we will provide a pro-rata refund of any prepaid fees.</p>
          <p>On termination, your right to access the Service ends. We will retain Your Data for 30 days after termination to allow export, then delete it. Sections covering intellectual property, warranty, liability, indemnity, and governing law survive termination.</p>

          <hr />

          <h2>16. Privacy and cookies</h2>
          <p>Your use of the Service is subject to our <a href="/privacy">Privacy Policy</a> and <a href="/cookie-policy">Cookie Policy</a>. Please read them - they explain how we collect and use your data.</p>

          <hr />

          <h2>17. Governing law and disputes</h2>
          <p>These Terms are governed by the laws of <strong>New Zealand</strong>, without regard to its conflict-of-laws rules. Any dispute arising out of or related to these Terms or the Service will be subject to the exclusive jurisdiction of the courts of <strong>New Zealand</strong>.</p>
          <p>Nothing in this section overrides any mandatory consumer-protection rights you have under the law of the country where you live.</p>

          <hr />

          <h2>18. General</h2>
          <ul>
            <li><strong>Entire agreement.</strong> These Terms, together with the Privacy Policy and Cookie Policy, are the entire agreement between you and us regarding the Service.</li>
            <li><strong>Severability.</strong> If any part of these Terms is held unenforceable, the rest remains in force.</li>
            <li><strong>No waiver.</strong> If we do not enforce a provision, that does not mean we waive our right to enforce it later.</li>
            <li><strong>Assignment.</strong> You may not assign these Terms without our written consent. We may assign them to a successor entity.</li>
            <li><strong>Force majeure.</strong> We are not liable for failures caused by events outside our reasonable control.</li>
          </ul>

          <hr />

          <h2>19. Contact</h2>
          <p>Questions about these Terms:<br /><a href="mailto:info@quote-core.com">info@quote-core.com</a></p>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
