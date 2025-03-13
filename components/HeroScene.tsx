import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import * as THREE from 'three';

const ShirtModel = () => {
  const { scene } = useGLTF("/shirt_baked.glb"); // Загружаем модель
  const modelRef = useRef<THREE.Object3D>(null); // Ссылка на модель

  // Анимация появления майки
  useEffect(() => {
    if (modelRef.current) {
      // Начальное состояние: модель полностью сжата и невидима
      modelRef.current.scale.set(0, 0, 0);
      modelRef.current.visible = false;

      // Анимация появления
      gsap.to(modelRef.current.scale, {
        x: 2,
        y: 2,
        z: 2,
        duration: 1.5,
        ease: "power3.out",
        onStart: () => {
          if (modelRef.current) {
            modelRef.current.visible = true; // Делаем модель видимой при старте анимации
          }
        },
      });
    }
  }, []);

  return <primitive ref={modelRef} object={scene} position={[0, 0.5, 0]}/>;
};

const HeroScene = () => {
  return (
    <div className="relative 2xl:w-[33%] w-full">
      {/* Three.js Canvas */}
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }} className="absolute inset-0 z-10">
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <ShirtModel />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Платформа с анимацией и свечением */}
    </div>
  );
};

export default HeroScene;