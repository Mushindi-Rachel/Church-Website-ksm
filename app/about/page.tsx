"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/church (1).jpeg" alt="About Us" fill className="object-cover" priority />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl px-4"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Who we are</h1>
            <p className="text-lg md:text-xl text-white">Learn more about our church, mission, and vision</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Jesus Celebration Center - Kisumu was established in 1995 by Bishop Mark Kegohi, whom God gave a burden 
                  of bringing the good news to deliver and restore the land of Kisumu.
                  Throughout the years, the church has become vibrant and has birthed other churches across Nyanza and Western region of Kenya.
                </p>
                <p>
                  Throughout our journey, we have remained committed to our founding principles of faith, love, and
                  service. Our church has evolved over the years, expanding our ministries and outreach programs, but
                  our core mission has remained unchanged: to spread God&apos;s love and word to all.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image src="/church (1).jpeg" alt="Church History" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#e0e7ff20,_transparent_70%)]"></div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Identity</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md border border-purple-300 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-700">Our Mission</h3>
              <p className="text-gray-700">
                Taking the gospel to the nations.  
                <br />
                <span className="italic text-blue-600">Mark 16:16</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md border border-blue-300 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Our Vision</h3>
              <p className="text-gray-700">
                Equipping the saints for the work of ministry.  
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-8 text-pink-700">Our Core Values</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Excellence",
                "Creativity",
                "Diligence",
                "Unity",
                "Integrity",
                "Love",
                "Holiness",
                "Service",
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-28 h-28 flex items-center justify-center text-center 
                             bg-gradient-to-r from-blue-200 to-red-200 text-gray-800 
                             rounded-full shadow-sm border border-gray-200 hover:shadow-md transition"
                >
                  <span className="text-sm font-semibold">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Leadership
          </motion.h2>
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section id="service-times" className="py-16 bg-muted/50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Service Times
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-600 to-blue-400 text-white overflow-hidden animate-gradient-x">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,_#ffffff33,_transparent_40%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative container text-center"
        >
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg">
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
        </motion.div>
      </section>
    </div>
  )
}
