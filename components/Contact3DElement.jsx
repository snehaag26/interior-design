'use client';

import { useState, useRef } from 'react';
import CSS3DBox from './CSS3DBox';

const Contact3DElement = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
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

    setTilt({
      x: py * 20,
      y: px * 20
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center select-none perspective-[1000px]"
    >
      <div 
        className="relative w-[200px] h-[200px] transition-transform duration-500 ease-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: `rotateX(${-15 + tilt.x}deg) rotateY(${45 + tilt.y}deg)`
        }}
      >
        {/* Core Coordinate Sphere */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[120px] h-[120px] rounded-full border border-[#e1a2aa]/30 animate-pulse" />
          <div className="absolute w-[140px] h-[140px] rounded-full border border-[#dcacc2]/20 rotate-45 animate-spin-slow" style={{ animationDuration: '20s' }} />
          <div className="absolute w-[160px] h-[160px] rounded-full border border-[#fac7cf]/10 -rotate-45 animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
          
          {/* Pulsing Core */}
          <div className="absolute w-4 h-4 rounded-full bg-[#e1a2aa] shadow-[0_0_20px_#e1a2aa]" />
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0 animate-orbit" style={{ transformStyle: 'preserve-3d', animationDuration: '15s' }}>
          <CSS3DBox w={12} h={12} d={12} x={180} y={94} z={0} color="rgba(225, 162, 170,0.4)" borderColor="#fcdfd9" />
        </div>
        <div className="absolute inset-0 animate-counter-orbit" style={{ transformStyle: 'preserve-3d', animationDuration: '25s' }}>
          <CSS3DBox w={8} h={8} d={8} x={10} y={40} z={50} color="rgba(220,172,194,0.5)" borderColor="#e1a2aa" />
        </div>

        {/* Floating Architectural Planes */}
        <div className="absolute top-[20%] left-[-20%] w-[100px] h-[60px] border border-[#e1a2aa]/20 bg-[#0c090a]/40 backdrop-blur-sm float-1" style={{ transform: 'translateZ(60px)' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#e1a2aa]/10 to-transparent" />
        </div>
        <div className="absolute bottom-[10%] right-[-30%] w-[80px] h-[120px] border border-[#dcacc2]/20 bg-[#0c090a]/40 backdrop-blur-sm float-2" style={{ transform: 'translateZ(-40px)' }}>
             <div className="absolute inset-0 bg-gradient-to-bl from-[#fac7cf]/10 to-transparent" />
        </div>

      </div>
    </div>
  );
};

export default Contact3DElement;
