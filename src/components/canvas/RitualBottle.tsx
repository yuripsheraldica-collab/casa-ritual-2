"use client";

import { useMemo } from "react";
import * as THREE from "three";

export function RitualBottle() {
  const bodyMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#f0ebe3"),
        metalness: 0.4,
        roughness: 0.1,
        transmission: 0.88,
        thickness: 0.7,
        ior: 1.48,
        attenuationColor: new THREE.Color("#d4c4a8"),
        attenuationDistance: 1.2,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        side: THREE.DoubleSide,
      }),
    [],
  );

  const capMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#b8956a"),
        metalness: 0.92,
        roughness: 0.18,
      }),
    [],
  );

  const labelMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#f7f4ef"),
        metalness: 0,
        roughness: 0.95,
      }),
    [],
  );

  return (
    <group>
      <mesh castShadow receiveShadow position={[0, 0.55, 0]} material={bodyMat}>
        <cylinderGeometry args={[0.42, 0.48, 1.35, 64, 1, true]} />
      </mesh>
      <mesh castShadow position={[0, 1.22, 0]} material={capMat}>
        <cylinderGeometry args={[0.22, 0.24, 0.22, 48]} />
      </mesh>
      <mesh castShadow position={[0, 1.05, 0]} material={capMat}>
        <cylinderGeometry args={[0.18, 0.2, 0.35, 48]} />
      </mesh>
      <mesh position={[0, 0.55, 0.47]} material={labelMat}>
        <planeGeometry args={[0.5, 0.75]} />
      </mesh>
    </group>
  );
}
