import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// ─────────────────────────────────────────────
// 1. Infinite Neural Grid Floor
// ─────────────────────────────────────────────
function NeuralGrid() {
  const ref = useRef();
  useFrame((state) => {
    // Slowly drift the grid forward so it feels alive
    ref.current.position.z = (state.clock.elapsedTime * 1.2) % 4;
  });

  const gridHelper = useMemo(() => {
    const g = new THREE.GridHelper(80, 40, '#7B61FF', '#7B61FF');
    g.material.transparent = true;
    g.material.opacity = 0.12;
    return g;
  }, []);

  return <primitive ref={ref} object={gridHelper} position={[0, -8, -10]} rotation={[0, 0, 0]} />;
}

// ─────────────────────────────────────────────
// 2. Neural Network Nodes  
// ─────────────────────────────────────────────
function NeuralNodes() {
  const groupRef = useRef();
  const count = 30;

  const nodes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 25,
        -5 - Math.random() * 20,
      ],
      speed: 0.2 + Math.random() * 0.3,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      child.position.y += Math.sin(t * nodes[i].speed + nodes[i].offset) * 0.005;
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial color={i % 3 === 0 ? '#00D4FF' : i % 3 === 1 ? '#7B61FF' : '#00FFA3'} />
        </mesh>
      ))}
    </group>
  );
}

// ─────────────────────────────────────────────
// 3. Mouse Aurora – a soft, coloured light blob that elegantly follows the cursor
// ─────────────────────────────────────────────
function MouseAurora() {
  const ref = useRef();
  const { viewport } = useThree();

  useFrame((state) => {
    const tx = (state.pointer.x * viewport.width) / 2;
    const ty = (state.pointer.y * viewport.height) / 2;
    ref.current.position.lerp(new THREE.Vector3(tx, ty, 0), 0.04);
    // Gentle pulse
    const s = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.07;
    ref.current.scale.setScalar(s);
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[3.5, 32, 32]} />
      <meshBasicMaterial
        color="#7B61FF"
        transparent
        opacity={0.06}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
      {/* inner brighter core */}
      <pointLight intensity={0.8} color="#00D4FF" distance={18} decay={2} />
    </mesh>
  );
}

// ─────────────────────────────────────────────
// 4. Slow-rotating distant rings (cosmetic depth)
// ─────────────────────────────────────────────
function AmbientRings() {
  const r1 = useRef();
  const r2 = useRef();

  useFrame((state) => {
    r1.current.rotation.z = state.clock.elapsedTime * 0.05;
    r1.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.3;
    r2.current.rotation.z = -state.clock.elapsedTime * 0.03;
    r2.current.rotation.y = state.clock.elapsedTime * 0.04;
  });

  return (
    <>
      <mesh ref={r1} position={[8, 4, -20]}>
        <torusGeometry args={[7, 0.015, 16, 200]} />
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.15} />
      </mesh>
      <mesh ref={r2} position={[-10, -6, -25]}>
        <torusGeometry args={[10, 0.01, 16, 200]} />
        <meshBasicMaterial color="#7B61FF" transparent opacity={0.1} />
      </mesh>
    </>
  );
}

// ─────────────────────────────────────────────
// 5. Distant star-field particles
// ─────────────────────────────────────────────
function StarField() {
  const count = 1200;
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 120;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 2] = -10 - Math.random() * 40;
    }
    return arr;
  }, []);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#ffffff" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

// ─────────────────────────────────────────────
// Root Canvas
// ─────────────────────────────────────────────
export default function CanvasBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 60 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.2} />

      {/* Stars */}
      <StarField />

      {/* Beautiful sparkle dust */}
      <Sparkles count={300} scale={30} size={0.8} speed={0.15} opacity={0.25} color="#00D4FF" position={[0, 0, -8]} />
      <Sparkles count={150} scale={20} size={1.2} speed={0.1}  opacity={0.15} color="#7B61FF" position={[0, 0, -5]} />

      {/* Grid floor */}
      <NeuralGrid />

      {/* Floating network nodes */}
      <NeuralNodes />

      {/* Elegant distant rings */}
      <AmbientRings />

      {/* The smooth mouse aurora */}
      <MouseAurora />
    </Canvas>
  );
}
