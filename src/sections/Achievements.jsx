import React from 'react';
import Section from '../components/Section';
import { Award, Trophy, Medal, CheckCircle2 } from 'lucide-react';

const achievements = [
  {
    title: 'IIT Bombay Techfest',
    status: 'Finalist',
    icon: <Trophy className="text-neon" size={20} />,
    description: 'Developed and pitched a scalable technical solution among top national talent.',
    year: '2023'
  },
  {
    title: 'Best Paper Award',
    status: 'Springer Published',
    icon: <Award className="text-accent" size={20} />,
    description: 'Authored research paper recognized for its contribution to technical innovation.',
    year: '2023'
  },
  {
    title: 'Google Certifications',
    status: 'Verified',
    icon: <CheckCircle2 className="text-electric" size={20} />,
    description: 'Earned professional level certifications confirming standard compliance.',
    year: '2022'
  },
  {
    title: 'Hackathon Wins',
    status: 'Multiple',
    icon: <Medal className="text-yellow-400" size={20} />,
    description: 'Consistently delivered working MVP prototypes under extreme time constraints.',
    year: '2022-24'
  }
];

export default function Achievements() {
  return (
    <Section id="achievements">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider flex items-center gap-3">
          <Award className="text-yellow-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">Achievements Module</span>
        </h2>
        <p className="text-gray-400 font-mono mt-4 max-w-2xl">
          Verified milestones. Proof of capability via external validation and competition.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-6 space-y-8">
        {achievements.map((item, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[35px] top-1 p-2 bg-space border border-white/20 rounded-full group-hover:border-white transition-colors">
               {item.icon}
            </div>
            
            <div className="glass-card p-6 border-white/5 hover:bg-white/5 transition-colors group-hover:glow-border">
               <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">{item.title}</h3>
                  <span className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full mt-2 md:mt-0 w-max border border-white/5">
                     {item.year}
                  </span>
               </div>
               
               <div className="text-sm font-mono text-electric mb-3 uppercase font-bold">
                  [{item.status}]
               </div>
               
               <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
               </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
