'use client';

import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(true);
  const cursorDotRef = useRef(null);
  const canvasRef = useRef(null);
  const trailPoints = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const velocity = useRef(0);
  const isHovered = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor="hover"]');
      if (target) {
        isHovered.current = true;
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('[data-cursor="hover"]');
      if (target) {
        isHovered.current = false;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let animationFrameId;

    const render = () => {
      const dx = mousePos.current.x - cursorPos.current.x;
      const dy = mousePos.current.y - cursorPos.current.y;
      
      cursorPos.current.x += dx * 0.15;
      cursorPos.current.y += dy * 0.15;

      const currentVel = Math.sqrt(dx * dx + dy * dy);
      velocity.current += (currentVel - velocity.current) * 0.1;

      trailPoints.current.push({ ...cursorPos.current });
      if (trailPoints.current.length > 25) {
        trailPoints.current.shift();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (trailPoints.current.length > 1) {
        ctx.beginPath();
        ctx.moveTo(trailPoints.current[0].x, trailPoints.current[0].y);

        for (let i = 1; i < trailPoints.current.length - 1; i++) {
          const xc = (trailPoints.current[i].x + trailPoints.current[i + 1].x) / 2;
          const yc = (trailPoints.current[i].y + trailPoints.current[i + 1].y) / 2;
          ctx.quadraticCurveTo(trailPoints.current[i].x, trailPoints.current[i].y, xc, yc);
        }

        ctx.strokeStyle = 'rgba(225, 162, 170, 0.25)';
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#e1a2aa';
        ctx.stroke();
      }

      const dot = cursorDotRef.current;
      if (dot) {
        const baseScale = isHovered.current ? 3.0 : 1.0;
        const angle = Math.atan2(dy, dx);
        const stretch = Math.min(velocity.current * 0.015, 0.8);
        
        dot.style.left = `${cursorPos.current.x}px`;
        dot.style.top = `${cursorPos.current.y}px`;
        
        if (isHovered.current) {
          dot.style.transform = `translate(-50%, -50%) scale(${baseScale})`;
          dot.style.backgroundColor = 'transparent';
          dot.style.border = '1px solid #e1a2aa';
          dot.style.boxShadow = '0 0 15px rgba(225, 162, 170, 0.6)';
        } else {
          dot.style.transform = `translate(-50%, -50%) rotate(${angle}rad) scale(${1 + stretch}, ${1 - stretch})`;
          dot.style.backgroundColor = '#e1a2aa';
          dot.style.border = 'none';
          dot.style.boxShadow = '0 0 8px #e1a2aa';
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[80]" />
      <div
        ref={cursorDotRef}
        id="custom-cursor-dot"
        className="fixed w-3 h-3 rounded-full pointer-events-none z-[90] transition-[background-color,border,box-shadow,width,height] duration-300 ease-out"
        style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CustomCursor;
