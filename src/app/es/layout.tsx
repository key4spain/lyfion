import NavBar from "../_nav";
import { Footer } from "../_shared";
import AssistantCorner from "../_assistant-corner";
import CookieConsent from "../_cookie-consent";
import HtmlLang from "../_html-lang";

// Static export shares one root <html lang="en">. <HtmlLang> sets it to "es" after
// hydration (no pre-hydration DOM mutation, so no hydration mismatch). The lang
// attribute is non-visual; hreflang + ES content carry SEO regardless.

export default function EsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <HtmlLang locale="es" />
      <NavBar locale="es" />
      <main>{children}</main>
      <Footer locale="es" />
      <AssistantCorner locale="es" />
      <CookieConsent locale="es" />
    </>
  );
}
