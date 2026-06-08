"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react"

// Carousel data
const slides = [
  {
    id: 1,
    image: "/Home/581A1359.JPG",
    title: "Welcome to JCC - Kisumu",
    description: "Join us in worship and fellowship every Sunday",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
  {
    id: 2,
    image: "/school/school1(15).jpeg",
    title: "Bishop Mark Care Center School",
    description: "Empowering Children with Knowledge, Skills & Christian Values",
    buttonText: "Learn More",
    buttonLink: "/school",
  },

  //   id: 3,
  //   image: "/bishopMK.jfif",
  //   title: "Bishop Mark Kegohi Foundation",
  //   description: "Supporting community initiatives and charitable projects",
  //   buttonText: "Learn More",
  //   buttonLink: "/foundation",
  // },
  {
    id: 3,
    image: "/Home/581A1333.JPG",
    title: "RVTV",
    description: "Spreading the Gospel through media and broadcasting",
    buttonText: "Learn More",
    buttonLink: "/tv",
  },
  { 
    id: 4,
      image: "/Home/IMG_E2997.JPG",
      title: "Equator Pastoral Resort",
      description: "Enjoy Zero Latitude Experience",
      buttonText: "Learn More",
      buttonLink: "https://equatorpastoralresort.com/",
    },
  {
    id: 5,
    image: "/Departments/581A1348.JPG",
    title: "Sunday Service",
    description: "Experience the power of worship with our community",
    buttonText: "Service Times",
    buttonLink: "/about#service-times",
  },
  {
    id: 6,
    image: "/hbf-background.png",
    title: "Bible Study",
    description: "Deepen your understanding of God's word",
    buttonText: "Join Us",
    buttonLink: "/home-bible-fellowship",
  },
]

// Weekly programs data
const weeklyPrograms = [
  {
    day: "Sunday",
    events: [
      { time: "6:00 AM - 9:30 AM", name: "First Service" },
      { time: "9:30 AM - 11:00 PM", name: "Youth Service" },
      { time: "11:30 AM - 2:00 PM", name: "Main Service" },
    ],
  },
  {
    day: "Monday",
    events: [
      { time: "5:30 AM - 7:00 AM", name: "Morning Glory" },
      { time: "12:30 PM - 2:00 PM", name: "Grace Hour" },
      { time: "5:00 PM - 6:30 PM", name: "Prayer Meeting" },
    ],
  },
  {
    day: "Tuesday",
    events: [
      { time: "5:30 AM - 7:00 AM", name: "Morning Glory" },
      { time: "12:30 PM - 2:00 PM", name: "Grace Hour" },
      { time: "5:00 PM - 6:30 PM", name: "Home Bible Fellowship" },
    ],
  },
  {
    day: "Wednesday",
    events: [
      { time: "5:30 AM - 7:00 AM", name: "Morning Glory" },
      { time: "12:30 PM - 2:00 PM", name: "Grace Hour" },
      { time: "5:00 PM - 6:30 PM", name: "Communion Service" },
    ],
  },
  {
    day: "Thursday",
    events: [
      { time: "5:30 AM - 7:00 AM", name: "Morning Glory" },
      { time: "12:30 PM - 2:00 PM", name: "Grace Hour" },
      { time: "5:00 PM - 6:30 PM", name: "Home Bible Fellowship" },
    ],
  },
  {
    day: "Friday",
    events: [
      { time: "5:30 AM - 7:00 AM", name: "Morning Glory" },
      { time: "12:30 PM - 2:00 PM", name: "Grace Hour" },
      { time: "9:00 PM - 4:00 AM", name: "Kesha" },
    ],
  },
]

// Church services data
const churchServices = [
  {
    title: "Sunday Worship",
    description: "Join us for praise, worship, and the Word of God every Sunday.",
    image: "/worship.jpg",
  },
  {
    title: "Bible Study",
    description: "Deepen your understanding of scripture through our weekly Bible studies.",
    image: "/hbf-background.png",
  },
  {
    title: "Youth Ministry",
    description: "Engaging programs designed specifically for our young members.",
    image: "/youthService.jpg",
  },
  {
    title: "Communion Service",
    description: "A moment of reflection on the ultimate sacrifice of the cross and fellowshiping together in communion.",
    image: "/communion.webp",
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src={slide.image || "/hbf-background.png"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <motion.div
              className="relative z-20 flex h-full items-center justify-center text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="max-w-3xl px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl text-white mb-8">{slide.description}</p>
                <Button asChild size="lg">
                  <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-8 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <motion.section
        className="py-16 bg-muted/50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to JCC - Kisumu</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
            We are a community of believers dedicated to spreading God&apos;s love and word. Our mission is to equip saints with the work of the ministry.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/about">About Us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/sermons">Latest Sermons</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Weekly Programs Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Weekly Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklyPrograms.map((program) => (
              <motion.div
                key={program.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{program.day}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {program.events.map((event, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">{event.name}</p>
                            <p className="text-sm text-muted-foreground">{event.time}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Church Services Section */}
      <motion.section
        className="py-16 bg-muted/50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {churchServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Upcoming Event Banner */}
      <motion.section
        className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-600 to-blue-400 text-white overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h3 className="text-2xl font-bold mb-2">Mountain Takers Conference</h3>
              <p className="flex items-center gap-2 mb-1">
                <Clock className="h-5 w-5" />
                <span>April 12th - 17th All Day</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>JCC - Kisumu Sanctuary</span>
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Button asChild variant="white" size="lg">
                <Link href="/events">View All Events</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
