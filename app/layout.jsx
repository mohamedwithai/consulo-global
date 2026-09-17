import { Archivo, Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });
const archivo = Archivo({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-archivo' });

export const metadata = {
  title: 'Consulo Global | Industrial Technology Search',
  description:
    'Specialist search for the commercial, technical and leadership talent behind industrial technology across the United Kingdom, Continental Europe, Middle East and United States.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${archivo.variable} min-h-screen bg-bone text-charcoal`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
