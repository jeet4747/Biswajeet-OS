import React from 'react';
import Section from '../components/Section';
import { Target, Lightbulb } from 'lucide-react';

export default function Future() {
  return (
    <Section id="future">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider flex items-center justify-center gap-3">
          <Target className="text-white" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white">Future Direction</span>
        </h2>
        <p className="text-gray-400 font-mono mt-4 max-w-2xl mx-auto">
          System trajectory and upcoming operational vectors.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="glass-card p-8 border-white/5 relative overflow-hidden group hover:border-electric/50 transition-colors">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-electric/10 rounded-full blur-2xl group-hover:bg-electric/20 transition-all" />
          <Target className="text-electric mb-4" size={32} />
          <h3 className="text-2xl font-bold uppercase tracking-wide mb-2 text-white">Target Role</h3>
          <div className="font-mono text-lg text-white mb-4 bg-white/5 inline-block px-3 py-1 rounded border border-white/10 text-glow-neon">
            Product / Growth Engineer
          </div>
          <p className="text-gray-300 text-sm font-bold uppercase tracking-wide mb-2 mt-2">
            I want ownership, not tasks.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            I don't just want Jira tickets. I want to look at business metrics, architect the technical solution, and deploy it to drive the needle.
          </p>
        </div>

        <div className="glass-card p-8 border-white/5 relative overflow-hidden group hover:border-neon/50 transition-colors bg-gradient-to-br from-space to-neon/5">
          <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-neon/10 rounded-full blur-2xl group-hover:bg-neon/20 transition-all" />
          <Lightbulb className="text-neon mb-4" size={32} />
          <h3 className="text-2xl font-bold uppercase tracking-wide mb-2 text-white">Next Build</h3>
          <div className="font-mono text-lg text-white mb-4 bg-white/5 inline-block px-3 py-1 rounded border border-white/10 text-glow-neon">
            Tools People Actually Use
          </div>
          <p className="text-gray-300 text-sm font-bold uppercase tracking-wide mb-2 mt-2">
            Shipping real products — not demos.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            From AI platforms to growth tools — building a suite of products that solve real pain points and generate independent revenue.
          </p>
        </div>

      </div>
    </Section>
  );
}
