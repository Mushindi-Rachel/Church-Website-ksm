"use client";

import { useState } from "react";
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
import { Youtube, Facebook, Twitch, Music4 as Tiktok } from "lucide-react";
import GiveModal from "@/components/givemodal";

export default function TVPage() {
  /* ------------------- State ------------------- */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGiveOpen, setIsGiveOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  /* ------------------- Animation Variants ------------------- */
  const containerStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  /* ------------------- Program Data ------------------- */
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
      description:
        "Inspiring testimonies of lives changed through faith in Jesus Christ.",
      image: "/placeholder.svg?height=300&width=500",
      time: "Saturdays at 7:00 PM",
    },
    {
      title: "Family Matters",
      description:
        "Practical advice for building strong, Christ-centered families.",
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
    description:
      "A program for new believers covering the basics of Christianity.",
    image: "/placeholder.svg?height=300&width=500",
    time: "Saturdays at 9:00 AM",
  },
];

/* ------------------- Social Platforms ------------------- */
const socialPlatforms = [
  {
    title: "YouTube",
    description: "Watch sermons, gospel music, and live service coverage.",
    icon: Youtube,
    link: "https://www.youtube.com/@BspMarkKEGOHI", 
    linkText: "Subscribe",
  },
  {
    title: "Facebook",
    description: "Follow us for updates, live streams, and uplifting content.",
    icon: Facebook,
    link: "https://www.facebook.com/BspMarkKEGOHI.RedeemersVoiceTV",
    linkText: "Follow",
  },
  {
    title: "Twitch",
    description: "Join our live broadcasts and gospel sessions on Twitch.",
    icon: Twitch,
    link: "https://www.twitch.tv/redeemersvoicetv",
    linkText: "Watch Live",
  },
  {
    title: "TikTok",
    description: "Get short gospel clips, music, and highlights on TikTok.",
    icon: Tiktok, 
    link: "https://www.tiktok.com/@redeemersvoicetv",
    linkText: "Follow",
  },
];


  return (
    <div className="flex flex-col min-h-screen">
      {/* ---------------- Hero ---------------- */}
      <motion.section
        className="relative h-[300px] md:h-[400px] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="absolute inset-0 z-10 bg-black/50" />
        <Image
          src="/Home/581A1333.JPG"
          alt="RVTv Hero Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="max-w-3xl px-4"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Redeemer&apos;s Voice TV
            </h1>
            <p className="text-lg md:text-xl text-white">
              Bringing the Liberating Truth
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ---------------- About ---------------- */}
      <motion.section
        className="py-16 bg-muted/50"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={cardVariant}>
            <h2 className="text-3xl font-bold mb-6">About RVTv</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Redeemer’s Voice TV is a God-given vision birthed in the heart
                of our Man of God, Bishop Mark Kegohi, as early as the year
                2000. After years of prayer, preparation, and persistence, the
                vision was officially registered with the Communications
                Authority of Kenya (CAK) in 2022, and by the grace of God, it
                came to fruition on the 5th of December the same year.
              </p>
              <p>
                <strong>Mission:</strong> Bringing the liberating truth of the
                Gospel to every home and heart.
              </p>
              <p>
                <strong>Vision:</strong> To elevate lives through the Word of
                God, educate believers with sound doctrine, eradicate ignorance,
                and reach the unreached with Christ’s love and salvation.
              </p>
            </div>
            <div className="mt-6">
              <Button asChild aria-label="Watch RVTv live on Twitch">
                <Link href="https://www.twitch.tv/redeemersvoicetv">
                  Watch Live
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
            variants={cardVariant}
          >
            <Image
              src="/Departments/media2.jpeg"
              alt="RVTv Studio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ---------------- Programs ---------------- */}
      <motion.section
        className="py-16 container"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          Program Schedule
        </h2>
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-xl mx-auto mb-8">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="worship">Worship</TabsTrigger>
            <TabsTrigger value="teaching">Teaching</TabsTrigger>
          </TabsList>

          {/* Featured */}
          <TabsContent value="featured">
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={containerStagger}
              initial="hidden"
              animate="visible"
            >
              {featuredPrograms.map((program, idx) => (
                <motion.div key={idx} variants={cardVariant}>
                  <Card className="overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-48"
                    />
                    <CardHeader>
                      <CardTitle>{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {program.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm font-medium text-primary">
                        {program.time}
                      </p>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Worship */}
          <TabsContent value="worship">
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={containerStagger}
              initial="hidden"
              animate="visible"
            >
              {worshipPrograms.map((program, idx) => (
                <motion.div key={idx} variants={cardVariant}>
                  <Card className="overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-48"
                    />
                    <CardHeader>
                      <CardTitle>{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {program.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm font-medium text-primary">
                        {program.time}
                      </p>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Teaching */}
          <TabsContent value="teaching">
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={containerStagger}
              initial="hidden"
              animate="visible"
            >
              {teachingPrograms.map((program, idx) => (
                <motion.div key={idx} variants={cardVariant}>
                  <Card className="overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-48"
                    />
                    <CardHeader>
                      <CardTitle>{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {program.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm font-medium text-primary">
                        {program.time}
                      </p>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.section>

      {/* ---------------- Connect With Us ---------------- */}
      <motion.section
        className="py-16 bg-muted/50"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-10">Connect With Us</h2>
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={containerStagger}
            initial="hidden"
            animate="visible"
          >
            {socialPlatforms.map((platform, idx) => (
              <motion.div key={idx} variants={cardVariant}>
                <Card className="h-full flex flex-col justify-between">
                  <CardHeader>
                    <platform.icon className="w-10 h-10 mb-2 text-primary" />
                    <CardTitle>{platform.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {platform.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={platform.link} aria-label={platform.linkText}>
                        {platform.linkText}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ---------------- Support ---------------- */}
<motion.section
  className="py-16 container"
  initial="hidden"
  whileInView="visible"
  variants={fadeUp}
  viewport={{ once: true }}
>
  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Image First */}
    <motion.div
      className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
      variants={cardVariant}
    >
      <Image
        src="/Departments/media4.jpeg" 
        alt="media-support"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain"
      />
    </motion.div>

    {/* Text Content */}
    <motion.div
      className="text-center md:text-left"
      variants={cardVariant}
    >
      <h2 className="text-3xl font-bold mb-6">Support RVTv</h2>
      <p className="text-muted-foreground mb-8">
        Your generous support helps us continue spreading the Gospel to
        millions of viewers worldwide. Together, we can make an eternal
        impact.
      </p>
      <Button variant="default" size="sm" onClick={() => setIsGiveOpen(true)}>Partner With Us</Button>
      <GiveModal isOpen={isGiveOpen} onClose={() => setIsGiveOpen(false)} />
      
    </motion.div>
  </div>
</motion.section>


          

      {/* ---------------- Call To Action ---------------- */}
      <motion.section
        className="py-16 bg-primary text-primary-foreground"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Tune in to Redeemer&apos;s Voice TV
          </h2>
          <p className="mb-8 text-lg">
            Experience uplifting programs that inspire, educate, and transform
            lives.
          </p>
          <Button
            variant="secondary"
            size="lg"
            asChild
            aria-label="Watch RVTv Live"
          >
            <Link href="https://www.twitch.tv/redeemersvoicetv">
              Watch Live
            </Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
