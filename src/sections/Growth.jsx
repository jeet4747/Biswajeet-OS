import React from 'react';
import Section from '../components/Section';
import { TrendingUp, Activity, Users, DollarSign, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Growth() {
  return (
    <Section id="growth">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider flex items-center gap-3">
          <TrendingUp className="text-accent" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-white">Growth Engine Module</span>
        </h2>
        <p className="text-gray-400 font-mono mt-4 max-w-2xl">
          Live analytics feed. Demonstrating direct business impact through performance marketing architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Dashboard Panel */}
        <div className="lg:col-span-8 glass-card p-6 border-white/5 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-space via-accent to-space" />
           
           <div className="flex justify-between items-center mb-8">
              <h3 className="font-mono text-white text-lg flex items-center gap-2">
                 <Activity size={18} className="text-accent animate-pulse" />
                 Campaign Velocity
              </h3>
              <span className="flex items-center gap-2 text-xs font-bold uppercase text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                 <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                 Live Sync
              </span>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                 <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-400 text-xs font-bold uppercase">Budget Deployed</span>
                    <DollarSign size={14} className="text-gray-500" />
                 </div>
                 <div className="text-2xl font-black text-white font-mono">₹25,000</div>
                 <div className="text-xs text-accent mt-2 flex items-center gap-1">+ Opt. Active</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                 <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-400 text-xs font-bold uppercase">Leads / Month</span>
                    <Users size={14} className="text-gray-500" />
                 </div>
                 <div className="text-2xl font-black text-white font-mono">30 - 40</div>
                 <div className="text-xs text-accent mt-2 flex items-center gap-1">+ High Intent</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                 <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-400 text-xs font-bold uppercase">System Status</span>
                    <MousePointerClick size={14} className="text-gray-500" />
                 </div>
                 <div className="text-2xl font-black text-white font-mono">Scaling</div>
                 <div className="text-xs text-neon mt-2 flex items-center gap-1">Automated</div>
              </div>
           </div>
           
           {/* Fake graph representation */}
           <div className="h-32 w-full flex items-end gap-1 opacity-80">
              {[40, 30, 50, 45, 60, 55, 75, 65, 80, 85, 70, 95].map((height, i) => (
                 <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    key={i} 
                    className="flex-1 bg-accent/20 rounded-t-sm border-t border-accent/50 hover:bg-accent/40 transition-colors"
                 />
              ))}
           </div>
        </div>

        {/* Side Metrics */}
        <div className="lg:col-span-4 flex flex-col gap-4">
           
           <div className="glass-card p-6 border-white/5 flex-1 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 bg-electric/10 rounded-full blur-2xl group-hover:bg-electric/20 transition-all" />
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1 relative z-10">Avg CTR</h4>
              <p className="text-4xl font-black text-white font-mono relative z-10 text-glow">3.8%</p>
              <p className="text-xs text-gray-400 mt-2 block relative z-10">Above industry standard</p>
           </div>
           
           <div className="glass-card p-6 border-white/5 flex-1 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 bg-neon/10 rounded-full blur-2xl group-hover:bg-neon/20 transition-all" />
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1 relative z-10">Target CPL</h4>
              <p className="text-4xl font-black text-white font-mono relative z-10 text-glow-neon">Optimized</p>
              <p className="text-xs text-gray-400 mt-2 block relative z-10">Lowered acquisition cost linearly</p>
           </div>

        </div>
      </div>
    </Section>
  );
}
