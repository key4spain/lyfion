"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type LyfionSignalColor = {
  core: string;
  halo: string;
  glow: string;
};

export const LYFION_SIGNAL_COLORS: LyfionSignalColor[] = [
  { core: "rgba(20,184,166,0.72)", halo: "rgba(20,184,166,0.18)", glow: "rgba(20,184,166,0.45)" },
  { core: "rgba(34,211,238,0.72)", halo: "rgba(34,211,238,0.18)", glow: "rgba(34,211,238,0.42)" },
  { core: "rgba(14,165,233,0.72)", halo: "rgba(14,165,233,0.18)", glow: "rgba(14,165,233,0.45)" },
  { core: "rgba(16,185,129,0.72)", halo: "rgba(16,185,129,0.18)", glow: "rgba(16,185,129,0.42)" },
  { core: "rgba(94,234,212,0.68)", halo: "rgba(94,234,212,0.16)", glow: "rgba(94,234,212,0.38)" },
  { core: "rgba(56,189,248,0.72)", halo: "rgba(56,189,248,0.18)", glow: "rgba(56,189,248,0.45)" },
];

export const MAX_ORBIT_SIGNALS = 10;

export type OrbitTrackId = "outer" | "mid-a" | "mid-b" | "inner-a" | "inner-b";

export type OrbitSignal = {
  id: string;
  colorIndex: number;
  trackId: OrbitTrackId;
  startDeg: number;
};

const TRACK_CYCLE: OrbitTrackId[] = ["outer", "mid-a", "inner-a"];

type LyfionInteractionContextValue = {
  colorIndex: number;
  currentColor: LyfionSignalColor;
  orbitSignals: OrbitSignal[];
  addOrbitSignal: () => void;
  interactionEnabled: boolean;
  reducedMotion: boolean;
  motionAllowed: boolean;
};

const LyfionInteractionContext =
  createContext<LyfionInteractionContextValue | null>(null);

export function useLyfionInteraction() {
  const ctx = useContext(LyfionInteractionContext);
  if (!ctx) {
    throw new Error("useLyfionInteraction must be used within LyfionInteractionProvider");
  }
  return ctx;
}

export function LyfionInteractionProvider({ children }: { children: ReactNode }) {
  const [colorIndex, setColorIndex] = useState(0);
  const [orbitSignals, setOrbitSignals] = useState<OrbitSignal[]>([]);
  const [interactionEnabled, setInteractionEnabled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const signalIdRef = useRef(0);
  const colorIndexRef = useRef(0);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setInteractionEnabled(finePointer.matches);
      setReducedMotion(reduced.matches);
    };

    update();
    finePointer.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      finePointer.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    colorIndexRef.current = colorIndex;
  }, [colorIndex]);

  const addOrbitSignal = useCallback(() => {
    if (!interactionEnabled || reducedMotion) return;

    const counter = ++signalIdRef.current;
    const assignedColor = colorIndexRef.current;
    colorIndexRef.current =
      (assignedColor + 1) % LYFION_SIGNAL_COLORS.length;

    setColorIndex(colorIndexRef.current);
    setOrbitSignals((signals) => {
      const trackId = TRACK_CYCLE[signals.length % TRACK_CYCLE.length];
      const entry: OrbitSignal = {
        id: `user-signal-${counter}-${trackId}`,
        colorIndex: assignedColor,
        trackId,
        startDeg: Math.floor(Math.random() * 360),
      };
      const updated = [...signals, entry];
      if (updated.length > MAX_ORBIT_SIGNALS) updated.shift();
      return updated;
    });
  }, [interactionEnabled, reducedMotion]);

  const value = useMemo(
    () => ({
      colorIndex,
      currentColor: LYFION_SIGNAL_COLORS[colorIndex],
      orbitSignals,
      addOrbitSignal,
      interactionEnabled,
      reducedMotion,
      motionAllowed: interactionEnabled && !reducedMotion,
    }),
    [colorIndex, orbitSignals, addOrbitSignal, interactionEnabled, reducedMotion]
  );

  return (
    <LyfionInteractionContext.Provider value={value}>
      {children}
    </LyfionInteractionContext.Provider>
  );
}
