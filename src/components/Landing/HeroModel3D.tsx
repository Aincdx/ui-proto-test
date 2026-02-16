"use client";

import { Suspense, useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

/* ── Tab-visibility hook ─────────────────────────────────────
 * Pauses the animation loop when the browser tab is hidden
 * to save GPU cycles and battery.
 */
function useTabVisible() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handler = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, []);
  return visible;
}

/* ── 3-D model sub-component (runs inside R3F Canvas) ────── */
function ElectronicModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null!);
  const tabVisible = useTabVisible();
  const mouseRef = useRef({ x: 0, y: 0 });

  /* Compute centering offset + uniform scale once */
  const { center, scaleFactor } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const c = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    // 2.8 world-units ≈ 80 % of the camera frustum at fov 38, dist 5
    return { center: c, scaleFactor: 2.8 / maxDim };
  }, [scene]);

  /* Passive mouse-move listener for parallax */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* Per-frame animation: rotation + float + parallax */
  useFrame((state, delta) => {
    if (!groupRef.current || !tabVisible) return;
    const t = state.clock.getElapsedTime();

    // Smooth Y-axis rotation (~0.3 rad/s)
    groupRef.current.rotation.y += delta * 0.3;

    // Floating sine wave (±0.05 world-units)
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.05;

    // Mouse-driven parallax (very subtle)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouseRef.current.y * 0.06,
      0.03,
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      -mouseRef.current.x * 0.03,
      0.03,
    );
  });

  return (
    <group ref={groupRef}>
      {/* Inner group: centres + scales the raw GLTF scene */}
      <group
        position={[
          -center.x * scaleFactor,
          -center.y * scaleFactor,
          -center.z * scaleFactor,
        ]}
        scale={scaleFactor}
      >
        <primitive object={scene} />
      </group>
    </group>
  );
}

/* ── Public wrapper — lazy-loaded by Hero via next/dynamic ── */
export default function HeroModel3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 5], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ width: "100%", height: "100%" }}
      /* R3F v9: frameloop "demand" would save GPU but we need continuous
         rotation, so keep default "always". Tab-visibility hook handles pause. */
    >
      {/* Lighting rig — physically plausible, no glow */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.0}
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
      />
      {/* Rim / fill light (cool tint) */}
      <directionalLight
        position={[-4, 3, -3]}
        intensity={0.4}
        color="#88ccff"
      />

      <Suspense fallback={null}>
        <ElectronicModel url="/hero-model.glb" />
        {/* Soft contact shadow on "floor" plane */}
        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.22}
          scale={8}
          blur={2.5}
          far={4}
          resolution={256}
        />
      </Suspense>
    </Canvas>
  );
}

/* Pre-warm the network fetch while the component tree mounts */
useGLTF.preload("/hero-model.glb");
