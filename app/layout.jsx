import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Consulo Global | Industrial Technology Search',
  description:
    'Specialist search for the commercial, technical and leadership talent behind industrial technology across the United States, United Kingdom, Continental Europe and Middle East.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-bone text-charcoal`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
