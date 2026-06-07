"use client";

import {
  LYFION_SIGNAL_COLORS,
  useLyfionInteraction,
  type OrbitSignal,
  type OrbitTrackId,
} from "./_lyfion-interaction";

const NODES = [
  "Website",
  "Lead intake",
  "CRM routing",
  "Content workflow",
  "AI production",
  "Launch QA",
];

const NODE_ACCENTS = [0, 1, 2, 3, 4, 5];

type OrbitTrack = {
  id: OrbitTrackId;
  diameterDesktop: number;
  diameterMobile: number;
  border: string;
  spin?: "slow" | "reverse" | "mid";
  durationSec?: number;
  defaultDot?: { colorIndex: number; size: number; opacity: number };
};

export const ORBIT_TRACKS: OrbitTrack[] = [
  {
    id: "outer",
    diameterDesktop: 360,
    diameterMobile: 288,
    border: "1px solid rgba(14,165,233,0.05)",
    spin: "slow",
    durationSec: 58,
    defaultDot: { colorIndex: 2, size: 5, opacity: 0.5 },
  },
  {
    id: "mid-a",
    diameterDesktop: 278,
    diameterMobile: 228,
    border: "1px dashed rgba(16,185,129,0.08)",
    spin: "reverse",
    durationSec: 46,
    defaultDot: { colorIndex: 3, size: 5, opacity: 0.48 },
  },
  {
    id: "mid-b",
    diameterDesktop: 252,
    diameterMobile: 208,
    border: "1px solid rgba(56,189,248,0.035)",
    spin: "slow",
    durationSec: 52,
  },
  {
    id: "inner-a",
    diameterDesktop: 232,
    diameterMobile: 196,
    border: "1px solid rgba(56,189,248,0.09)",
    spin: "mid",
    durationSec: 64,
  },
  {
    id: "inner-b",
    diameterDesktop: 212,
    diameterMobile: 180,
    border: "1px dashed rgba(14,165,233,0.06)",
  },
];

const DESKTOP_TRACK_IDS: OrbitTrackId[] = ["outer", "mid-a", "inner-a"];
const MOBILE_TRACK_IDS: OrbitTrackId[] = ["outer", "mid-a"];
const DESKTOP_STAGE = 360;
const MOBILE_STAGE = 288;

function trackById(id: OrbitTrackId) {
  return ORBIT_TRACKS.find((t) => t.id === id)!;
}

function trackDiameter(track: OrbitTrack, mobile: boolean) {
  return mobile ? track.diameterMobile : track.diameterDesktop;
}

function SignalDot({
  colorIndex,
  size,
  opacity,
}: {
  colorIndex: number;
  size: number;
  opacity: number;
}) {
  const c = LYFION_SIGNAL_COLORS[colorIndex % LYFION_SIGNAL_COLORS.length];
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        width: size,
        height: size,
        borderRadius: "50%",
        background: c.core,
        opacity,
        boxShadow: `0 0 ${size * 1.5}px 1px ${c.glow}`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}

function TrackDotRotator({
  track,
  colorIndex,
  size,
  opacity,
  motionAllowed,
  startDeg = 0,
}: {
  track: OrbitTrack;
  colorIndex: number;
  size: number;
  opacity: number;
  motionAllowed: boolean;
  startDeg?: number;
}) {
  const animateClass =
    track.spin === "reverse"
      ? "animate-orbit-reverse"
      : track.spin === "mid"
        ? "animate-orbit-mid"
        : "animate-orbit-slow";

  return (
    <div
      className="absolute inset-0"
      style={{ transform: `rotate(${startDeg}deg)` }}
    >
      <div
        className={`absolute inset-0 ${motionAllowed && track.spin ? animateClass : ""}`}
        style={
          motionAllowed && track.spin && track.durationSec
            ? { animationDuration: `${track.durationSec}s` }
            : undefined
        }
      >
        <SignalDot colorIndex={colorIndex} size={size} opacity={opacity} />
      </div>
    </div>
  );
}

function OrbitRingLayer({
  track,
  mobile,
}: {
  track: OrbitTrack;
  mobile: boolean;
}) {
  const size = trackDiameter(track, mobile);
  return (
    <div
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="absolute inset-0 rounded-full" style={{ border: track.border }} />
    </div>
  );
}

