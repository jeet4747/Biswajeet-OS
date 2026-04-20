import React from 'react';
import Section from '../components/Section';
import { Mail, Network, Code2, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <div className="max-w-4xl mx-auto w-full">
         <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4">
              Initialize Connection
            </h2>
            <p className="text-gray-400 font-mono">
              Ready to deploy. Send coordinates to my inbox.
            </p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Direct Links */}
            <div className="space-y-4">
               <a href="mailto:hello@example.com" className="glass-card p-6 border-white/5 flex items-center gap-4 hover:border-electric/40 transition-colors group">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-electric/10 transition-colors text-white group-hover:text-electric">
                     <Mail size={24} />
                  </div>
                  <div>
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Email Endpoint</span>
                     <span className="font-mono text-white text-lg group-hover:text-glow transition-all">Connect Direct</span>
                  </div>
               </a>

               <a href="#" className="glass-card p-6 border-white/5 flex items-center gap-4 hover:border-[#0077b5]/40 transition-colors group">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#0077b5]/10 transition-colors text-white group-hover:text-[#0077b5]">
                     <Network size={24} />
                  </div>
                  <div>
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">LinkedIn Network</span>
                     <span className="font-mono text-white text-lg transition-all">Biswajeet</span>
                  </div>
               </a>

               <a href="#" className="glass-card p-6 border-white/5 flex items-center gap-4 hover:border-white/40 transition-colors group">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors text-white">
                     <Code2 size={24} />
                  </div>
                  <div>
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">GitHub Repositories</span>
                     <span className="font-mono text-white text-lg transition-all">Review Source</span>
                  </div>
               </a>
            </div>

            {/* Terminal Style Contact Box */}
            <div className="glass-card p-6 border-white/10 rounded-xl bg-space overflow-hidden flex flex-col">
               <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs font-mono text-gray-500">contact_form.sh</span>
               </div>
               
               <div className="flex-1 font-mono text-sm text-gray-300">
                  <p className="mb-2"><span className="text-accent">root@system</span><span className="text-white">:</span><span className="text-electric">~</span>$ ./init_chat</p>
                  <p className="text-gray-500 mb-4">&gt; establishing secure tunnel...</p>
                  
                  <div className="space-y-4">
                     <input type="text" placeholder="Your Designation / Name..." className="w-full bg-black/50 border border-white/10 rounded p-2 text-white font-mono focus:outline-none focus:border-electric" />
                     <input type="email" placeholder="Return Address (Email)..." className="w-full bg-black/50 border border-white/10 rounded p-2 text-white font-mono focus:outline-none focus:border-electric" />
                     <textarea placeholder="Message payload..." rows={3} className="w-full bg-black/50 border border-white/10 rounded p-2 text-white font-mono focus:outline-none focus:border-electric resize-none" />
                     
                     <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-electric text-space font-bold uppercase tracking-widest py-3 rounded hover:bg-white transition-colors flex items-center justify-center gap-2"
                     >
                        <Terminal size={18} />
                        Execute Transmit
                     </motion.button>
                  </div>
               </div>
            </div>

         </div>
      </div>
    </Section>
  );
}
