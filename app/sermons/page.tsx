"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const modalBackdrop = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } }, exit: { opacity: 0, transition: { duration: 0.3 } } };
const modalContent = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }, exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } } };

export default function SermonsPage() {
  const [sermons, setSermons] = useState<any[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSermons() {
      const res = await fetch("/api/youtube");
      const data = await res.json();
      setSermons(data);
    }
    fetchSermons();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section className="relative h-[300px] md:h-[400px] overflow-hidden" initial="hidden" animate="visible" variants={fadeUp}>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/bgWoodP1.jpg" alt="Sermons" fill className="object-cover" priority />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Sermons</h1>
            <p className="text-lg md:text-xl text-white">Listen to our latest messages and grow in your faith</p>
          </div>
        </div>
      </motion.section>

      {/* Sermons List */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon, i) => (
              <motion.div key={sermon.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition">
                  <div className="aspect-video relative">
                    <Image src={sermon.image} alt={sermon.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{sermon.title}</CardTitle>
                    <p className="text-sm font-medium text-muted-foreground">{sermon.speaker}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{sermon.description}</p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-4 mt-auto">
                    <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {new Date(sermon.date).toLocaleDateString()}
                    </div>
                    <Button className="w-full" onClick={() => setSelectedVideo(sermon.id)}>
                      Watch Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" variants={modalBackdrop} initial="hidden" animate="visible" exit="exit">
            <motion.div className="bg-black rounded-xl overflow-hidden shadow-xl max-w-4xl w-full mx-4" variants={modalContent} initial="hidden" animate="visible" exit="exit">
              <ReactPlayer
                key={selectedVideo} // forces remount
                url={`https://www.youtube.com/watch?v=${selectedVideo}`}
                width="100%"
                height="500px"
                controls
                playing={Boolean(selectedVideo)}
              />
              <div className="flex justify-end p-4 bg-gray-900">
                <Button variant="secondary" onClick={() => setSelectedVideo(null)}>
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Featured Series */}
      <motion.section className="py-16 bg-muted/50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Series</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Foundations of Faith",
                description: "A six-part series exploring the core principles of Christian faith and how they apply to our daily lives.",
                image: "/placeholder.svg?height=300&width=600",
                count: "6 sermons",
              },
              {
                title: "Living the Word",
                description: "Discover practical ways to apply biblical teachings in today's world through this inspiring series.",
                image: "/placeholder.svg?height=300&width=600",
                count: "4 sermons",
              },
            ].map((series, index) => (
              <motion.div key={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.2 }}>
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition">
                  <div className="aspect-video relative">
                    <Image src={series.image || "/placeholder.svg"} alt={series.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{series.title}</CardTitle>
                    <p className="text-sm font-medium text-muted-foreground">{series.count}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{series.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="#">View Series</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Subscribe Section */}
      <motion.section className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-600 to-blue-400 text-white overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,_#ffffff33,_transparent_40%)]"></div>
        <div className="relative container text-center">
          <motion.div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg" variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-6">Never Miss a Sermon</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">Subscribe to our podcast or newsletter to receive the latest sermons directly in your inbox.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href="https://www.youtube.com/@mkegohi7/featured">Subscribe to Youtube</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link href="#">Join Newsletter</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
