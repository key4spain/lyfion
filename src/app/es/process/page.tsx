import type { Metadata } from "next";
import ProcessView from "../../_views/ProcessView";
import { buildMetadata } from "../../_structured-data";

export const metadata: Metadata = buildMetadata("process", "es");

export default function Page() {
  return <ProcessView locale="es" />;
}
