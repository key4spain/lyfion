import type { Metadata } from "next";
import HomeView from "../_views/HomeView";
import { buildMetadata } from "../_structured-data";

export const metadata: Metadata = buildMetadata("home", "en");

export default function Page() {
  return <HomeView locale="en" />;
}
