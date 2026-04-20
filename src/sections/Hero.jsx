import React from 'react';
import Section from '../components/Section';
import { Terminal, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';

// Unique 3D Core floating behind your image
function QuantumCore() {
  const coreRef = React.useRef();
  const ringRef1 = React.useRef();
  const ringRef2 = React.useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    coreRef.current.rotation.x = time * 0.2;
    coreRef.current.rotation.y = time * 0.3;
    
    // Mouse reactive rings
    ringRef1.current.rotation.z -= 0.01;
    ringRef1.current.rotation.x = Math.sin(time) * 0.3 + (state.pointer.y * 0.5);
    ringRef1.current.rotation.y = state.pointer.x * 0.5;

    ringRef2.current.rotation.z += 0.015;
    ringRef2.current.rotation.x = Math.cos(time) * 0.2 + (state.pointer.y * 0.5);
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial color="#7B61FF" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh ref={ringRef1}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.6} />
      </mesh>
      <mesh ref={ringRef2}>
        <torusGeometry args={[3.2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#00FFA3" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function Hero() {
  return (
    <Section id="hero" className="justify-center items-start overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12 relative z-10 mt-10">
        
        {/* Left Side: System Output Copy */}
        <div className="w-full lg:w-7/12 relative">
          <div className="glass-card p-1 max-w-max inline-block mb-6 rounded-full border-electric/30 border shadow-[0_0_15px_rgba(0,212,255,0.1)]">
            <div className="px-4 py-2 bg-space/80 backdrop-blur-xl rounded-full text-xs font-mono text-electric flex items-center gap-2 uppercase tracking-wider">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#00FFA3]" />
              System Status: Online & Ready
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 leading-tight text-white relative">
            I don't just build products. <br />
            <span className="text-glow-neon text-transparent bg-clip-text bg-gradient-to-r from-neon via-electric to-white relative z-10">
              I run them.
            </span>
            <span className="absolute -inset-2 bg-electric/10 blur-3xl rounded-full -z-10" />
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-mono mb-8 opacity-90 border-l-2 border-electric pl-4">
            React • Growth • Ads • Infra • Content
          </p>

          {/* System Info UI */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10 w-full max-w-2xl">
            <div className="glass-card p-4 flex flex-col gap-1 border-white/5 hover:border-electric/30 transition-colors">
              <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Location Status</span>
              <span className="text-sm font-mono text-white">Pune <span className="text-electric">→</span> Bangalore</span>
            </div>
            <div className="glass-card p-4 flex flex-col gap-1 border-white/5 hover:border-neon/30 transition-colors">
               <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Role Protocol</span>
               <span className="text-sm font-mono text-accent">Product/Growth Eng.</span>
            </div>
            <div className="glass-card p-4 flex flex-col gap-1 border-white/5 hidden lg:flex hover:border-white/30 transition-colors">
               <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">System Auth</span>
               <span className="text-sm font-mono text-neon">root@biswajeet-os</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-electric/10 text-electric border border-electric glow-border rounded-lg font-mono font-medium tracking-widest uppercase text-sm hover:bg-electric/20 transition-all font-bold flex items-center gap-2"
            >
              <Terminal size={18} />
              Hook In
            </motion.button>
            <motion.a
              href="#product"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-lg font-mono font-medium tracking-widest uppercase text-sm hover:bg-white/10 transition-all flex items-center gap-2 group"
            >
              <Code size={18} className="group-hover:text-neon transition-colors" />
              Analyze Code
            </motion.a>
          </div>
        </div>

        {/* Right Side: Identity Core / Hologram Photo */}
        <div className="w-full lg:w-5/12 flex items-center justify-center relative min-h-[400px]">
           
           {/* Dedicated 3D Canvas specifically rendering behind and around the image */}
           <div className="absolute inset-0 z-0">
             <Canvas camera={{ position: [0, 0, 5] }} gl={{ alpha: true }}>
               <ambientLight intensity={0.5} />
               <QuantumCore />
             </Canvas>
           </div>

           {/* The Image HUD element */}
           <div className="relative z-10 w-72 h-72 md:w-80 md:h-80 group mt-10 lg:mt-0">
              
              {/* Spinning Tech HUD Frames */}
              <div className="absolute -inset-4 border-2 border-dashed border-electric/30 rounded-full animate-[spin_20s_linear_infinite] group-hover:border-electric/80 transition-colors shadow-[0_0_20px_rgba(0,212,255,0.2)]" />
              <div className="absolute -inset-8 border border-neon/20 rounded-full animate-[spin_30s_linear_infinite_reverse] group-hover:border-neon/60 transition-colors opacity-70" />
              <div className="absolute -inset-12 border-4 border-dotted border-accent/10 rounded-full animate-[spin_40s_linear_infinite] opacity-30" />
              
              {/* Corner Targeting elements */}
              <div className="absolute -top-4 -left-4 w-6 h-6 border-t-2 border-l-2 border-electric" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-2 border-r-2 border-neon" />

              {/* The Central Mask & Image */}
              <div className="w-full h-full bg-space border border-white/10 p-2 rounded-full overflow-hidden relative shadow-2xl">
                 
                 {/* CSS Scanning Laser down the image */}
                 <div className="absolute inset-0 overflow-hidden rounded-full z-20 pointer-events-none">
                     <div className="w-full h-[2px] bg-electric/80 shadow-[0_0_15px_#00D4FF] absolute animate-[scan_3s_linear_infinite]" />
                 </div>
                 
                 <img 
                    src="/profile.jpg" 
                    alt="Biswajeet System Administrator" 
                    className="w-full h-full object-cover rounded-full grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                       // Temporary fallback incase the image isn't placed yet.
                       e.target.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"; 
                    }}
                 />
                 
                 {/* Soft blend overlay for tech look */}
                 <div className="absolute inset-0 bg-blue-900/20 mix-blend-color-burn group-hover:bg-transparent transition-colors z-10" />
              </div>
              
              {/* Status Readout Badge overlay */}
              <div className="absolute bottom-4 right-0 transform translate-x-1/4 bg-space/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded shadow-lg">
                 <span className="text-[10px] font-mono text-accent block uppercase tracking-widest">ID: B-0SV1</span>
              </div>
           </div>

        </div>
      </div>
    </Section>
  );
}
