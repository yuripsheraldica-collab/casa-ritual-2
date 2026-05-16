"use client";

import { Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useScrollRefs } from "@/components/scroll/ScrollProvider";
import { RitualBottle } from "./RitualBottle";

function scrollProgress(scroll: number, limit: number) {
  if (limit <= 0) return 0;
  return THREE.MathUtils.clamp(scroll / limit, 0, 1);
}

export function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const { scrollRef, limitRef } = useScrollRefs();

  const fogColor = useMemo(() => new THREE.Color("#f7f4ef"), []);

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime();
    const p = scrollProgress(scrollRef.current, limitRef.current);

    const orbit = t * 0.18;
    const radius = 4.2 - p * 0.4;
    const height = 0.2 + Math.sin(t * 0.12) * 0.05 + p * 0.12;
    camera.position.x = Math.sin(orbit) * radius;
    camera.position.z = Math.cos(orbit) * radius;
    camera.position.y = height;
    camera.lookAt(0, 0.2 + p * 0.04, 0);

    if (groupRef.current) {
      const hero = THREE.MathUtils.lerp(1, 0, Math.min(p / 0.1, 1));
      const macro = THREE.MathUtils.smoothstep(p, 0.38, 0.55);
      const close = THREE.MathUtils.smoothstep(p, 0.68, 0.88);

      const baseY = -0.5 * hero;
      groupRef.current.position.y = baseY + macro * 0.3;
      groupRef.current.position.z = close * 0.85;
      const s = THREE.MathUtils.lerp(1, 1.5, close);
      groupRef.current.scale.setScalar(s);
      groupRef.current.rotation.y = t * 0.06 + p * 0.5;
    }
  });

  return (
    <>
      <fog attach="fog" args={[fogColor, 6, 20]} />

      <ambientLight intensity={0.65} color="#f7f4ef" />
      <hemisphereLight args={["#ffffff", "#e8e4dc", 0.9]} />
      <directionalLight position={[4, 6, 3]} intensity={1.4} color="#fff8ee" castShadow />
      <spotLight
        position={[-3, 4, 2]}
        angle={0.5}
        penumbra={1}
        intensity={0.6}
        color="#b8956a"
      />

      <group ref={groupRef}>
        <RitualBottle />
      </group>

      <Sparkles count={180} scale={7} size={1.2} speed={0.15} opacity={0.22} color="#b8956a" />
    </>
  );
}
