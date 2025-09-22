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
      <head>
        <title>JCC Kisumu | Jesus Celebration Center</title>
<meta name="description" content="Welcome to JCC Kisumu - The lighthouse of Africa. Join us for vibrant worship, weekly programs, youth services, and community impact in Kisumu, Kenya." />
        <meta
          name="keywords"
          content="JCC Kisumu, Jesus Celebration Centre Kisumu, Church in Kisumu, Kisumu ministries, Kisumu worship services, Pentecostal church Kisumu"
        />
        {/* ✅ Optional: author & robots */}
        <meta name="author" content="Jesus Celebration Centre Kisumu" />
        <meta name="robots" content="index, follow" />
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
