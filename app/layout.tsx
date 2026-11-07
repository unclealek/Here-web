import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "More Data — Good ideas, made for people",
  description: "More Data creates digital products for shared experiences, including HERE and Roam.",
  applicationName: "More Data",
  openGraph: {
    title: "More Data — Good ideas, made for people",
    description: "Digital products for shared experiences, including HERE and Roam.",
    type: "website",
    locale: "en_US",
  },
  icons: { icon: "/moredata.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans antialiased">{children}<Analytics /></body></html>;
}
