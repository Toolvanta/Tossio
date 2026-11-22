import { describe, it, expect } from 'vitest';
import { REDIRECTS, ROUTES } from '../seo/routes';
import vercel from '../../vercel.json';
import sitemap from '../app/sitemap';
import { absoluteUrl } from '../seo/site';

describe('hosting and routing configuration', () => {
  it('redirects every retired URL permanently', () => {
    const map = Object.fromEntries(
      vercel.redirects.map((r: { source: string; destination: string }) => [r.source, r.destination])
    );
    expect(map).toEqual(REDIRECTS);
    for (const r of vercel.redirects) expect(r.permanent).toBe(true);
  });

  it('never redirects a live page, and every redirect lands on one', () => {
    const live = new Set(ROUTES.map((r) => r.path));
    for (const [from, to] of Object.entries(REDIRECTS)) {
      expect(live.has(from)).toBe(false);
      expect(live.has(to)).toBe(true);
    }
  });

  it('keeps titles a sensible length for search results', () => {
    for (const r of ROUTES) expect(r.title.length, r.path).toBeLessThanOrEqual(65);
  });

  it('generates a dynamic sitemap including all indexable routes', () => {
    const items = sitemap();
    const indexableRoutes = ROUTES.filter((r) => !r.noindex);
    expect(items.length).toBe(indexableRoutes.length);
    for (const r of indexableRoutes) {
      expect(items.some((item) => item.url === absoluteUrl(r.path))).toBe(true);
    }
  });
});
