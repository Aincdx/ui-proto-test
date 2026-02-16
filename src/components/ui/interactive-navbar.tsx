"use client";

import { ReactNode, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshReflectorMaterial, RoundedBox, Html } from "@react-three/drei";
import { Group, Mesh, Vector3, Color } from "three";
import * as THREE from "three";

/* ─── Utility ──────────────────────────────────────────────── */
const cn = (...classes: (string | boolean | undefined | null)[]) =>
  classes.filter(Boolean).join(" ");

/* ─── Types ────────────────────────────────────────────────── */
interface Card3DProps {
  children?: ReactNode;
  className?: string;
  maxRotation?: number;
  scale?: number;
  position?: [number, number, number];
  color?: string;
  opacity?: number;
  reflective?: boolean;
  title?: string;
  content?: ReactNode;
  rotationSmoothness?: number;
  hoverScale?: number;
  hoverLift?: number;
  hoverColor?: string;
  hoverLightIntensity?: number;
  dynamicLight?: boolean;
}

type NavItem = {
  title: string;
  href: string;
};

/* ─── PROTOBOARD Navigation Items ──────────────────────────── */
const navItems: NavItem[] = [
  { title: "HOME", href: "/" },
  { title: "ABOUT", href: "/#about" },
  { title: "HOW IT WORKS", href: "/#how-it-works" },
  { title: "CONTACT", href: "/#contact" },
];

