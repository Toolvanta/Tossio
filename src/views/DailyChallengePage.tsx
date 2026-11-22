'use client';

import React from 'react';
import { useCoinFlipGame } from '../context/CoinFlipContext';
import { DailyChallengeCard } from '../components/game/DailyChallengeCard';
import { PredictionGameCard } from '../components/game/PredictionGameCard';
import { Coin } from '../components/coin/Coin';
import { CoinResult } from '../components/coin/CoinResult';
import { FlipControls } from '../components/flip/FlipControls';
import { SeoMeta } from '../components/seo/SeoMeta';
import { PageHeader } from '../components/layout/PageHeader';
import { appJsonLd, faqJsonLd } from '../seo/head';
import { getRouteMeta } from '../seo/routes';
import { getToolByPath } from '../data/tools';
import { getTodayDateString, generateDailyChallenge } from '../game/challenges';
import { ToolContentSection } from '../components/tools/ToolContentSection';
import { ToolFaqSection } from '../components/tools/ToolFaqSection';
import { RelatedTools } from '../components/tools/RelatedTools';

const ROUTE = getRouteMeta('/daily-coin-flip')!;
const TOOL = getToolByPath('/daily-coin-flip')!;

export const DailyChallengePage: React.FC = () => {
  const {
    state,
    coinState,
    latestResult,
    latestFlipNumber,
    flipCoin,
    runExperiment,
    resetAllStats,
    setPrediction,
    updateSettings,
  } = useCoinFlipGame();

  const today = getTodayDateString();
  const currentChallenge =
    state.dailyChallengeProgress[today] || generateDailyChallenge(today);

  const structuredData = [
    appJsonLd('/daily-coin-flip', ROUTE.title, ROUTE.description, {
      category: 'GameApplication',
      features: TOOL.features,
      keywords: [TOOL.primaryKeyword, ...TOOL.secondaryKeywords],
    }),
    faqJsonLd(TOOL.faqs),
  ];

  return (
    <>
      <SeoMeta canonicalPath="/daily-coin-flip" structuredData={structuredData} />

      <div className="space-y-10 max-w-3xl mx-auto">
        <PageHeader
          title={TOOL.heading}
          intro="Everyone gets the same goal each day. Below it, the prediction game: call heads or tails before you flip and see how long you can keep guessing right."
        />

        {/* Daily Deterministic Challenge Card */}
        <DailyChallengeCard challenge={currentChallenge} />

        {/* Interactive Prediction Game Arena */}
        <div className="flex flex-col items-center gap-6">
          <Coin
            coinState={coinState}
            latestResult={latestResult}
            settings={state.settings}
            onFlip={() => flipCoin()}
          />

          <CoinResult
            coinState={coinState}
            latestResult={latestResult}
            flipNumber={latestFlipNumber}
            customization={state.settings.customization}
          />

          <FlipControls
            coinState={coinState}
            soundEnabled={state.settings.soundEnabled}
            onFlip={() => flipCoin()}
            onBatchFlip={(count) => runExperiment({ count })}
            onToggleSound={() => updateSettings({ soundEnabled: !state.settings.soundEnabled })}
            onReset={resetAllStats}
            predictionSide={state.predictionStats.selectedPrediction}
            onSelectPrediction={setPrediction}
            isPredictionMode={true}
          />
        </div>

        {/* Prediction Game Scoreboard */}
        <PredictionGameCard predictionStats={state.predictionStats} />

        {/* On-Page Content, Features & Use Cases */}
        <ToolContentSection tool={TOOL} />

        {/* FAQs */}
        <ToolFaqSection faqs={TOOL.faqs} toolName={TOOL.name} />

        {/* Internal Cross-links to Related Tools */}
        <RelatedTools currentPath="/daily-coin-flip" />
      </div>
    </>
  );
};
