import React from 'react';
import { CheckCircle2, HelpCircle, Sparkles, Lightbulb } from 'lucide-react';
import { ToolDefinition } from '../../data/tools';

interface ToolContentSectionProps {
  tool: ToolDefinition;
}

export const ToolContentSection: React.FC<ToolContentSectionProps> = ({ tool }) => {
  return (
    <section className="mt-16 space-y-12 border-t border-zinc-200 pt-12 dark:border-zinc-800" aria-label="Tool Information">
      {/* Overview & Long Description */}
      {tool.longDescription && (
        <div className="rounded-2xl border border-zinc-200 bg-white/70 p-6 sm:p-8 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70">
          <h2 className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
            <Sparkles className="h-5 w-5 text-heads-500" aria-hidden="true" />
            About {tool.name}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
            {tool.longDescription}
          </p>
        </div>
      )}

      {/* How to use */}
      {tool.howToUse && tool.howToUse.length > 0 && (
        <div>
          <h2 className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
            <HelpCircle className="h-5 w-5 text-tails-500" aria-hidden="true" />
            How to use {tool.name.toLowerCase()}
          </h2>
          <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {tool.howToUse.map((step, index) => (
              <li
                key={index}
                className="flex items-start gap-3.5 rounded-xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-heads-100 text-sm font-bold text-heads-700 dark:bg-heads-950/70 dark:text-heads-300">
                  {index + 1}
                </span>
                <span className="text-sm font-medium leading-relaxed text-zinc-700 sm:text-base dark:text-zinc-300">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Key features */}
      {tool.features && tool.features.length > 0 && (
        <div>
          <h2 className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" aria-hidden="true" />
            Key features & capabilities
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {tool.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Practical use cases */}
      {tool.useCases && tool.useCases.length > 0 && (
        <div>
          <h2 className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
            <Lightbulb className="h-5 w-5 text-amber-500" aria-hidden="true" />
            Common use cases
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {tool.useCases.map((useCase, index) => (
              <div
                key={index}
                className="rounded-xl border border-zinc-200 bg-white p-4.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
