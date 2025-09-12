import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Tv, Radio, Clock, Globe, Youtube } from "lucide-react"

export default function TVPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/Home/581A1333.JPG" alt="RVTv" fill className="object-cover" priority />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Redeemer's Voice Tv</h1>
            <p className="text-lg md:text-xl text-white">Bringing the Liberating Truth</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About RVTv</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Redeemer's Voice TV was established in 2023 with a vision to reach millions of homes with the message of hope,
                  faith, and salvation through Jesus Christ. As the media ministry of Church of Faith, we broadcast
                  inspirational programming 24 hours a day, 7 days a week.
                </p>
                <p>
                  Our mission is to use the power of television, radio, and digital media to share the Gospel, provide
                  biblical teaching, and offer encouragement to viewers around the world. Through a variety of programs,
                  we aim to strengthen believers in their faith and introduce non-believers to the life-changing message
                  of Jesus Christ.
                </p>
                <p>
                  RVTv is committed to producing high-quality, engaging content that addresses the spiritual,
                  emotional, and practical needs of our audience. Whether through worship services, Bible studies, talk
                  shows, or special events, we strive to create programming that inspires, educates, and transforms
                  lives.
                </p>
              </div>
              <div className="mt-6">
                <Button asChild>
                  <Link href="#watch-live">Watch Live</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src="/Home/581A1333.JPG" alt="RVTv Studio" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Watch Live Section */}
      <section id="watch-live" className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Watch RVTv Live</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-black relative rounded-lg overflow-hidden mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-primary/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Play className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-white text-lg">Click to watch RVTv live stream</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Tv className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">TV Broadcast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Channel 45 on local cable
                    <br />
                    Channel 789 on SatelliteTV
                    <br />
                    Available nationwide
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Online Streaming</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Watch on our website
                    <br />
                    Mobile app available
                    <br />
                    Smart TV applications
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center gap-4">
        
              <Button asChild variant="outline">
                <Link href="#">Program Schedule</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <Tabs defaultValue="featured" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="featured">Featured Shows</TabsTrigger>
                <TabsTrigger value="worship">Worship Services</TabsTrigger>
                <TabsTrigger value="teaching">Bible Teaching</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="featured">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Faith Today",
                    description: "A daily talk show discussing current events from a Christian perspective.",
                    image: "/placeholder.svg?height=300&width=500",
                    time: "Weekdays at 9:00 AM",
                  },
                  {
                    title: "Life Transformed",
                    description: "Inspiring testimonies of lives changed through faith in Jesus Christ.",
                    image: "/placeholder.svg?height=300&width=500",
                    time: "Saturdays at 7:00 PM",
                  },
                  {
                    title: "Family Matters",
                    description: "Practical advice for building strong, Christ-centered families.",
                    image: "/placeholder.svg?height=300&width=500",
                    time: "Wednesdays at 8:00 PM",
                  },
                ].map((program, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{program.title}</CardTitle>
                      <p className="text-sm font-medium text-muted-foreground">{program.time}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{program.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">Watch Episodes</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="worship">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Sunday Service",
                    description: "Live broadcast of our weekly Sunday worship services.",
                    image: "/placeholder.svg?height=300&width=500",
                    time: "Sundays at 10:30 AM",
                  },
                  {
                    title: "Praise & Worship",
                    description: "A program dedicated to worship music and spiritual reflection.",
                    image: "/placeholder.svg?height=300&width=500",
                    time: "Fridays at 7:00 PM",
                  },
                  {
                    title: "Special Services",
                    description: "Holiday services and special events from Church of Faith.",
                    image: "/placeholder.svg?height=300&width=500",
                    time: "Various times",
                  },
                ].map((program, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{program.title}</CardTitle>
                      <p className="text-sm font-medium text-muted-foreground">{program.time}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{program.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">Watch Episodes</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="teaching">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Word for Today",
                    description: "Daily Bible teaching with Pastor John Smith.",
                    image: "/placeholder.svg?height=300&width=500",
                    time: "Weekdays at 6:00 AM",
                  },
                  {
                    title: "Bible Study Hour",
                    description: "In-depth exploration of Scripture with guest teachers.",
                    image: "/placeholder.svg?height=300&width=500",
                    time: "Tuesdays at 8:00 PM",
                  },
                  {
                    title: "Foundations of Faith",
                    description: "A program for new believers covering the basics of Christianity.",
                    image: "/placeholder.svg?height=300&width=500",
                    time: "Saturdays at 9:00 AM",
                  },
                ].map((program, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{program.title}</CardTitle>
                      <p className="text-sm font-medium text-muted-foreground">{program.time}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{program.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">Watch Episodes</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Weekly Program Schedule</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {[
                    {
                      day: "Sunday",
                      programs: [
                        { time: "8:00 AM", title: "Sunday Morning Devotional" },
                        { time: "10:30 AM", title: "Live Sunday Service" },
                        { time: "4:00 PM", title: "Youth Service" },
                        { time: "7:00 PM", title: "Evening Worship" },
                      ],
                    },
                    {
                      day: "Monday - Friday",
                      programs: [
                        { time: "6:00 AM", title: "Word for Today" },
                        { time: "9:00 AM", title: "Faith Today" },
                        { time: "12:00 PM", title: "Midday Prayer" },
                        { time: "3:00 PM", title: "Children's Hour" },
                        { time: "7:00 PM", title: "Evening Programming (varies by day)" },
                      ],
                    },
                    {
                      day: "Saturday",
                      programs: [
                        { time: "7:00 AM", title: "Weekend Worship" },
                        { time: "9:00 AM", title: "Foundations of Faith" },
                        { time: "1:00 PM", title: "Family Movie Matinee" },
                        { time: "7:00 PM", title: "Life Transformed" },
                      ],
                    },
                  ].map((schedule, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-bold mb-4">{schedule.day}</h3>
                      <div className="space-y-2">
                        {schedule.programs.map((program, idx) => (
                          <div key={idx} className="flex justify-between items-center py-2 border-b">
                            <div className="flex items-center gap-3">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>{program.time}</span>
                            </div>
                            <span className="font-medium">{program.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild>
                  <Link href="#">Download Full Schedule</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media & Digital Platforms */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Connect With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "YouTube Channel",
                description: "Subscribe to our channel for sermons, devotionals, and exclusive content.",
                icon: Youtube,
                link: "#",
                linkText: "Subscribe",
              },
              {
                title: "Podcast",
                description: "Listen to our programs on-the-go with our podcast available on all major platforms.",
                icon: Radio,
                link: "#",
                linkText: "Listen Now",
              },
              {
                title: "Mobile App",
                description: "Download our app for iOS and Android to watch and listen anytime, anywhere.",
                icon: Globe,
                link: "#",
                linkText: "Download",
              },
              {
                title: "On-Demand Library",
                description: "Access our archive of past programs, sermons, and special events.",
                icon: Play,
                link: "#",
                linkText: "Browse Library",
              },
            ].map((platform, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    <platform.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{platform.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{platform.description}</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button asChild variant="outline">
                    <Link href={platform.link}>{platform.linkText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Faith TV */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Support Faith TV" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Support RVTv</h2>
              <p className="text-muted-foreground mb-6">
                RVTv is a non-profit ministry that relies on the generous support of viewers like you. Your
                giving help us continue broadcasting the Gospel message to homes around the world and producing
                quality Christian programming that changes lives.
              </p>
              <p className="text-muted-foreground mb-6">
                When you partner with RVTv, you become part of a global mission to share God's love and truth
                through media. Your support enables us to reach people who might never enter a church building but can
                encounter Christ through their television, computer, or mobile device.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/Give">Support Now</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#">Become a Partner</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Spreading the Gospel Through Media</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Join us in our mission to reach the world with the message of hope and salvation. Watch Faith TV today and
            be part of a global community of believers.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="#watch-live">Watch RVTv Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
