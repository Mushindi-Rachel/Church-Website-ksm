import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin } from "lucide-react"

// Sample events data
const upcomingEvents = [
  {
    id: 1,
    title: "30th Anniversary",
    date: "October 05, 2025 - October 10, 2025",
    time: "Whole Day",
    location: "JCC Kisumu Sanctuary",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "",
  },
  {
    id: 2,
    title: "Youth Ablaze",
    date: "December 15 , 2025 - December 20 , 2025",
    time: "Whole Day",
    location: "JCC Kisumu Sanctuary",
    image: "/youthAblaze.jfif?height=300&width=500",
    description: "",
  },
  // {
  //   id: 4,
  //   title: "Community Outreach Day",
  //   date: "July 22, 2023",
  //   time: "8:00 AM - 2:00 PM",
  //   location: "City Park",
  //   image: "/placeholder.svg?height=300&width=500",
  //   description:
  //     "Join us as we serve our community through various service projects and share God's love with our neighbors.",
  // },
  // {
  //   id: 5,
  //   title: "Men's Breakfast",
  //   date: "August 5, 2023",
  //   time: "7:30 AM - 9:30 AM",
  //   location: "Fellowship Hall",
  //   image: "/placeholder.svg?height=300&width=500",
  //   description: "A time of fellowship, food, and spiritual encouragement for men of all ages.",
  // },
  // {
  //   id: 6,
  //   title: "Family Fun Day",
  //   date: "August 19, 2023",
  //   time: "11:00 AM - 3:00 PM",
  //   location: "Church Grounds",
  //   image: "/placeholder.svg?height=300&width=500",
  //   description: "A day of games, food, and fun for the whole family. Invite your friends and neighbors!",
  // },
]

const pastEvents = [
  {
    id: 7,
    title: "Mountain Takers Conference",
    date: "April , 2025",
    time: "All Day",
    location: "JCC Kisumu Sanctuary",
    image: "/mtc2025?height=300&width=500",
    description: "A 5 day conference of experiencing God's presence.",
  },
    {
     id: 8,
    title: "Women of Great Influence",
    date: "August 13, 2025 - August 15, 2025",
    time: "All Day",
    location: "JCC Kisumu Sanctuary",
    image: "/wogi.jfif?height=300&width=500",
    description:
      "",
   },
  // {
  //   id: 9,
  //   title: "Youth Rally",
  //   date: "February 18, 2023",
  //   time: "6:00 PM - 9:00 PM",
  //   location: "Youth Center",
  //   image: "/placeholder.svg?height=300&width=500",
  //   description: "An evening of worship, games, and fellowship for youth and young adults.",
  // },
]

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/eventsbg.jfif" alt="Events" fill className="object-cover" priority />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Events</h1>
            <p className="text-lg md:text-xl text-white">Join us for worship, fellowship, and community</p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Event</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/jcc-ksm.jfif"
                alt="Annual Church Picnic"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">30th Anniversary</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-muted-foreground">October, 2023</p>
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
                Join us for our 30th anniversary! Come celebrate 30 years of God's faithfulness with us!
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#">Register</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#">Add to Calendar</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden flex flex-col">
                    <div className="aspect-video relative">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
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
                      <Button asChild className="w-full">
                        <Link href={`https://youthablaze2025.netlify.app/`}>Register Now!</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden flex flex-col">
                    <div className="aspect-video relative">
                      <Image src={event.image || "/mtc2025"} alt={event.title} fill className="object-cover" />
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
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Church Calendar</h2>
          <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
            View our full calendar to stay up-to-date with all church events, services, and activities.
          </p>
          <Button asChild size="lg">
            <Link href="#">View Full Calendar</Link>
          </Button>
        </div>
      </section>

      {/* Event Registration */}
      <section className="relative py-20 bg-gradient-to-r from-blue-700 via-purple-600 to-red-600 text-white overflow-hidden">
  {/* Background pattern overlay */}
  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,_#ffffff33,_transparent_40%)]"></div>

  <div className="relative container text-center">
    <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg">
      <h2 className="text-4xl font-bold mb-6">Need Help with Registration?</h2>
      <p className="mb-8 text-lg">
        If you need assistance registering for any of our events or have questions, 
        please don't hesitate to contact us.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {/* Primary Button */}
        <Button
          asChild
          size="lg"
          className="bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 hover:scale-105 transition-transform"
        >
          <Link href="#">Contact Us</Link>
        </Button>

        {/* Secondary Button */}
        <Button
          asChild
          variant="outline"
          size="lg"
          className="bg-transparent text-white border-white hover:bg-white/20 transition-colors"
        >
          <Link href="#">Learn More</Link>
        </Button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
