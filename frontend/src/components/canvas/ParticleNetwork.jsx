import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useMousePosition } from '../../hooks/useMousePosition';

export const ParticleNetwork = (props) => {
  const ref = useRef();
  
  // Calculate window center for mouse offset
  const { x, y } = useMousePosition();
  const windowHalfX = typeof window !== 'undefined' ? window.innerWidth / 2 : 500;
  const windowHalfY = typeof window !== 'undefined' ? window.innerHeight / 2 : 500;
  
  // Generate a sphere shell of particles
  const sphere = useMemo(() => {
    // Generate exactly 2000 particles in a highly concentrated sphere
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const r = 1.2 * Math.cbrt(Math.random()); // sphere radius 1.2
        positions[i*3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i*3+2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    // Gentle floating rotation
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Slight mouse reactivity
    const mouseX = (x - windowHalfX) / windowHalfX;
    const mouseY = (y - windowHalfY) / windowHalfY;
    
    ref.current.position.x += (mouseX * 0.2 - ref.current.position.x) * 0.05;
    ref.current.position.y += (-mouseY * 0.2 - ref.current.position.y) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2} // Additive blending for neon glow effect
        />
      </Points>
    </group>
  );
};
