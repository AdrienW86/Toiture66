import './globals.css';
import { Oswald } from 'next/font/google';
import Header from '@/components/Header/Header';
import EmailButton from '@/components/EmailButton/EmailButton';
import PhoneButton from '@/components/PhoneButton/PhoneButton';
import Footer from '@/components/Footer/Footer';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Toiture 66',
  description: "Toiture 66 – Spécialiste de la couverture, rénovation et entretien de toitures à Perpignan et ses environs. Intervention rapide, travail de qualité et conseils personnalisés pour protéger votre habitation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
      </head>

      <body className={oswald.className}>
        <Header />
        {children}
        <EmailButton />
        <PhoneButton />
        <Footer />
      </body>
    </html>
  );
}
