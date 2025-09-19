"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  BookOpen,
  Users,
  Award,
  MapPin,
  Laptop,
  HeartHandshake,
  Droplet,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* ------------------- Sample Gallery Images ------------------- */
const galleryImages = [
  "/school/school1 (10).jpeg",
  "/school/school1 (9).jpeg",
  "/school/school1 (2).jpeg",
  "/school/school1(16).jpeg",
  "/school/school1 (12).jpeg",
  "/school/school1 (11).jpeg",
];

/* ------------------- Facilities ------------------- */
const facilities = [
  {
    title: "Playground & Sports",
    description:
      "Ample playground and sports facilities for physical fitness and teamwork development.",
    icon: Users,
  },
  {
    title: "Modern Classrooms",
    description:
      "Well-lit, standard classes with electrical fittings for digital learning and presentations.",
    icon: BookOpen,
  },
  {
    title: "Digital Skills",
    description:
      "Equipping learners with 21st-century skills through computer studies and French lessons.",
    icon: Laptop,
  },
  {
    title: "Swimming Program",
    description:
      "Swimming lessons with qualified trainers to support fitness and discipline.",
    icon: Droplet,
  },
  {
    title: "Mentorship & Leadership",
    description:
      "Leadership and Mentorship Program (LAMP) to inspire responsible future citizens.",
    icon: Lightbulb,
  },
  {
    title: "Christian Environment",
    description:
      "Located within JCC Church, nurturing strong moral values and spiritual growth.",
    icon: HeartHandshake,
  },
];

/* ------------------- Intakes ------------------- */
const intakes = [
  {
    level: "Day Care",
    details: "From 4 months old, providing a nurturing environment.",
  },
  {
    level: "ECDE Nursery",
    details: "Over 100 children with two streams under ECDE system.",
  },
  {
    level: "Junior School",
    details: "Growing institution with new classes to meet demand.",
  },
];

/* ------------------- Page Component ------------------- */
export default function SchoolPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="/school/school1(15).jpeg"
          alt="Bishop Mark Cares Centre School"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          className="relative text-center text-white z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Bishop Mark Cares Centre School
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Empowering Children with Knowledge, Skills & Christian Values
          </p>
        </motion.div>
      </section>

      {/* History */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Historical Background
        </motion.h2>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Founded in May 2007 by Bishop Dr. Mark & Joyce Kegohi, the school
          began with only 11 children, 4 teachers, and 4 support staff. Today,
          we have grown to over 100 children in the Nursery (ECDE) with two
          streams, a Day Care accepting children from as young as four months,
          and a Junior School. Our steady growth is supported by dedicated
          teachers and modern facilities within the Christian environment of JCC
          Church in Kisumu County.
        </p>
      </section>

      {/* Facilities */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <facility.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision, Mission, Motto, Mandate */}
<section className="py-20 px-6 bg-gradient-to-b from-blue-50 via-indigo-50 to-white">
  <motion.h2
    className="text-3xl font-bold text-center mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    Our Guiding Principles
  </motion.h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {/* Vision */}
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
      whileHover={{ scale: 1.05 }}
    >
      <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
      <h3 className="font-bold text-xl mb-2">Vision</h3>
      <p className="text-gray-600 text-sm">
        To be a school that equips children with knowledge and skills for
        self-reliance and responsible citizenship.
      </p>
    </motion.div>

    {/* Mission */}
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
      whileHover={{ scale: 1.05 }}
    >
      <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
      <h3 className="font-bold text-xl mb-2">Mission</h3>
      <p className="text-gray-600 text-sm">
        To nurture an academically, morally, and spiritually upright child for a
        better society.
      </p>
    </motion.div>

    {/* Motto */}
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
      whileHover={{ scale: 1.05 }}
    >
      <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
      <h3 className="font-bold text-xl mb-2">Motto</h3>
      <p className="text-gray-600 text-sm">
        Empowered to be <span className="font-semibold">In-Charge</span>.
      </p>
    </motion.div>

    {/* Mandate */}
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
      whileHover={{ scale: 1.05 }}
    >
      <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
      <h3 className="font-bold text-xl mb-2">Mandate</h3>
      <p className="text-gray-600 text-sm">
        To produce high quality students equipped with unique knowledge, skills,
        and values through coordinated academic and co-curricular programs.
      </p>
    </motion.div>
  </div>
</section>

      {/* Performance */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left - Text */}
    <div className="text-center md:text-left">
      <Award className="w-12 h-12 text-yellow-500 mb-4 mx-auto md:mx-0" />
      <h2 className="text-3xl font-bold mb-4">Our Performance</h2>
      <p className="text-lg text-gray-700">
        The school is consistently rated among the best schools in Kisumu City.
        Our commitment to academic excellence, co-curricular development, and
        moral guidance ensures that our pupils stand out as leaders of tomorrow.
      </p>
    </div>

    {/* Right - Image */}
    <img
      src="/school/school1 (4).jpeg"
      alt="School performance"
      className="w-full rounded-2xl shadow-lg"
    />
  </div>
</section>


      {/* Intakes */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Available Intakes</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {intakes.map((intake, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-xl">{intake.level}</h3>
              <p className="text-gray-700">{intake.details}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Life at BMCC School
        </h2>
        <Carousel
          plugins={[Autoplay({ delay: 4000 })]}
          opts={{ align: "center", loop: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {galleryImages.map((img, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <Image
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  width={800}
                  height={500}
                  className="rounded-xl shadow-lg object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Location */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <MapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Where to Find Us</h2>
        <p className="text-lg text-gray-700">
          Bishop Mark Cares Centre School is located in Kisumu County, between
          Kisumu Polytechnic and the Stadium, within the serene environment of
          JCC Church. This Christian atmosphere provides children with the best
          moral foundation and academic environment.
        </p>
      </section>
    </div>
  );
}
