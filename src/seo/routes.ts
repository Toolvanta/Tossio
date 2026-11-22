import { TOOLS_REGISTRY, getToolByPath } from '../data/tools';

/**
 * SEO metadata for every page. Used at runtime and at build time for sitemaps.
 * Titles are kept strictly between 50–60 characters.
 * Descriptions are kept strictly between 140–160 characters.
 */
export type ChangeFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  label: string;
  heading: string;
  changefreq: ChangeFreq;
  priority: number;
  noindex?: boolean;
  parent?: string;
  /** Marks interactive tool pages for WebApplication structured data. */
  app?: boolean;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
}

const TOOL_ROUTES: RouteMeta[] = TOOLS_REGISTRY.map((tool) => ({
  path: tool.path,
  title: tool.seoTitle,
  description: tool.seoDescription,
  label: tool.name.replace('Coin Flip', 'flip').replace('Online ', '').trim(),
  heading: tool.heading,
  changefreq: tool.changefreq,
  priority: tool.priority,
  noindex: tool.noindex,
  parent: tool.path === '/' ? undefined : '/',
  app: true,
  primaryKeyword: tool.primaryKeyword,
  secondaryKeywords: tool.secondaryKeywords,
}));

const INFORMATIONAL_ROUTES: RouteMeta[] = [
  {
    path: '/coin-flip-probability',
    title: 'Coin Flip Probability – Odds, Streaks & Fallacies | Tossio',
    description:
      'Why a fair coin lands heads 50% of the time, how streaks happen, the gambler’s fallacy, and an interactive demo of the law of large numbers in action.',
    label: 'Probability',
    heading: 'Coin flip probability',
    changefreq: 'monthly',
    priority: 0.8,
    parent: '/',
    primaryKeyword: 'coin flip probability',
    secondaryKeywords: ['gamblers fallacy', 'coin toss odds', 'law of large numbers', 'streak probability'],
  },
  {
    path: '/how-coin-flipping-works',
    title: 'How Coin Flipping Works – Physics to Random Numbers | Tossio',
    description:
      'What decides a real coin toss, why it leans slightly towards the starting face, and how an online coin flip produces cryptographically fair 50/50 results.',
    label: 'How it works',
    heading: 'How coin flipping works',
    changefreq: 'monthly',
    priority: 0.7,
    parent: '/coin-flip-probability',
    primaryKeyword: 'how coin flipping works',
    secondaryKeywords: ['coin toss physics', 'is a coin flip 50 50', 'online coin toss algorithm'],
  },
  {
    path: '/faq',
    title: 'Coin Flip FAQ – Common Questions About Coin Tosses | Tossio',
    description:
      'Is an online coin flip truly random? Can a coin land on its edge? Why do streaks occur? Find clear answers to common questions about Tossio and coin flips.',
    label: 'FAQ',
    heading: 'Frequently asked questions',
    changefreq: 'monthly',
    priority: 0.7,
    parent: '/',
    primaryKeyword: 'coin flip questions',
    secondaryKeywords: ['coin toss randomness', 'can a coin land on edge', 'tossio faq'],
  },
  {
    path: '/about',
    title: 'About Tossio – Free, Fair & Cryptographic Coin Flip Online',
    description:
      'Learn why Tossio was built, how it guarantees cryptographic 50/50 fairness for every toss, and who creates it. Free, open source, and account-free forever.',
    label: 'About',
    heading: 'About Tossio',
    changefreq: 'yearly',
    priority: 0.5,
    parent: '/',
  },
  {
    path: '/contact',
    title: 'Contact Tossio – Get in Touch, Send Feedback or Say Hello',
    description:
      'Have feedback, found a bug, or want to suggest a new coin flip feature? Reach out via email, LinkedIn, or GitHub issues. I’d love to hear from you.',
    label: 'Contact',
    heading: 'Contact',
    changefreq: 'yearly',
    priority: 0.4,
    parent: '/',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy – Private, Local & Account-Free | Tossio',
    description:
      'Tossio requires no account and has no game server. Your flip history and settings stay strictly in your browser. Read our clear, honest privacy details.',
    label: 'Privacy',
    heading: 'Privacy policy',
    changefreq: 'yearly',
    priority: 0.3,
    parent: '/',
  },
  {
    path: '/terms',
    title: 'Terms and Conditions – Free Coin Flip Usage Terms | Tossio',
    description:
      'Terms and conditions for using Tossio. A free, entertainment-focused coin toss platform for quick choices, casual games, and probability learning.',
    label: 'Terms',
    heading: 'Terms and conditions',
    changefreq: 'yearly',
    priority: 0.3,
    parent: '/',
  },
  {
    path: '/sitemap',
    title: 'Sitemap – Explore All Coin Flip Tools and Guides | Tossio',
    description:
      'Browse every interactive tool, probability guide, daily challenge, and technical article available on Tossio. Find the exact coin toss feature you need.',
    label: 'Sitemap',
    heading: 'Sitemap',
    changefreq: 'monthly',
    priority: 0.2,
    parent: '/',
  },
];

// Preserves exact path ordering: home, tools, guides, legal/info
export const ROUTES: RouteMeta[] = [
  ...TOOL_ROUTES.filter((r) => r.path === '/'),
  ...TOOL_ROUTES.filter((r) => r.path !== '/' && r.path !== '/coin-flip-statistics'),
  ...INFORMATIONAL_ROUTES.slice(0, 3), // probability, how-it-works, faq
  ...TOOL_ROUTES.filter((r) => r.path === '/coin-flip-statistics'),
  ...INFORMATIONAL_ROUTES.slice(3), // about, contact, privacy, terms, sitemap
];

/** Old or duplicate URLs, permanently redirected to their canonical page. */
export const REDIRECTS: Record<string, string> = {
  '/coin-flip': '/',
  '/flip-a-coin': '/',
  '/virtual-coin-flip': '/',
  '/heads-or-tails': '/',
  '/coin-flip-online': '/',
  '/random-coin-flip': '/',
  '/coin-flip-simulator': '/coin-flip-experiment',
};

const byPath = new Map(ROUTES.map((m) => [m.path, m]));

export const getRouteMeta = (path: string): RouteMeta | undefined => byPath.get(path);

export const getBreadcrumbs = (path: string): RouteMeta[] => {
  const trail: RouteMeta[] = [];
  let current = byPath.get(path);
  const seen = new Set<string>();
  while (current && !seen.has(current.path)) {
    seen.add(current.path);
    trail.unshift(current);
    current = current.parent ? byPath.get(current.parent) : undefined;
  }
  return trail;
};
