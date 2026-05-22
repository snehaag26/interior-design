'use client';

import { useMemo, useEffect, useRef } from 'react';

const OrbsParticleSystem = () => {
  const particleCount = 65;
  
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => {
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = Math.random() * 10 + 10;
      const opacity = Math.random() * 0.35 + 0.15;
      return { id: i, size, left, delay, duration, opacity };
    });
  }, []);

  const canvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!canvasRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      canvasRef.current.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={canvasRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 transition-transform duration-1000 ease-out"
    >
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: '#dcacc2',
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            bottom: `-20px`,
            opacity: p.opacity,
            boxShadow: `0 0 10px rgba(220, 172, 194, 0.4)`,
            animation: `rise ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default OrbsParticleSystem;
