import React from 'react';
import Section from '../components/Section';
import { User, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <Section id="about">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Side: Identity Frame */}
        <div className="w-full md:w-5/12">
            <div className="glass-card p-8 glow-border relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-neon/10 rounded-full blur-3xl group-hover:bg-neon/20 transition-colors duration-500" />
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-electric/10 rounded-full blur-2xl group-hover:bg-electric/20 transition-colors duration-500" />
               
               <div className="relative z-10">
                  <User className="text-electric mb-6" size={40} />
                  <h3 className="text-2xl font-bold mb-2">You are not a role.</h3>
                  <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-6 uppercase tracking-wider">
                    You are a system.
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-electric to-neon mb-6 rounded-full" />
                  <p className="text-gray-400 font-mono text-sm leading-relaxed">
                     I operate at the intersection of engineering and business. I don't just write code to close tickets; I architect solutions that drive growth, optimize infrastructure, and communicate value.
                  </p>
               </div>
            </div>
        </div>

        {/* Right Side: Specs */}
        <div className="w-full md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="glass-card p-6 border-white/5 hover:border-white/20 transition-colors">
               <Zap className="text-accent mb-4" size={24} />
               <h4 className="font-bold text-white mb-1 uppercase tracking-wide text-sm">Experience Vector</h4>
               <p className="text-2xl font-black font-mono text-gray-200">2+ Years</p>
               <p className="text-xs text-gray-500 mt-2 font-mono">Product + Growth Hybrid focus</p>
            </div>

            <div className="glass-card p-6 border-white/5 hover:border-white/20 transition-colors">
               <Target className="text-neon mb-4" size={24} />
               <h4 className="font-bold text-white mb-1 uppercase tracking-wide text-sm">Education Status</h4>
               <p className="text-2xl font-black font-mono text-gray-200">BCA Final</p>
               <p className="text-xs text-gray-500 mt-2 font-mono">Formal academic tracking</p>
            </div>

            <div className="glass-card p-6 border-white/5 sm:col-span-2">
               <h4 className="font-bold text-white mb-4 uppercase tracking-wide text-sm flex justify-between items-center bg-white/5 py-2 px-3 rounded-md">
                 <span>Core Capabilities</span>
                 <span className="text-xs font-mono text-electric">Loaded</span>
               </h4>
               <div className="flex flex-wrap gap-2">
                  {['React & Next.js', 'Performance Ads', 'Full-stack Product', 'Content Engineering', 'Systems Thinking'].map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300">
                      {skill}
                    </span>
                  ))}
               </div>
            </div>

        </div>
      </div>
    </Section>
  );
}
