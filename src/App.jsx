import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Product from './sections/Product';
import Growth from './sections/Growth';
import ContentSection from './sections/Content';
import Infra from './sections/Infra';
import Achievements from './sections/Achievements';
import Future from './sections/Future';
import Tools from './sections/Tools';
import Contact from './sections/Contact';
import CanvasBackground from './3d/CanvasBackground';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CanvasBackground />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Product />
        <Growth />
        <ContentSection />
        <Infra />
        <Achievements />
        <Future />
        <Tools />
        <Contact />
      </div>
    </div>
  );
}

export default App;