function OrbitDotLayer({
  track,
  mobile,
  motionAllowed,
  signal,
}: {
  track?: OrbitTrack;
  mobile: boolean;
  motionAllowed: boolean;
  signal?: OrbitSignal;
}) {
  if (signal) {
    const t = trackById(signal.trackId);
    const size = trackDiameter(t, mobile);
    return (
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: size,
          height: size,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <TrackDotRotator
          track={t}
          colorIndex={signal.colorIndex}
          size={5}
          opacity={0.6}
          motionAllowed={motionAllowed}
          startDeg={signal.startDeg}
        />
      </div>
    );
  }

  if (!track?.defaultDot) return null;
  const size = trackDiameter(track, mobile);
  return (
    <div
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div key={`default-${track.id}-1`} className="absolute inset-0">
        <TrackDotRotator
          track={track}
          colorIndex={track.defaultDot.colorIndex}
          size={track.defaultDot.size}
          opacity={track.defaultDot.opacity}
          motionAllowed={motionAllowed}
        />
      </div>
    </div>
  );
}

type NodePoint = {
  label: string;
  x: number;
  y: number;
  accent: (typeof LYFION_SIGNAL_COLORS)[number];
};

function buildNodePoints(size: number, nodeRadius: number): NodePoint[] {
  const cx = size / 2;
  const cy = size / 2;
  return NODES.map((label, i) => {
    const angle = ((i * 60 - 90) * Math.PI) / 180;
    return {
      label,
      x: cx + Math.cos(angle) * nodeRadius,
      y: cy + Math.sin(angle) * nodeRadius,
      accent: LYFION_SIGNAL_COLORS[NODE_ACCENTS[i]],
    };
  });
}

function NodeThreads({
  nodes,
  cx,
  cy,
  motionAllowed,
  showHex,
}: {
  nodes: NodePoint[];
  cx: number;
  cy: number;
  motionAllowed: boolean;
  showHex: boolean;
}) {
  const hexPoints = nodes.map((n) => `${n.x},${n.y}`).join(" ");
  const threadClass = motionAllowed ? "animate-thread-pulse" : "";

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${cx * 2} ${cy * 2}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {showHex && (
        <polygon
          points={hexPoints}
          fill="none"
          stroke="rgba(14,165,233,0.09)"
          strokeWidth="0.65"
          strokeDasharray="4 5"
        />
      )}
      {nodes.map((n) => (
        <line
          key={`thread-${n.label}`}
          x1={cx}
          y1={cy}
          x2={n.x}
          y2={n.y}
          stroke="rgba(56,189,248,0.3)"
          strokeWidth="0.85"
          className={threadClass}
        />
      ))}
    </svg>
  );
}

