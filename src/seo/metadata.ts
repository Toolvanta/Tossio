import type { Metadata } from 'next';
import { getRouteMeta } from './routes';
import { SITE, absoluteUrl } from './site';
import { formatTitle } from './head';
import { getToolByPath } from '../data/tools';

export function createPageMetadata(path: string, overrides?: Partial<Metadata>): Metadata {
  const route = getRouteMeta(path);
  const tool = getToolByPath(path);

  const rawTitle = overrides?.title?.toString() || route?.title || SITE.name;
  const title = formatTitle(rawTitle);
  const description = (overrides?.description as string) || route?.description || SITE.defaultDescription;
  const canonical = absoluteUrl(path);
  const image = absoluteUrl(SITE.ogImage);
  const noindex = overrides?.robots ? undefined : route?.noindex;
  const keywords =
    overrides?.keywords ||
    (tool ? [tool.primaryKeyword, ...tool.secondaryKeywords] : undefined);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots:
      noindex !== undefined
        ? noindex
          ? { index: false, follow: true }
          : { index: true, follow: true, 'max-image-preview': 'large' }
        : undefined,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: SITE.locale,
      type: 'website',
      images: [
        {
          url: image,
          width: SITE.ogImageWidth,
          height: SITE.ogImageHeight,
          alt: SITE.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    ...overrides,
  };
}
