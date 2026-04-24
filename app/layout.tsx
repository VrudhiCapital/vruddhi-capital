import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://vruddhicapital.com"),
  title: {
    default: "Vruddhi Capital — Backing Mission-Driven Founders in India",
    template: "%s | Vruddhi Capital",
  },
  description:
    "Vruddhi Capital is an investment firm based in Udupi, India. We back mission-driven startups with scalable business models from pre-seed to late stage across consumer, services, and platform businesses.",
  keywords: [
    "venture capital india",
    "startup funding india",
    "early stage investment",
    "VC firm udupi",
    "startup investment india",
    "pre-seed funding india",
    "mission driven founders",
    "vruddhi capital",
  ],
  authors: [{ name: "Vruddhi Capital" }],
  creator: "Vruddhi Capital",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vruddhicapital.com",
    siteName: "Vruddhi Capital",
    title: "Vruddhi Capital — Backing Mission-Driven Founders in India",
    description:
      "We back mission-driven startups with scalable business models from pre-seed to late stage across India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vruddhi Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vruddhi Capital — Backing Mission-Driven Founders",
    description:
      "Early stage VC firm based in Udupi, India backing mission-driven founders.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain-overlay">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
