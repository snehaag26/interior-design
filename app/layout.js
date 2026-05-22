import './globals.css';
import { Cormorant_Garamond, Playfair_Display, DM_Sans, Dancing_Script } from 'next/font/google';
import CustomCursor from '../components/CustomCursor';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LoaderWrapper from '../components/LoaderWrapper';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500'], style: ['normal', 'italic'], variable: '--font-cormorant' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-playfair' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-dm-sans' });
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400'], variable: '--font-dancing' });

export const metadata = {
  title: 'LUMIÈRE INTÉRIEUR — Luxury Interior Design Studio',
  description: 'LUMIÈRE INTÉRIEUR is an elite luxury interior design studio creating gravity-defying, ethereal living spaces. Custom curation, architecture, and luxury.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${dmSans.variable} ${dancing.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-[#e1a2aa]/30 selection:text-[#fcdfd9]">
        {/* Grain noise overlay */}
        <div className="noise-overlay"></div>

        {/* Ambient mesh gradient */}
        <div className="mesh-bg"></div>

        {/* SVG Morphing Blobs (Background elements) */}
        <div className="fixed inset-0 pointer-events-none z-[-5] overflow-hidden">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="absolute -top-40 -left-40 w-[650px] h-[650px] opacity-20 blur-3xl">
            <path fill="url(#blob-grad-1)">
              <animate attributeName="d" dur="20s" repeatCount="indefinite" values="
                M850,550Q750,750,550,750Q350,750,250,550Q150,350,350,250Q550,150,750,350Q950,350,850,550Z;
                M900,500Q800,700,600,800Q400,900,300,700Q200,500,300,300Q400,100,600,200Q800,300,900,500Z;
                M850,550Q750,750,550,750Q350,750,250,550Q150,350,350,250Q550,150,750,350Q950,350,850,550Z
              "/>
            </path>
            <defs>
              <radialGradient id="blob-grad-1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fac7cf" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>

          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-40 -right-40 w-[750px] h-[750px] opacity-15 blur-3xl">
            <path fill="url(#blob-grad-2)">
              <animate attributeName="d" dur="24s" repeatCount="indefinite" values="
                M900,500Q800,700,600,800Q400,900,300,700Q200,500,300,300Q400,100,600,200Q800,300,900,500Z;
                M800,600Q700,800,500,800Q300,800,200,600Q100,400,300,300Q500,200,700,300Q900,400,800,600Z;
                M900,500Q800,700,600,800Q400,900,300,700Q200,500,300,300Q400,100,600,200Q800,300,900,500Z
              "/>
            </path>
            <defs>
              <radialGradient id="blob-grad-2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#dcacc2" stopOpacity="0.8" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <CustomCursor />
        
        <LoaderWrapper>
          <div className="min-h-screen flex flex-col relative">
            <Navigation />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </LoaderWrapper>
      </body>
    </html>
  );
}
