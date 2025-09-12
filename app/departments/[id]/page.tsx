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
    goal: [
      "Our goal is to raise children who deeply understand God’s gracious provision of salvation through Christ Jesus. We seek to nurture them into a growing knowledge of God’s love, guiding them toward strong spiritual maturity. By establishing clear strategies for building a healthy and vibrant ministry, we aim to provide sound doctrine, loving reproof, and godly instruction that will anchor their faith for life."
    ],
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
        image: "/Departments/children/children3.jpeg",
      },
      {
        title: "Holiday Summits",
        description: "Special gatherings during school holidays for growth and fun.",
        image: "/Departments/children/children2.jpeg",
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
    goal: [
      "The JCC youth ministry is a team of dedicated young people committed to the service and worship of God.Youth is a transitioning period from Sunday school into youth life, and later into adulthood where one fully serves as a man or woman of God. The JCC Ministry International has set apart young people from the general congregation to build a strong foundation at this crucial stage of life. As Proverbs 22:6 reminds us: 'Train up a child in the way he should go, and when he is old he shall never depart from it.'",
    ],
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
      {
        title: "Online Bible Study",
        description: "Every Thursday from 9:00 PM to 10:00 PM.",
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
        title: "Youth Praise Night",
        description: ".",
        image: "/Departments/youths/dinner.jpeg",
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

      {/* Our Goal */}
      <section className="container py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold center mb-4 text-center">Our Goal</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {department.goal.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Leadership */}
      <section className="container py-12 text-center">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Leadership</h2>
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

      {/* Services (if present) */}
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

      {/* Meetings
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Meetings</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          {department.meetings.map((meeting, i) => (
            <li key={i}>{meeting}</li>
          ))}
        </ul>
      </section> */}
    </div>
  )
}
