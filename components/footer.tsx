import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">JCC Kisumu</h3>
          <p className="text-sm text-muted-foreground">The Light House of Africa.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/sermons" className="text-muted-foreground hover:text-primary">
                Sermons
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-muted-foreground hover:text-primary">
                Events
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold">Service Times</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-muted-foreground">
              <span className="font-medium">Sunday Main Service:</span> 11:30 AM - 2:00 PM
            </li>
            <li className="text-muted-foreground">
              <span className="font-medium">Youth Service:</span> Sunday, 9:00 PM - 11:00 AM
            </li>
            <li className="text-muted-foreground">
              <span className="font-medium">Prayer Meeting:</span> Monday, 5:30 PM - 7:00 PM
            </li>
            <li className="text-muted-foreground">
              <span className="font-medium">Communion Service</span> Wednesday, 5:30 PM - 7:00 PM
            </li>
            <li className="text-muted-foreground">
              <span className="font-medium">Mini-Kesha:</span>Friday, 6:00 PM - 11:00 PM
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
          <address className="not-italic space-y-2 text-sm text-muted-foreground">
            <p></p>
            <p></p>
            <p>Phone: +25474 567 890</p>
            <p>Email: info@jcc.org</p>
          </address>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} JCC - Kisumu. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
