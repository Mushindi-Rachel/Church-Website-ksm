import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

// Sample HBF groups data
const hbfGroups = [
  {
    id: 1,
    name: "Fellowship 1",
    location: "North Side",
    meetingTime:"Tuesday & Thursday, 5:00 PM",
    leaders: "John & Mary Smith",
    focus: "General Bible Study",
    description:
      "A welcoming group for all ages focusing on building a strong foundation in faith through Bible study and discussion.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    name: "Fellowship 2",
    location: "Downtown",
    meetingTime: "Tuesday & Thursday, 5:00 PM",
    leaders: "Michael Johnson",
    focus: "Young Adults (20s-30s)",
    description:
      "A dynamic group for young adults navigating faith, career, relationships, and purpose in today's world.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    name: "Fellowship 3",
    location: "East Side",
    meetingTime: "Tuesday & Thursday, 5:00 PM",
    leaders: "David & Sarah Thompson",
    focus: "Families with Children",
    description:
      "A group designed for families to grow together in faith with activities for both parents and children.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    name: "Fellowship 3",
    location: "West Side",
    meetingTime: "Tuesday & Thursday, 5:00 PM",
    leaders: "Robert & Elizabeth Wilson",
    focus: "Seniors",
    description: "A fellowship group for seniors to study God's word, share life experiences, and support one another.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    name: "Central",
    location: "Polyview",
    meetingTime: "Tuesday & Thursday, 5:00 PM",
    leaders: "Pastor Sarah Johnson",
    focus: "New Christians",
    description: "A supportive environment for those new to the faith to learn the fundamentals of Christianity.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    name: "Fellowship 4",
    location: "Nyamasaria",
    meetingTime: "Thursdays, 6:30 PM",
    leaders: "Thomas Anderson",
    focus: "Advanced Bible Study",
    description: "An in-depth study group for those seeking to deepen their understanding of scripture and theology.",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function HomeBibleFellowshipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/hbf-background.png"
          alt="Home Bible Fellowship"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Home Bible Fellowship</h1>
            <p className="text-lg md:text-xl text-white">Connect, grow, and build community in a small group setting</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is Home Bible Fellowship?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Home Bible Fellowship (HBF) groups are the heart of our church community. These small groups meet
                  regularly in homes throughout our city to study God's Word, pray together, and build meaningful
                  relationships.
                </p>
                <p>
                  We believe that spiritual growth happens best in community, and HBF groups provide the perfect
                  environment for that growth. In these groups, you'll find support, encouragement, and accountability
                  as you journey through life and faith together.
                </p>
                <p>
                  Whether you're new to faith or have been walking with God for years, there's an HBF group that's right
                  for you. Our groups are diverse in age, life stage, and focus, but all share the common goal of
                  helping each member grow closer to God and to one another.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="\bblStudy.jfif"
                alt="Home Bible Fellowship Group"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HBF Groups */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Find Your Group</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hbfGroups.map((group) => (
              <Card key={group.id} className="overflow-hidden flex flex-col">
                <div className="aspect-video relative">
                  <Image src={group.image || "\hbf-background.png"} alt={group.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{group.name}</CardTitle>
                  {/* <p className="text-sm font-medium text-primary">{group.focus}</p> */}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <span>Led by: {group.leaders}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <span>{group.location}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <span>{group.meetingTime}</span>
                  </div>
                  <p className="text-muted-foreground">{group.description}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full">
                    <Link href={`/home-bible-fellowship/${group.id}`}>Join This Group</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join a Home Bible Fellowship?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Community",
                description:
                  "Build meaningful relationships with others who will support and encourage you in your faith journey.",
                icon: Users,
              },
              {
                title: "Growth",
                description: "Deepen your understanding of God's Word and how it applies to your daily life.",
                icon: Calendar,
              },
              {
                title: "Support",
                description:
                  "Find a safe place to share your struggles, receive prayer, and experience God's love through others.",
                icon: Clock,
              },
              {
                title: "Service",
                description:
                  "Discover opportunities to use your gifts to serve others both within the group and in the wider community.",
                icon: MapPin,
              },
            ].map((item, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What happens at a typical HBF meeting?</AccordionTrigger>
                <AccordionContent>
                  While each group has its own unique style, most HBF meetings include a time of fellowship, Bible study
                  or discussion, and prayer. Some groups also include worship, sharing a meal, or other activities.
                  Meetings typically last 1.5-2 hours.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do I need to be a church member to join?</AccordionTrigger>
                <AccordionContent>
                  No, HBF groups are open to everyone, whether you're a church member or not. They're actually a great
                  way to get connected to our church community if you're new!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What if I can't attend every week?</AccordionTrigger>
                <AccordionContent>
                  While regular attendance helps build community, we understand that life happens. Most groups welcome
                  you to attend when you can, though some study-focused groups may recommend consistent attendance to
                  follow the curriculum.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I bring my children?</AccordionTrigger>
                <AccordionContent>
                  Some groups are specifically designed for families and provide activities for children. Others may be
                  adult-focused. The group description will indicate whether childcare is provided or if children are
                  included in the group activities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How do I become an HBF leader?</AccordionTrigger>
                <AccordionContent>
                  We're always looking for new leaders who have a heart for building community! If you're interested in
                  leading a group, we provide training and support. Contact our HBF coordinator to learn more about the
                  process and requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What if I don't see a group that fits my needs?</AccordionTrigger>
                <AccordionContent>
                  We're constantly starting new groups based on interest and need. If you don't see a group that seems
                  right for you, contact our HBF coordinator who can help you find the right fit or discuss the
                  possibility of starting a new group.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Joining an HBF group was the best decision I made after moving to this city. I've found not just friends, but family.",
                name: "Sarah K.",
                group: "Fellowship 2",
              },
              {
                quote:
                  "Our family has grown so much closer to God and to each other since we started attending our HBF group. The children look forward to it every week!",
                name: "The Johnson Family",
                group: "Fellowship 4",
              },
              {
                quote:
                  "After years of just attending Sunday services, my HBF group has helped me develop a deeper, more personal faith that impacts my daily life.",
                name: "Michael T.",
                group: "Central",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 text-4xl text-primary">"</div>
                  <p className="mb-6 italic text-muted-foreground">{testimonial.quote}</p>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.group}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Connect?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Take the next step in your faith journey by joining a Home Bible Fellowship group today. Connect with
            others, grow in your faith, and experience the difference that community can make.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
              <Link href="#hbf-groups">Find a Group</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="#">Contact HBF Coordinator</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