/* ─── Feature items for the EXPLORE mega-dropdown ──────────── */
const featureItems = [
  {
    id: "FT_001",
    title: "AI Circuit Generation",
    description: "Describe your project idea and let AI generate the circuit.",
  },
  {
    id: "FT_002",
    title: "Interactive Sandbox",
    description: "Drag, drop & wire circuits in a visual editor.",
  },
  {
    id: "FT_003",
    title: "SPICE Simulation",
    description: "Run SPICE simulations directly in the browser.",
  },
  {
    id: "FT_004",
    title: "Guided Assembly",
    description: "Step-by-step physical assembly instructions.",
  },
  {
    id: "FT_005",
    title: "Component Library",
    description: "Browse thousands of electronic components.",
  },
  {
    id: "FT_006",
    title: "Export & Share",
    description: "Export schematics and share with your team.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   3D CARD SYSTEM (from 21st.dev — erikx/3d-interactive-navbar)
   ═══════════════════════════════════════════════════════════════ */

const CardContent = ({
  content,
  cardRotation,
  mousePosition,
}: {
  title?: string;
  content?: ReactNode;
  cardRotation?: THREE.Euler;
  mousePosition?: THREE.Vector2;
  viewport?: { width: number; height: number };
}) => {
  const contentRef = useRef<THREE.Group>(null);
  const parallaxAmount = 0.1;

  useFrame(() => {
    if (contentRef.current && cardRotation && mousePosition) {
      const parallaxX = -cardRotation.y * parallaxAmount * 10;
      const parallaxY = cardRotation.x * parallaxAmount * 10;
      contentRef.current.position.x = parallaxX;
      contentRef.current.position.y = parallaxY;
    }
  });

  return (
    <group ref={contentRef} position={[0, 0, 0.7]}>
      <Html transform pointerEvents="none">
        <div>{content}</div>
      </Html>
    </group>
  );
};

const Scene = ({
  children,
  maxRotation = 0.05,
  scale = 1.2,
  position = [0, 0, 0],
  color = "#111",
  opacity = 0.9,
  reflective = true,
  title,
  content,
  rotationSmoothness = 0.1,
  hoverScale = 1.03,
  hoverLift = 0.3,
  hoverColor = "#333",
  hoverLightIntensity = 5,
  dynamicLight = true,
}: Omit<Card3DProps, "className">) => {
  const group = useRef<Group>(null);
  const cardMesh = useRef<Mesh>(null);
  const dynamicLightRef = useRef<THREE.PointLight>(null);

  const [hover, setHover] = useState(false);
  const { mouse, viewport } = useThree();

  const targetRotation = useRef(new Vector3(0, 0, 0));
  const targetScale = useRef(scale);
  const targetZ = useRef(position[2]);
  const targetColor = useRef(new Color(color));
  const baseColor = useRef(new Color(color));
  const hoverColorTarget = useRef(new Color(hoverColor));

  useEffect(() => {
    baseColor.current.set(color);
    hoverColorTarget.current.set(hoverColor);
    targetScale.current = scale;
    targetZ.current = position[2];
    targetColor.current.set(color);
  }, [scale, position, color, hoverColor]);

  useEffect(() => {
    if (hover) {
      targetScale.current = scale * hoverScale;
      targetZ.current = position[2] + hoverLift;
      targetColor.current.set(hoverColor);
    } else {
      targetScale.current = scale;
      targetZ.current = position[2];
      targetColor.current.set(color);
    }
  }, [hover, scale, position, hoverScale, hoverLift, color, hoverColor]);

  useFrame(() => {
    if (!group.current || !cardMesh.current) return;

    const rotationTargetX = mouse.y * -maxRotation;
    const rotationTargetY = mouse.x * maxRotation;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      hover ? rotationTargetX : 0,
      rotationSmoothness
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      hover ? rotationTargetY : 0,
      rotationSmoothness
    );

    group.current.scale.x =
      group.current.scale.y =
      group.current.scale.z =
        THREE.MathUtils.lerp(
          group.current.scale.x,
          targetScale.current,
          rotationSmoothness
        );

    group.current.position.z = THREE.MathUtils.lerp(
      group.current.position.z,
      targetZ.current,
      rotationSmoothness
    );

    if (cardMesh.current.material) {
      const material = cardMesh.current.material as THREE.Material & {
        color?: THREE.Color;
      };
      if (material.color) {
        material.color.lerp(targetColor.current, rotationSmoothness * 0.5);
      }
    }

    if (dynamicLightRef.current && dynamicLight) {
      const lightOffset = new THREE.Vector3(
        group.current.rotation.y * 5,
        -group.current.rotation.x * 5 + 3,
        2
      );
      lightOffset.applyEuler(group.current.rotation);
      dynamicLightRef.current.position.copy(lightOffset);
      dynamicLightRef.current.intensity = THREE.MathUtils.lerp(
        dynamicLightRef.current.intensity,
        hover ? hoverLightIntensity : 0,
        rotationSmoothness
      );
    }
  });

  return (
    <group
      ref={group}
      scale={5}
      position={position}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <RoundedBox
        ref={cardMesh}
        args={[12, 8.4, 0.4]}
        radius={0.4}
        smoothness={10}
        castShadow
        receiveShadow
      >
        {reflective ? (
          <MeshReflectorMaterial
            color={color}
            roughness={0.2}
            metalness={0.8}
            opacity={opacity}
            transparent={opacity < 1}
          />
        ) : (
          <meshStandardMaterial
            color={color}
            roughness={0.3}
            metalness={0.7}
            opacity={opacity}
            transparent={opacity < 1}
          />
        )}
      </RoundedBox>

      <CardContent
        title={title}
        content={content}
        cardRotation={group.current ? group.current.rotation : undefined}
        mousePosition={mouse}
        viewport={viewport}
      />

      {dynamicLight && (
        <pointLight
          ref={dynamicLightRef}
          position={[0, 0, 0]}
          intensity={0}
          distance={15}
          decay={2}
          color="#ffffff"
          castShadow
          visible={false}
        />
      )}

      <group position={[0, 0, 0.16]}>{children}</group>
    </group>
  );
};

const Card3D = ({
  children,
  className,
  maxRotation,
  scale = 0.8,
  position,
  color = "#111",
  opacity = 0.9,
  reflective = true,
  title,
  content,
  rotationSmoothness,
  hoverScale,
  hoverLift,
  hoverColor,
  hoverLightIntensity,
  dynamicLight,
}: Card3DProps) => {
  return (
    <div className={cn("relative h-[300px] w-[400px]", className)}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 23], fov: 20 }}
        flat
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 10, 25]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <directionalLight position={[-5, -10, -10]} intensity={0.3} />
        <directionalLight position={[0, -10, 5]} color="blue" />
        <directionalLight position={[10, 0, 5]} intensity={0.4} color="blue" />

        <Scene
          maxRotation={maxRotation}
          scale={scale}
          position={position}
          color={color}
          opacity={opacity}
          reflective={reflective}
          title={title}
          content={content}
          rotationSmoothness={rotationSmoothness}
          hoverScale={hoverScale}
          hoverLift={hoverLift}
          hoverColor={hoverColor}
          hoverLightIntensity={hoverLightIntensity}
          dynamicLight={dynamicLight}
        >
          {children}
        </Scene>
      </Canvas>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   TEXT DECRYPT EFFECTS
   ═══════════════════════════════════════════════════════════════ */

