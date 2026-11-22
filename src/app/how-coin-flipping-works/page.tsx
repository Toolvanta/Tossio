import type { Metadata } from 'next';
import { HowCoinFlippingWorksPage } from '../../views/HowCoinFlippingWorksPage';
import { createPageMetadata } from '../../seo/metadata';
import { breadcrumbJsonLd } from '../../seo/head';
import { JsonLd } from '../../components/seo/JsonLd';

export const metadata: Metadata = createPageMetadata('/how-coin-flipping-works');

export default function Page() {
  const structuredData = [breadcrumbJsonLd('/how-coin-flipping-works')];

  return (
    <>
      <JsonLd data={structuredData} />
      <HowCoinFlippingWorksPage />
    </>
  );
}
