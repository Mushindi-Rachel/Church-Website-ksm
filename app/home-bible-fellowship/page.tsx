"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

// Sample HBF groups data
const hbfGroups = [
  {
    id: 1,
    name: "Milimani Fellowship",
    location: "Milimani",
    meetingTime: "Tuesday & Thursday, 5:00 PM",
    leaders: "David Oyugi",
    description:
      "A welcoming group for all ages focusing on building a strong foundation in faith through Bible study and discussion.",
    // image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    name: "Migosi Region",
    location: "Migosi",
    meetingTime: "Tuesday & Thursday, 5:00 PM",
    leaders: "",
    description:
      "A dynamic group for young adults navigating faith, career, relationships, and purpose in today's world.",
    // image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    name: "Manyatta Region",
    location: "Manyatta",
    meetingTime: "Tuesday & Thursday, 5:00 PM",
    leaders: "Dominic Odoyo ",
    description:
      "A group designed for families to grow together in faith with activities for both parents and children.",
    // image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    name: "Nyamasaria Region",
    location: "Nyamasaria",
    meetingTime: "Tuesday & Thursday, 5:00 PM",
    leaders: "Sospeter Onunga",
    description: "A fellowship group for seniors to study God's word, share life experiences, and support one another.",
    // image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    name: "Central",
    location: "Polyview",
    meetingTime: "Tuesday & Thursday, 5:00 PM",
    leaders: "",
    description: "A supportive environment for those new to the faith to learn the fundamentals of Christianity.",
    // image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    name: "Nyalenda",
    location: "Nyalenda",
    meetingTime: "Tuesday & Thursday, 5:00 PM",
    leaders: "Matthews Orendo",
    description: "A supportive environment for those new to the faith to learn the fundamentals of Christianity.",
    // image: "/placeholder.svg?height=300&width=500",
  },
]

export default function HomeBibleFellowshipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/hbf-background.png" alt="Home Bible Fellowship" fill className="object-cover" priority />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl px-4"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Home Bible Fellowship</h1>
            <p className="text-lg md:text-xl text-white">
              Connect, grow, and build community in a small group setting
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-6">What is Home Bible Fellowship?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Home Bible Fellowship (HBF) groups are the heart of our church community. These small groups meet
                  regularly in homes throughout our city to study God's Word, pray together, and build meaningful
                  relationships.
                </p>
                <p>
                  We believe that spiritual growth happens best in community, and HBF groups provide the perfect
                  environment for that growth.
                </p>
                <p>
                  Whether you're new to faith or have been walking with God for years, there's an HBF group that's right
                  for you.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src="/bblStudy.jfif" alt="Home Bible Fellowship Group" fill className="object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HBF Groups */}
      <section id="hbf-groups" className="py-16">
        <div className="container">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Find Your Group
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {hbfGroups.map((group) => (
              <motion.div key={group.id} variants={fadeInUp}>
                <Card className="overflow-hidden flex flex-col hover:shadow-lg transition">
                  {/* <div className="aspect-video relative">
                    <Image src={group.image || "/hbf-background.png"} alt={group.name} fill className="object-cover" />
                  </div> */}
                  <CardHeader>
                    <CardTitle>{group.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>Led by: {group.leaders}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{group.location}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{group.meetingTime}</span>
                    </div>
                    <p className="text-muted-foreground">{group.description}</p>
                  </CardContent>
                  {/* <CardFooter className="mt-auto">
                    <Button asChild className="w-full">
                      <Link href={`/home-bible-fellowship/${group.id}`}>Join This Group</Link>
                    </Button>
                  </CardFooter> */}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Why Join a Home Bible Fellowship?
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Community",
                description:
                  "Build meaningful relationships with others who will support and encourage you in your faith journey.",
                icon: Users,
              },
              {
                title: "Growth",
                description: "Deepen your understanding of God's Word and how it applies to your daily life.",
                icon: Calendar,
              },
              {
                title: "Support",
                description:
                  "Find a safe place to share your struggles, receive prayer, and experience God's love through others.",
                icon: Clock,
              },
              {
                title: "Service",
                description:
                  "Discover opportunities to use your gifts to serve others both within the group and in the wider community.",
                icon: MapPin,
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What happens at a typical HBF meeting?</AccordionTrigger>
                <AccordionContent>
                  Most HBF meetings include fellowship, Bible study or discussion, and prayer. Some groups also share a
                  meal or worship together.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do I need to be a church member to join?</AccordionTrigger>
                <AccordionContent>
                  No, HBF groups are open to everyone, whether you're a church member or not.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What if I can't attend every week?</AccordionTrigger>
                <AccordionContent>
                  Regular attendance helps, but most groups welcome you to attend when you can.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I bring my children?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can also bring your kids to the home Bible fellowships.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How do I become an HBF leader?</AccordionTrigger>
                <AccordionContent>
                  Leaders receive training and support. Contact our HBF coordinator for more info.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Testimonials
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                quote:
                  "Joining an HBF group was the best decision I made after moving here. I've found not just friends, but family.",
                name: "Sarah K.",
                group: "Fellowship 2",
              },
              {
                quote:
                  "Our family has grown so much closer to God and to each other since we started attending HBF.",
                name: "The Johnson Family",
                group: "Fellowship 4",
              },
              {
                quote:
                  "After years of just Sunday services, HBF has helped me develop a deeper, personal faith.",
                name: "Michael T.",
                group: "Central",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-4xl text-primary">"</div>
                    <p className="mb-6 italic text-muted-foreground">{testimonial.quote}</p>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.group}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-600 to-blue-400 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,_#ffffff33,_transparent_40%)]"></div>
        <motion.div
          className="relative container text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Ready to Connect?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Take the next step in your faith journey by joining a Home Bible Fellowship group today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href="#hbf-groups">Find a Group</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="#">Contact HBF Coordinator</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Closing */}
      <footer className="py-6 bg-blue-100 text-center text-black">
        <p>Together we grow in Christ • JCC Kisumu</p>
      </footer>
    </div>
  )
}
