import React from 'react';
import Section from '../components/Section';
import { Package, ExternalLink, ShieldAlert, Cpu, LayoutDashboard } from 'lucide-react';

const projects = [
  {
    title: 'Spam Email Classifier UI',
    icon: <ShieldAlert className="text-neon" size={24} />,
    problem: 'Complex ML models lacked accessible visualization for non-technical security teams.',
    solution: 'Built a sleek, real-time interface interpreting payload threats directly in browser.',
    tech: ['React', 'Python API', 'Tailwind', 'Framing'],
    role: 'Frontend & API Integration Lead'
  },
  {
    title: 'AI Platform Architectures',
    icon: <Cpu className="text-electric" size={24} />,
    problem: 'Prompt chaining and execution were heavily manual processes.',
    solution: 'Developed modular AI platform interfaces for direct user interaction and execution.',
    tech: ['Next.js', 'OpenAI', 'Vercel', 'PostgreSQL'],
    role: 'Full Stack Engineer'
  },
  {
    title: 'Dashboard Systems',
    icon: <LayoutDashboard className="text-accent" size={24} />,
    problem: 'Scattered analytics preventing swift business decisions.',
    solution: 'Engineered unified control centers pulling from multiple disparate data streams.',
    tech: ['React', 'Recharts', 'Express', 'Tailwind'],
    role: 'Product Engineer'
  }
];

export default function Product() {
  return (
    <Section id="product">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider flex items-center gap-3">
          <Package className="text-electric" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric to-white">Product Builder Module</span>
        </h2>
        <p className="text-gray-400 font-mono mt-4 max-w-2xl">
          Technical execution mapped to business logic. Translating requirements into scalable systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="glass-card hover:glow-border transition-all duration-300 p-1 group">
            <div className="bg-space/80 h-full rounded-xl p-6 flex flex-col justify-between">
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-lg">
                    {proj.icon}
                  </div>
                  <ExternalLink size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 font-mono text-white">{proj.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs uppercase text-gray-500 font-bold block mb-1">Problem</span>
                    <p className="text-sm text-gray-300 leading-relaxed">{proj.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase text-gray-500 font-bold block mb-1">Solution</span>
                    <p className="text-sm text-gray-300 leading-relaxed text-electric brightness-125">{proj.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase text-gray-500 font-bold block mb-1">Role</span>
                    <p className="text-sm font-mono text-neon">{proj.role}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mt-auto">
                {proj.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-400">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
