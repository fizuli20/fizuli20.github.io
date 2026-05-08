import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://fizuli20-github-io.vercel.app"),
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
    "HyperAutomation",
    "Hackathon",
  ],
  authors: [{ name: "Fizuli Hasanov" }],
  openGraph: {
    title: "Fizuli Hasanov — Technical Product Leader, Data Scientist, Venture Builder",
    description:
      "Presidential Scholar. 2x Hackathon Champion. Two active incubations. XGBoost PR-AUC 0.87 on real data.",
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
    title: "Fizuli Hasanov — Technical Product Leader",
    description:
      "Presidential Scholar. 2x Hackathon Champion. Two active incubations. XGBoost PR-AUC 0.87 on real data.",
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
