import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "JCC Kisumu",
    template: "%s | JCC Kisumu",
  },
  description:
    "Welcome to JCC Kisumu - Jesus Celebration Centre, a vibrant church in Kisumu where lives are transformed through worship, fellowship, and the Word of God. Stay updated with sermons, ministries, and upcoming events.",
  keywords: [
    "JCC Kisumu",
    "Jesus Celebration Centre Kisumu",
    "Church in Kisumu",
    "Kisumu ministries",
    "Kisumu worship services",
    "Pentecostal church Kisumu",
  ],
  authors: [{ name: "Jesus Celebration Centre Kisumu" }],
  robots: "index, follow",
  icons: {
    icon: "/jcc-logo.png",
  },
  openGraph: {
    title: "JCC Kisumu | Jesus Celebration Centre",
    description:
      "The lighthouse of Africa. Join us for vibrant worship, weekly programs, youth services, and community impact in Kisumu, Kenya.",
    url: "https://jcckisumu.com",
    siteName: "JCC Kisumu",
    images: ["/jcc-logo.png"],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="giVAorAGAljiQdcqogVwIISkPSV_FjN3o5oA34aAdd4"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}