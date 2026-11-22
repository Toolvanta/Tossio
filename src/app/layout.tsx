import type { Metadata, Viewport } from 'next';
import { Poppins, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import '../styles/global.css';
import { CoinFlipProvider } from '../context/CoinFlipContext';
import { AppLayout } from '../components/layout/AppLayout';
import { SITE } from '../seo/site';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  appleWebApp: {
    title: SITE.name,
  },
  authors: [{ name: SITE.author.name, url: SITE.author.url }],
  formatDetection: {
    telephone: false,
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Apply saved theme before first paint */}
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=(JSON.parse(localStorage.getItem('coinflip:v1')||'{}').settings||{});var t=s.theme||'light';if(t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        {/* Consent Mode defaults */}
        <script
          id="gtm-consent-init"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}(function(){var optedOut=false;try{optedOut=localStorage.getItem('tossio.consent')==='denied';}catch(e){}gtag('consent','default',{analytics_storage:optedOut?'denied':'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});})();gtag('js',new Date());`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager loaded with afterInteractive to protect LCP/FCP */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5X7C5HR6');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5X7C5HR6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <noscript>
          <p style={{ maxWidth: '40rem', margin: '2rem auto', padding: '0 1rem', fontFamily: 'system-ui, sans-serif' }}>
            Tossio needs JavaScript to flip coins. Please enable JavaScript in your browser.
          </p>
        </noscript>

        <CoinFlipProvider>
          <AppLayout>{children}</AppLayout>
        </CoinFlipProvider>

        {/* Service Worker registration */}
        <script
          id="sw-init"
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator && location.protocol==='https:'){addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){});});}`,
          }}
        />
      </body>
    </html>
  );
}
