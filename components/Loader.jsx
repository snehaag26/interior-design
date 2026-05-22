'use client';

import { useState, useEffect } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 4) + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => setOpacity(0), 1000);
      const removeTimer = setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 2000);
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress, onComplete]);

  if (!isVisible) return null;

  const letters = ["L", "U", "M", "I", "È", "R", "E"];

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col justify-center items-center select-none transition-all duration-[1000ms]"
      style={{ 
        backgroundColor: '#0c090a',
        opacity, 
        transform: opacity === 0 ? 'translateY(-100vh)' : 'translateY(0)',
        transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)'
      }}
    >
      {/* Custom Ambient Glow behind the logo */}
      <div className="absolute w-[350px] h-[350px] rounded-full blur-[90px] z-0 animate-pulse" style={{ backgroundColor: 'rgba(225, 162, 170, 0.15)' }}></div>

      <div className="relative z-10 flex gap-3 md:gap-5 mb-8">
        {letters.map((char, index) => (
          <span
            key={index}
            className="text-5xl md:text-8xl tracking-widest"
            style={{
              fontFamily: '"Dancing Script", cursive',
              color: '#fcdfd9',
              display: 'inline-block',
              animation: `letter-fall 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards`,
              animationDelay: `${index * 120}ms`,
              opacity: 0,
            }}
          >
            {char}
          </span>
        ))}
      </div>

      <div className="relative z-10 w-48 h-[1px] mb-2 overflow-hidden" style={{ backgroundColor: 'rgba(252, 223, 217, 0.1)' }}>
        <div 
          className="h-full transition-all duration-300 ease-out" 
          style={{ width: `${progress}%`, backgroundColor: '#e1a2aa' }}
        ></div>
      </div>

      <div className="relative z-10 text-lg tracking-[0.2em]" style={{ fontFamily: '"Playfair Display", serif', color: '#e1a2aa' }}>
        {progress.toString().padStart(3, '0')}%
      </div>

      {/* Minimalist Progress Indicators */}
      <div className="absolute bottom-12 w-full px-12 md:px-24 flex justify-between items-end">
        <div className="flex flex-col">
          <span 
            className="text-[10px] uppercase tracking-[0.3em] mb-2"
            style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(252, 223, 217, 0.4)' }}
          >
            System Status
          </span>
          <span 
            className="text-sm font-light italic"
            style={{ fontFamily: '"Dancing Script", cursive', color: '#fac7cf' }}
          >
            {progress < 100 ? 'Suspension Sequence Initializing...' : 'Coordinates Locked.'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
