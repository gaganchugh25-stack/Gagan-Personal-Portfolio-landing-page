'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import { Mesh, PMREMGenerator, TorusGeometry } from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

function Form({ paused, onReady }: { paused: boolean; onReady: () => void }) {
  const mesh = useRef<Mesh>(null);
  const geometry = useMemo(() => {
    const form = new TorusGeometry(1.14, 0.39, 48, 192);
    const vertices = form.attributes.position;
    for (let i = 0; i < vertices.count; i++) {
      const x = vertices.getX(i), y = vertices.getY(i), z = vertices.getZ(i);
      const angle = Math.atan2(y, x);
      const wave = 1 + 0.13 * Math.sin(angle * 3 + 0.4);
      vertices.setXYZ(i, x * wave, y * (1 + 0.1 * Math.cos(angle * 2)), z * (1 + 0.24 * Math.sin(angle * 3)) + 0.19 * Math.sin(angle * 2));
    }
    form.computeVertexNormals();
    return form;
  }, []);
  useEffect(() => () => geometry.dispose(), [geometry]);
  const { gl, scene, invalidate } = useThree();
  useEffect(() => {
    const generator = new PMREMGenerator(gl);
    const room = new RoomEnvironment();
    const environment = generator.fromScene(room, 0.04);
    scene.environment = environment.texture;
    invalidate();
    const timer = setTimeout(onReady, 200);
    return () => { clearTimeout(timer); scene.environment = null; environment.dispose(); generator.dispose(); room.dispose(); };
  }, [gl, scene, invalidate, onReady]);
  useFrame((state, delta) => {
    if (!mesh.current || paused) return;
    mesh.current.rotation.y += Math.min(delta, 0.05) * 0.32;
    mesh.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.06 - 0.2;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.65) * 0.07;
  });
  return <mesh ref={mesh} geometry={geometry} rotation={[0.35, 0.4, -0.2]} scale={1.05}><meshPhysicalMaterial color="#e2e9f0" metalness={1} roughness={0.08} clearcoat={1} clearcoatRoughness={0.08} envMapIntensity={1.6} /></mesh>;
}
export default function Sculpture({ paused, onReady }: { paused: boolean; onReady: () => void }) {
  return <Canvas resize={{ offsetSize: true }} camera={{ position: [0, 0, 6.2], fov: 43 }} dpr={[1, 1.5]} frameloop={paused ? 'demand' : 'always'} gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}><ambientLight intensity={0.5} /><Form paused={paused} onReady={onReady} /></Canvas>;
}
