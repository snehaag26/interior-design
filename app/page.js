'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import OrbsParticleSystem from '../components/OrbsParticleSystem';
import Interactive3DRoom from '../components/Interactive3DRoom';
import ScrollReveal from '../components/ScrollReveal';
import HoverButton from '../components/HoverButton';
import CountingNumber from '../components/CountingNumber';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const maxSplit = 250;
  const splitLeft = Math.min(scrollY * 0.45, maxSplit);
  const splitRight = Math.min(scrollY * 0.45, maxSplit);

  return (
    <div className="relative min-h-screen">
      <OrbsParticleSystem />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 pt-20">
        <div 
          className="absolute z-10 w-full max-w-4xl flex items-center justify-center"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        >
          <Interactive3DRoom />
        </div>

        <div 
          className="absolute z-20 text-center select-none w-full pointer-events-none transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollY * 0.55}px)` }}
        >
          <h1 className="flex flex-col items-center leading-none">
            <span 
              className="text-[10vw] tracking-[0.1em] transition-transform duration-200"
              style={{ fontFamily: '"Dancing Script", cursive', color: 'rgba(252, 223, 217, 0.9)', transform: `translateX(-${splitLeft}px)` }}
            >
              REDEFINING
            </span>
            <span 
              className="text-[9vw] tracking-widest block -mt-[2.5vw] transition-transform duration-200"
              style={{ fontFamily: '"Dancing Script", cursive', color: '#e1a2aa', transform: `translateX(${splitRight}px)` }}
            >
              Space
            </span>
          </h1>
        </div>

        <div 
          className="absolute bottom-[15%] left-[8%] md:left-[12%] dark-glass p-4 md:p-6 text-left pointer-events-none z-30 float-1"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        >
          <span className="text-xs block mb-1" style={{ fontFamily: '"Dancing Script", cursive', color: '#e1a2aa' }}>Atmosphere Curation</span>
          <p className="text-xs md:text-sm font-light leading-snug" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.8)' }}>
            Suspended architectural planes<br />
            and luminous interiors.
          </p>
        </div>

        <div className="absolute bottom-10 flex flex-col items-center pointer-events-none z-30">
          <span className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.55)' }}>Scroll to Float</span>
          <div className="w-[1.5px] h-10 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(252, 223, 217, 0.15)' }}>
            <div className="w-full h-1/2 rounded-full animate-bounce" style={{ backgroundColor: '#e1a2aa' }}></div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full overflow-hidden bg-[#e1a2aa] py-3 md:py-4 -rotate-2 scale-110 my-16 shadow-[0_0_30px_rgba(194,168,120,0.4)] z-40 relative">
        <div className="animate-marquee flex gap-8">
           {/* Duplicate content to make it infinite */}
           <div className="flex gap-8 whitespace-nowrap">
             {Array(8).fill("GRAVITY DEFYING • SPATIAL ALCHEMY • ").map((text, i) => (
               <span key={i} className="text-sm md:text-base font-bold tracking-[0.3em] uppercase" style={{ fontFamily: '"DM Sans", sans-serif', color: '#0c090a' }}>{text}</span>
             ))}
           </div>
        </div>
      </div>

      {/* Manifesto Section */}
      <section className="py-32 px-4 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="text-lg mb-3 block" style={{ fontFamily: '"Dancing Script", cursive', color: '#e1a2aa' }}>Our Manifesto</span>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>The Antigravity Living</h2>
            <div className="w-12 h-[1px] mx-auto" style={{ backgroundColor: 'rgba(225, 162, 170, 0.4)' }}></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6 font-light leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.8)' }}>
              <p className="text-2xl md:text-3xl leading-snug italic font-light" style={{ fontFamily: '"Dancing Script", cursive', color: '#fcdfd9' }}>
                "We release architecture from the structural limits of gravity."
              </p>
              <p className="text-sm md:text-base">
                LUMIÈRE INTÉRIEUR stands at the nexus of luxury, design, and floatation. We believe rooms are atmospheric canvases where light, material, and air interact in perpetual suspension. By creating spaces that defy structural expectations, we craft retreats of floating serenity.
              </p>
              <Link href="/portfolio">
                <HoverButton>
                  Discover Spaces
                </HoverButton>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative p-6 md:p-8">
              <div className="absolute -inset-1 border rounded-[28px] transform rotate-[1.5deg] pointer-events-none float-1" style={{ borderColor: 'rgba(225, 162, 170, 0.2)' }}></div>
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl h-[300px] md:h-[380px] float-3">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800" 
                  alt="Luxury room manifesto" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 mix-blend-multiply opacity-30" style={{ backgroundColor: '#e1a2aa' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c090a]/80 to-transparent" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Curation Preview */}
      <section className="py-32 px-4 w-full overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#e1a2aa]/20 to-transparent"></div>
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="text-lg mb-3 block" style={{ fontFamily: '"Dancing Script", cursive', color: '#e1a2aa' }}>Selected Works</span>
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>Recent Suspensions</h2>
          </div>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Ethereal Lounge", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800", delay: 0 },
            { title: "Vapor Bath", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800", delay: 150 },
            { title: "Culinary Ascension", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800", delay: 300 }
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={item.delay}>
              <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c090a]/90 via-[#0c090a]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 mix-blend-multiply opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundColor: '#e1a2aa' }} />
                
                <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl mb-2" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>{item.title}</h3>
                  <div className="h-[1px] w-0 group-hover:w-full transition-all duration-700 ease-out bg-[#e1a2aa]"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link href="/portfolio">
            <HoverButton>View Full Gallery</HoverButton>
          </Link>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section className="py-16 border-y backdrop-blur-md" style={{ backgroundColor: 'rgba(5, 5, 5, 0.3)', borderColor: 'rgba(225, 162, 170, 0.2)' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
          <CountingNumber value="15" label="Years Curation" />
          <CountingNumber value="200" label="Sovereign Spaces" />
          <CountingNumber value="12" label="Global Awards" />
        </div>
      </section>
    </div>
  );
}
