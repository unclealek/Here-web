import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Roam legal and support",
  description: "Roam privacy policy, terms, community guidelines, support resources, and account deletion guidance.",
  alternates: {
    canonical: "/roam",
  },
};

export default function RoamLayout({ children }: { children: ReactNode }) {
  return children;
}
