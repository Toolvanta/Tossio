import type { Metadata } from 'next';
import { ContactPage } from '../../views/ContactPage';
import { createPageMetadata } from '../../seo/metadata';
import { breadcrumbJsonLd } from '../../seo/head';
import { JsonLd } from '../../components/seo/JsonLd';

export const metadata: Metadata = createPageMetadata('/contact');

export default function Page() {
  const structuredData = [breadcrumbJsonLd('/contact')];

  return (
    <>
      <JsonLd data={structuredData} />
      <ContactPage />
    </>
  );
}
