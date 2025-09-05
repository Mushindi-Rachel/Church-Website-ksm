import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, GraduationCap, Users, Calendar, Clock, MapPin } from "lucide-react"

export default function SchoolPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Faith Academy"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Faith Academy</h1>
            <p className="text-lg md:text-xl text-white">
              Nurturing minds, hearts, and spirits through Christ-centered education
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Welcome to Faith Academy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Faith Academy is a Christ-centered educational institution committed to academic excellence and
                  spiritual formation. Established in 1995, our school provides a nurturing environment where students
                  can grow intellectually, socially, and spiritually.
                </p>
                <p>
                  Our dedicated faculty and staff are committed to helping each student discover their God-given
                  potential and develop the skills, knowledge, and character needed to succeed in college and beyond. We
                  integrate biblical principles into every aspect of our curriculum, creating a learning experience that
                  honors God and prepares students for a life of purpose.
                </p>
                <p>
                  At Faith Academy, we believe that education is a partnership between the school, the home, and the
                  church. We work closely with parents to ensure that each child receives the support and guidance they
                  need to thrive.
                </p>
              </div>
              <div className="mt-6">
                <Button asChild>
                  <Link href="#programs">Explore Our Programs</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Students at Faith Academy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Guiding principles that shape our approach to education
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide a Christ-centered education that equips students with academic excellence, biblical values,
                  and servant leadership skills, preparing them to impact the world for God's glory.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a leading Christian educational institution that develops well-rounded students who excel
                  academically, grow spiritually, and serve others with compassion and integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section id="programs" className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Programs</h2>
          <Tabs defaultValue="elementary" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="elementary">Elementary School</TabsTrigger>
                <TabsTrigger value="middle">Middle School</TabsTrigger>
                <TabsTrigger value="high">High School</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="elementary">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Elementary School"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Elementary School (K-5)</h3>
                  <p className="text-muted-foreground mb-4">
                    Our elementary program provides a strong foundation in core academic subjects while nurturing a love
                    for learning. Students develop essential skills in reading, writing, mathematics, science, and
                    social studies in a supportive, Christ-centered environment.
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Phonics-based reading program</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Hands-on math and science curriculum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Bible integration across all subjects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Art, music, and physical education</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="#">Learn More</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="middle">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Middle School"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Middle School (6-8)</h3>
                  <p className="text-muted-foreground mb-4">
                    Our middle school program builds on the elementary foundation while helping students navigate the
                    transition to adolescence. We focus on academic rigor, critical thinking, and character development
                    during these formative years.
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Advanced math and science courses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Literature and composition focus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Biblical worldview integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Leadership development opportunities</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="#">Learn More</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="high">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=300&width=500" alt="High School" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">High School (9-12)</h3>
                  <p className="text-muted-foreground mb-4">
                    Our college-preparatory high school program challenges students academically while preparing them
                    for future success. We offer a comprehensive curriculum that includes honors and AP courses, as well
                    as opportunities for spiritual growth and leadership development.
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>College-preparatory curriculum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Honors and AP course options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Christian apologetics and worldview</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>College and career counseling</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="#">Learn More</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Student Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Athletics",
                description:
                  "Our competitive sports programs develop teamwork, discipline, and physical fitness while teaching students to compete with integrity.",
                icon: Users,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Fine Arts",
                description:
                  "Students explore their creative gifts through music, visual arts, drama, and other artistic expressions that glorify God.",
                icon: GraduationCap,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Spiritual Formation",
                description:
                  "Chapel services, Bible classes, prayer groups, and service opportunities help students grow in their relationship with Christ.",
                icon: BookOpen,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Clubs & Activities",
                description:
                  "From robotics to debate, our extracurricular activities allow students to pursue their interests and develop new skills.",
                icon: Calendar,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Service Learning",
                description:
                  "Students participate in local and global service projects that teach them to love and serve others as Christ did.",
                icon: MapPin,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Leadership Development",
                description:
                  "Through student government, mentoring programs, and leadership courses, students learn to lead with humility and purpose.",
                icon: Users,
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Admissions" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Admissions</h2>
              <p className="text-muted-foreground mb-6">
                We welcome families who share our commitment to Christ-centered education and academic excellence. Our
                admissions process is designed to ensure that Faith Academy is the right fit for your child and family.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Application Deadlines</p>
                    <p className="text-muted-foreground">
                      Priority: February 15 | Regular: Rolling basis as space allows
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Campus Tours</p>
                    <p className="text-muted-foreground">Tuesdays and Thursdays at 9:00 AM (by appointment)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Open Houses</p>
                    <p className="text-muted-foreground">October, January, and March (see calendar for dates)</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#">Apply Now</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#">Request Information</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty & Staff */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Faculty & Staff</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. James Wilson",
                role: "Principal",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Thompson",
                role: "Elementary Director",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Roberts",
                role: "Middle School Director",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Jennifer Davis",
                role: "High School Director",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((person, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{person.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="#">View All Faculty & Staff</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Faith Academy Family</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            We invite you to discover the difference a Christ-centered education can make in your child's life. Schedule
            a tour, attend an open house, or contact us to learn more about Faith Academy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
              <Link href="#">Schedule a Tour</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="#">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
