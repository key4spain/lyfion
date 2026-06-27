"use client";

import { useEffect } from "react";
import type { Locale } from "./_i18n";

// Keeps <html lang> correct across client-side navigation between locales
// (the static root layout renders lang="en" for every route).
export default function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