function DecryptEffect({
  text,
  startDecrypting = false,
}: {
  text: string;
  startDecrypting?: boolean;
}) {
  const [decodedText, setDecodedText] = useState(startDecrypting ? "" : text);

  useEffect(() => {
    let iteration = 0;
    let shouldAnimate = true;
    const frameRate = 24;
    const speed = startDecrypting ? 0.3 : 0.5;

    const interval = setInterval(() => {
      if (!shouldAnimate) return;

      setDecodedText(() => {
        const result = text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[
              Math.floor(Math.random() * 62)
            ];
          })
          .join("");

        iteration += speed;
        if (iteration >= text.length) clearInterval(interval);
        return result;
      });
    }, 1000 / frameRate);

    return () => {
      shouldAnimate = false;
      clearInterval(interval);
    };
  }, [text, startDecrypting]);

  return <span className="inline-block font-medium">{decodedText}</span>;
}

function StableDecryptEffect({ text }: { text: string }) {
  const [decodedText, setDecodedText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    let shouldAnimate = true;
    const frameRate = 24;
    const speed = 0.5;

    const interval = setInterval(() => {
      if (!shouldAnimate) return;

      setDecodedText(() => {
        const result = text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[
              Math.floor(Math.random() * 62)
            ];
          })
          .join("");

        iteration += speed;
        if (iteration >= text.length) clearInterval(interval);
        return result;
      });
    }, 1000 / frameRate);

    return () => {
      shouldAnimate = false;
      clearInterval(interval);
    };
  }, [text]);

  return <span style={{ fontFamily: "inherit" }}>{decodedText}</span>;
}

/* ═══════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

function NavbarItem({ item }: { item: NavItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={item.href}
      className="relative whitespace-nowrap py-2 text-xs font-medium tracking-wider text-white/70 transition-colors duration-300 hover:text-cyan-400"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className="relative inline-block whitespace-nowrap"
        style={{ minWidth: `${item.title.length}ch` }}
      >
        {isHovered ? (
          <DecryptEffect text={item.title} />
        ) : (
          <span className="font-medium">{item.title}</span>
        )}
      </span>
    </Link>
  );
}

function MenuIcon({
  isOpen = false,
}: {
  isOpen?: boolean;
  isWhite?: boolean;
}) {
  if (isOpen) {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path
          d="M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H17"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1 6H17"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1 11H17"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** PROTOBOARD Logo — circuit board style SVG */
function ProtoboardLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="13" stroke="var(--primary)" strokeWidth="2" />
      <circle cx="14" cy="14" r="5" fill="var(--primary)" />
      <line x1="14" y1="1" x2="14" y2="7" stroke="var(--primary)" strokeWidth="2" />
      <line x1="14" y1="21" x2="14" y2="27" stroke="var(--primary)" strokeWidth="2" />
      <line x1="1" y1="14" x2="7" y2="14" stroke="var(--primary)" strokeWidth="2" />
      <line x1="21" y1="14" x2="27" y2="14" stroke="var(--primary)" strokeWidth="2" />
    </svg>
  );
}

