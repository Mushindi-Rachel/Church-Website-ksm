"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Tv, Radio, Clock, Globe, Youtube } from "lucide-react";

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sectionFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const featuredPrograms = [
  {
    title: "Faith Today",
    description:
      "A daily talk show discussing current events from a Christian perspective.",
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
];

const worshipPrograms = [
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
];

const teachingPrograms = [
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
];

const socialPlatforms = [
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
];

export default function TVPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <motion.section
        className="relative h-[300px] md:h-[400px] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionFadeUp}
      >
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="relative w-full h-full">
          <Image
            src="/Home/581A1333.JPG"
            alt="RVTv hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="max-w-3xl px-4"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Redeemer&apos;s Voice Tv
            </h1>
            <p className="text-lg md:text-xl text-white">Bringing the Liberating Truth</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction */}
      <motion.section
        className="py-16 bg-muted/50"
        initial="hidden"
        whileInView="visible"
        variants={sectionFadeUp}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={cardVariant}>
              <h2 className="text-3xl font-bold mb-6">About RVTv</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Redeemer&apos;s Voice TV was established in 2023 with a vision to reach millions of homes with the message of hope,
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
            </motion.div>

            <motion.div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden" variants={cardVariant}>
              <Image src="/Departments/media2.jpeg" alt="RVTv Studio" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Watch Live */}
      <motion.section
        id="watch-live"
        className="py-16"
        initial="hidden"
        whileInView="visible"
        variants={sectionFadeUp}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Watch RVTv Live</h2>

          <motion.div className="max-w-4xl mx-auto" variants={containerStagger} initial="hidden" animate="visible">
            <motion.div
              className="aspect-video bg-black relative rounded-lg overflow-hidden mb-6"
              variants={cardVariant}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  aria-label="Watch Live"
                  onClick={() => window.open("#", "_blank")}
                  className="text-center"
                >
                  <div className="bg-primary/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Play className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-white text-lg">Click to watch RVTv live stream</p>
                </button>
              </div>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-6 mb-8" variants={containerStagger}>
              <motion.div variants={cardVariant}>
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
              </motion.div>

              <motion.div variants={cardVariant}>
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
              </motion.div>

              <motion.div variants={cardVariant}>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Radio className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Radio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Partner stations across the region
                      <br />
                      Streaming audio available 24/7
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <div className="flex justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="#">Program Schedule</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Programs / Tabs */}
      <motion.section
        className="py-16 bg-muted/50"
        initial="hidden"
        whileInView="visible"
        variants={sectionFadeUp}
        viewport={{ once: true }}
      >
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
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                variants={containerStagger}
                viewport={{ once: true }}
              >
                {featuredPrograms.map((program, index) => (
                  <motion.div key={index} variants={cardVariant}>
                    <Card className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Image src={program.image} alt={program.title} fill className="object-cover" />
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
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="worship">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                variants={containerStagger}
                viewport={{ once: true }}
              >
                {worshipPrograms.map((program, index) => (
                  <motion.div key={index} variants={cardVariant}>
                    <Card className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Image src={program.image} alt={program.title} fill className="object-cover" />
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
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="teaching">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                variants={containerStagger}
                viewport={{ once: true }}
              >
                {teachingPrograms.map((program, index) => (
                  <motion.div key={index} variants={cardVariant}>
                    <Card className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Image src={program.image} alt={program.title} fill className="object-cover" />
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
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>

      {/* Program Schedule */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        variants={sectionFadeUp}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Weekly Program Schedule</h2>

          <motion.div className="max-w-4xl mx-auto" variants={containerStagger} initial="hidden" animate="visible">
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
                    <motion.div key={index} variants={cardVariant}>
                      <div>
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
                    </motion.div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild>
                  <Link href="#">Download Full Schedule</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Social Media & Platforms */}
      <motion.section
        className="py-16 bg-muted/50"
        initial="hidden"
        whileInView="visible"
        variants={sectionFadeUp}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Connect With Us</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerStagger}
            viewport={{ once: true }}
          >
            {socialPlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div key={index} variants={cardVariant}>
                  <Card className="text-center">
                    <CardHeader>
                      <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                        <Icon className="h-8 w-8 text-primary" />
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Support */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        variants={sectionFadeUp}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden" variants={cardVariant}>
              <Image src="/Departments/media3.jpeg" alt="Support Faith TV" fill className="object-cover" />
            </motion.div>

            <motion.div variants={cardVariant}>
              <h2 className="text-3xl font-bold mb-6">Support RVTv</h2>
              <p className="text-muted-foreground mb-6">
                RVTv is a non-profit ministry that relies on the generous support of viewers like you. Your
                giving helps us continue broadcasting the Gospel message to homes around the world and producing
                quality Christian programming that changes lives.
              </p>
              <p className="text-muted-foreground mb-6">
                When you partner with RVTv, you become part of a global mission to share God's love and truth
                through media. Your support enables us to reach people who might never enter a church building but can
                encounter Christ through their television, computer, or mobile device.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/give">Support Now</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#">Become a Partner</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-16 bg-primary text-primary-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Spreading the Gospel Through Media</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Join us in our mission to reach the world with the message of hope and salvation. Watch RVTv today and
            be part of a global community of believers.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="#watch-live">Watch RVTv Now</Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
