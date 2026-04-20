import React from 'react';
import CanvasBackground from './3d/CanvasBackground';
import ZoomPageContainer from './components/ZoomPageContainer';
import MoonCursor from './components/MoonCursor';

function App() {
  return (
    <div className="relative">
      {/* Custom crescent moon cursor */}
      <MoonCursor />

      {/* 3D Background — always fixed behind everything */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CanvasBackground />
      </div>

      {/* Vignette overlay so text is always readable */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 50%, transparent 50%, rgba(11,15,25,0.6) 100%)',
        }}
      />

      {/* Full page zoom container — no scroll, zoom transitions */}
      <div className="relative z-10">
        <ZoomPageContainer />
      </div>
    </div>
  );
}

export default App;
