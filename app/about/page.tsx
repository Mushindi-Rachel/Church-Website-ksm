import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/bgAbout.jpg" alt="About Us" fill className="object-cover" priority />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-lg md:text-xl text-white">Learn more about our church, mission, and vision</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Jesus Celebration Center - Kisumu was established in 1995 by Bishop Mark Kegohi, whom God gave a burden 
                  of bringing the good news to deliver and restore the land of Kisumu.
                  {/* creating a welcoming community centered around God&apos;s word.  */}
                  Throughout the years, the church has become vibrant and has birthed other churches across Nyanza and Western region of Kenya.
                </p>
                <p>
                  Throughout our journey, we have remained committed to our founding principles of faith, love, and
                  service. Our church has evolved over the years, expanding our ministries and outreach programs, but
                  our core mission has remained unchanged: to spread God&apos;s love and word to all.
                </p>
                {/* <p>
                  Today, Church of Faith stands as a beacon of hope and spiritual guidance in our community. We continue
                  to grow and adapt to meet the changing needs of our congregation while staying true to the timeless
                  teachings of Christ.
                </p> */}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Church History" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Guided by faith and purpose, we strive to make a difference in our community and beyond.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To spread God&apos;s love through worship, fellowship, and service, creating a community where all
                  people can experience God&apos;s grace and grow in their faith journey. We are committed to sharing
                  the Gospel, nurturing spiritual growth, and serving others with compassion and humility.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a thriving, Christ-centered community that transforms lives through authentic worship,
                  meaningful relationships, and active service. We envision a church that bridges generational and
                  cultural divides, equipping disciples to carry God&apos;s message of hope and redemption to our
                  neighborhoods and the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Bishop Dr. Mark Kegohi",
                role: "Overseer",
                image: "/bishopMK.jfif?height=300&width=300",
                bio: ".",
              },
              {
                name: "Reverend Timothy Nzioka",
                role: "Pastor",
                image: "/pastorTim.jpg?height=300&width=300",
                bio: "",
              },
              {
                name: "Pastor Selina. K. Nzioka",
                role: "Pastor",
                image: "/pastorSelina.jpg?height=300&width=300",
                bio: "",
              },
              {
                name: "Pastor Luke Obeto",
                role: "Youth Pastor",
                image: "/placeholder.svg?height=300&width=300",
                bio: "",
              },
              
              {
                name: "Pastor David Otieno",
                role: "Pastor",
                image: "/placeholder.svg?height=300&width=300",
                bio: "",
              },
              {
                name: "Pastor David Lyanda",
                role: "Pastor",
                image: "/placeholder.svg?height=300&width=300",
                bio: "",
              },
              {
                name: "Pastor Vincent Miya",
                role: "Pastor",
                image: "/placeholder.svg?height=300&width=300",
                bio: "",
              },
            ].map((leader, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{leader.name}</CardTitle>
                  <p className="text-sm font-medium text-muted-foreground">{leader.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section id="service-times" className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Service Times</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-6">
                  <li className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-xl font-bold">Sunday Services</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="flex justify-between">
                        <span>First Service</span>
                        <span>6:30 AM - 9:30 AM</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Youth Service</span>
                        <span>9:30 AM - 11:30 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Main Service</span>
                        <span>11:30 AM - 2:00 PM</span>
                      </p>
                    </div>
                  </li>
                  <li className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-xl font-bold">Weekday Services</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="flex justify-between">
                        <span>Monday Prayer Meeting</span>
                        <span>5:30 PM - 7:30 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Wednesday Communion Service</span>
                        <span>5:30 PM - 7:30 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Friday Service</span>
                        <span>6:00 PM - 11:00 PM</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us This Sunday</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            We would love to welcome you to our church family. Come experience worship, fellowship, and the word of God
            with us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
              <Link href="/events">View Events</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
