import './globals.css';
import { Oswald } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Script from 'next/script';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Toiture 66',
  description:
    'Toiture 66 – Spécialiste de la couverture, rénovation et entretien de toitures à Perpignan et ses environs. Intervention rapide, travail de qualité et conseils personnalisés pour protéger votre habitation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" />

        {/* Préchargement optimisé de Google Fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
            rel="stylesheet"
          />
        </noscript>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
      </head>

      <body className={oswald.className}>
        <Header />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17521997839"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17521997839');
          `}
        </Script>

        {children}
        <Footer />
      </body>
    </html>
  );
}

