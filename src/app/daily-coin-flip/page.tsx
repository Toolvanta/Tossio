import type { Metadata } from 'next';
import { DailyChallengePage } from '../../views/DailyChallengePage';
import { createPageMetadata } from '../../seo/metadata';
import { appJsonLd, breadcrumbJsonLd, faqJsonLd } from '../../seo/head';
import { getRouteMeta } from '../../seo/routes';
import { getToolByPath } from '../../data/tools';
import { JsonLd } from '../../components/seo/JsonLd';

const ROUTE = getRouteMeta('/daily-coin-flip')!;
const TOOL = getToolByPath('/daily-coin-flip')!;

export const metadata: Metadata = createPageMetadata('/daily-coin-flip');

export default function Page() {
  const structuredData = [
    appJsonLd('/daily-coin-flip', ROUTE.title, ROUTE.description, {
      category: 'GameApplication',
      features: TOOL?.features,
      keywords: TOOL ? [TOOL.primaryKeyword, ...TOOL.secondaryKeywords] : undefined,
    }),
    breadcrumbJsonLd('/daily-coin-flip'),
    ...(TOOL?.faqs ? [faqJsonLd(TOOL.faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <DailyChallengePage />
    </>
  );
}
