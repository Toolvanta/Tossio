import type { Metadata } from 'next';
import { DecisionFlipPage } from '../../views/DecisionFlipPage';
import { createPageMetadata } from '../../seo/metadata';
import { appJsonLd, breadcrumbJsonLd, faqJsonLd } from '../../seo/head';
import { getRouteMeta } from '../../seo/routes';
import { getToolByPath } from '../../data/tools';
import { JsonLd } from '../../components/seo/JsonLd';

const ROUTE = getRouteMeta('/decision-coin-flip')!;
const TOOL = getToolByPath('/decision-coin-flip')!;

export const metadata: Metadata = createPageMetadata('/decision-coin-flip');

export default function Page() {
  const structuredData = [
    appJsonLd('/decision-coin-flip', ROUTE.title, ROUTE.description, {
      category: 'UtilitiesApplication',
      features: TOOL?.features,
      keywords: TOOL ? [TOOL.primaryKeyword, ...TOOL.secondaryKeywords] : undefined,
    }),
    breadcrumbJsonLd('/decision-coin-flip'),
    ...(TOOL?.faqs ? [faqJsonLd(TOOL.faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <DecisionFlipPage />
    </>
  );
}
