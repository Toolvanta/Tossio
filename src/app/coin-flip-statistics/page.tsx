import type { Metadata } from 'next';
import { StatisticsPage } from '../../views/StatisticsPage';
import { createPageMetadata } from '../../seo/metadata';

export const metadata: Metadata = createPageMetadata('/coin-flip-statistics');

export default function Page() {
  return <StatisticsPage />;
}
