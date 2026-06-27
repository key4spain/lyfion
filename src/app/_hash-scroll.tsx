"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// App Router static export does not always scroll to #hash after navigation/hydration.
// This restores it: on mount and on pathname change, scroll the #id into view.
// scroll-margin-top on the target sections accounts for the fixed header.
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    const id = decodeURIComponent(hash.slice(1));

    let frame = 0;
    let tries = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
      // Content may still be hydrating; retry a few frames.
      if (tries++ < 20) frame = requestAnimationFrame(tryScroll);
    };
    frame = requestAnimationFrame(tryScroll);

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
