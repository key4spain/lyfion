"use client";

import { useEffect, useRef, useState } from "react";
import { CARD_BG, CARD_BORDER, TEXT_BODY, TEXT_MUTED } from "./_shared";

const STORAGE_KEY = "lyfion-cookie-consent";

type CookiePrefs = {
  necessary: true;
  analytics: boolean;
  interactive: boolean;
  decided: true;
};

function readPrefs(): CookiePrefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookiePrefs;
  } catch {
    return null;
  }
}

function savePrefs(prefs: CookiePrefs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

function clearBannerOffset() {
  document.body.classList.remove("cookie-banner-open");
  document.documentElement.style.removeProperty("--lyfion-cookie-offset");
}

function applyBannerOffset(height: number) {
  document.body.classList.add("cookie-banner-open");
  document.documentElement.style.setProperty(
    "--lyfion-cookie-offset",
    `${height + 12}px`
  );
}

export default function CookieConsent() {
  const initial = readPrefs();
  const [visible, setVisible] = useState(initial === null);
  const [manageOpen, setManageOpen] = useState(false);
  const [analytics, setAnalytics] = useState(initial?.analytics ?? false);
  const [interactive, setInteractive] = useState(initial?.interactive ?? false);
  const bannerRef = useRef<HTMLDivElement>(null);

  const closeWith = (prefs: CookiePrefs) => {
    savePrefs(prefs);
    setAnalytics(prefs.analytics);
    setInteractive(prefs.interactive);
    setVisible(false);
    setManageOpen(false);
    clearBannerOffset();
  };

  useEffect(() => {
    if (!visible) {
      clearBannerOffset();
      return;
    }

    const node = bannerRef.current;
    if (!node) return;

    const updateOffset = () => {
      applyBannerOffset(node.offsetHeight);
    };

    updateOffset();
    const observer = new ResizeObserver(updateOffset);
    observer.observe(node);

    return () => {
      observer.disconnect();
      clearBannerOffset();
    };
  }, [visible, manageOpen]);

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 pt-2 sm:px-5 sm:pb-5 pointer-events-none"
      role="dialog"
      aria-label="Cookie preferences"
    >
      <div
        className="max-w-3xl mx-auto rounded-2xl p-4 sm:p-5 pointer-events-auto"
        style={{
          background: CARD_BG,
          border: `1px solid ${CARD_BORDER}`,
          boxShadow: "0 -8px 40px rgba(0,0,0,0.35)",
        }}
      >
        <p className="text-sm leading-relaxed mb-3 sm:mb-4" style={{ color: TEXT_BODY }}>
          We use necessary cookies to keep the site working. Optional cookies may
          later help us understand visits or improve interactive features. You can
          accept, reject, or manage preferences.
        </p>

        {manageOpen && (
          <div
            className="rounded-xl p-4 mb-3 sm:mb-4 space-y-3"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${CARD_BORDER}`,
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold" style={{ color: "#ffffff" }}>
                  Necessary
                </p>
                <p className="text-xs" style={{ color: TEXT_MUTED }}>
                  Always on. Required for basic site function.
                </p>
              </div>
              <span className="text-xs font-mono" style={{ color: "rgba(16,185,129,0.85)" }}>
                On
              </span>
            </div>
            <label className="flex items-center justify-between gap-4 cursor-pointer">
              <div>
                <p className="text-sm font-semibold" style={{ color: "#ffffff" }}>
                  Analytics
                </p>
                <p className="text-xs" style={{ color: TEXT_MUTED }}>
                  Off by default. Not loaded on this site yet.
                </p>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="accent-teal-500"
              />
            </label>
            <label className="flex items-center justify-between gap-4 cursor-pointer">
              <div>
                <p className="text-sm font-semibold" style={{ color: "#ffffff" }}>
                  Interactive features
                </p>
                <p className="text-xs" style={{ color: TEXT_MUTED }}>
                  Off by default. Not loaded on this site yet.
                </p>
              </div>
              <input
                type="checkbox"
                checked={interactive}
                onChange={(e) => setInteractive(e.target.checked)}
                className="accent-teal-500"
              />
            </label>
            <button
              type="button"
              onClick={() =>
                closeWith({
                  necessary: true,
                  analytics,
                  interactive,
                  decided: true,
                })
              }
              className="text-sm font-semibold px-4 py-2 rounded-full"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: `1px solid ${CARD_BORDER}`,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Save preferences
            </button>
          </div>
        )}

        <div className="flex flex-wrap gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() =>
              closeWith({
                necessary: true,
                analytics: true,
                interactive: true,
                decided: true,
              })
            }
            className="px-4 py-2.5 rounded-full text-sm font-semibold"
            style={{
              background: "linear-gradient(135deg, #0ea5e9, #10b981)",
              color: "#ffffff",
            }}
          >
            Accept optional
          </button>
          <button
            type="button"
            onClick={() =>
              closeWith({
                necessary: true,
                analytics: false,
                interactive: false,
                decided: true,
              })
            }
            className="px-4 py-2.5 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: `1px solid ${CARD_BORDER}`,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Reject optional
          </button>
          <button
            type="button"
            onClick={() => setManageOpen((v) => !v)}
            className="px-4 py-2.5 rounded-full text-sm font-semibold"
            style={{ color: "rgba(56,189,248,0.85)" }}
          >
            Manage
          </button>
        </div>
      </div>
    </div>
  );
}
