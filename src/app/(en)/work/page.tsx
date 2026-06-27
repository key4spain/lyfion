import type { Metadata } from "next";
import WorkView from "../../_views/WorkView";
import { buildMetadata } from "../../_structured-data";

export const metadata: Metadata = buildMetadata("work", "en");

export default function Page() {
  return <WorkView locale="en" />;
}
