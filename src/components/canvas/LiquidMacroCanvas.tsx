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
  float t = uTime * 0.22;
  float n = noise(uv * 5.0 + t);
  float n2 = noise(uv * 12.0 - t);
  float film = smoothstep(0.2, 0.9, sin((uv.x + uv.y) * 8.0 + t * 1.2) * 0.5 + 0.5);

  vec3 cream = vec3(0.97, 0.96, 0.94);
  vec3 gold = vec3(0.72, 0.58, 0.42);
  vec3 amber = vec3(0.85, 0.72, 0.55);
  vec3 col = mix(cream, amber, n);
  col = mix(col, gold, n2 * 0.45);
  col += vec3(0.06, 0.04, 0.02) * film;

  float spec = pow(max(0.0, sin((uv.y + t) * 18.0)), 8.0) * 0.25;
  col += vec3(spec);

  gl_FragColor = vec4(col, 1.0);
}
`;

function LiquidPlane() {
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
    <mesh scale={[2.35, 1.32, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export function LiquidMacroCanvas() {
  return (
    <div className="relative h-[min(52vh,520px)] w-full overflow-hidden border-hairline bg-[var(--sand)]">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 1.35], fov: 38, near: 0.1, far: 10 }}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={["#f7f4ef"]} />
        <LiquidPlane />
      </Canvas>
    </div>
  );
}
