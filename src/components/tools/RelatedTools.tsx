import React from 'react';
import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';
import { getRelatedTools } from '../../data/tools';

interface RelatedToolsProps {
  currentPath: string;
  title?: string;
  limit?: number;
}

export const RelatedTools: React.FC<RelatedToolsProps> = ({
  currentPath,
  title = 'Explore more coin toss tools',
  limit = 3,
}) => {
  const tools = getRelatedTools(currentPath, limit);

  if (tools.length === 0) return null;

  return (
    <section className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800" aria-label="Related Tools">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
          <Wrench className="h-5 w-5 text-heads-500" aria-hidden="true" />
          {title}
        </h2>
        <Link
          href="/sitemap"
          className="inline-flex items-center gap-1 text-sm font-medium text-heads-600 hover:text-heads-700 dark:text-heads-400 dark:hover:text-heads-300"
        >
          View all tools & guides
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.path}
            className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-heads-300 hover:shadow-card dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-heads-700"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-block rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {tool.categoryLabel}
                </span>
                <ArrowRight className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-heads-500 dark:text-zinc-500" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-base font-bold text-zinc-900 transition-colors group-hover:text-heads-600 dark:text-zinc-100 dark:group-hover:text-heads-400">
                {tool.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-2">
                {tool.shortDescription}
              </p>
            </div>
            <span className="mt-4 inline-flex items-center text-xs font-semibold text-heads-600 dark:text-heads-400">
              Try tool
              <span className="sr-only"> ({tool.name})</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
