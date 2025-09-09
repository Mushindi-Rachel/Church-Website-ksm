"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Sample departments data
const departments = [
  {
    id: 1,
    name: "Children's Ministry",
    description:
      "Nurturing the spiritual growth of children through age-appropriate Bible teaching, worship, and activities.",
    image: "/Departments/581A1486.JPG",
    leader: "Pastor Pamela Otieno",
    meetingTimes: "Sundays at 9:00 AM and 11:00 AM",
  },
  {
    id: 2,
    name: "Youth Ministry",
    description:
      "Guiding the young generation in their faith journey through relevant teaching, mentorship, and community building.",
    image: "/youth.jpeg",
    leader: "Pastor Luke Obeto",
    meetingTimes: "Monday at 5:30 PM and Tuesday at 6:00 PM - 11:00 PM",
  },
  {
    id: 3,
    name: "Women's Ministry",
    description:
      "Empowering women to deepen their relationship with God and build meaningful connections with one another.",
    image: "/Departments/581A1446.JPG",
    leader: "Pastor Selina Nzioka",
  },
  {
    id: 4,
    name: "Men's Ministry",
    description:
      "Encouraging men to grow in their faith and leadership through fellowship, study, and service.",
    image: "/Departments/581A1650.JPG",
    leader: "Pastor ",
  },
  // {
  //   id: 5,
  //   name: "Worship Team",
  //   description: "Leading the congregation in worship through music, song, and creative arts.",
  //   image: "/placeholder.svg?height=300&width=500",
  //   leader: "Michael Williams",
  //   meetingTimes: "Rehearsals on Thursdays at 7:00 PM",
  // },
  // {
  //   id: 4,
  //   name: "Outreach & Missions",
  //   description: "Serving our local community and supporting global missions to share God's love with the world.",
  //   image: "/placeholder.svg?height=300&width=500",
  //   leader: "Elizabeth Wilson",
  //   meetingTimes: "Monthly meetings on the first Tuesday at 6:30 PM",
  // },
  {
    id: 5,
    name: "Prayer Ministry",
    description: "Interceding for the needs of the church, community, and world through regular prayer gatherings.",
    image: "/placeholder.svg?height=300&width=500",
    leader: "Thomas Anderson",
    meetingTimes: "Tuesdays at 6:00 PM",
  },
  {
    id: 8,
    name: "Hospitality Team",
    description:
      "Creating a welcoming environment for all who enter our doors through greeting, ushering, and hosting.",
    image: "/Departments/581A1466.JPG",
    leader: "",
    meetingTimes: "Serving on Sundays and special events",
  },
]

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/bgWoodP.jpg" alt="Departments" fill className="object-cover" priority />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Church Departments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-white"
            >
              Discover the various ministries and teams that make up our church family
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-muted/50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="container text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
            Our church is made up of many departments and ministries, each serving a unique purpose in our community. We
            believe that everyone has gifts and talents that can be used to serve God and others. Explore our
            departments below and find where you can get involved!
          </p>
          <Button asChild size="lg">
            <Link href="#departments">View Departments</Link>
          </Button>
        </motion.div>
      </section>

      {/* Departments List */}
      <section id="departments" className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department, i) => (
              <motion.div
                key={department.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden flex flex-col">
                  <div className="aspect-video relative">
                    <Image
                      src={department.image || "/placeholder.svg"}
                      alt={department.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{department.name}</CardTitle>
                    <p className="text-sm font-medium text-muted-foreground">Led by: {department.leader}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{department.description}</p>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Meeting Times:</p>
                      <p className="text-sm text-muted-foreground">{department.meetingTimes}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button asChild className="w-full">
                      <Link href={`/departments/${department.id}`}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
            >
              <Image src="/placeholder.svg?height=400&width=600" alt="Volunteer" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Volunteer With Us</h2>
              <p className="text-muted-foreground mb-6">
                Volunteering is a wonderful way to serve God, use your gifts, and connect with others in our church
                family. Whether you have a lot of time to give or just a little, there's a place for you to serve.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe that everyone has been gifted by God with unique talents and abilities. When we use these
                gifts to serve others, we not only bless those around us but also experience the joy that comes from
                being part of something greater than ourselves.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#">Volunteer Application</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Department Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Pastor Pamela Otieno", role: "Children's Ministry Director", image: "/placeholder.svg?height=300&width=300" },
              { name: "Pastor Luke Obeto", role: "Youth Ministry Director", image: "/placeholder.svg?height=300&width=300" },
              { name: "Pastor Paul Solomon", role: "Worship Director", image: "/placeholder.svg?height=300&width=300" },
              { name: "Elizabeth Wilson", role: "Outreach Coordinator", image: "/placeholder.svg?height=300&width=300" },
              { name: "Thomas Anderson", role: "Prayer Ministry Leader", image: "/placeholder.svg?height=300&width=300" },
              { name: "David Thompson", role: "Men's Ministry Leader", image: "/placeholder.svg?height=300&width=300" },
              { name: "Jennifer Roberts", role: "Women's Ministry Leader", image: "/placeholder.svg?height=300&width=300" },
              { name: "Robert Johnson", role: "Hospitality Team Leader", image: "/placeholder.svg?height=300&width=300" },
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-square relative">
                    <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{leader.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{leader.role}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-600 to-blue-400 text-white overflow-hidden animate-gradient-x">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,_#ffffff33,_transparent_40%)]" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative container text-center"
        >
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg border border-white/10">
            <h2 className="text-3xl font-bold mb-4">Find Your Place to Serve</h2>
            <p className="max-w-2xl mx-auto mb-6 text-lg">
              We believe God has given each person unique gifts to serve His kingdom. Discover where you can use your gifts to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="secondary" size="lg" className="shadow-lg">
                <Link href="#">Take Spiritual Gifts Assessment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/volunteer">Volunteer Application</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
