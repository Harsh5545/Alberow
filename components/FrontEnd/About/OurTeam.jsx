"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Facebook, Twitter, Linkedin, X, Github, Instagram, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400&text=AJ",
    bio: "Alex has over 15 years of experience in web development and digital marketing. He founded Alberow with a vision to create a digital agency that combines technical excellence with creative innovation.",
    skills: ["Strategic Planning", "Business Development", "Team Leadership", "Client Relations"],
    experience: [
      { company: "Tech Innovators", role: "CTO", years: "2015-2020" },
      { company: "Digital Solutions Inc.", role: "Lead Developer", years: "2010-2015" },
    ],
    education: "MBA, Stanford University",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      github: "#",
    },
    email: "alex@alberow.com",
    projects: ["Artisan Cafe Rebrand", "Global Finance SEO Campaign", "TechPro App UI Design"],
  },
  {
    name: "Sophia Chen",
    role: "Creative Director",
    image: "/placeholder.svg?height=400&width=400&text=SC",
    bio: "Sophia brings 10+ years of design experience to Alberow. Her background in both traditional and digital design allows her to create unique visual identities and user experiences for our clients.",
    skills: ["UI/UX Design", "Brand Identity", "Visual Design", "Creative Strategy"],
    experience: [
      { company: "Design Masters", role: "Senior Designer", years: "2018-2022" },
      { company: "Creative Studio", role: "UI/UX Designer", years: "2014-2018" },
    ],
    education: "BFA in Graphic Design, Rhode Island School of Design",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    email: "sophia@alberow.com",
    projects: ["Luxury Brand Online Store", "Fitness Tracker Website", "EcoShop E-commerce Platform"],
  },
  {
    name: "Marcus Williams",
    role: "Lead Developer",
    image: "/placeholder.svg?height=400&width=400&text=MW",
    bio: "Marcus is a full-stack developer with expertise in React, Next.js, and various backend technologies. He leads our development team in creating robust, scalable web applications.",
    skills: ["React/Next.js", "Node.js", "Database Design", "API Development"],
    experience: [
      { company: "Web Solutions", role: "Senior Developer", years: "2019-2022" },
      { company: "Tech Innovations", role: "Full Stack Developer", years: "2016-2019" },
    ],
    education: "MS in Computer Science, MIT",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    email: "marcus@alberow.com",
    projects: ["Medical Services Portal", "EcoShop E-commerce Platform", "Fitness Tracker Website"],
  },
  {
    name: "Olivia Martinez",
    role: "Digital Marketing Manager",
    image: "/placeholder.svg?height=400&width=400&text=OM",
    bio: "Olivia specializes in creating comprehensive digital marketing strategies that drive traffic and conversions. She has a proven track record of successful campaigns across various industries.",
    skills: ["SEO/SEM", "Content Strategy", "Social Media Marketing", "Analytics"],
    experience: [
      { company: "Marketing Pros", role: "Marketing Strategist", years: "2017-2022" },
      { company: "Digital Agency", role: "SEO Specialist", years: "2014-2017" },
    ],
    education: "BA in Marketing, NYU",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    email: "olivia@alberow.com",
    projects: ["Restaurant Chain Marketing", "Global Finance SEO Campaign", "Artisan Cafe Rebrand"],
  },
  {
    name: "David Kim",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=400&width=400&text=DK",
    bio: "David is passionate about creating intuitive, user-centered designs. He combines aesthetic sensibility with a deep understanding of user behavior to create engaging interfaces.",
    skills: ["User Research", "Wireframing", "Prototyping", "Interaction Design"],
    experience: [
      { company: "UX Studio", role: "Senior UX Designer", years: "2018-2022" },
      { company: "Design Lab", role: "UI Designer", years: "2015-2018" },
    ],
    education: "MFA in Interaction Design, School of Visual Arts",
    social: {
      linkedin: "#",
      dribbble: "#",
      instagram: "#",
    },
    email: "david@alberow.com",
    projects: ["TechPro App UI Design", "Fitness Tracker Website", "Medical Services Portal"],
  },
  {
    name: "Emma Wilson",
    role: "Content Strategist",
    image: "/placeholder.svg?height=400&width=400&text=EW",
    bio: "Emma crafts compelling content strategies that tell our clients' stories and engage their target audiences. She has a background in journalism and digital content creation.",
    skills: ["Content Creation", "Brand Storytelling", "SEO Writing", "Editorial Planning"],
    experience: [
      { company: "Content Kings", role: "Content Manager", years: "2019-2022" },
      { company: "Digital Media", role: "Senior Writer", years: "2016-2019" },
    ],
    education: "BA in Journalism, Columbia University",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    email: "emma@alberow.com",
    projects: ["Restaurant Chain Marketing", "Global Finance SEO Campaign", "Artisan Cafe Rebrand"],
  },
]

