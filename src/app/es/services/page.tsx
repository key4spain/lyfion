import type { Metadata } from "next";
import ServicesView from "../../_views/ServicesView";
import { buildMetadata } from "../../_structured-data";

export const metadata: Metadata = buildMetadata("services", "es");

export default function Page() {
  return <ServicesView locale="es" />;
}
