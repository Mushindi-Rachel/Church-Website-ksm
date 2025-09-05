import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Landmark, Globe, ArrowRight } from "lucide-react"

export default function FoundationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Faith Foundation"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Faith Foundation</h1>
            <p className="text-lg md:text-xl text-white">Making a difference in our community and around the world</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Faith Foundation</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Faith Foundation was established in 2005 as the charitable arm of Church of Faith. Our mission is to
                  extend Christ's love beyond the walls of our church by addressing critical needs in our local
                  community and around the world.
                </p>
                <p>
                  Through strategic partnerships, volunteer mobilization, and financial support, we work to combat
                  poverty, provide education, improve healthcare, and share the hope of the Gospel with those in need.
                </p>
                <p>
                  Our foundation is guided by biblical principles of compassion, stewardship, and justice. We believe
                  that as followers of Christ, we are called to love our neighbors in tangible ways and to be His hands
                  and feet in a world that desperately needs hope.
                </p>
              </div>
              <div className="mt-6">
                <Button asChild>
                  <Link href="#initiatives">Explore Our Initiatives</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Faith Foundation volunteers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: "50+",
                description: "Community Projects Completed",
                icon: Landmark,
              },
              {
                stat: "10,000+",
                description: "Individuals Served Annually",
                icon: Users,
              },
              {
                stat: "15",
                description: "Countries Reached",
                icon: Globe,
              },
              {
                stat: "$2M+",
                description: "Funds Distributed Since 2005",
                icon: Heart,
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-3xl font-bold mb-2">{item.stat}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Initiatives */}
      <section id="initiatives" className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Community Outreach",
                description:
                  "Addressing local needs through food pantries, homeless shelters, after-school programs, and senior care initiatives.",
                image: "/placeholder.svg?height=300&width=500",
                link: "#",
              },
              {
                title: "Education Support",
                description:
                  "Providing scholarships, school supplies, tutoring programs, and educational resources to underserved communities.",
                image: "/placeholder.svg?height=300&width=500",
                link: "#",
              },
              {
                title: "Global Missions",
                description:
                  "Supporting missionaries, building schools and clinics, and providing disaster relief in countries around the world.",
                image: "/placeholder.svg?height=300&width=500",
                link: "#",
              },
              {
                title: "Healthcare Initiatives",
                description:
                  "Funding medical clinics, health education programs, and medical mission trips to areas with limited healthcare access.",
                image: "/placeholder.svg?height=300&width=500",
                link: "#",
              },
              {
                title: "Clean Water Projects",
                description:
                  "Installing wells and water purification systems in communities without access to clean, safe drinking water.",
                image: "/placeholder.svg?height=300&width=500",
                link: "#",
              },
              {
                title: "Disaster Response",
                description:
                  "Providing immediate relief and long-term recovery support to communities affected by natural disasters.",
                image: "/placeholder.svg?height=300&width=500",
                link: "#",
              },
            ].map((initiative, index) => (
              <Card key={index} className="overflow-hidden flex flex-col">
                <div className="aspect-video relative">
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{initiative.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={initiative.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Project</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Hope Village Project"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Hope Village Project</h3>
              <p className="text-muted-foreground mb-6">
                Our current flagship initiative is the Hope Village Project in rural Kenya. This comprehensive
                development project includes the construction of a school, medical clinic, clean water system, and
                agricultural training center for a community of 5,000 people.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Fundraising Goal:</span>
                    <span>$500,000</span>
                  </div>
                  <div className="w-full bg-primary/20 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>$325,000 Raised</span>
                    <span>65% Complete</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#">Donate Now</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#">Project Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "New Hope Medical Clinic",
                description:
                  "Our foundation helped establish a medical clinic in an underserved area that now provides healthcare to over 5,000 people annually.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Education for All Initiative",
                description:
                  "Through our scholarship program, 250 children who couldn't afford school fees are now receiving quality education.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Hurricane Relief Efforts",
                description:
                  "When Hurricane Maria devastated Puerto Rico, our disaster response team provided immediate aid and helped rebuild 35 homes.",
                image: "/placeholder.svg?height=300&width=500",
              },
            ].map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="#">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">How You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Donate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <p className="text-muted-foreground mb-6">
                  Your financial gifts make our work possible. Whether it's a one-time donation or monthly giving, every
                  contribution helps us extend Christ's love to those in need.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild>
                  <Link href="#">Make a Donation</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Volunteer</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <p className="text-muted-foreground mb-6">
                  Share your time and talents with those in need. We have volunteer opportunities both locally and
                  globally for individuals and groups of all skill levels.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild>
                  <Link href="#">Volunteer With Us</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Partner</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Landmark className="h-10 w-10 text-primary" />
                </div>
                <p className="text-muted-foreground mb-6">
                  We collaborate with businesses, churches, and other organizations to maximize our impact. Explore how
                  your organization can partner with Faith Foundation.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild>
                  <Link href="#">Become a Partner</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Together, we can bring hope, healing, and transformation to communities in need. Your support enables us to
            share Christ's love in tangible ways both locally and globally.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="#">Donate Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