const MotionCard = motion(Card)

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("about")
  const containerRef = useRef(null)

  const openMemberDialog = (member) => {
    setSelectedMember(member)
    setIsDialogOpen(true)
    setActiveTab("about")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const socialIcons = {
    linkedin: <Linkedin className="h-4 w-4" />,
    twitter: <Twitter className="h-4 w-4" />,
    facebook: <Facebook className="h-4 w-4" />,
    github: <Github className="h-4 w-4" />,
    instagram: <Instagram className="h-4 w-4" />,
    dribbble: <ExternalLink className="h-4 w-4" />,
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The talented individuals behind Alberow's success
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={item}>
              <MotionCard
                className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => openMemberDialog(member)}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex space-x-2 mb-3">
                        {Object.entries(member.social).map(([platform, url], i) => (
                          <Button
                            key={i}
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                          >
                            {socialIcons[platform]}
                            <span className="sr-only">{platform}</span>
                          </Button>
                        ))}
                      </div>
                      <Button variant="default" size="sm" className="w-full bg-white text-black hover:bg-white/90">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </MotionCard>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedMember && (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedMember.name}</DialogTitle>
                  <DialogDescription className="text-lg text-primary">{selectedMember.role}</DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="mt-6">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                  </TabsList>

                  <TabsContent value="about" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <img
                          src={selectedMember.image || "/placeholder.svg"}
                          alt={selectedMember.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <p className="mb-6 text-lg">{selectedMember.bio}</p>

                        <h4 className="font-semibold mb-3 text-lg">Skills & Expertise:</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedMember.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>

                        <h4 className="font-semibold mb-3 text-lg">Education:</h4>
                        <p className="mb-6">{selectedMember.education}</p>

                        <h4 className="font-semibold mb-3 text-lg">Contact:</h4>
                        <div className="flex items-center mb-6">
                          <Mail className="h-4 w-4 mr-2" />
                          <a href={`mailto:${selectedMember.email}`} className="text-primary hover:underline">
                            {selectedMember.email}
                          </a>
                        </div>

                        <h4 className="font-semibold mb-3 text-lg">Connect:</h4>
                        <div className="flex space-x-3">
                          {Object.entries(selectedMember.social).map(([platform, url], i) => (
                            <Button
                              key={i}
                              variant="outline"
                              size="icon"
                              className="rounded-full hover:bg-primary/10 hover:text-primary"
                            >
                              {socialIcons[platform]}
                              <span className="sr-only">{platform}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="experience" className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <h4 className="font-semibold text-lg mb-4">Work History</h4>

                      <div className="space-y-8">
                        {selectedMember.experience.map((exp, i) => (
                          <div key={i} className="relative pl-8 border-l-2 border-primary/30 pb-8 last:pb-0">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                            <h5 className="text-lg font-medium">{exp.role}</h5>
                            <p className="text-primary">{exp.company}</p>
                            <p className="text-sm text-muted-foreground">{exp.years}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <h4 className="font-semibold text-lg mb-4">Skills & Expertise</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {selectedMember.skills.map((skill, i) => (
                            <div key={i} className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="projects" className="space-y-6">
                    <h4 className="font-semibold text-lg mb-4">Recent Projects</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedMember.projects.map((project, i) => (
                        <Card key={i} className="overflow-hidden">
                          <div className="h-40 bg-muted flex items-center justify-center">
                            <img
                              src={`/placeholder.svg?height=200&width=400&text=${project.replace(/\s+/g, "+")}`}
                              alt={project}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h5 className="font-medium mb-2">{project}</h5>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-0 h-auto text-primary hover:bg-transparent hover:text-primary flex items-center"
                            >
                              View details
                              <ExternalLink className="ml-2 h-3 w-3" />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex justify-end mt-6">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    <X className="h-4 w-4 mr-2" />
                    Close
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

