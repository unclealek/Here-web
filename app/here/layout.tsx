import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "HERE — Be where life happens",
  description:
    "Discover places, sense the atmosphere, and connect with the world around you. HERE is the privacy-first social discovery experience, starting in Helsinki.",
  applicationName: "HERE",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "HERE — Be where life happens",
    description: "People. Places. Presence. A different kind of social discovery.",
    type: "website",
    locale: "en_US",
  },
};

export default function HereLayout({ children }: { children: ReactNode }) {
  return children;
}
