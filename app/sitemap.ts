import type { MetadataRoute } from "next";

// All free tool/calculator slug routes
const FREE_SLUGS = [
  'free-tools',
  'free-calculators',
  'free-quote-generator',
  'free-invoice-generator',
  'free-purchase-order-generator',
  'free-roofing-calculator',
  'free-construction-calculator',
  'free-concrete-calculator',
  'free-landscaping-calculator',
  'free-birds-mouth-calculator',
  'free-roof-pitch-calculator',
  'free-roof-pitch-converter',
  'free-roof-area-calculator',
  'free-rafter-length-calculator',
  'free-rafter-length-converter',
  'free-hip-roof-calculator',
  'free-hip-valley-calculator',
  'free-hip-valley-converter',
  'free-gable-roof-calculator',
  'free-skillion-roof-calculator',
  'free-flat-roof-calculator',
  'free-roof-squares-calculator',
  'free-roof-square-footage-calculator',
  'free-roof-square-metre-calculator',
  'free-roofing-material-calculator',
  'free-roofing-quote-calculator',
  'free-roofing-takeoff-calculator',
  'free-roofing-waste-calculator',
  'free-roof-tile-calculator',
  'free-shingle-calculator',
  'free-metal-roofing-calculator',
  'free-roof-sheathing-calculator',
  'free-roof-sheet-calculator',
  'free-roof-flashing-calculator',
  'free-roof-replacement-cost-calculator',
  'free-guttering-calculator',
  'free-tile-calculator',
  'free-paint-calculator',
  'free-flooring-calculator',
  'free-concrete-slab-calculator',
  'free-concrete-bag-calculator',
  'free-footing-calculator',
  'free-rebar-calculator',
  'free-trench-calculator',
  'free-slope-calculator',
  'free-pipe-slope-calculator',
  'free-wall-area-calculator',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://quote-core.com";

  const routes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/roofing-quoting-software`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/construction-quoting-software`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/free-trial`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/blog/quotecore-plus-reviews`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/quotecore-plus-vs-quotesmith`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/roofing-quoting-software-uk`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/roofing-quoting-software-vs-spreadsheets`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/blog/built-by-a-roofer`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/construction-quote-speed-checklist`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/how-to-get-more-work-as-a-contractor`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${base}/blog/best-roofing-quoting-software-uk-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Add all free tool/calculator pages
  const freeRoutes: MetadataRoute.Sitemap = FREE_SLUGS.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...routes, ...freeRoutes];
}
