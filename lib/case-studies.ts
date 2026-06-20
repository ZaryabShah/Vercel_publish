export type CaseStudy = {
  title: string
  client: string
  image: string
  description: string
  metrics: string[]
  csvLink?: string
  note?: string
}

export const caseStudies: CaseStudy[] = [
  {
    title: '50k Events & 20M Ticket Prices Daily',
    client: 'TickPick / SeatGeek',
    image: '/case-tickets.png',
    description:
      'Built high-frequency scrapers for two major ticket platforms, overcoming Cloudflare and DataDome with rotating residential IPs and fingerprint randomization.',
    metrics: ['20M+ tickets/day', '99.4% success', '<5 min freshness'],
    csvLink: 'https://drive.google.com/file/d/1Pg8ACEFsiHZD9uokpkq-BCBpMUJ8hL7D/view',
  },
  {
    title: '700k Electronic Parts Searches Monthly',
    client: 'Arrow.com',
    image: '/case-parts.png',
    description:
      'Engineered an async scraper performing 700,000 part searches/month, bypassing session-based rate limits and dynamic tokens.',
    metrics: ['700k searches/month', '95% less manual work', 'Zero IP bans'],
    csvLink: 'https://drive.google.com/file/d/1OhKhLgr9NR3BfqnJNXamagDzCRIBmPvo/view',
  },
  {
    title: '9,000+ Starbucks Stores & 6M Products Weekly',
    client: 'DoorDash',
    image: '/case-stores.png',
    description:
      'Monitors full menus & pricing for every US Starbucks location on DoorDash weekly using Playwright with geolocation simulation.',
    metrics: ['9,000+ stores', '6M products', '100% coverage'],
    csvLink: 'https://drive.google.com/file/d/1GxYyQ9BtfD1TQHaxxwncuiqrKHN4Uy9M/view',
  },
  {
    title: "Reverse Engineered Fintech App's Private API",
    client: 'Mobile Trading App',
    image: '/case-fintech.png',
    description:
      'Decoded HMAC-signed requests of a mobile trading app to stream real-time price data. Eliminated a $4k/month vendor subscription.',
    metrics: ['<500ms latency', '99.9% uptime', 'One-time build'],
    note: 'Full case study available upon request',
  },
  {
    title: 'E-commerce Price Monitoring for 200+ Retailers',
    client: 'Price Intelligence Platform',
    image: '/case-ecommerce.png',
    description:
      'Built a unified scraping infrastructure for a price intelligence platform, collecting product prices, availability, and promotions from 200+ e-commerce sites with dynamic content.',
    metrics: ['200+ sources', '5M products/day', 'Real-time alerts'],
  },
  {
    title: 'Large-Scale Job Board Aggregation',
    client: 'AI Recruitment Platform',
    image: '/case-jobs.png',
    description:
      'Scraped multiple job boards and company career pages to feed an AI-powered recruitment platform, handling geolocation and session rotation.',
    metrics: ['1M+ job listings/month', '95% freshness', 'Multi-country support'],
  },
]
