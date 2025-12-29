import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const GlobeContent = () => {
  const globeRef = useRef<any>(null);
  
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial 
        color="#1e293b" 
        wireframe 
        transparent 
        opacity={0.3} 
      />
    </mesh>
  );
};

export const Globe3D = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`h-[400px] w-full ${className}`}>
      <Suspense fallback={<div className="h-full w-full bg-[#0f172a]" />}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <GlobeContent />
        </Canvas>
      </Suspense>
    </div>
  );
};
