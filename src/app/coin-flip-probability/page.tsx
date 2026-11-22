import type { Metadata } from 'next';
import { ProbabilityPage } from '../../views/ProbabilityPage';
import { createPageMetadata } from '../../seo/metadata';
import { breadcrumbJsonLd } from '../../seo/head';
import { JsonLd } from '../../components/seo/JsonLd';

export const metadata: Metadata = createPageMetadata('/coin-flip-probability');

export default function Page() {
  const structuredData = [breadcrumbJsonLd('/coin-flip-probability')];

  return (
    <>
      <JsonLd data={structuredData} />
      <ProbabilityPage />
    </>
  );
}
