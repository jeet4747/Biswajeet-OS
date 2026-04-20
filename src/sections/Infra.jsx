import React from 'react';
import Section from '../components/Section';
import { Server, Globe, Database, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Infra() {
  return (
    <Section id="infra">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider flex items-center gap-3">
          <Server className="text-electric" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric to-white">Infrastructure</span>
        </h2>
        <p className="text-gray-400 font-mono mt-4 max-w-2xl">
          Not just coding. Ensuring the system stays alive, fast, and secure. Domain routing to deployment.
        </p>
      </div>

      <div className="glass-card p-8 md:p-12 border-white/10 relative overflow-hidden">
         {/* Background accent */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-electric/5 blur-3xl rounded-full" />
         
         {/* Flow Diagram */}
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-x-auto pb-4">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center min-w-[120px] text-center">
               <div className="w-16 h-16 rounded-2xl bg-space border-2 border-white/20 flex items-center justify-center mb-4 relative before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/5 before:scale-110">
                  <Globe className="text-white" size={28} />
               </div>
               <span className="text-sm font-bold uppercase tracking-wider text-gray-300">User</span>
               <span className="text-xs font-mono text-gray-500 mt-1">Request Initiated</span>
            </div>

            <motion.div 
               animate={{ x: [0, 5, 0] }} 
               transition={{ repeat: Infinity, duration: 2 }}
               className="hidden md:flex text-electric/50"
            >
               <ArrowRight size={24} />
            </motion.div>
            <div className="h-6 w-[2px] bg-electric/30 md:hidden flex" />

            {/* Step 2 */}
            <div className="flex flex-col items-center min-w-[120px] text-center">
               <div className="w-16 h-16 rounded-2xl bg-[#F38020]/10 border-2 border-[#F38020]/40 flex items-center justify-center mb-4 relative glow-border shadow-[#F38020]/20">
                  <span className="font-black text-[#F38020] text-xl">CF</span>
               </div>
               <span className="text-sm font-bold uppercase tracking-wider text-gray-300">Cloudflare</span>
               <span className="text-xs font-mono text-gray-500 mt-1">DNS & SSL</span>
            </div>

            <motion.div 
               animate={{ x: [0, 5, 0] }} 
               transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
               className="hidden md:flex text-electric/50"
            >
               <ArrowRight size={24} />
            </motion.div>
            <div className="h-6 w-[2px] bg-electric/30 md:hidden flex" />

            {/* Step 3 */}
            <div className="flex flex-col items-center min-w-[120px] text-center">
               <div className="w-16 h-16 rounded-2xl bg-white text-black border-2 border-white flex items-center justify-center mb-4 relative group hover:scale-105 transition-transform">
                  <span className="font-black text-2xl">▲</span>
               </div>
               <span className="text-sm font-bold uppercase tracking-wider text-gray-300">Vercel / Netlify</span>
               <span className="text-xs font-mono text-gray-500 mt-1">Edge Deployment</span>
            </div>

            <motion.div 
               animate={{ x: [0, 5, 0] }} 
               transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
               className="hidden md:flex text-electric/50"
            >
               <ArrowRight size={24} />
            </motion.div>
            <div className="h-6 w-[2px] bg-electric/30 md:hidden flex" />

            {/* Step 4 */}
            <div className="flex flex-col items-center min-w-[120px] text-center">
               <div className="w-16 h-16 rounded-2xl bg-accent/10 border-2 border-accent/40 flex items-center justify-center mb-4 relative glow-border shadow-accent/20">
                  <Database className="text-accent" size={28} />
               </div>
               <span className="text-sm font-bold uppercase tracking-wider text-gray-300">App Core</span>
               <span className="text-xs font-mono text-gray-500 mt-1">Live Environment</span>
            </div>

         </div>
      </div>
    </Section>
  );
}
