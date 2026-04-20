import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Hero         from '../sections/Hero';
import About        from '../sections/About';
import Product      from '../sections/Product';
import Growth       from '../sections/Growth';
import ContentSection from '../sections/Content';
import Infra        from '../sections/Infra';
import Achievements from '../sections/Achievements';
import Future       from '../sections/Future';
import Tools        from '../sections/Tools';
import Contact      from '../sections/Contact';

const PAGES = [
  { id: 'hero',         label: 'Home',         Component: Hero },
  { id: 'about',        label: 'Identity',     Component: About },
  { id: 'product',      label: 'Products',     Component: Product },
  { id: 'growth',       label: 'Growth',       Component: Growth },
  { id: 'content',      label: 'Content',      Component: ContentSection },
  { id: 'infra',        label: 'Infra',        Component: Infra },
  { id: 'achievements', label: 'Achievements', Component: Achievements },
  { id: 'future',       label: 'Future',       Component: Future },
  { id: 'tools',        label: 'Tools',        Component: Tools },
  { id: 'contact',      label: 'Contact',      Component: Contact },
];

// Zoom variants: current page zooms IN (gets big) as you leave,
// next page starts small and zooms to normal size as it enters.
const variants = {
  initial:  (dir) => ({ scale: dir > 0 ? 0.65 : 1.4, opacity: 0 }),
  animate:              { scale: 1,    opacity: 1 },
  exit:     (dir) => ({ scale: dir > 0 ? 1.5 : 0.6, opacity: 0 }),
};

const transition = {
  duration: 0.75,
  ease: [0.76, 0, 0.24, 1],
};

export default function ZoomPageContainer() {
  const [index,       setIndex]       = useState(0);
  const [direction,   setDirection]   = useState(1);
  const [locked,      setLocked]      = useState(false);
  const wheelBuffer   = useRef(0);
  const bufferTimer   = useRef(null);
  const touchStart    = useRef(null);

  const navigate = useCallback((dir) => {
    if (locked) return;
    const next = index + dir;
    if (next < 0 || next >= PAGES.length) return;
    setDirection(dir);
    setLocked(true);
    setIndex(next);
    // Unlock after animation finishes
    setTimeout(() => setLocked(false), 850);
  }, [index, locked]);

  // ── Wheel ──
  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      wheelBuffer.current += e.deltaY;
      clearTimeout(bufferTimer.current);
      bufferTimer.current = setTimeout(() => {
        if (Math.abs(wheelBuffer.current) > 30) {
          navigate(wheelBuffer.current > 0 ? 1 : -1);
        }
        wheelBuffer.current = 0;
      }, 50);
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [navigate]);

  // ── Keyboard ──
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') navigate(1);
      if (e.key === 'ArrowUp'   || e.key === 'PageUp')   navigate(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate]);

  // ── Touch ──
  useEffect(() => {
    const onStart = (e) => { touchStart.current = e.touches[0].clientY; };
    const onEnd   = (e) => {
      if (touchStart.current === null) return;
      const diff = touchStart.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
      touchStart.current = null;
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend',   onEnd,   { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend',   onEnd);
    };
  }, [navigate]);

  const { Component } = PAGES[index];

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ background: '#0B0F19' }}>

      {/* ── Section Page ── */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          className="absolute inset-0 overflow-y-auto overflow-x-hidden hide-scrollbar"
          style={{ willChange: 'transform, opacity' }}
        >
          <Component />
        </motion.div>
      </AnimatePresence>

      {/* ── Side Navigation Dots ── */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {PAGES.map((page, i) => (
          <button
            key={page.id}
            onClick={() => {
              if (i === index || locked) return;
              setDirection(i > index ? 1 : -1);
              setLocked(true);
              setIndex(i);
              setTimeout(() => setLocked(false), 850);
            }}
            title={page.label}
            className="group relative flex items-center justify-end gap-2"
          >
            {/* Label tooltip */}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-gray-400 uppercase tracking-wider pr-1 whitespace-nowrap">
              {page.label}
            </span>
            {/* Dot */}
            <div
              className="transition-all duration-300 rounded-full"
              style={{
                width:  i === index ? 8  : 5,
                height: i === index ? 8  : 5,
                background: i === index ? '#00D4FF' : 'rgba(255,255,255,0.2)',
                boxShadow: i === index ? '0 0 8px #00D4FF' : 'none',
              }}
            />
          </button>
        ))}
      </nav>

      {/* ── Section Counter ── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          disabled={index === 0 || locked}
          className="text-gray-600 hover:text-electric disabled:opacity-20 transition-colors p-2 font-mono text-xs uppercase tracking-widest"
        >
          ↑ Prev
        </button>
        <span className="font-mono text-xs text-gray-500 tabular-nums">
          <span className="text-electric">{String(index + 1).padStart(2, '0')}</span>
          <span className="mx-1">/</span>
          {String(PAGES.length).padStart(2, '0')}
        </span>
        <button
          onClick={() => navigate(1)}
          disabled={index === PAGES.length - 1 || locked}
          className="text-gray-600 hover:text-electric disabled:opacity-20 transition-colors p-2 font-mono text-xs uppercase tracking-widest"
        >
          ↓ Next
        </button>
      </div>

    </div>
  );
}
