'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HoverButton from './HoverButton';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        scrolled 
          ? 'top-4 py-2 px-4 shadow-xl backdrop-blur-3xl w-[92%] max-w-2xl border' 
          : 'top-6 py-4 px-6 shadow-sm backdrop-blur-md w-[95%] max-w-4xl border-b'
      } rounded-[40px] flex justify-between items-center`}
      style={{
        backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.5)' : 'rgba(5, 5, 5, 0.1)',
        borderColor: scrolled ? 'rgba(225, 162, 170, 0.1)' : 'rgba(225, 162, 170, 0.05)',
      }}
    >
      {/* Logo */}
      <Link 
        href="/"
        data-cursor="hover"
        className="text-lg md:text-2xl font-light tracking-[0.25em] select-none transition-colors duration-500 hover:text-[#e1a2aa]"
        style={{ fontFamily: '"Dancing Script", cursive', color: '#fcdfd9' }}
      >
        LUMIÈRE
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-wrap justify-center gap-4 lg:gap-8 relative items-center flex-1 px-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              data-cursor="hover"
              className={`text-[10px] lg:text-xs uppercase tracking-widest py-1.5 transition-all duration-500 relative z-10 whitespace-nowrap ${
                isActive ? 'font-bold' : 'hover:text-[#fcdfd9]'
              }`}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                color: isActive ? '#e1a2aa' : 'rgba(252, 223, 217, 0.7)'
              }}
            >
              {link.label}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#e1a2aa] animate-pulse" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Mobile Navigation Dock */}
      <div 
        className="flex md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-md backdrop-blur-2xl saturate-[170%] border shadow-2xl rounded-[30px] py-3 px-3 sm:px-6 justify-between items-center z-50"
        style={{
          backgroundColor: 'rgba(5, 5, 5, 0.7)',
          borderColor: 'rgba(225, 162, 170, 0.15)'
        }}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[9px] sm:text-[10px] uppercase tracking-widest py-2 px-1 relative transition-all duration-300 ${
                isActive ? 'font-semibold' : ''
              }`}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                color: isActive ? '#e1a2aa' : 'rgba(252, 223, 217, 0.5)'
              }}
            >
              {link.label}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#e1a2aa] shadow-[0_0_5px_#e1a2aa]" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Quick CTA */}
      
    </nav>
  );
};

export default Navigation;
