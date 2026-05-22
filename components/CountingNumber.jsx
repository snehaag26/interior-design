'use client';

import { useState, useEffect, useRef } from 'react';

const CountingNumber = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const target = parseInt(value);
    let start = 0;
    let isTriggered = false;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isTriggered) {
        isTriggered = true;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / target));
        
        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start >= target) {
            clearInterval(timer);
            setCount(target);
          }
        }, stepTime);
      }
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl md:text-5xl block mb-1" style={{ fontFamily: '"Playfair Display", serif', color: '#fcdfd9' }}>
        {count}+
      </span>
      <span className="text-sm" style={{ fontFamily: '"Dancing Script", cursive', color: '#e1a2aa' }}>
        {label}
      </span>
    </div>
  );
};

export default CountingNumber;
