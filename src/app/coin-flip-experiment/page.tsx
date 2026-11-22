import type { Metadata } from 'next';
import { ExperimentPage } from '../../views/ExperimentPage';
import { createPageMetadata } from '../../seo/metadata';
import { appJsonLd, breadcrumbJsonLd, faqJsonLd } from '../../seo/head';
import { getRouteMeta } from '../../seo/routes';
import { getToolByPath } from '../../data/tools';
import { JsonLd } from '../../components/seo/JsonLd';

const ROUTE = getRouteMeta('/coin-flip-experiment')!;
const TOOL = getToolByPath('/coin-flip-experiment')!;

export const metadata: Metadata = createPageMetadata('/coin-flip-experiment');

export default function Page() {
  const structuredData = [
    appJsonLd('/coin-flip-experiment', ROUTE.title, ROUTE.description, {
      category: 'UtilitiesApplication',
      features: TOOL?.features,
      keywords: TOOL ? [TOOL.primaryKeyword, ...TOOL.secondaryKeywords] : undefined,
    }),
    breadcrumbJsonLd('/coin-flip-experiment'),
    ...(TOOL?.faqs ? [faqJsonLd(TOOL.faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <ExperimentPage />
    </>
  );
}
