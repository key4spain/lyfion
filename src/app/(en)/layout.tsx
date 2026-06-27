import NavBar from "../_nav";
import { Footer } from "../_shared";
import AssistantCorner from "../_assistant-corner";
import CookieConsent from "../_cookie-consent";
import HtmlLang from "../_html-lang";

export default function EnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <HtmlLang locale="en" />
      <NavBar locale="en" />
      <main>{children}</main>
      <Footer locale="en" />
      <AssistantCorner locale="en" />
      <CookieConsent locale="en" />
    </>
  );
}
