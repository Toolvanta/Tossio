'use client';

import React from 'react';
import { useCoinFlipGame } from '../context/CoinFlipContext';
import { DecisionMaker } from '../components/tools/DecisionMaker';
import { Coin } from '../components/coin/Coin';
import { SeoMeta } from '../components/seo/SeoMeta';
import { PageHeader } from '../components/layout/PageHeader';
import { appJsonLd, faqJsonLd } from '../seo/head';
import { getRouteMeta } from '../seo/routes';
import { getToolByPath } from '../data/tools';
import { ToolContentSection } from '../components/tools/ToolContentSection';
import { ToolFaqSection } from '../components/tools/ToolFaqSection';
import { RelatedTools } from '../components/tools/RelatedTools';

const ROUTE = getRouteMeta('/decision-coin-flip')!;
const TOOL = getToolByPath('/decision-coin-flip')!;

export const DecisionFlipPage: React.FC = () => {
  const {
    state,
    coinState,
    latestResult,
    flipCoin,
    updateDecisionOptions,
  } = useCoinFlipGame();

  const structuredData = [
    appJsonLd('/decision-coin-flip', ROUTE.title, ROUTE.description, {
      category: 'UtilitiesApplication',
      features: TOOL.features,
      keywords: [TOOL.primaryKeyword, ...TOOL.secondaryKeywords],
    }),
    faqJsonLd(TOOL.faqs),
  ];

  return (
    <>
      <SeoMeta canonicalPath="/decision-coin-flip" structuredData={structuredData} />

      <div className="space-y-10 max-w-3xl mx-auto">
        <PageHeader
          title={TOOL.heading}
          intro="Stuck between two options? Type them in, flip, and the coin picks one. Heads is the first option, tails is the second."
        />

        {/* 3D Coin Animation Display */}
        <div className="flex flex-col items-center">
          <Coin
            coinState={coinState}
            latestResult={latestResult}
            settings={state.settings}
            onFlip={() => flipCoin({ isDecision: true })}
          />
        </div>

        {/* Decision Maker Controls */}
        <DecisionMaker
          decision={state.decisionOptions}
          onUpdate={updateDecisionOptions}
          onFlipDecision={() => flipCoin({ isDecision: true })}
          isFlipping={coinState === 'FLIPPING'}
        />

        {/* On-Page Content, Features & Use Cases */}
        <ToolContentSection tool={TOOL} />

        {/* FAQs */}
        <ToolFaqSection faqs={TOOL.faqs} toolName={TOOL.name} />

        {/* Internal Cross-links to Related Tools */}
        <RelatedTools currentPath="/decision-coin-flip" />
      </div>
    </>
  );
};