/* ─── EXPLORE Dropdown (replaces COMPONENTS from original) ─── */
function ExploreLink({
  onDropdownChange,
}: {
  onDropdownChange?: (isOpen: boolean) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const text = "EXPLORE";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (onDropdownChange) onDropdownChange(isDropdownOpen);
  }, [isDropdownOpen, onDropdownChange]);

  const showDottedGrid = isHovered && !isDropdownOpen;

  return (
    <div
      className="relative z-50 h-full border-white/[0.06]"
      ref={dropdownRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.button
        className="relative flex h-full w-[160px] items-center justify-center overflow-hidden px-10 transition-colors"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {/* Dotted grid pseudo-layer */}
        {showDottedGrid && (
          <div
            className="pointer-events-none absolute inset-0 z-0 animate-[fadeIn_0.4s_ease-in-out]"
            style={{
              backgroundImage: "radial-gradient(circle, #444 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
          />
        )}
        {isDropdownOpen && (
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ zIndex: 1 }}
          />
        )}

        <div className="relative z-[2] flex w-full items-center justify-center">
          <div className="text-xs font-medium tracking-wider">
            {showDottedGrid ? (
              <StableDecryptEffect text={text} />
            ) : (
              <span className={isDropdownOpen ? "text-black" : "text-white"}>
                {text}
              </span>
            )}
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            className="fixed left-0 top-20 z-40 w-screen max-w-none overflow-hidden border-b border-white/[0.06] bg-black backdrop-blur-xl"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.45)" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              opacity: { duration: 0.5 },
            }}
          >
            <ExploreDropdown onClose={() => setIsDropdownOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Explore Dropdown Content ─────────────────────────────── */
function ExploreDropdown({ onClose }: { onClose: () => void }) {
  const [visibleRows, setVisibleRows] = useState<number>(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const rowsCount = Math.ceil(featureItems.length / 2);
    let currentRow = 0;
    const timer = setInterval(() => {
      if (currentRow < rowsCount) {
        setVisibleRows((prev) => prev + 1);
        currentRow++;
      } else {
        clearInterval(timer);
      }
    }, 200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const displayedFeature = hoveredItem
    ? featureItems.find((item) => item.id === hoveredItem)
    : null;

  const rows = [];
  for (let i = 0; i < featureItems.length; i += 2) {
    rows.push(featureItems.slice(i, i + 2));
  }

  return (
    <div className="h-full overflow-auto">
      <motion.div
        className="mx-auto min-h-[420px] max-w-[1400px] px-16 py-14 grid grid-cols-1 lg:grid-cols-[minmax(340px,1fr)_2fr] gap-16"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.01,
              delayChildren: 0.05,
              ease: "easeOut",
            },
          },
        }}
      >
        {/* Left panel — 3D card preview */}
        <motion.div
          className="flex flex-col p-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
        >
          <div className="mb-4 text-xs text-neutral-500">_FEATURES</div>
          <h2 className="mb-auto text-[2.5rem] font-extralight leading-[1.1]">
            Build intelligent circuits with AI
          </h2>
          <div className="mb-4 mt-auto w-full">
            <Card3D
              content={
                <div className="flex h-full flex-col p-10 text-center">
                  {displayedFeature ? (
                    <>
                      <div className="mb-2 text-xs text-neutral-500">
                        {displayedFeature.id}
                      </div>
                      <div className="mb-4 text-xl font-light">
                        {displayedFeature.title}
                      </div>
                      <div className="mb-4 flex flex-1 items-center justify-center rounded-lg">
                        <p className="text-sm text-neutral-400">
                          {displayedFeature.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full items-center justify-center text-neutral-500">
                      <span>Hover over a feature to preview</span>
                    </div>
                  )}
                </div>
              }
              maxRotation={0.03}
              className="mx-auto h-[300px] w-full max-w-[400px]"
            />
          </div>
        </motion.div>

        {/* Right panel — feature grid */}
        <div
          className="grid h-full grid-cols-1"
          style={{ gridTemplateRows: `repeat(${rows.length}, 1fr)` }}
        >
          {rows.slice(0, visibleRows).map((rowItems, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="grid w-full grid-cols-1 sm:grid-cols-2"
            >
              {rowItems.map((item) => (
                <motion.div
                  key={item.id}
                  className={`relative border-l border-t border-neutral-800 text-center ${
                    rowIndex === rows.length - 1 ? "border-b" : ""
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute left-0 top-0 h-[1px] w-0 bg-neutral-700"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute left-0 top-0 h-0 w-[1px] bg-neutral-700"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <div
                    className="relative flex h-full cursor-pointer flex-col items-center justify-center overflow-hidden px-6 py-8"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <motion.div
                      className="absolute inset-0 bg-neutral-500/20"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{
                        scaleX: hoveredItem === item.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                    <div className="relative z-10 mb-4 flex h-4 items-center justify-center font-mono text-xs text-neutral-500">
                      <div
                        className="w-full text-center"
                        style={{
                          minWidth: `${(`/ ${item.id}`).length}ch`,
                        }}
                      >
                        {hoveredItem === item.id ? (
                          <DecryptEffect
                            text={`/ ${item.id}`}
                            startDecrypting={true}
                          />
                        ) : (
                          `/ ${item.id}`
                        )}
                      </div>
                    </div>
                    <div className="relative z-10 text-[17px] font-extralight text-white">
                      {item.title}
                    </div>
                    <div className="relative z-10 mt-2 text-xs text-neutral-500">
                      {item.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN NAVBAR EXPORT
   ═══════════════════════════════════════════════════════════════ */

export function InteractiveNavbar() {
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      /* Glass: blue-black base /70, lighter /50 when blur active so aurora shows through */
      className="relative w-full border-b border-white/[0.06] bg-black/80 supports-[backdrop-filter]:bg-black/95 text-white backdrop-blur-sm transition-colors duration-300"
      style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.35)" }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="relative grid h-20 grid-cols-[1fr_auto] items-center md:grid-cols-[auto_auto_1fr_auto]">
        {/* Brand */}
        <div className="flex h-full items-center border-r border-white/[0.06] px-4 md:px-10">
          <Link
            href="/"
            className="flex items-center"
            aria-label="PROTOBOARD home"
          >
            <ProtoboardLogo />
            <span className="ml-3 text-lg font-bold tracking-wide">
              PROTOBOARD
            </span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="flex h-full items-center justify-end px-4 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <MenuIcon isOpen={isMobileMenuOpen} isWhite={true} />
          </button>
        </div>

        {/* EXPLORE dropdown — desktop */}
        <div className="hidden h-full border-r border-white/[0.06] md:block">
          <ExploreLink onDropdownChange={setIsNavDropdownOpen} />
        </div>

        {/* Nav items — desktop */}
        <div className="hidden h-full items-center pl-6 pr-4 md:flex">
          <div className="flex shrink-0 items-center gap-x-8">
            {navItems.map((item) => (
              <NavbarItem key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* Theme toggle — desktop */}
        {/* Sign Up — desktop */}
        <div className="hidden h-full items-center border-l border-white/[0.06] px-4 gap-4 md:flex">
          <ThemeToggle />
          <Link
            href="/signup"
            className="rounded-full px-6 py-2 text-xs font-semibold tracking-wider text-white transition-all duration-300"
            style={{
              backgroundColor: "var(--btn-primary-bg)",
              boxShadow: "0 0 15px var(--btn-primary-hover-shadow)",
            }}
          >
            SIGN UP
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed left-0 right-0 top-20 z-50 max-h-[calc(100vh-5rem)] overflow-hidden border-t border-white/[0.06] bg-black/95 backdrop-blur-xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex max-h-[calc(100vh-5rem)] flex-col space-y-6 overflow-y-auto px-6 py-4">
              {/* EXPLORE section mobile */}
              <div className="mt-6 border-b border-white/[0.06] py-2">
                <button
                  onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
                  className="flex w-full items-center justify-between py-3"
                >
                  <span className="text-sm tracking-wide">EXPLORE</span>
                </button>

                <AnimatePresence>
                  {isNavDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-4 px-2 py-4 sm:grid-cols-2">
                        {featureItems.map((item) => (
                          <div
                            key={item.id}
                            className="py-2 text-sm text-white/70 hover:text-white"
                          >
                            <div className="font-medium">{item.title}</div>
                            <div className="mt-1 text-xs text-neutral-500">
                              {item.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Nav links mobile */}
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="py-2 text-sm font-medium tracking-wider text-white/70 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

              {/* Theme toggle mobile */}
              <div className="flex items-center gap-3 py-2">
                <span className="text-sm text-white/50">Theme</span>
                <ThemeToggle />
              </div>

              {/* Sign Up mobile */}
              <Link
                href="/signup"
                className="mt-4 inline-block rounded-full px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300"
                style={{
                  backgroundColor: "var(--btn-primary-bg)",
                  boxShadow: "0 0 15px var(--btn-primary-hover-shadow)",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SIGN UP
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default InteractiveNavbar;
