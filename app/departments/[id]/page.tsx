"use client"

import Image from "next/image"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Example dataset (move to DB or CMS later)
const departmentDetails = {
  1: {
    name: "Children's Ministry",
    heroImage: "/Departments/children/581A1486.JPG",
    mission:
      "Raising Children who understand God's gracious provision of Salvation through Christ Jesus.",
    objectives: [
      "To see children come to the knowledge of God’s love and grow spiritually.",
      "To establish strategies for growing a healthy ministry.",
    ],
    goals: "Sound doctrine, reproof, and instruction.",
    leadership: [
      { role: "Patron", name: "Reverend Joyce Kegohi" },
      { role: "Pastor", name: "Pamela Otieno" },
      { role: "Deacon", name: "Elizabeth Kachero" },
      { role: "Coordinator", name: "Bertha Ayore" },
    ],
    groups: ["PP1 & PP2", "Grade 1 & 2", "Grade 3 & 4", "Grade 5 & 6", "Grade 7–9", "Form 1–4"],
    activities: [
      {
        title: "Sunday Services",
        description: "Children participate in different age-appropriate Sunday services.",
        image: "/Departments/children/581A1492.JPG",
      },
      {
        title: "International Empowerment Camp (ICE)",
        description: "Annual camp where children grow spiritually and socially.",
        image: "/Departments/camp.jpg",
      },
      {
        title: "Holiday Summits",
        description: "Special gatherings during school holidays for growth and fun.",
        image: "/Departments/summit.jpg",
      },
      {
        title: "Missions & Community Service",
        description: "Reaching out to communities with love and practical support.",
        image: "/Departments/missions.jpg",
      },
    ],
    meetings: [
      "Annual General Meeting",
      "Teacher's Monthly Fellowship",
      "Executive Committee Meeting",
    ],
  },

  2: {
    name: "Youth Ministry",
    heroImage: "/Departments/youths/GHSK9748.JPG",
    objective: "The JCC youth ministry is a team of dedicated young people to the service and worship of God. The youth is a transitioning period from the Sunday school children to the youth and later to the the men and wogi. The Jcc ministry International has set aside and grouped the young people away from the congregation so as to build a strong foundation in th at this young age. Train up a child in the way he should grow and whe he is old he shall never depart from it Proverbs 22:6.",
    objectives: [
      "To raise God-fearing and purpose-driven youth.",
      "To nurture leadership through fellowship and mentorship.",
    ],
    goals: "Sound doctrine, fellowship, prayer, and discipleship.",
    leadership: [
      { role: "Pastor", name: "Luke Obeto" },
      { role: "Deaconess", name: "Janifer Musuya" },
      { role: "Chairperson", name: "Philemon Blessing" },
      { role: "Ablaze Chairperson", name: "Daniel Yogo" },
    ],
    services: [
      {
        title: "Sunday Service",
        description: "Youth service every Sunday from 9:30 AM to 11:30 AM.",
        image: "/Departments/youths/youths1.jpeg",
      },
      {
        title: "Prayer Meeting",
        description: "Every Monday, 5:30 PM to 6:30 PM.",
        image: "/Departments/camp.jpg",
      },
      {
        title: "Mini-Kesha",
        description: "Every Tuesday from 6:00 PM to 11:00 PM.",
        image: "/Departments/summit.jpg",
      },
    ],
    activities: [
      {
        title: "Youth Retreat",
        description: "A time of refreshment, reflection, and renewal for the youth.",
        image: "/Departments/youths/retreat.jpeg",
      },
      {
        title: "Youth Dinner",
        description: "An annual dinner event to bond and fellowship.",
        image: "/Departments/youths/dinner.jpeg",
      },
      {
        title: "Youth Talkshow",
        description: "Interactive discussions on relevant life and faith topics.",
        image: "/Departments/youths/DYYL4945.JPG",
      },
      {
        title: "Youth Ablaze",
        description: "Empowering youth through impactful worship and ministry.",
        image: "/Departments/youths/LRUZ4733.JPG",
      },
      {
        title: "Missions & Outreach",
        description: "Reaching out to communities with love and practical support.",
        image: "/Departments/youths/mission.jpeg",
      },
    ],
    meetings: ["Annual General Meeting"],
  },
}

export default function DepartmentDetail({ params }: { params: { id: string } }) {
  const department = departmentDetails[Number(params.id) as keyof typeof departmentDetails]

  if (!department) return notFound()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src={department.heroImage}
          alt={department.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{department.name}</h1>
        </div>
      </section>

      {/* Mission & Objectives */}
      <section className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Mission Statement</h2>
          <p className="mb-8 text-muted-foreground">{department.mission}</p>

          <h2 className="text-2xl font-bold mb-4">Objectives</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            {department.objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Goals</h2>
          <p className="text-muted-foreground">{department.goals}</p>
        </motion.div>
      </section>

      {/* Leadership */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {department.leadership.map((leader, i) => (
            <Card key={i} className="shadow-md">
              <CardHeader>
                <CardTitle>{leader.role}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{leader.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services (Youth only) */}
      {department.services && (
        <section className="container py-12 bg-muted/50 rounded-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {department.services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition">
                  <div className="relative h-40">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Activities */}
      <section className="container py-12 bg-muted/50 rounded-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {department.activities.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="relative h-40">
                  <Image src={activity.image} alt={activity.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meetings */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Meetings</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          {department.meetings.map((meeting, i) => (
            <li key={i}>{meeting}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
