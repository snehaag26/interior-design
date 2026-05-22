'use client';

import { useState, useRef } from 'react';

const Interactive3DRoom = () => {
  const [tilt, setTilt] = useState({ x: -18, y: 38 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    const px = (x / width) * 2 - 1;
    const py = (y / height) * 2 - 1;

    const baseX = -18;
    const baseY = 38;

    setTilt({
      x: baseX + py * 15,
      y: baseY + px * 15
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: -18, y: 38 });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center select-none"
      style={{ perspective: '1200px' }}
    >
      <div 
        className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] transition-transform duration-500"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)'
        }}
      >
        {/* Room Floor Plane */}
        <div 
          className="absolute inset-0 border origin-bottom" 
          style={{ 
            borderColor: 'rgba(225, 162, 170, 0.15)',
            transform: 'rotateX(90deg) translateZ(-200px)', 
            background: 'radial-gradient(circle, rgba(225, 162, 170,0.15) 0%, rgba(5, 5, 5,0.85) 100%)',
            boxShadow: 'inset 0 0 30px rgba(225, 162, 170, 0.1)'
          }}
        >
          <div className="w-full h-full grid grid-cols-5 grid-rows-5 opacity-20 pointer-events-none">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="border" style={{ borderColor: 'rgba(225, 162, 170, 0.3)' }} />
            ))}
          </div>
        </div>

        {/* Back Wall Plane */}
        <div 
          className="absolute inset-0 border" 
          style={{ 
            borderColor: 'rgba(225, 162, 170, 0.15)',
            transform: 'translateZ(-200px)',
            background: 'linear-gradient(to top, rgba(111, 89, 91,0.2), rgba(5, 5, 5,0.9))',
            boxShadow: 'inset 0 0 35px rgba(0,0,0,0.8)'
          }}
        >
          <div className="absolute right-[30%] top-0 bottom-0 w-[1px]" style={{ backgroundColor: 'rgba(225, 162, 170, 0.2)' }} />
        </div>

        {/* Left Wall Plane */}
        <div 
          className="absolute inset-0 border origin-left" 
          style={{ 
            borderColor: 'rgba(225, 162, 170, 0.15)',
            transform: 'rotateY(90deg) translateZ(-200px)',
            background: 'linear-gradient(to right, rgba(111, 89, 91,0.15), rgba(5, 5, 5,0.85))',
            boxShadow: 'inset 0 0 35px rgba(0,0,0,0.8)'
          }}
        />

        {/* Suspended 3D Furniture Planes */}
        <div 
          className="absolute left-[20%] top-[45%] w-[180px] md:w-[260px] h-[120px] md:h-[160px] pointer-events-none float-1 z-30" 
          style={{ 
            transform: 'translate3d(0, 0, 70px)', 
            transformStyle: 'preserve-3d',
            filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.6))'
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(225, 162, 170, 0.3)' }}>
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800" 
              alt="Manifesto 01"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 mix-blend-multiply opacity-35" style={{ backgroundColor: '#e1a2aa' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c090a]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-3 left-3 text-left">
              <span className="text-[10px] block" style={{ fontFamily: '"Dancing Script", cursive', color: '#fac7cf' }}>Manifesto Plane 01</span>
              <span className="text-xs tracking-wider" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>THE LIVING SPACE</span>
            </div>
          </div>
        </div>

        <div 
          className="absolute right-[15%] top-[20%] w-[120px] md:w-[170px] h-[140px] md:h-[200px] pointer-events-none float-2 z-20" 
          style={{ 
            transform: 'translate3d(0, 0, -50px)', 
            transformStyle: 'preserve-3d',
            filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(225, 162, 170, 0.2)' }}>
            <img 
              src="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=800" 
              alt="Manifesto 02"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 mix-blend-multiply opacity-40" style={{ backgroundColor: '#e1a2aa' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c090a]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-3 left-3 text-left">
              <span className="text-[9px] block" style={{ fontFamily: '"Dancing Script", cursive', color: '#fac7cf' }}>Manifesto Plane 02</span>
              <span className="text-xs tracking-wider" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>STUDIO CONCEPT</span>
            </div>
          </div>
        </div>

        <div 
          className="absolute left-[38%] top-[10%] w-[80px] md:w-[120px] h-[120px] md:h-[160px] pointer-events-none float-3"
          style={{ 
            transform: 'translate3d(0, 0, 110px)', 
            transformStyle: 'preserve-3d' 
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[0.75]" style={{ stroke: 'rgba(225, 162, 170, 0.6)' }}>
            <line x1="50" y1="0" x2="50" y2="40" />
            <path d="M32 40 Q50 25, 68 40 Z" fill="rgba(250, 199, 207, 0.1)" />
            <circle cx="50" cy="42" r="3.5" fill="#fac7cf" className="animate-pulse" />
            <path d="M50 42 L50 75" stroke="#e1a2aa" strokeDasharray="3 3" />
            <circle cx="50" cy="75" r="2" fill="#e1a2aa" />
          </svg>
        </div>

      </div>
    </div>
  );
};

export default Interactive3DRoom;
