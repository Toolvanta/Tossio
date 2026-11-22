import type { MetadataRoute } from 'next';
import { ROUTES } from '../seo/routes';
import { absoluteUrl } from '../seo/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.filter((r) => !r.noindex).map((r) => ({
    url: absoluteUrl(r.path),
    lastModified,
    changeFrequency: r.changefreq,
    priority: r.priority,
  }));
}
