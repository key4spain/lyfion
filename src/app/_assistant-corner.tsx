"use client";

import { useState } from "react";
import Link from "next/link";
import { CARD_BG, CARD_BORDER, GRADIENT, TEXT_BODY, TEXT_MUTED } from "./_shared";
import { type Locale, getContent, resolveHref } from "./_i18n";

export default function AssistantCorner({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const a = getContent(locale).assistant;

  return (
    <div
      className="assistant-corner fixed right-5 z-40 flex flex-col items-end gap-3 max-w-[calc(100vw-2.5rem)]"
      style={{
        pointerEvents: "none",
        bottom: "max(1.25rem, var(--lyfion-cookie-offset, 1.25rem))",
      }}
    >
      {open && (
        <div
          className="w-[min(100vw-2.5rem,320px)] rounded-2xl p-5 shadow-2xl"
          style={{
            pointerEvents: "auto",
            background: CARD_BG,
            border: `1px solid ${CARD_BORDER}`,
            boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
          }}
          role="dialog"
          aria-label={a.eyebrow}
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <p
                className="text-[11px] font-mono uppercase tracking-[0.18em] mb-1"
                style={{ color: "rgba(56,189,248,0.8)" }}
              >
                {a.eyebrow}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
                {a.body}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-lg leading-none px-1"
              style={{ color: TEXT_MUTED }}
              aria-label={a.close}
            >
              ×
            </button>
          </div>
          <ul className="space-y-2">
            {a.links.map((link) => {
              const href = resolveHref(link.href, locale);
              return (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={href}
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-white/5 cursor-pointer"
                      style={{ color: "rgba(255,255,255,0.78)" }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-white/5"
                      style={{ color: "rgba(255,255,255,0.78)" }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold shadow-lg transition-opacity hover:opacity-90"
        style={{
          pointerEvents: "auto",
          background: GRADIENT,
          color: "#ffffff",
          boxShadow: "0 8px 28px rgba(14,165,233,0.28)",
        }}
        aria-expanded={open}
        aria-label={a.button}
      >
        <span
          aria-hidden="true"
          className="inline-block w-2 h-2 rounded-full"
          style={{
            background: "#10b981",
            boxShadow: "0 0 8px 2px rgba(16,185,129,0.45)",
          }}
        />
        {a.button}
      </button>
    </div>
  );
}
