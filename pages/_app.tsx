import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${poppins.variable}`}>
      <div className="min-h-screen bg-white text-gray-800 antialiased">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="John Doe's portfolio - Full Stack Developer specializing in modern web technologies" />
          <title>Abdullah Fazal | Portfolio</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
} 