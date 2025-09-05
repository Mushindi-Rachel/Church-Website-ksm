import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Search } from "lucide-react"

// Sample sermon data
const sermons = [
  {
    id: 1,
    title: "Power for Settlement",
    speaker: "Pastor Timothy Nzioka",
    date: "August 5, 2025",
    duration: "45 minutes",
    image: "/placeholder.svg?height=300&width=500",
    category: "Settlement",
    description:
      "",
  },
  {
    id: 2,
    title: "Acquire Wisdom for Enlargement",
    speaker: "Bishop Mark Kegohi",
    date: "August 3, 2025",
    duration: "38 minutes",
    image: "/placeholder.svg?height=300&width=500",
    category: "Enlargement",
    description:
      "",
  },
  {
    id: 3,
    title: "Preparation for Territorial Enlargement",
    speaker: "Bishop Mark Kegohi",
    date: "July 27, 2025",
    duration: "42 minutes",
    image: "/placeholder.svg?height=300&width=500",
    category: "Enlargement",
    description: "",
  },
  {
    id: 4,
    title: "Today salvation has come to this house",
    speaker: "Bishop Mark Kegohi",
    date: "July 10, 2025",
    duration: "40 minutes",
    image: "/placeholder.svg?height=300&width=500",
    category: "Salvation",
    description: "",
  },
  // {
  //   id: 5,
  //   title: "Living with Purpose",
  //   speaker: "Pastor Sarah Johnson",
  //   date: "April 23, 2023",
  //   duration: "44 minutes",
  //   image: "/placeholder.svg?height=300&width=500",
  //   category: "Purpose",
  //   description: "Discover how to live a purpose-driven life aligned with God's will in this powerful sermon.",
  // },
  // {
  //   id: 6,
  //   title: "The Good Shepherd",
  //   speaker: "Pastor John Smith",
  //   date: "April 16, 2023",
  //   duration: "39 minutes",
  //   image: "/placeholder.svg?height=300&width=500",
  //   category: "Bible Study",
  //   description:
  //     "Pastor John examines the biblical metaphor of the Good Shepherd and what it means for believers today.",
  // },
]

export default function SermonsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/bgWoodP1.jpg" alt="Sermons" fill className="object-cover" priority />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Sermons</h1>
            <p className="text-lg md:text-xl text-white">Listen to our latest messages and grow in your faith</p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-muted/50">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search sermons..." className="pl-10" />
            </div>
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="faith">Peace</SelectItem>
                  <SelectItem value="prayer">Prayer</SelectItem>
                  <SelectItem value="grace">Enlargement</SelectItem>
                  <SelectItem value="purpose">Settlement</SelectItem>
                  <SelectItem value="bible-study">Salvation</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Speaker" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Speakers</SelectItem>
                  <SelectItem value="john-smith">Bishop Mark Kegohi</SelectItem>
                  <SelectItem value="sarah-johnson">Pastor Timothy Nzioka</SelectItem>
                  <SelectItem value="michael-williams">Pastor Luke Obeto</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons List */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon) => (
              <Card key={sermon.id} className="overflow-hidden flex flex-col">
                <div className="aspect-video relative">
                  <Image src={sermon.image || "/placeholder.svg"} alt={sermon.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium px-2 py-1 bg-primary/10 text-primary rounded-md">
                      {sermon.category}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2">{sermon.title}</CardTitle>
                  <p className="text-sm font-medium text-muted-foreground">{sermon.speaker}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{sermon.description}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4 mt-auto">
                  <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {sermon.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {sermon.duration}
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/sermons/${sermon.id}`}>Listen Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Series */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Series</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Foundations of Faith",
                description:
                  "A six-part series exploring the core principles of Christian faith and how they apply to our daily lives.",
                image: "/placeholder.svg?height=300&width=600",
                count: "6 sermons",
              },
              {
                title: "Living the Word",
                description:
                  "Discover practical ways to apply biblical teachings in today's world through this inspiring series.",
                image: "/placeholder.svg?height=300&width=600",
                count: "4 sermons",
              },
            ].map((series, index) => (
              <Card key={index} className="overflow-hidden">
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
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Never Miss a Sermon</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Subscribe to our podcast or newsletter to receive the latest sermons directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
              <Link href="https://www.youtube.com/@mkegohi7/featured">Subscribe to Youtube</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="#">Join Newsletter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
