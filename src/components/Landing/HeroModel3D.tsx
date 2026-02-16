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

/* ── Fix dark materials ──────────────────────────────────────
 * Some GLB materials come with zero roughness / metalness that
 * eat light under ACES tone-mapping. This traversal ensures all
 * meshes receive light properly and no face is pitch-black.
 */
function patchMaterials(scene: THREE.Object3D) {
  scene.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;

    const mat = child.material;
    if (!mat || !(mat instanceof THREE.MeshStandardMaterial)) return;

    // Ensure minimum roughness so light wraps around surfaces
    if (mat.roughness < 0.25) mat.roughness = 0.35;

    // Prevent fully-black diffuse colour (which swallows all light)
    const lum =
      mat.color.r * 0.299 + mat.color.g * 0.587 + mat.color.b * 0.114;
    if (lum < 0.06) {
      mat.color.setRGB(0.08, 0.08, 0.1);
    }

    // Enable double-side rendering for thin geometry (legs, pins)
    mat.side = THREE.DoubleSide;
    mat.needsUpdate = true;
  });
}

/* ── 3-D model sub-component (runs inside R3F Canvas) ────── */
function ElectronicModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null!);
  const tabVisible = useTabVisible();
  const mouseRef = useRef({ x: 0, y: 0 });

  /* Compute centering offset + uniform scale once, and patch materials */
  const { center, scaleFactor } = useMemo(() => {
    patchMaterials(scene);

    const box = new THREE.Box3().setFromObject(scene);
    const c = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
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

    groupRef.current.rotation.y += delta * 0.3;
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.05;

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

/* ── Studio lighting rig ─────────────────────────────────────
 * 5-point light setup inspired by product photography.
 * No external HDR downloads — all local lights.
 */
function StudioLights() {
  return (
    <>
      <ambientLight intensity={0.8} color="#f0f4ff" />

      {/* Key light — warm-white, right-front-above */}
      <directionalLight position={[5, 6, 4]} intensity={1.6} color="#fff8f0" />

      {/* Fill light — cooler, from the left */}
      <directionalLight position={[-5, 4, 3]} intensity={0.9} color="#e0ecff" />

      {/* Rim / back light — cool blue for edge definition */}
      <directionalLight position={[-3, 3, -5]} intensity={0.7} color="#88ccff" />

      {/* Under-fill — illuminates undersides */}
      <directionalLight position={[0, -3, 2]} intensity={0.4} color="#dde8ff" />

      {/* Top soft-box */}
      <directionalLight position={[0, 8, 0]} intensity={0.5} color="#ffffff" />

      {/* Front point light — gentle fill for component faces */}
      <pointLight
        position={[0, 1, 5]}
        intensity={0.6}
        distance={12}
        decay={2}
        color="#f5f9ff"
      />
    </>
  );
}

/* ── Public wrapper — lazy-loaded by Hero via next/dynamic ── */
export default function HeroModel3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.6, 5], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <StudioLights />

      <Suspense fallback={null}>
        <ElectronicModel url="/hero-model.glb" />
        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0}
          scale={16}
          blur={3.5}
          far={6}
          resolution={512}
          color="#91ff00"
        />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/hero-model.glb");
