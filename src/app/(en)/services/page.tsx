import type { Metadata } from "next";
import ServicesView from "../../_views/ServicesView";
import { buildMetadata } from "../../_structured-data";

export const metadata: Metadata = buildMetadata("services", "en");

export default function Page() {
  return <ServicesView locale="en" />;
}
