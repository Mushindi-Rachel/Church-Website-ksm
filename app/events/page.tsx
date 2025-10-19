"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin } from "lucide-react"
import GiveModal from "@/components/givemodal"

// Sample events data
const upcomingEvents = [

  {
    id: 1,
    title: "International Children Empowerment Camp",
    date: "December 07 , 2025 - December 13 , 2025",
    time: "Whole Day",
    location: "Kipsigis High School - Kericho",
    image: "/Departments/children/ICE.jpeg",
    description: "",
  },
  
  {
    id: 2,
    title: "Youth Ablaze Conference",
    date: "December 15 , 2025 - December 20 , 2025",
    time: "Whole Day",
    location: "JCC Kisumu Sanctuary",
    image: "/ABLAZE.png",
    description: "",
  },
]

const pastEvents = [
  {
    id: 6,
    title: "30th Anniversary",
    date: "October 05, 2025 - October 10, 2025",
    time: "Whole Day",
    location: "JCC Kisumu Sanctuary",
    image: "/30thAnniversary.jpeg",
    description: "",
  },

  {
    id: 7,
    title: "Women of Great Influence",
    date: "August 13, 2025 - August 15, 2025",
    time: "All Day",
    location: "JCC Kisumu Sanctuary",
    image: "/wogi.jfif?height=300&width=500",
    description: "",
  },
  {
    id: 8,
    title: "Mountain Takers Conference",
    date: "April , 2025",
    time: "All Day",
    location: "JCC Kisumu Sanctuary",
    image: "/mtc2025?height=300&width=500",
    description: "A 5 day conference of experiencing God's presence.",
  },
]

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  /* ------------------- State ------------------- */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGiveOpen, setIsGiveOpen] = useState(false);



  // Close modal on Escape and lock scrolling when modal open
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedImage(null)
    }

    if (selectedImage) {
      document.addEventListener("keydown", onKey)
      // lock scroll
      const original = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.removeEventListener("keydown", onKey)
        document.body.style.overflow = original
      }
    }
    return
  }, [selectedImage])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-[300px] md:h-[400px] overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/eventsbg.jfif" alt="Events" fill className="object-cover" priority />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Events</h1>
            <p className="text-lg md:text-xl text-white">Join us for worship, fellowship, and community</p>
          </div>
        </div>
      </motion.section>

      {/* Featured Event */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-muted/50"
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Event</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
            >
              <Image src="/30thAnniversary.jpeg" alt="Annual Church Picnic" fill className="object-contain" />
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              <h3 className="text-2xl font-bold mb-4">30th Anniversary</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-muted-foreground">October 5th - 10th, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Time</p>
                    <p className="text-muted-foreground">All Day</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">JCC Kisumu Sanctuary</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                This is a special invitation to all sons, daughters and friends whose lives and families have been impacted by this ministry since October 1995. It's time to give glory to God, Purpose to join us in thanksgiving!
              </p>
              <div className="flex gap-4">
                {/* <Button asChild>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLScR4DmO7d0ZnvbvBoy0szQsz0gpz3WoyFvoAHY-1FJDePmZkg/viewform?usp=dialog">Register</Link>
                </Button> */}
                <Button asChild variant="outline">
                  <Link href="#">View Magazine</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Events List */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="upcoming">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, staggerChildren: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {upcomingEvents.map((event) => (
                  <motion.div key={event.id} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                    <Card className="overflow-hidden flex flex-col">
                      <div
                        className="aspect-video relative cursor-pointer"
                        onClick={() => setSelectedImage(event.image)}
                        role="button"
                        aria-label={`Open flyer for ${event.title}`}
                      >
                        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-contain" />
                      </div>
                      <CardHeader>
                        <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                          <span>{event.location}</span>
                        </div>
                        <p className="text-muted-foreground line-clamp-3">{event.description}</p>
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <Button variant="outline" onClick={() => setIsGiveOpen(true)}>Partner With Us</Button>
                              <GiveModal isOpen={isGiveOpen} onClose={() => setIsGiveOpen(false)} />
                        <Button asChild className="w-full">
                          <Link href={`https://docs.google.com/forms/d/e/1FAIpQLScR4DmO7d0ZnvbvBoy0szQsz0gpz3WoyFvoAHY-1FJDePmZkg/viewform?usp=dialog`}>Register Now!</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Past Events */}
            <TabsContent value="past">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, staggerChildren: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {pastEvents.map((event) => (
                  <motion.div key={event.id} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                    <Card className="overflow-hidden flex flex-col">
                      <div
                        className="aspect-video relative cursor-pointer"
                        onClick={() => setSelectedImage(event.image)}
                        role="button"
                        aria-label={`Open flyer for ${event.title}`}
                      >
                        <Image src={event.image || "/mtc2025"} alt={event.title} fill className="object-contain" />
                      </div>
                      <CardHeader>
                        <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                          <span>{event.location}</span>
                        </div>
                        <p className="text-muted-foreground line-clamp-3">{event.description}</p>
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <Button asChild variant="outline" className="w-full">
                          <Link href={`/events/${event.id}`}>View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Calendar Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-muted/50"
      >
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Church Calendar</h2>
          <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
            View our full calendar to stay up-to-date with all church events, services, and activities.
          </p>
          <Button asChild size="lg">
            <Link href="#">View Full Calendar</Link>
          </Button>
        </div>
      </motion.section>

      {/* Event Registration CTA */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-600 to-blue-400 text-white overflow-hidden animate-gradient-x"
      >
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,_#ffffff33,_transparent_40%)]"></div>

        <div className="relative container text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-6">Need Help with Registration?</h2>
            <p className="mb-8 text-lg">
              If you need assistance registering for any of our events or have questions,
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 hover:scale-105 transition-transform"
              >
                <Link href="#">Contact Us</Link>
              </Button>
              
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Flyer Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative w-[90%] md:w-[80%] lg:w-[70%] h-[80%] md:h-[80%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-lg">
              <Image src={selectedImage} alt="Event Flyer" fill className="object-contain rounded-lg" />
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/80 text-black px-3 py-1 rounded-lg font-bold hover:bg-white"
              aria-label="Close flyer"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
