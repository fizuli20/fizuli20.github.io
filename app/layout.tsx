import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://fizuli20.github.io"),
  title: "Fizuli Hasanov — Technical Product Leader, Data Scientist, Venture Builder",
  description:
    "Presidential Scholar (Top 3 of 20,000+). BA Intern at Codveda, Founder of EcoConcrete, PASHA Hackathon 6.0 finalist. I build data products that move revenue and ventures that win.",
  keywords: [
    "Fizuli Hasanov",
    "Data Scientist",
    "Business Analyst",
    "Product Manager",
    "Azerbaijan",
    "Presidential Scholar",
    "EcoConcrete",
    "LedgerLens",
    "AutoFlow",
    "Hackathon",
  ],
  authors: [{ name: "Fizuli Hasanov" }],
  openGraph: {
    title: "Fizuli Hasanov — Technical Product Leader, Data Scientist, Venture Builder",
    description:
      "Presidential Scholar. 2× Hackathon Champion. Two active incubations. XGBoost PR-AUC 0.87 on real data.",
    url: "https://fizuli20.github.io",
    siteName: "Fizuli Hasanov",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Fizuli Hasanov — Architect of Value",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fizuli Hasanov — Technical Product Leader",
    description:
      "Presidential Scholar. 2× Hackathon Champion. Two active incubations. XGBoost PR-AUC 0.87 on real data.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
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
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} bg-background`}
    >
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
