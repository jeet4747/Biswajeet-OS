import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Hero           from '../sections/Hero';
import About          from '../sections/About';
import Product        from '../sections/Product';
import Growth         from '../sections/Growth';
import ContentSection from '../sections/Content';
import Infra          from '../sections/Infra';
import Achievements   from '../sections/Achievements';
import Future         from '../sections/Future';
import Tools          from '../sections/Tools';
import Contact        from '../sections/Contact';

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

// Zoom variants: exit zooms in, entry zooms out from small
const variants = {
  initial: (dir) => ({ scale: dir > 0 ? 0.65 : 1.4, opacity: 0 }),
  animate:           { scale: 1,    opacity: 1 },
  exit:    (dir) => ({ scale: dir > 0 ? 1.5 : 0.6, opacity: 0 }),
};
const transition = { duration: 0.75, ease: [0.76, 0, 0.24, 1] };

// Threshold: how many accumulated wheel delta px to trigger a page change
const SCROLL_THRESHOLD = 80;
// Cooldown after last wheel event before we try to navigate (ms)
const SCROLL_COOLDOWN  = 120;

export default function ZoomPageContainer() {
  const [index,     setIndex]     = useState(0);
  const [direction, setDirection] = useState(1);
  const [locked,    setLocked]    = useState(false);

  // Ref to the scrollable inner panel so we can read its scroll position
  const panelRef    = useRef(null);
  const overflowAcc = useRef(0);   // accumulated delta beyond page bounds
  const cooldown    = useRef(null);
  const touchStart  = useRef(null);

  // ── Navigate between pages ──
  const navigate = useCallback((dir) => {
    if (locked) return;
    const next = index + dir;
    if (next < 0 || next >= PAGES.length) return;
    setDirection(dir);
    setLocked(true);
    setIndex(next);
    overflowAcc.current = 0;
    // Scroll new panel to top
    setTimeout(() => {
      if (panelRef.current) panelRef.current.scrollTop = 0;
      setLocked(false);
    }, 860);
  }, [index, locked]);

  // ── Wheel handler ──
  // Logic:
  //   1. If the panel can still scroll in the desired direction → let it scroll naturally.
  //   2. If we're already at the edge (top or bottom), accumulate delta.
  //   3. Once accumulated delta > threshold, trigger page navigation.
  useEffect(() => {
    const onWheel = (e) => {
      const panel = panelRef.current;
      if (!panel) return;

      const goingDown = e.deltaY > 0;
      const atBottom  = panel.scrollHeight - panel.scrollTop - panel.clientHeight < 5;
      const atTop     = panel.scrollTop < 5;

      const canScrollInside = goingDown ? !atBottom : !atTop;

      if (canScrollInside) {
        // Still has content to reveal — let the browser scroll naturally
        overflowAcc.current = 0;
        return; // don't preventDefault, let inner div scroll
      }

      // At edge — intercept and accumulate
      e.preventDefault();
      overflowAcc.current += e.deltaY;

      clearTimeout(cooldown.current);
      cooldown.current = setTimeout(() => {
        if (Math.abs(overflowAcc.current) >= SCROLL_THRESHOLD) {
          navigate(overflowAcc.current > 0 ? 1 : -1);
        }
        overflowAcc.current = 0;
      }, SCROLL_COOLDOWN);
    };

    // Must be non-passive so we can call preventDefault() when needed
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [navigate]);

  // ── Keyboard ──
  useEffect(() => {
    const onKey = (e) => {
      const panel = panelRef.current;
      if (!panel) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        const atBottom = panel.scrollHeight - panel.scrollTop - panel.clientHeight < 5;
        if (atBottom) { e.preventDefault(); navigate(1); }
      }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        const atTop = panel.scrollTop < 5;
        if (atTop) { e.preventDefault(); navigate(-1); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate]);

  // ── Touch swipe ──
  useEffect(() => {
    const onStart = (e) => { touchStart.current = e.touches[0].clientY; };
    const onEnd   = (e) => {
      if (touchStart.current === null) return;
      const panel = panelRef.current;
      const diff  = touchStart.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 60) {
        const goingDown = diff > 0;
        const atBottom  = panel ? panel.scrollHeight - panel.scrollTop - panel.clientHeight < 5 : true;
        const atTop     = panel ? panel.scrollTop < 5 : true;
        if (goingDown && atBottom)  navigate(1);
        if (!goingDown && atTop)    navigate(-1);
      }
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

      {/* ── Page ── */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          ref={panelRef}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          // overflow-y-auto so content can scroll; hide-scrollbar keeps it invisible
          className="absolute inset-0 overflow-y-auto overflow-x-hidden hide-scrollbar"
          style={{ willChange: 'transform, opacity' }}
        >
          <Component />
        </motion.div>
      </AnimatePresence>

      {/* ── Edge glow hints: show when content is at bottom (more pages below) ── */}
      {index < PAGES.length - 1 && (
        <div
          className="fixed bottom-0 left-0 right-0 h-20 pointer-events-none z-40"
          style={{
            background: 'linear-gradient(to top, rgba(0,212,255,0.05), transparent)',
          }}
        />
      )}

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
              overflowAcc.current = 0;
              setTimeout(() => {
                if (panelRef.current) panelRef.current.scrollTop = 0;
                setLocked(false);
              }, 860);
            }}
            title={page.label}
            className="group relative flex items-center justify-end gap-2"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-gray-400 uppercase tracking-wider pr-1 whitespace-nowrap">
              {page.label}
            </span>
            <div
              className="transition-all duration-300 rounded-full"
              style={{
                width:      i === index ? 8 : 5,
                height:     i === index ? 8 : 5,
                background: i === index ? '#00D4FF' : 'rgba(255,255,255,0.2)',
                boxShadow:  i === index ? '0 0 8px #00D4FF' : 'none',
              }}
            />
          </button>
        ))}
      </nav>

      {/* ── Page Counter ── */}
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
