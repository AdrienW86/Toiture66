import './globals.css';
import { Oswald, Lobster } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Script from 'next/script';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
      </head>

      <body className={`${oswald.className} ${lobster.className}`}>
        <Header />

        {/* Google Tag (gtag.js) */}
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

        {/* Consent Manager */}
        {/* <Script
          src="https://cdn.consentmanager.net/delivery/autoblocking/64fae7f782c0d.js"
          strategy="afterInteractive"
          data-cmp-ab="1"
          data-cmp-host="d.delivery.consentmanager.net"
          data-cmp-cdn="cdn.consentmanager.net"
          data-cmp-codesrc="16"
        /> */}

        {children}
        <Footer />
      </body>
    </html>
  );
}

