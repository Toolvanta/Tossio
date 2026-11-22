import type { Metadata } from 'next';
import { PrivacyPage } from '../../views/PrivacyPage';
import { createPageMetadata } from '../../seo/metadata';
import { breadcrumbJsonLd } from '../../seo/head';
import { JsonLd } from '../../components/seo/JsonLd';

export const metadata: Metadata = createPageMetadata('/privacy');

export default function Page() {
  const structuredData = [breadcrumbJsonLd('/privacy')];

  return (
    <>
      <JsonLd data={structuredData} />
      <PrivacyPage />
    </>
  );
}
