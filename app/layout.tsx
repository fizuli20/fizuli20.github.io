import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://fizuli20-github-io.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: "Fizuli Hasanov | Founder & CEO · Innovation & Venture Building",
  description:
    "Fizuli Hasanov is a Presidential Scholar and founder who builds ideas into products, pilots, and companies — leading early-stage ventures across AI, HRTech, climate tech, EdTech, and FinTech from zero to one.",
  keywords: [
    "Fizuli Hasanov",
    "Founder",
    "CEO",
    "Venture Builder",
    "Innovation Strategy",
    "Business Strategy",
    "Product Strategy",
    "Azerbaijan",
    "Presidential Scholar",
    "AISE",
    "Carboryn",
    "EarthXLab",
    "FVeda",
    "Mentioned",
    "HyperAutomation",
    "Vistar Excellence Program",
  ],
  authors: [{ name: "Fizuli Hasanov" }],
  openGraph: {
    title: "I build ideas into products, pilots, and companies.",
    description:
      "Fizuli Hasanov — founder and CEO building ventures across AI, HRTech, climate tech, EdTech, FinTech, automation, and consumer technology.",
    url: "https://fizuli20-github-io.vercel.app",
    siteName: "Fizuli Hasanov",
    images: [
      {
        url: "/profile-photo.jpg",
        width: 800,
        height: 800,
        alt: "Fizuli Hasanov",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I build ideas into products, pilots, and companies.",
    description:
      "Fizuli Hasanov — founder and CEO building ventures across AI, HRTech, climate tech, EdTech, FinTech, automation, and consumer technology.",
    images: ["/profile-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  )
}
