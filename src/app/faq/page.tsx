import type { Metadata } from 'next';
import { FAQPage } from '../../views/FAQPage';
import { createPageMetadata } from '../../seo/metadata';
import { faqJsonLd, breadcrumbJsonLd } from '../../seo/head';
import { FAQ_ITEMS } from '../../data/faq';
import { JsonLd } from '../../components/seo/JsonLd';

export const metadata: Metadata = createPageMetadata('/faq');

export default function Page() {
  const structuredData = [
    faqJsonLd(FAQ_ITEMS),
    breadcrumbJsonLd('/faq'),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <FAQPage />
    </>
  );
}
