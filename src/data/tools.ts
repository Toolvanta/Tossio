/**
 * Centralized Tool Registry for Tossio.
 * Scalable architecture supporting hundreds or thousands of tool configurations.
 */

export type ToolCategory = 'core' | 'decision' | 'challenge' | 'simulation' | 'analytics';

export interface ToolFaqItem {
  question: string;
  answer: string;
}

export interface ToolDefinition {
  id: string;
  slug: string;
  path: string;
  name: string;
  heading: string;
  category: ToolCategory;
  categoryLabel: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  howToUse: string[];
  useCases: string[];
  faqs: ToolFaqItem[];
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
  noindex?: boolean;
}

export const TOOLS_REGISTRY: ToolDefinition[] = [
  {
    id: 'single-flip',
    slug: 'coin-flip',
    path: '/',
    name: 'Online Coin Flip',
    heading: 'Flip a coin',
    category: 'core',
    categoryLabel: 'Core Tools',
    primaryKeyword: 'coin flip online',
    secondaryKeywords: [
      'flip a coin',
      'heads or tails',
      'random coin toss',
      'virtual coin flip',
      'fair coin toss generator',
    ],
    seoTitle: 'Tossio – Flip a Coin Online | Fair Heads or Tails Generator',
    seoDescription:
      'Flip a coin online in one tap. Fair heads or tails generator with an interactive 3D coin, real streaks, custom designs and instant sound effects. Free & private.',
    shortDescription:
      'A fast, cryptographic, and completely fair online coin flip for everyday decisions and games.',
    longDescription:
      'Tossio provides an instant, fair 50/50 coin flip powered by your browser’s cryptographic random number generator (crypto.getRandomValues). With realistic 3D animations, audible pings, streak counters, and zero sign-ups or ads, you get a reliable coin toss anytime you need one.',
    features: [
      'Cryptographically fair 50/50 random outcome on every flip',
      'Realistic 3D coin flip physics with customizable sound effects',
      'Real-time flip history, running split percentages and streak records',
      'Custom coin designer: choose gold, silver, bronze or cyber finishes',
      'Full offline PWA capability with keyboard accessibility (Spacebar to flip)',
    ],
    howToUse: [
      'Click or tap the 3D coin, or press the Spacebar on your keyboard.',
      'Watch the coin animate and reveal either Heads or Tails.',
      'Check your running score, streaks, and observed percentage distribution below.',
      'Customize your coin emblems and finishes using the Design tool.',
    ],
    useCases: [
      'Settling friendly debates, chores, or who goes first in board games',
      'Quick everyday choices between two equally viable options',
      'Classroom demonstrations of basic probability and randomness',
      'Sports kickoff or pre-match referee coin toss simulations',
    ],
    faqs: [
      {
        question: 'Is this online coin flip truly random and fair?',
        answer:
          'Yes. Every single flip calls window.crypto.getRandomValues(), the gold standard for cryptographic pseudo-random number generation. Both heads and tails have an exact mathematical probability of 50%, with zero starting-side bias.',
      },
      {
        question: 'Can I flip the coin using my keyboard?',
        answer:
          'Yes! Pressing the Spacebar or Enter key triggers a flip immediately, making it easy to toss repeatedly or use hands-free.',
      },
      {
        question: 'Is my flip history stored on a server?',
        answer:
          'No. All data, streaks, and custom coin designs are kept strictly inside your browser’s local storage. Nothing is sent to an external server.',
      },
    ],
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    id: 'decision-flip',
    slug: 'decision-coin-flip',
    path: '/decision-coin-flip',
    name: 'Decision Coin Flip',
    heading: 'Decision coin flip',
    category: 'decision',
    categoryLabel: 'Decision Tools',
    primaryKeyword: 'decision coin flip',
    secondaryKeywords: [
      'coin flip decision maker',
      'choose between two options',
      'flip a coin to decide',
      'random choice generator',
      'heads or tails decision',
    ],
    seoTitle: 'Decision Coin Flip – Let a Coin Choose Between Two Options',
    seoDescription:
      'Can’t decide between two options? Enter your choices, flip the coin, and let chance pick. A fair, fast way to resolve dilemmas and friendly arguments.',
    shortDescription:
      'Type your two options and flip a coin to make a quick, unbiased decision.',
    longDescription:
      'When you are stuck between two choices—like cooking at home versus dining out, or choosing which task to tackle first—Decision Coin Flip pairs Heads and Tails with your options. If the outcome leaves you feeling relieved or disappointed, it also reveals your true subconscious preference.',
    features: [
      'Input two custom choices for Heads and Tails',
      'Instant unbiased decision selection with clear visual highlight',
      'Psychological clarity: gauge your emotional reaction to the result',
      'Completely private: your options never leave your device',
      'Reset and reuse anytime with zero delay or page reloads',
    ],
    howToUse: [
      'Type your first choice into the Heads field (Option A).',
      'Type your second choice into the Tails field (Option B).',
      'Click "Flip for Decision" or tap the 3D coin.',
      'The coin lands and clearly highlights the winning choice.',
    ],
    useCases: [
      'Deciding what to eat: Pizza vs. Tacos, or Cook vs. Takeout',
      'Settling friendly arguments or splitting responsibilities fairly',
      'Overcoming analysis paralysis between two competing tasks',
      'Choosing which film, game, or leisure activity to start with',
    ],
    faqs: [
      {
        question: 'How does the decision coin flip help when I am torn?',
        answer:
          'Beyond picking a 50/50 winner, a coin flip acts as a mirror for your intuition. When the coin lands, notice whether you feel satisfied or disappointed—that instant gut reaction tells you which option you secretly preferred all along.',
      },
      {
        question: 'Are my entered decision options private?',
        answer:
          'Yes, entirely. Your text entries remain strictly inside your browser and are never transmitted to any external server or analytics service.',
      },
    ],
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    id: 'daily-challenge',
    slug: 'daily-coin-flip',
    path: '/daily-coin-flip',
    name: 'Daily Coin Flip Challenge',
    heading: 'Daily coin flip challenge',
    category: 'challenge',
    categoryLabel: 'Challenges & Games',
    primaryKeyword: 'daily coin flip challenge',
    secondaryKeywords: [
      'coin flip prediction game',
      'daily streak challenge',
      'heads or tails game',
      'coin toss game online',
      'daily randomness challenge',
    ],
    seoTitle: 'Daily Coin Flip Challenge & Streak Prediction Game | Tossio',
    seoDescription:
      'A new coin toss challenge every day for everyone, plus a streak prediction game. Call heads or tails before you flip, test your luck and beat your high score.',
    shortDescription:
      'A synchronized daily challenge plus a streak prediction game to test your fortune.',
    longDescription:
      'Every day at midnight UTC, Tossio generates a new challenge that is identical for players worldwide using a deterministic seed. Beneath it, the Prediction Arena invites you to call Heads or Tails before flipping to test your predictive streak and earn accuracy score points.',
    features: [
      'Globally synchronized daily objective refreshed every 24 hours',
      'Interactive prediction call arena: choose Heads or Tails before flipping',
      'Streak tracker measuring consecutive correct predictions and lifetime accuracy',
      'Gamified score points system with celebratory visual cues',
      'Educational reminders highlighting the mathematical independence of flips',
    ],
    howToUse: [
      'Inspect today’s challenge target goal and current progress bar.',
      'In the prediction arena, choose "I say heads" or "I say tails".',
      'Toss the coin to see if your intuition matches the cryptographic outcome.',
      'Track your prediction accuracy, current streak, and personal best score.',
    ],
    useCases: [
      'Daily quick gaming break to test your morning luck',
      'Compete with friends or coworkers on who completes today’s challenge first',
      'Understanding streak lengths and variance through firsthand gameplay',
    ],
    faqs: [
      {
        question: 'Does everyone get the exact same daily challenge?',
        answer:
          'Yes. The daily goal is computed from the calendar date string using a deterministic pseudo-random number generator, guaranteeing identical goals for everyone worldwide.',
      },
      {
        question: 'Can someone improve their prediction accuracy above 50%?',
        answer:
          'Over time, no. Because each fair coin flip is mathematically independent, the long-run expected accuracy of any prediction strategy is exactly 50%. Long winning runs are thrilling demonstrations of variance.',
      },
    ],
    changefreq: 'daily',
    priority: 0.8,
  },
  {
    id: 'coin-simulator',
    slug: 'coin-flip-experiment',
    path: '/coin-flip-experiment',
    name: 'Coin Flip Simulator',
    heading: 'Coin flip simulator',
    category: 'simulation',
    categoryLabel: 'Simulators',
    primaryKeyword: 'coin flip simulator',
    secondaryKeywords: [
      'flip 1000 coins',
      'flip 10000 coins',
      'flip 1 million coins',
      'weighted coin simulator',
      'law of large numbers simulation',
      'batch coin toss generator',
    ],
    seoTitle: 'Coin Flip Simulator – Flip Up to 1,000,000 Coins in an Instant',
    seoDescription:
      'Simulate 100, 10,000 or up to 1,000,000 coin tosses instantly. Inspect streak odds, statistical deviation, weighted unfair coins and export your experiment runs.',
    shortDescription:
      'Simulate up to 1,000,000 coin flips in milliseconds with fair or weighted probabilities.',
    longDescription:
      'Tossio’s Batch Coin Simulator uses high-performance bitwise population counting to flip hundreds of thousands or a full million coins in milliseconds. Test the Law of Large Numbers, experiment with custom weighted coins, and review saved simulation history with detailed streak analytics.',
    features: [
      'Instant simulation from 10 to 1,000,000 coin tosses in a fraction of a second',
      'High-performance Web Crypto population-count algorithm for instant execution',
      'Adjustable weighted coin slider to simulate biased outcomes (0% to 100% heads)',
      'Detailed statistical breakdown: expected vs. observed split, diff, and streak records',
      'Saved history of your last 100 experiments with social share cards',
    ],
    howToUse: [
      'Select a preset batch size (100, 500, 1,000, 10,000, 50,000) or enter a custom amount.',
      'Click to simulate: the engine processes all flips instantly.',
      'Open the experiment card to inspect donut charts, longest streaks, and diff percentages.',
      'Try the Weighted Simulator to see how biased probabilities behave across large samples.',
    ],
    useCases: [
      'Statistics and math education demonstrating the Law of Large Numbers',
      'Monte Carlo testing and verifying theoretical probability models',
      'Game development and testing RNG fairness versus biased distributions',
    ],
    faqs: [
      {
        question: 'How can Tossio flip 1,000,000 coins without freezing my browser?',
        answer:
          'For massive batches, Tossio generates 32-bit cryptographically secure words into a TypedArray and applies hardware-optimized parallel bitwise population counting (Hamming weight). This calculates millions of bits in under 20 milliseconds.',
      },
      {
        question: 'What is the purpose of the weighted coin simulator?',
        answer:
          'It allows students, researchers, and curious minds to observe how skewed probabilities (e.g. 70% heads) manifest in real trials compared to a fair 50/50 coin.',
      },
    ],
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    id: 'coin-statistics',
    slug: 'coin-flip-statistics',
    path: '/coin-flip-statistics',
    name: 'Coin Flip Statistics & Achievements',
    heading: 'Your statistics',
    category: 'analytics',
    categoryLabel: 'Analytics & Achievements',
    primaryKeyword: 'coin flip statistics',
    secondaryKeywords: [
      'coin toss streaks',
      'flip achievements',
      'coin flip records',
      'heads tails ratio',
      'personal coin toss tracker',
    ],
    seoTitle: 'Your Coin Flip Statistics, Streaks & Achievements | Tossio',
    seoDescription:
      'Track your lifetime coin flip statistics: total flips, heads versus tails split, longest winning streaks, saved simulation runs and 14 unlockable achievements.',
    shortDescription:
      'Detailed personal dashboard tracking all your coin flips, streaks, and achievements.',
    longDescription:
      'Your comprehensive player profile on Tossio. View lifetime flip totals, exact percentage splits, longest heads and tails streaks, and unlock 14 unique achievements as you toss coins, predict outcomes, and run simulations.',
    features: [
      'Lifetime totals and exact percentage distribution across all flips on this device',
      'Streak tracking: current active run, longest heads streak, and longest tails streak',
      '14 unlockable badges and milestones with animated achievement notifications',
      'Aggregate performance analysis of all your saved simulation runs',
      'Private local storage: delete or reset data anytime with one click',
    ],
    howToUse: [
      'Flip coins in standard, decision, or daily challenge modes.',
      'Visit your statistics dashboard to check your lifetime totals and distribution.',
      'Review your achievements gallery to see which milestones are completed or locked.',
      'Use the Reset controls if you ever want a fresh statistical slate.',
    ],
    useCases: [
      'Tracking personal luck streaks and testing probability theories over time',
      'Gaming achievements for completing coin flip milestones',
      'Verifying that your long-term browser flips converge on 50%',
    ],
    faqs: [
      {
        question: 'Where is my statistics data saved?',
        answer:
          'Everything is persisted solely in your browser’s localStorage. No cookies or server databases are used to store your gameplay.',
      },
      {
        question: 'How do I unlock achievements?',
        answer:
          'Achievements unlock naturally as you use Tossio—such as flipping your first coin, hitting a 5-streak, predicting correctly multiple times, or running a 10,000-flip simulation.',
      },
    ],
    changefreq: 'monthly',
    priority: 0.3,
    noindex: true,
  },
];

export const ALL_TOOLS = TOOLS_REGISTRY;

export function getToolByPath(path: string): ToolDefinition | undefined {
  return TOOLS_REGISTRY.find((t) => t.path === path);
}

export function getToolById(id: string): ToolDefinition | undefined {
  return TOOLS_REGISTRY.find((t) => t.id === id);
}

export function getToolsByCategory(category: ToolCategory): ToolDefinition[] {
  return TOOLS_REGISTRY.filter((t) => t.category === category);
}

export function getRelatedTools(currentPath: string, limit = 3): ToolDefinition[] {
  return TOOLS_REGISTRY.filter((t) => t.path !== currentPath && !t.noindex).slice(0, limit);
}
