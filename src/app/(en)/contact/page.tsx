import type { Metadata } from "next";
import ContactView from "../../_views/ContactView";
import { buildMetadata } from "../../_structured-data";

export const metadata: Metadata = buildMetadata("contact", "en");

export default function Page() {
  return <ContactView locale="en" />;
}
