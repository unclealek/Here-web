import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HERE — Be where life happens",
  description: "Discover places, sense the atmosphere, and connect with the world around you. HERE is the privacy-first social discovery experience, starting in Helsinki.",
  applicationName: "HERE",
  openGraph: {
    title: "HERE — Be where life happens",
    description: "People. Places. Presence. A different kind of social discovery.",
    type: "website",
    locale: "en_US",
  },
  icons: { icon: "/icon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans antialiased">{children}<Analytics /></body></html>;
}
