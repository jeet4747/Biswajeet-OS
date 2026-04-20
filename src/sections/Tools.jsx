import React from 'react';
import Section from '../components/Section';
import { Hammer, Lock, LockKeyhole } from 'lucide-react';

const upcomingTools = [
  { name: 'Social Media Idea Generator', status: 'In Development' },
  { name: 'ADHD Focus System', status: 'Prototyping' },
  { name: 'Resume Enhancer', status: 'Planning Phase' },
  { name: 'AI Platform Systems', status: 'Architecture' }
];

export default function Tools() {
  return (
    <Section id="tools">
       <div className="glass-card border-dashed border-2 border-white/10 p-10 md:p-16 text-center relative overflow-hidden group">
          
          {/* subtle scanning line animation via CSS */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/5 to-transparent h-[10%] w-full animate-[spin_4s_linear_infinite]" style={{ animation: "scan 3s linear infinite" }}/>
          <style>{`
            @keyframes scan {
              0% { top: -10%; opacity: 0; }
              50% { opacity: 1; }
              100% { top: 110%; opacity: 0; }
            }
          `}</style>
          
          <div className="flex justify-center mb-6 relative z-10">
             <div className="p-4 bg-space border border-white/20 rounded-full text-gray-500">
                <Hammer size={32} />
             </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-gray-500 mb-4 relative z-10">
             Tools & Systems
             <span className="block text-sm text-electric tracking-normal mt-2 font-mono">( Under Development )</span>
          </h2>
          
          <p className="text-lg text-gray-400 font-mono mb-10 max-w-xl mx-auto relative z-10">
             This is where I'm building products people actually use. External modules will be mounted here upon completion.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto relative z-10">
             {upcomingTools.map((tool, idx) => (
                <div key={idx} className="bg-space/80 border border-white/5 p-4 rounded-lg flex items-center justify-between opacity-60 hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-3">
                      <LockKeyhole size={16} className="text-gray-600" />
                      <span className="font-mono text-sm text-white">{tool.name}</span>
                   </div>
                   <span className="text-xs uppercase font-bold text-gray-500 bg-white/5 px-2 py-1 rounded">
                      Coming Soon
                   </span>
                </div>
             ))}
          </div>
       </div>
    </Section>
  );
}
