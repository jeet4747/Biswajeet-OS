import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MoonCursor() {
  const [pos, setPos]     = useState({ x: -200, y: -200 });
  const [trail, setTrail] = useState({ x: -200, y: -200 });
  const [clicked, setClicked] = useState(false);
  const trailRef = useRef({ x: -200, y: -200 });
  const rafRef   = useRef(null);

  useEffect(() => {
    // Hide native cursor globally
    document.body.style.cursor = 'none';

    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onDown = () => setClicked(true);
    const onUp   = () => setClicked(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);

    // Smooth trailing ghost
    const tick = () => {
      trailRef.current.x += (pos.x - trailRef.current.x) * 0.1;
      trailRef.current.y += (pos.y - trailRef.current.y) * 0.1;
      setTrail({ x: trailRef.current.x, y: trailRef.current.y });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, [pos.x, pos.y]);

  return (
    <>
      {/* ── Trailing ghost dot ── */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left:      trail.x - 18,
          top:       trail.y - 18,
          width:     36,
          height:    36,
          borderRadius: '50%',
          border: '1px solid rgba(0,212,255,0.25)',
          transition: 'none',
          mixBlendMode: 'screen',
        }}
      />

      {/* ── Crescent Moon Cursor ── */}
      {/* 
          Crescent trick: a circle with zero background + an inset box-shadow
          that is shifted to one side, creating the illusion of a crescent.
      */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          left:  pos.x - 14,
          top:   pos.y - 14,
          scale: clicked ? 0.7 : 1,
          rotate: clicked ? 20 : 0,
        }}
        transition={{
          left:  { type: 'spring', stiffness: 500, damping: 40, mass: 0.5 },
          top:   { type: 'spring', stiffness: 500, damping: 40, mass: 0.5 },
          scale:  { type: 'spring', stiffness: 300, damping: 20 },
          rotate: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        style={{ width: 28, height: 28 }}
      >
        {/* The moon SVG — a proper crescent */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
        >
          {/* Outer glow filter */}
          <defs>
            <filter id="moonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Crescent: full circle minus an offset inner circle via clip-path */}
          <path
            filter="url(#moonGlow)"
            d="
              M 14 2
              A 12 12 0 1 1 14 26
              A 8 8 0 1 0 14 2
              Z
            "
            fill="rgba(0,212,255,0.9)"
          />

          {/* Inner shimmer line */}
          <path
            d="M 14 6 A 7 7 0 0 1 20 20"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Glow halo behind the moon */}
        <div
          style={{
            position: 'absolute',
            inset: '-8px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      </motion.div>
    </>
  );
}
