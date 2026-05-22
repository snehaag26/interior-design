'use client';

import { useState, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import Mini3DRoom from './Mini3DRoom';

const TiltCard = ({ image, title, category, delay, type }) => {
  const cardRef = useRef(null);
  const highlightRef = useRef(null);
  const titleRef = useRef(null);
  const badgeRef = useRef(null);
  const borderRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    const px = (x / width) * 2 - 1;
    const py = (y / height) * 2 - 1;

    const tiltX = -py * 14;
    const tiltY = px * 14;

    setTilt({ x: px * 12, y: py * 12 });

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`;
    card.style.boxShadow = `0 35px 65px rgba(225, 162, 170, 0.25)`;

    if (titleRef.current) titleRef.current.style.transform = `translateZ(60px) translateX(${px * 10}px) translateY(${py * 10}px)`;
    if (badgeRef.current) badgeRef.current.style.transform = `translateZ(40px) translateX(${px * 5}px) translateY(${py * 5}px)`;
    if (borderRef.current) borderRef.current.style.transform = `translateZ(20px)`;
    
    const highlight = highlightRef.current;
    if (highlight) {
      highlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(225, 162, 170, 0.3) 0%, transparent 65%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    setTilt({ x: 0, y: 0 });

    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.boxShadow = `0 15px 35px rgba(0, 0, 0, 0.45)`;

    if (titleRef.current) titleRef.current.style.transform = `translateZ(0px) translateX(0) translateY(0)`;
    if (badgeRef.current) badgeRef.current.style.transform = `translateZ(0px) translateX(0) translateY(0)`;
    if (borderRef.current) borderRef.current.style.transform = `translateZ(0px)`;
    
    const highlight = highlightRef.current;
    if (highlight) {
      highlight.style.background = `transparent`;
    }
  };

  return (
    <ScrollReveal delay={delay} className="w-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-cursor="hover"
        className="dark-glass relative overflow-hidden group select-none transition-all duration-500"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform, box-shadow', transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)' }}
      >
        {/* Specular Highlight / Magnetic Glow */}
        <div
          ref={highlightRef}
          className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />

        {/* Inner Floating Border Frame (Z: 20px) */}
        <div 
          ref={borderRef}
          className="absolute inset-4 border rounded-2xl pointer-events-none z-40 transition-transform duration-500"
          style={{ borderColor: 'rgba(225, 162, 170, 0.15)', transform: 'translateZ(0px)', transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)' }}
        />

        {/* Hover-triggered fully interactive volumetric 3D furniture environment */}
        <Mini3DRoom type={type} tilt={tilt} />

        {/* Image Container with Blend Mode (Z: 0px) */}
        <div className="relative overflow-hidden w-full h-[320px] md:h-[400px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.3]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)' }}
          />
          <div 
            className="absolute inset-0 mix-blend-multiply opacity-40 transition-opacity duration-500 group-hover:opacity-10"
            style={{ backgroundColor: '#e1a2aa' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c090a]/90 via-transparent to-transparent opacity-95" />
        </div>

        {/* Text Overlay (Z: 40px and 60px) */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10 text-white flex flex-col justify-end" style={{ transformStyle: 'preserve-3d' }}>
          <span 
            ref={badgeRef}
            className="text-sm block mb-1.5 transition-all duration-500"
            style={{ fontFamily: '"Dancing Script", cursive', color: '#fac7cf', transform: 'translateZ(0px)', transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)' }}
          >
            {category}
          </span>
          <h3 
            ref={titleRef}
            className="text-2xl tracking-wide group-hover:text-[#e1a2aa] transition-all duration-500"
            style={{ fontFamily: '"Playfair Display", serif', transform: 'translateZ(0px)', textShadow: '0 5px 15px rgba(0,0,0,0.5)', transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)' }}
          >
            {title}
          </h3>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default TiltCard;
