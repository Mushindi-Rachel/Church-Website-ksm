
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, Shield, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function WelfarePage() {
  const [open, setOpen] = useState(false)

  const subDepartments = [
    {
      name: "Ushering Team",
      description:
        "Ensuring every service runs smoothly and every visitor feels warmly welcomed. Our ushers serve with grace, order, and a smile.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      image: "/Departments/ushering.jpg",
    },
    {
      name: "Hospitality Team",
      description:
        "Caring for guests and members with warmth and excellence. They handle refreshments and make everyone feel at home.",
      icon: <Coffee className="w-8 h-8 text-orange-500" />,
      image: "/Departments/hospitality.jpg",
    },
    {
      name: "Protocol Team",
      description:
        "Maintaining dignity, order, and decorum during church events and services. They ensure every special guest is well attended to.",
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      image: "/Departments/protocol.jpg",
    },
    {
      name: "Security Team",
      description:
        "Committed to maintaining peace and safety during services. They ensure everyone can worship without worry.",
      icon: <Shield className="w-8 h-8 text-green-600" />,
      image: "/Departments/security.jpg",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/Departments/welfare-hero.jpg"
          alt="Welfare Department"
          fill
          className="object-cover brightness-75"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welfare Department</h1>
          <p className="max-w-2xl mx-auto text-lg">
            The Welfare Department ensures that every member of JCC Kisumu feels loved,
            supported, and valued through hospitality, ushering, protocol, and security.
          </p>
        </motion.div>
      </div>

      {/* Sub-Departments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Sub-Departments
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {subDepartments.map((sub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                  <Image
                    src={sub.image}
                    alt={sub.name}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48"
                  />
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-2">{sub.icon}</div>
                    <CardTitle>{sub.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm text-center">
                      {sub.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Partner With Us Button */}
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setOpen(true)}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl text-lg"
            >
              Partner With Us
            </Button>
          </div>
          
        </div>
      </section>
    </div>
  )
}
