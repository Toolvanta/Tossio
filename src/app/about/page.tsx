import type { Metadata } from 'next';
import { AboutPage } from '../../views/AboutPage';
import { createPageMetadata } from '../../seo/metadata';
import { breadcrumbJsonLd } from '../../seo/head';
import { JsonLd } from '../../components/seo/JsonLd';

export const metadata: Metadata = createPageMetadata('/about');

export default function Page() {
  const structuredData = [breadcrumbJsonLd('/about')];

  return (
    <>
      <JsonLd data={structuredData} />
      <AboutPage />
    </>
  );
}
