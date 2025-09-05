"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/jcc logo.png"
            alt="Church Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
  <span className="text-xl font-bold">Jesus Celebration Church - Kisumu</span>
</Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/sermons" className="text-sm font-medium transition-colors hover:text-primary">
            Sermons
          </Link>
          <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary">
            Events
          </Link>
          <Link href="/departments" className="text-sm font-medium transition-colors hover:text-primary">
            Departments
          </Link>
          <Link href="/home-bible-fellowship" className="text-sm font-medium transition-colors hover:text-primary">
            Home Bible Fellowship
          </Link>
          <Button variant="default" size="sm">
            Give
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/sermons"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Sermons
            </Link>
            <Link
              href="/events"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              href="/departments"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Departments
            </Link>
            <Link
              href="/home-bible-fellowship"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Home Bible Fellowship
            </Link>
            <Button variant="success" size="sm" className="w-full">
              Give
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
