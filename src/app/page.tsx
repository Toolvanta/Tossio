import type { Metadata } from 'next';
import { Home } from '../views/Home';
import { createPageMetadata } from '../seo/metadata';
import { websiteJsonLd, organizationJsonLd, appJsonLd } from '../seo/head';
import { getRouteMeta } from '../seo/routes';
import { getToolByPath } from '../data/tools';
import { JsonLd } from '../components/seo/JsonLd';

const ROUTE = getRouteMeta('/')!;
const TOOL = getToolByPath('/')!;

export const metadata: Metadata = createPageMetadata('/');

export default function HomePage() {
  const structuredData = [
    websiteJsonLd(),
    organizationJsonLd(),
    appJsonLd('/', ROUTE.title, ROUTE.description, {
      category: 'UtilitiesApplication',
      features: TOOL?.features,
      keywords: TOOL ? [TOOL.primaryKeyword, ...TOOL.secondaryKeywords] : undefined,
    }),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <Home />
    </>
  );
}
