"use client";

import { useEffect, useRef } from "react";
import { useLyfionInteraction } from "./_lyfion-interaction";

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const { currentColor, interactionEnabled, reducedMotion } =
    useLyfionInteraction();

  const enabled = interactionEnabled && !reducedMotion;

  useEffect(() => {
    if (!enabled) return;

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      x += (targetX - x) * 0.14;
      y += (targetY - y) * 0.14;
      const transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      if (dotRef.current) dotRef.current.style.transform = transform;
      if (haloRef.current) haloRef.current.style.transform = transform;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  useEffect(() => {
    if (!dotRef.current || !haloRef.current) return;
    dotRef.current.style.background = currentColor.core;
    dotRef.current.style.boxShadow = `0 0 12px 2px ${currentColor.glow}`;
    haloRef.current.style.background = `radial-gradient(circle, ${currentColor.halo} 0%, transparent 70%)`;
  }, [currentColor]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={haloRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[40]"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          filter: "blur(8px)",
          opacity: 0.22,
          willChange: "transform",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[41]"
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          willChange: "transform",
        }}
      />
    </>
  );
}
