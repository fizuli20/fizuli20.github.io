import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://fizuli20-github-io.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: "Fizuli Hasanov | AI Innovation & Product Strategy",
  description:
    "Fizuli Hasanov is a Presidential Scholar building AI-driven products, ventures, and strategies through research, product thinking, and startup execution.",
  keywords: [
    "Fizuli Hasanov",
    "Product Analyst",
    "Business Analyst",
    "Product Manager",
    "Venture Builder",
    "Azerbaijan",
    "Presidential Scholar",
    "Carboryn",
    "EcoConcrete",
    "LedgerLens",
    "HyperAutomation",
    "Hackathon",
  ],
  authors: [{ name: "Fizuli Hasanov" }],
  openGraph: {
    title: "Building AI-driven products, ventures, and strategies.",
    description:
      "Explore Fizuli Hasanov's work across AI innovation, product strategy, venture building, and business transformation.",
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
    title: "Building AI-driven products, ventures, and strategies.",
    description:
      "Explore Fizuli Hasanov's work across AI innovation, product strategy, venture building, and business transformation.",
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
