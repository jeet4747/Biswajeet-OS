import React from 'react';
import Section from '../components/Section';
import { Film, Play, Mic, Video } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContentSection() {
  const contentStats = [
    { icon: <Video className="text-electric" size={20}/>, label: 'Videos Published', value: '100+' },
    { icon: <Film className="text-neon" size={20}/>, label: 'Short-Form Reels', value: 'Active' },
    { icon: <Mic className="text-accent" size={20}/>, label: 'Podcast Integrations', value: 'Live' }
  ];

  return (
    <Section id="content">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider flex items-center gap-3">
             <Film className="text-neon" />
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon to-white">Content Machine</span>
           </h2>
           <p className="text-gray-400 font-mono mt-4 max-w-2xl">
             Creative engine output. Producing technical and growth-focused media to capture attention natively.
           </p>
        </div>
        
        <div className="flex gap-4">
           {contentStats.map((stat, i) => (
             <div key={i} className="text-center px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                <div className="flex justify-center mb-1">{stat.icon}</div>
                <div className="text-xs uppercase text-gray-500 font-bold">{stat.label}</div>
                <div className="text-lg font-mono font-black text-white">{stat.value}</div>
             </div>
           ))}
        </div>
      </div>

      {/* Grid of video thumbnails (simulated) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(8)].map((_, idx) => (
           <motion.div 
             key={idx}
             whileHover={{ y: -5 }}
             className="relative aspect-[9/16] bg-space/60 border border-white/10 rounded-xl overflow-hidden group cursor-pointer"
           >
              {/* Fallback pattern for video blocks */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity" 
                   style={{ background: 'radial-gradient(circle at center, #7B61FF 1px, transparent 1px) 0 0 / 10px 10px' }} />
                   
              <div className="absolute inset-0 bg-gradient-to-t from-space via-space/20 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="p-3 bg-neon/80 rounded-full text-white backdrop-blur-md">
                    <Play fill="currentColor" size={24} />
                 </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                 <div className="w-full bg-white/20 h-1 rounded-full mb-1 overflow-hidden">
                    <div className="w-1/3 h-full bg-neon rounded-full" />
                 </div>
                 <p className="text-xs font-mono text-gray-300 truncate">SYS_REC_0{idx + 1}.mp4</p>
              </div>
           </motion.div>
        ))}
      </div>
    </Section>
  );
}