function OrbitalNodeSystem({
  mobile,
  motionAllowed,
}: {
  mobile: boolean;
  motionAllowed: boolean;
}) {
  const size = mobile ? 188 : 228;
  const nodeRadius = mobile ? 58 : 74;
  const coreRadius = mobile ? 24 : 31;
  const cx = size / 2;
  const cy = size / 2;
  const nodes = buildNodePoints(size, nodeRadius);

  return (
    <div
      className="relative pointer-events-none select-none"
      style={{ width: size, height: size }}
    >
      <NodeThreads
        nodes={nodes}
        cx={cx}
        cy={cy}
        motionAllowed={motionAllowed && !mobile}
        showHex={!mobile}
      />

      {/* Central core circle */}
      <div
        className={`absolute rounded-full flex flex-col items-center justify-center ${
          motionAllowed ? "animate-core-glow max-md:animate-none" : ""
        }`}
        style={{
          width: coreRadius * 2,
          height: coreRadius * 2,
          left: cx - coreRadius,
          top: cy - coreRadius,
          background:
            "radial-gradient(circle at 50% 38%, rgba(14,165,233,0.14) 0%, rgba(16,185,129,0.06) 50%, rgba(3,14,11,0.35) 100%)",
          border: "1px solid var(--card-border)",
          boxShadow: "0 0 22px var(--card-glow), inset 0 0 14px rgba(14,165,233,0.07)",
        }}
      >
        <span
          className="font-mono uppercase text-center leading-none"
          style={{
            fontSize: mobile ? 5.5 : 7.5,
            letterSpacing: "0.14em",
            color: "rgba(56,189,248,0.84)",
            textShadow: "0 1px 2px rgba(0,0,0,0.4)",
          }}
        >
          System
          <br />
          core
        </span>
      </div>

      {/* Surrounding nodes */}
      {nodes.map((n, i) => {
        if (mobile && i > 3) return null;
        return (
          <div
            key={n.label}
            className="absolute flex flex-col items-center gap-1.5"
            style={{
              left: n.x,
              top: n.y,
              transform: "translate(-50%, -50%)",
              maxWidth: mobile ? 54 : 70,
            }}
          >
            <span
              aria-hidden="true"
              className="rounded-full flex-shrink-0"
              style={{
                width: mobile ? 5 : 7,
                height: mobile ? 5 : 7,
                background: n.accent.core,
                boxShadow: `0 0 ${mobile ? 8 : 11}px 2px ${n.accent.glow}`,
              }}
            />
            <span
              className="text-center font-mono uppercase"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: mobile ? 7.5 : 9.5,
                letterSpacing: "0.06em",
                lineHeight: 1.25,
                textShadow: "0 1px 3px rgba(0,0,0,0.4)",
              }}
            >
              {n.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function SystemField({
  stageDiameter,
  trackIds,
  signals,
  motionAllowed,
  mobile,
}: {
  stageDiameter: number;
  trackIds: OrbitTrackId[];
  signals: OrbitSignal[];
  motionAllowed: boolean;
  mobile: boolean;
}) {
  const tracks = ORBIT_TRACKS.filter((t) => trackIds.includes(t.id));
  const dotTracks = tracks.filter((t) => t.defaultDot);

  return (
    <div
      className={`relative orbit-system-field mx-auto ${motionAllowed ? "" : "[animation:none!important]"}`}
      style={{ width: stageDiameter, height: stageDiameter }}
    >
      {/* Layer 1 — fog / glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-[1]"
        style={{
          width: stageDiameter * 0.85,
          height: stageDiameter * 0.85,
          opacity: "var(--hub-opacity)",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.1) 0%, rgba(16,185,129,0.045) 44%, transparent 72%)",
          filter: "blur(26px)",
        }}
      />

      {/* Layer 2 — orbit rings */}
      <div aria-hidden="true" className="absolute inset-0 z-[2] pointer-events-none">
        {tracks.map((track) => (
          <OrbitRingLayer key={track.id} track={track} mobile={mobile} />
        ))}
      </div>

      {/* Layer 3–5 — threads, core, nodes, labels */}
      <div className="absolute inset-0 z-[4] flex items-center justify-center pointer-events-none">
        <OrbitalNodeSystem mobile={mobile} motionAllowed={motionAllowed} />
      </div>

      {/* Layer 6 — orbit dots (outer paths only) */}
      <div aria-hidden="true" className="absolute inset-0 z-[5] pointer-events-none">
        {dotTracks.map((track) => (
          <OrbitDotLayer
            key={`dot-${track.id}`}
            track={track}
            mobile={mobile}
            motionAllowed={motionAllowed}
          />
        ))}
        {motionAllowed &&
          !mobile &&
          signals.map((signal) => (
            <OrbitDotLayer
              key={signal.id}
              mobile={mobile}
              motionAllowed={motionAllowed}
              signal={signal}
            />
          ))}
      </div>
    </div>
  );
}

export default function HeroOrbitPanel() {
  const {
    addOrbitSignal,
    orbitSignals,
    interactionEnabled,
    motionAllowed,
  } = useLyfionInteraction();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactionEnabled) return;
    e.stopPropagation();
    addOrbitSignal();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!interactionEnabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      addOrbitSignal();
    }
  };

  return (
    <div
      className="relative flex items-center justify-center w-full max-w-[380px] mx-auto min-h-[288px] md:min-h-[360px] overflow-hidden isolate"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={interactionEnabled ? "button" : undefined}
      tabIndex={interactionEnabled ? 0 : undefined}
      aria-label={interactionEnabled ? "Lyfion orbital system core" : undefined}
      style={{ cursor: interactionEnabled ? "default" : undefined }}
    >
      <div className="hidden md:block">
        <SystemField
          stageDiameter={DESKTOP_STAGE}
          trackIds={DESKTOP_TRACK_IDS}
          signals={orbitSignals}
          motionAllowed={motionAllowed}
          mobile={false}
        />
      </div>

      <div className="md:hidden">
        <SystemField
          stageDiameter={MOBILE_STAGE}
          trackIds={MOBILE_TRACK_IDS}
          signals={[]}
          motionAllowed={motionAllowed}
          mobile
        />
      </div>
    </div>
  );
}
