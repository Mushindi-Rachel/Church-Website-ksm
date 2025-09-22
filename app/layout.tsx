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
  openGraph: {
    title: "JCC Kisumu - Jesus Celebration Centre",
    description:
      "Discover JCC Kisumu - The Light House of Africa. Join us for powerful worship, inspiring sermons, and life-changing ministries.",
    url: "https://jcckisumu.com",
    siteName: "JCC Kisumu",
    images: [
      {
        url: "/jcc logo.png",
        width: 1200,
        height: 630,
        alt: "JCC Kisumu Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JCC Kisumu - Jesus Celebration Centre",
    description:
      "The official website of JCC Kisumu. Get sermons, events, and ministry updates.",
    images: ["/jcc logo.png"],
  },
  icons: {
    icon: "/jcc logo.png",
  },
  }
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
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
