import React from 'react';
import Section from '../components/Section';
import { Terminal, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <Section className="justify-center items-start min-h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 pt-20 lg:pt-0">

          {/* ── Left: Copy ── */}
          <motion.div
            className="w-full lg:w-7/12 relative z-10"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-space/80 backdrop-blur-xl text-xs font-mono text-electric uppercase tracking-wider mb-7">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_6px_#00FFA3]" />
              System Status: Online & Ready
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-5">
              <span className="text-white block">I don't just build</span>
              <span className="text-white block">products.</span>
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-neon via-electric to-accent">
                I run them.
              </span>
            </h1>

            {/* Subline */}
            <p className="text-base md:text-lg text-gray-400 font-mono mb-9 border-l-2 border-electric/60 pl-4 max-w-lg">
              React&nbsp;•&nbsp;Growth&nbsp;•&nbsp;Ads&nbsp;•&nbsp;Infra&nbsp;•&nbsp;Content
            </p>

            {/* System Info Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-10 max-w-2xl">
              {[
                { label: 'Currently At',  value: 'Neoskills',            color: 'text-electric' },
                { label: 'Role',          value: 'Frontend Dev → Product', color: 'text-accent' },
                { label: 'Network',       value: '4K+ LinkedIn Reach',   color: 'text-neon',   hide: true },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`glass-card p-4 border-white/5 hover:border-white/20 transition-colors flex flex-col gap-1 ${item.hide ? 'hidden lg:flex' : ''}`}
                >
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">{item.label}</span>
                  <span className={`text-sm font-mono ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 bg-electric/10 text-electric border border-electric rounded-lg font-mono font-bold tracking-widest uppercase text-sm hover:bg-electric/20 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.15)]"
              >
                <Terminal size={16} />
                Hook In
              </motion.a>
              <motion.a
                href="#product"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 bg-white/5 text-white border border-white/10 rounded-lg font-mono font-bold tracking-widest uppercase text-sm hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Code size={16} />
                View Work
              </motion.a>
            </div>
          </motion.div>

          {/* ── Right: Holographic Identity Frame ── */}
          <motion.div
            className="w-full lg:w-5/12 flex items-center justify-center relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 float-image">

              {/* ── Spinning rings ── */}
              {/* Ring 1 */}
              <div className="ring-1 absolute inset-0 flex items-center justify-center pointer-events-none"
                   style={{ inset: '-28px' }}>
                <div className="w-full h-full rounded-full border-2 border-dashed border-electric/40"
                     style={{ boxShadow: '0 0 18px rgba(0,212,255,0.12)' }} />
              </div>
              {/* Ring 2 */}
              <div className="ring-2 absolute flex items-center justify-center pointer-events-none"
                   style={{ inset: '-48px' }}>
                <div className="w-full h-full rounded-full border border-neon/30" />
              </div>
              {/* Ring 3 */}
              <div className="ring-3 absolute flex items-center justify-center pointer-events-none"
                   style={{ inset: '-64px' }}>
                <div className="w-full h-full rounded-full border border-dotted border-accent/20" />
              </div>

              {/* ── Corner targeting brackets ── */}
              <div className="absolute -top-3 -left-3 w-5 h-5 border-t-2 border-l-2 border-electric" />
              <div className="absolute -top-3 -right-3 w-5 h-5 border-t-2 border-r-2 border-electric" />
              <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b-2 border-l-2 border-neon" />
              <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b-2 border-r-2 border-neon" />

              {/* ── Photo container ── */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-space"
                   style={{ boxShadow: '0 0 60px rgba(0,212,255,0.15), 0 0 120px rgba(123,97,255,0.1)' }}>

                {/* Scanning laser */}
                <div className="scan-line" />

                {/* Photo */}
                <img
                  src="/profile.jpg"
                  alt="Biswajeet – Product & Growth Engineer"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'saturate(1.1) contrast(1.05)' }}
                  onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=400&auto=format&fit=crop';
                  }}
                />

                {/* Soft colour tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-space/60 via-transparent to-transparent" />
                {/* Blue cast */}
                <div className="absolute inset-0 mix-blend-color-dodge bg-gradient-to-br from-electric/5 to-transparent" />
              </div>

              {/* ── ID Badge ── */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-space/90 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest">ID: B-OS-V1 · Available</span>
              </div>

            </div>
          </motion.div>

        </div>
      </Section>
  );
}
