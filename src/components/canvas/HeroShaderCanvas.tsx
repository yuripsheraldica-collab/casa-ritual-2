"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo } from "react";

const vertexShader = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = /* glsl */ `
uniform float uTime;
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
  vec2 uv = vUv;
  float t = uTime * 0.18;
  float n = noise(uv * 4.5 + t);
  float n2 = noise(uv * 11.0 - t * 0.8);
  float film = smoothstep(0.15, 0.85, sin((uv.x * 2.8 + uv.y * 2.1) * 6.2831 + t));

  vec3 mineral = vec3(0.12, 0.11, 0.1);
  vec3 warm = vec3(0.45, 0.38, 0.3);
  vec3 gold = vec3(0.72, 0.58, 0.42);
  vec3 col = mix(mineral, warm, n * 0.65);
  col = mix(col, gold, n2 * 0.35);
  col += vec3(0.04, 0.03, 0.02) * film;

  gl_FragColor = vec4(col, 1.0);
}
`;

function HeroPlane() {
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  );

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh scale={[2.8, 1.6, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export function HeroShaderCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 1.35], fov: 38, near: 0.1, far: 10 }}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={["#1a1814"]} />
        <HeroPlane />
      </Canvas>
    </div>
  );
}
