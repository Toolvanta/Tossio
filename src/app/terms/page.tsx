import type { Metadata } from 'next';
import { TermsPage } from '../../views/TermsPage';
import { createPageMetadata } from '../../seo/metadata';
import { breadcrumbJsonLd } from '../../seo/head';
import { JsonLd } from '../../components/seo/JsonLd';

export const metadata: Metadata = createPageMetadata('/terms');

export default function Page() {
  const structuredData = [breadcrumbJsonLd('/terms')];

  return (
    <>
      <JsonLd data={structuredData} />
      <TermsPage />
    </>
  );
}
