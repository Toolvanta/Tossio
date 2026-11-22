import type { MetadataRoute } from 'next';
import { SITE } from '../seo/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/coin-flip-statistics'],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
