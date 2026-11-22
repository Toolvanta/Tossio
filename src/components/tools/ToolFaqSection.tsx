import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { ToolFaqItem } from '../../data/tools';
import { Accordion } from '../ui/Accordion';

interface ToolFaqSectionProps {
  faqs: ToolFaqItem[];
  toolName?: string;
}

export const ToolFaqSection: React.FC<ToolFaqSectionProps> = ({ faqs, toolName }) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800" aria-label="Frequently Asked Questions">
      <div className="mb-6">
        <h2 className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
          <HelpCircle className="h-5 w-5 text-heads-500" aria-hidden="true" />
          Frequently asked questions{toolName ? ` about ${toolName}` : ''}
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Answers to common questions regarding probabilities, randomness, and usage.
        </p>
      </div>

      <Accordion items={faqs} />

      <div className="mt-6 text-center">
        <Link
          href="/faq"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-heads-600 hover:text-heads-700 dark:text-heads-400 dark:hover:text-heads-300"
        >
          Have more questions? Read our full coin flip FAQ
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};
