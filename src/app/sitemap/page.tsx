import type { Metadata } from 'next';
import { HTMLSitemapPage } from '../../views/HTMLSitemapPage';
import { createPageMetadata } from '../../seo/metadata';
import { breadcrumbJsonLd } from '../../seo/head';
import { JsonLd } from '../../components/seo/JsonLd';

export const metadata: Metadata = createPageMetadata('/sitemap');

export default function Page() {
  const structuredData = [breadcrumbJsonLd('/sitemap')];

  return (
    <>
      <JsonLd data={structuredData} />
      <HTMLSitemapPage />
    </>
  );
}
