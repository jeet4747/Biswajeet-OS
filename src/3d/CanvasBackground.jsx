import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Text, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

// 1. The Dynamic Glass Cursor Entity
function MouseGlassOrb() {
   const ref = useRef();
   const { viewport } = useThree();
   
   useFrame((state) => {
      // Perfect physical mapping of the orb to exactly where the mouse pointer is in the 3D space
      const targetX = (state.pointer.x * viewport.width) / 2;
      const targetY = (state.pointer.y * viewport.height) / 2;
      
      // Smoothly lerp towards the mouse like a physics object
      ref.current.position.lerp(new THREE.Vector3(targetX, targetY, 3), 0.08);
      
      // The orb's internal rotation
      ref.current.rotation.x = state.clock.elapsedTime * 0.15;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
   });

   return (
      <group ref={ref}>
         
         {/* The Ultimate Liquid Crystalline Object */}
         <mesh>
            <icosahedronGeometry args={[1.5, 4]} />
            <MeshTransmissionMaterial 
               backside={true}
               samples={4}
               resolution={1024}
               thickness={1.5}
               chromaticAberration={0.8}
               anisotropy={0.3}
               distortion={0.5}
               distortionScale={0.4}
               temporalDistortion={0.1}
               iridescence={1}
               iridescenceIOR={1.5}
               iridescenceThicknessRange={[0, 1400]}
               color="#00D4FF"
               clearcoat={1}
            />
         </mesh>

         {/* Advanced Gyroscopic Rings trailing the orb */}
         <mesh rotation-x={Math.PI / 2}>
             <torusGeometry args={[2.2, 0.01, 16, 100]} />
             <meshBasicMaterial color="#00FFA3" transparent opacity={0.6} />
         </mesh>
         <mesh rotation-y={Math.PI / 2}>
             <torusGeometry args={[2.2, 0.01, 16, 100]} />
             <meshBasicMaterial color="#7B61FF" transparent opacity={0.6} />
         </mesh>
         <mesh rotation-z={Math.PI / 2}>
             <torusGeometry args={[2.5, 0.01, 16, 100]} />
             <meshBasicMaterial color="#00D4FF" transparent opacity={0.3} border wireframe />
         </mesh>
         
         {/* Inner glowing singularity of the orb */}
         <mesh>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshBasicMaterial color="#ffffff" />
            <pointLight intensity={2} color="#00D4FF" distance={10} />
         </mesh>
      </group>
   );
}

// 2. The Interactive Environment (This gets distorted by the mouse orb!)
function AmbientEnvironment() {
   const tor = useRef();
   
   useFrame((state) => {
      tor.current.rotation.x = state.clock.elapsedTime * 0.2;
      tor.current.rotation.y = state.clock.elapsedTime * 0.1;
   });

   return (
      <group position={[0, 0, -10]}>
         
         {/* Massive twisted data knot that looks insane when refracted */}
         <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={tor} position={[-6, 3, 0]}>
               <torusKnotGeometry args={[3, 0.8, 128, 32]} />
               <meshStandardMaterial 
                  color="#7B61FF" 
                  roughness={0.1}
                  metalness={0.9}
                  emissive="#7B61FF" 
                  emissiveIntensity={0.3}
               />
            </mesh>
         </Float>

         {/* Floating structural asset */}
         <Float speed={2} rotationIntensity={2} floatIntensity={2}>
             <mesh position={[8, -5, -4]}>
               <octahedronGeometry args={[4, 0]} />
               <meshStandardMaterial 
                  color="#00FFA3" 
                  roughness={0.2}
                  metalness={0.8}
                  emissive="#00FFA3"
                  emissiveIntensity={0.2} 
                  wireframe
               />
            </mesh>
         </Float>

         {/* Absolute huge background system typography */}
         <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
            <Text 
               position={[-2, 0, -15]} 
               fontSize={6} 
               color="#ffffff" 
               fillOpacity={0.05}
               letterSpacing={0.2}
               fontWeight='bold'
            >
               OPERATOR // OS
            </Text>
         </Float>
         <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
            <Text 
               position={[2, -6, -10]} 
               fontSize={4} 
               color="#00D4FF" 
               fillOpacity={0.03}
               letterSpacing={0.4}
               fontWeight='black'
            >
               SYNDICATE NETWORK
            </Text>
         </Float>

         {/* A sea of slow floating particles mapping the data grid */}
         <Sparkles count={800} scale={30} size={1.5} speed={0.4} opacity={0.4} color="#00D4FF" />
         <Sparkles count={400} scale={20} size={2} speed={0.2} opacity={0.2} color="#7B61FF" />
      </group>
   );
}

export default function CanvasBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true, antialias: true }}>
      {/* Global Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} color="#00D4FF" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#7B61FF" />
      
      {/* Reflection environment for the glass to look realistic */}
      <Environment preset="city" /> 

      {/* The background objects */}
      <AmbientEnvironment />
      
      {/* The Mouse Object */}
      <MouseGlassOrb />
    </Canvas>
  );
}
