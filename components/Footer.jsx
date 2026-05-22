'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  const socialLinks = [
    { label: "IG", url: "#", delay: "0s" },
    { label: "PT", url: "#", delay: "0.2s" },
    { label: "LN", url: "#", delay: "0.4s" },
    { label: "VM", url: "#", delay: "0.6s" }
  ];

  return (
    <footer className="relative pt-24 pb-16 overflow-hidden border-t backdrop-blur-sm z-35" style={{ borderColor: 'rgba(225, 162, 170, 0.1)', backgroundColor: 'rgba(5, 5, 5, 0.8)' }}>
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <Link 
              href="/"
              data-cursor="hover"
              className="text-2xl tracking-[0.2em] block"
              style={{ fontFamily: '"Dancing Script", cursive', color: '#fcdfd9' }}
            >
              LUMIÈRE
            </Link>
            <p className="text-xs font-light max-w-xs leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.6)' }}>
              Releasing space from gravity to craft ethereal sensory retreats.
            </p>
          </div>

          <div>
            <h4 className="text-sm mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>Manifesto</h4>
            <ul className="space-y-2 text-xs font-light" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.7)' }}>
              <li><Link href="/" data-cursor="hover" className="hover:text-[#e1a2aa] transition-colors">The Manifesto</Link></li>
              <li><Link href="/portfolio" data-cursor="hover" className="hover:text-[#e1a2aa] transition-colors">Spaces</Link></li>
              <li><Link href="/services" data-cursor="hover" className="hover:text-[#e1a2aa] transition-colors">Curation</Link></li>
              <li><Link href="/about" data-cursor="hover" className="hover:text-[#e1a2aa] transition-colors">The Studio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>Coordinates</h4>
            <p className="text-xs font-light leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.7)' }}>
              Paris, Cloud District<br />
              aura@lumiereinterieur.design<br />
              +33 (0) 1 45 78 89 90
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>Orbits</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  data-cursor="hover"
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-xs hover:shadow-lg transition-colors float-1"
                  style={{ 
                    animationDelay: social.delay, 
                    animationDuration: '4.5s',
                    borderColor: 'rgba(225, 162, 170, 0.2)',
                    backgroundColor: 'rgba(225, 162, 170, 0.05)',
                    fontFamily: '"DM Sans", sans-serif',
                    color: '#fcdfd9'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#e1a2aa'; e.currentTarget.style.borderColor = '#e1a2aa'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#fcdfd9'; e.currentTarget.style.borderColor = 'rgba(225, 162, 170, 0.2)'; }}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </ScrollReveal>

      <div className="relative select-none pointer-events-none mt-8 -mb-24 md:-mb-24 overflow-hidden">
        <h2 className="text-[12vw] text-center tracking-[0.15em] uppercase whitespace-nowrap leading-none select-none" style={{ fontFamily: '"Dancing Script", cursive', color: 'rgba(252, 223, 217, 0.05)' }}>
          LUMIÈRE INTÉRIEUR
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-[10px]" style={{ borderColor: 'rgba(225, 162, 170, 0.05)', fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.3)' }}>
        <span>© 2026 LUMIÈRE INTÉRIEUR. All retreats suspended.</span>
        <span className="mt-2 md:mt-0">GenZ luxury meets classic weightlessness.</span>
      </div>
    </footer>
  );
};

export default Footer;
