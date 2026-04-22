"use client"
import { use } from "react";
import Image from "next/image"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Crown, CheckCircle } from "lucide-react"

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
      { role: "Coordinator", name: "Bertha Ayoro" },
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
        title: "Prayer Day",
        description: "First Saturday of Every Month, 9:30 PM to 12:30 PM.",
        image: "/Departments/youths/youth-activities (2).jpeg",
      },
      {
        title: "Mini-Kesha",
        description: "Every Monday from 6:30 PM to 10:00 PM.",
        image: "/Departments/youths/youth-activities (3).jpeg",
      },
      {
        title: "Online Bible Study",
        description: "Every Thursday from 9:00 PM to 10:00 PM.",
        image: "/Departments/youths/youth-activities (1).jpeg",
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
        image: "/Departments/youths/youth-activities (4).jpeg",
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
  },
  3: {
  name: "Women’s Ministry",
  heroImage: "/Departments/581A1446.JPG",
  goal: [
    "The Women’s Ministry is committed to empowering women spiritually, socially, and economically. We nurture women who are rooted in God’s Word, strong in prayer, and impactful in their families, church, and society. Through conferences, prayers, and fellowships, we provide mentorship and platforms for women to grow holistically."
  ],
  leadership: [
    { role: "Patron", name: "Rev Joyce Kegohi" },
    { role: "Women Pastor", name: "Pastor Selina Nzioka" },
    { role: "Women Elder", name: "Eld. Catherine Ongira" },
    { role: "Women Deaconess", name: "Ruth Ongoma" },
    { role: "Women Chairperson", name: "Maryline Otieno" },
  ],
  subMinistries: [
    {
      title: "Special Ladies",
      leader: "Deaconess Clementina Ogingo",
      description:
        "A ministry focusing on equipping and empowering women to walk in their God-given purpose with excellence.",
      image: "/Departments/special-ladies.png",
    },
    {
      title: "Young Mothers",
      leader: "Deaconess Hellen Festus",
      description:
        "Dedicated to mentoring young mothers in faith, family, and practical life skills, ensuring they thrive spiritually and socially.",
      image: "/Departments/women (4).jpeg",
    },
  ],
  activities: [
    {
      title: "Women of Great Influence Conference",
      description:
        "An annual conference that empowers and equips women for influence in the church, family, and society.",
      image: "/Departments/1000071720.jpg",
    },
    {
      title: "Corporate Monthly Prayers",
      description:
        "A monthly prayer gathering where women intercede for their families, the church, and the nation.",
      image: "/Departments/women (1).jpeg",
    },
    {
      title: "Regional Fellowships",
      description:
        "Regular fellowships across regions to strengthen unity, mentorship, and spiritual growth among women.",
      image: "/Departments/women (7).jpeg",
    },
  ],
  meetings: [
    "Monthly Planning Meeting",
    "Quarterly Leadership Summit",
    "Annual General Meeting",
  ],
},
4: {
    name: "Men’s Ministry",
    heroImage: "/Departments/581A1401.JPG",
    goal: [
      "The Men’s Ministry seeks to empower men spiritually and practically, equipping them to lead in their families, church, and society. We provide opportunities for growth through prayers, fellowships, and active service in the work of God."
    ],
    leadership: [
      { role: "Patron", name: "Bishop Mark Kegohi" },
      { role: "Men Pastor", name: "Timothy Nzioka" },
      { role: "Deacon", name: "Edward Oluoch" },
      { role: "Chairman", name: "Dominic Osiche" },
    ],
    regions: [
      { region: "Migosi", chairman: "Vincent Ongesa" },
      { region: "Manyatta", chairman: "George Nyambare" },
      { region: "Central/Milimani", chairman: "Isaiah Abidha" },
      { region: "Nyamasaria", chairman: "Moses Bole" },
      { region: "Nyalenda", chairman: "Edwin Wambogo" },
    ],
    activities: [
      {
        title: "Weekly Prayers",
        description: "Every Monday from 5:30 PM in the church.",
        image: "/Departments/men-prayer.png",
      },
      {
        title: "Regional Fellowships",
        description: "We meet at least twice a month in a brother’s house.",
        image: "/Departments/men.jpeg",
      },
      {
        title: "Support for Conferences & Missions",
        description: "Men actively participate in supporting conferences and missions.",
        image: "/Departments/men-min.jpeg",
      },
    ],
  },
}
export default function DepartmentDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const department = departmentDetails[Number(id) as keyof typeof departmentDetails];
  if (!department) return notFound();

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
          className="max-w-4xl mx-auto"
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
<section className="container py-12 bg-muted/50 rounded-lg">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {department.leadership.map((leader, i) => {
        const isPatron = leader.role.toLowerCase().includes("patron")
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              className={`shadow-xl rounded-2xl overflow-hidden transition-transform hover:scale-105 ${
                isPatron ? "bg-white" : "bg-white"
              }`}
            >
              <div className="flex justify-center mt-6">
                {isPatron ? (
                  <Crown className="w-12 h-12 text-yellow-600" />
                ) : (
                  <Users className="w-10 h-10 text-blue-600" />
                )}
              </div>
              <CardHeader>
                <CardTitle
                  className={`text-xl font-bold text-center ${
                    isPatron ? "text-yellow-800" : "text-gray-800"
                  }`}
                >
                  {leader.role}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-center">
                  {leader.name}
                </p>
                {isPatron && (
                  <p className="text-sm text-muted-foreground text-center italic mt-2">
                    Our guiding pillar and covering
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  </div>
</section>


      {/* Sub-ministries (Women’s Ministry only) */}
      {"subMinistries" in department && (
  <section className="container py-12">
    <h2 className="text-2xl font-bold mb-8 text-center">
      The Ladies Ministry is also composed of:
    </h2>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {department.subMinistries.map((sub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col">
                  <div className="relative h-48">
                    <Image src={sub.image} alt={sub.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{sub.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{sub.description}</p>
                    <p className="mt-2 font-medium">Led by {sub.leader}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Services (if present) */}
      {"services" in department && (
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

     {/* Regions Section (Only for Men’s Ministry) */}
{"regions" in department && (
  <section className="bg-white py-16 px-6">
    <h2 className="text-3xl font-bold text-center mb-12">
      Our {department.name} Regions
    </h2>
    <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
      The {department.name} is spread across vibrant regions, each led by a
      dedicated chairman. These regional fellowships ensure that every member
      stays connected, mentored, and actively involved in the work of God at
      both local and church-wide levels.
    </p>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {department.regions.map((region, i) => (
        <motion.div
          key={i}
          className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-transform"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <Users className="w-12 h-12 text-blue-700" />
          </div>
          <h3 className="font-bold text-xl mb-2">{region.region}</h3>
          <p className="text-gray-700">
            <span className="font-semibold">Leader:</span> {region.chairman}
          </p>
          <p className="mt-3 text-sm italic text-gray-600">
            Building strong brotherhood and faith in {region.region}.
          </p>
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
