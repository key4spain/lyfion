import type { Metadata } from "next";
import CatalogView from "../../_views/CatalogView";
import { buildMetadata } from "../../_structured-data";

export const metadata: Metadata = buildMetadata("catalog", "en");

export default function Page() {
  return <CatalogView locale="en" />;
}
