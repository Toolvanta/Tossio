import type { Metadata } from 'next';
import { NotFoundPage } from '../views/NotFoundPage';

export const metadata: Metadata = {
  title: 'Page not found | Tossio',
  description: 'The page you were looking for doesn’t exist.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
