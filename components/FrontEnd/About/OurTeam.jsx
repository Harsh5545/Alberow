"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Mail,
  ExternalLink,
  X,
  ChevronRight,
  Hexagon,
  Zap,
  Award,
  Code,
  Lightbulb,
  Sparkles,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const teamMembers = [
  {
    name: "Harshad Kajale",
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
    specialty: "Strategic Vision",
    icon: Lightbulb,
  },
  // {
  //   name: "Sophia Chen",
  //   role: "Creative Director",
  //   image: "/placeholder.svg?height=400&width=400&text=SC",
  //   bio: "Sophia brings 10+ years of design experience to Alberow. Her background in both traditional and digital design allows her to create unique visual identities and user experiences for our clients.",
  //   skills: ["UI/UX Design", "Brand Identity", "Visual Design", "Creative Strategy"],
  //   experience: [
  //     { company: "Design Masters", role: "Senior Designer", years: "2018-2022" },
  //     { company: "Creative Studio", role: "UI/UX Designer", years: "2014-2018" },
  //   ],
  //   education: "BFA in Graphic Design, Rhode Island School of Design",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     instagram: "#",
  //   },
  //   email: "sophia@alberow.com",
  //   projects: ["Luxury Brand Online Store", "Fitness Tracker Website", "EcoShop E-commerce Platform"],
  //   specialty: "Visual Innovation",
  //   icon: Sparkles,
  // },
  {
    name: "Bhavish Muneshwar",
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
    specialty: "Code Architecture",
    icon: Code,
  },
  {
    name: "Manasi Kadam",
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
    specialty: "Growth Hacking",
    icon: Zap,
  },
  {
    name: "Harsh Jaiswal",
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
    specialty: "User Experience",
    icon: Hexagon,
  },
  {
    name: "DivanSaheb Sangale",
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
    specialty: "Content Excellence",
    icon: Award,
  },
]

const MotionCard = motion(Card)

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("about")
  const [hoveredMember, setHoveredMember] = useState(null)
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const cardRefs = useRef(teamMembers.map(() => useRef(null)))

  const calculateAngle = useCallback((e, cardRef) => {
    if (!cardRef.current) return { x: 0, y: 0 }

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX
    const mouseY = e.clientY

    // Calculate the angle
    const angleX = (mouseY - centerY) / 20
    const angleY = (centerX - mouseX) / 20

    return { x: angleX, y: angleY }
  }, [])

  const getCardRotation = useCallback(
    (index) => {
      if (!cardRefs.current[index].current) return { x: 0, y: 0 }
      if (hoveredMember !== index) return { x: 0, y: 0 }

      const rect = cardRefs.current[index].current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = mousePosition.x
      const mouseY = mousePosition.y

      const angleX = (mouseY - centerY) / 20
      const angleY = (centerX - mouseX) / 20

      return { x: angleX, y: angleY }
    },
    [mousePosition, hoveredMember],
  )

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set initial size
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

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

  // Calculate the angle for the holographic effect based on mouse position

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-5"></div>
      <div
        className="absolute -z-10 blur-[100px] rounded-full opacity-20 bg-gradient-to-r from-primary/40 to-blue-500/40"
        style={{
          width: "40vw",
          height: "40vw",
          left: `${(mousePosition.x / windowSize.width) * 10}%`,
          top: `${(mousePosition.y / windowSize.height) * 10}%`,
          transition: "left 0.5s ease-out, top 0.5s ease-out",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Meet Our Team
            </span>
          </h2>
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
          {teamMembers.map((member, index) => {
            const cardRef = cardRefs.current[index]
            const isHovered = hoveredMember === index

            return (
              <motion.div key={index} variants={item}>
                <MotionCard
                  ref={cardRef}
                  className={cn(
                    "overflow-hidden cursor-pointer group relative h-[400px]",
                    "bg-gradient-to-br from-background/80 to-background/95 backdrop-blur-sm",
                    "border border-primary/10 hover:border-primary/30",
                    "transition-all duration-300",
                  )}
                  onClick={() => openMemberDialog(member)}
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    rotateX: isHovered ? getCardRotation(index).x : 0,
                    rotateY: isHovered ? getCardRotation(index).y : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none transition-opacity duration-300"></div>

                  {/* Hexagonal pattern background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-hex-pattern"></div>
                  </div>

                  {/* Specialty icon */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-background/80 backdrop-blur-sm p-2 rounded-full border border-primary/20">
                        {member.icon && <member.icon className="h-5 w-5 text-primary" />}
                      </div>
                    </div>
                  </div>

                  <div className="h-full flex flex-col">
                    <div className="relative flex-1 overflow-hidden">
                      {/* Image with overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10"></div>
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Holographic scan effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-20 pointer-events-none"
                        initial={{ top: "100%" }}
                        animate={{
                          top: isHovered ? "-100%" : "100%",
                        }}
                        transition={{
                          duration: 2,
                          repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                          repeatType: "loop",
                        }}
                      />

                      {/* Futuristic data overlay */}
                      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {/* Specialty badge */}
                          <div className="inline-flex items-center mb-3 bg-background/30 backdrop-blur-md px-3 py-1 rounded-full border border-primary/20">
                            <span className="text-xs font-medium">{member.specialty}</span>
                          </div>

                          {/* Social icons */}
                          <div className="flex space-x-2 mb-3">
                            {Object.entries(member.social).map(([platform, url], i) => (
                              <Button
                                key={i}
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full bg-background/30 backdrop-blur-md border-primary/20 text-white hover:bg-primary/20"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(url, "_blank")
                                }}
                              >
                                {socialIcons[platform]}
                                <span className="sr-only">{platform}</span>
                              </Button>
                            ))}
                          </div>

                          {/* View profile button */}
                          <Button
                            variant="default"
                            size="sm"
                            className="w-full bg-background/30 backdrop-blur-md border border-primary/20 hover:bg-primary/20 text-white"
                          >
                            View Profile
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Info section */}
                    <div className="p-6 backdrop-blur-sm bg-background/50 relative z-30">
                      {/* Animated border */}
                      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground">{member.role}</p>

                      {/* Skills preview (only visible on hover) */}
                      <div className="mt-3 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                        <div className="flex flex-wrap gap-1">
                          {member.skills.slice(0, 2).map((skill, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 bg-primary/10 rounded-full">
                              {skill}
                            </span>
                          ))}
                          {member.skills.length > 2 && (
                            <span className="text-xs px-2 py-0.5 bg-primary/5 rounded-full">
                              +{member.skills.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionCard>
              </motion.div>
            )
          })}
        </motion.div>

        <AnimatePresence>
          {selectedMember && (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-md border-primary/20">
                {/* Futuristic dialog header */}
                <DialogHeader className="relative mb-6">
                  <div className="absolute -top-6 -left-6 -right-6 h-20 bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 blur-xl opacity-50"></div>
                  <div className="relative z-10 flex items-start justify-between">
                    <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                      {selectedMember.name}
                    </DialogTitle>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-primary/10"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </div>
                  <p className="text-lg text-primary">{selectedMember.role}</p>
                </DialogHeader>

                <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="mt-6">
                  <TabsList className="grid grid-cols-3 mb-6 bg-background/50 backdrop-blur-sm border border-primary/10">
                    <TabsTrigger
                      value="about"
                      className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                    >
                      About
                    </TabsTrigger>
                    <TabsTrigger
                      value="experience"
                      className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                    >
                      Experience
                    </TabsTrigger>
                    <TabsTrigger
                      value="projects"
                      className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                    >
                      Projects
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="about" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="aspect-square rounded-lg overflow-hidden relative">
                        {/* Holographic effect on image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
                        <img
                          src={selectedMember.image || "/placeholder.svg"}
                          alt={selectedMember.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Scanning effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"
                          initial={{ top: "100%" }}
                          animate={{ top: "-100%" }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                          }}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <p className="mb-6 text-lg">{selectedMember.bio}</p>

                        <h4 className="font-semibold mb-3 text-lg flex items-center">
                          <span className="inline-block w-6 h-0.5 bg-primary mr-2"></span>
                          Skills & Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedMember.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-primary/10 rounded-full text-sm border border-primary/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <h4 className="font-semibold mb-3 text-lg flex items-center">
                          <span className="inline-block w-6 h-0.5 bg-primary mr-2"></span>
                          Education
                        </h4>
                        <p className="mb-6">{selectedMember.education}</p>

                        <h4 className="font-semibold mb-3 text-lg flex items-center">
                          <span className="inline-block w-6 h-0.5 bg-primary mr-2"></span>
                          Contact
                        </h4>
                        <div className="flex items-center mb-6">
                          <Mail className="h-4 w-4 mr-2 text-primary" />
                          <a href={`mailto:${selectedMember.email}`} className="text-primary hover:underline">
                            {selectedMember.email}
                          </a>
                        </div>

                        <h4 className="font-semibold mb-3 text-lg flex items-center">
                          <span className="inline-block w-6 h-0.5 bg-primary mr-2"></span>
                          Connect
                        </h4>
                        <div className="flex space-x-3">
                          {Object.entries(selectedMember.social).map(([platform, url], i) => (
                            <Button
                              key={i}
                              variant="outline"
                              size="icon"
                              className="rounded-full hover:bg-primary/10 hover:text-primary border-primary/20"
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
                      <h4 className="font-semibold text-lg mb-4 flex items-center">
                        <span className="inline-block w-6 h-0.5 bg-primary mr-2"></span>
                        Work History
                      </h4>

                      <div className="space-y-8">
                        {selectedMember.experience.map((exp, i) => (
                          <div key={i} className="relative pl-8 border-l-2 border-primary/30 pb-8 last:pb-0">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary flex items-center justify-center">
                              <div className="h-2 w-2 rounded-full bg-background animate-pulse"></div>
                            </div>
                            <h5 className="text-lg font-medium">{exp.role}</h5>
                            <p className="text-primary">{exp.company}</p>
                            <p className="text-sm text-muted-foreground">{exp.years}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <h4 className="font-semibold text-lg mb-4 flex items-center">
                          <span className="inline-block w-6 h-0.5 bg-primary mr-2"></span>
                          Skills & Expertise
                        </h4>
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
                    <h4 className="font-semibold text-lg mb-4 flex items-center">
                      <span className="inline-block w-6 h-0.5 bg-primary mr-2"></span>
                      Recent Projects
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedMember.projects.map((project, i) => (
                        <Card
                          key={i}
                          className="overflow-hidden bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors group"
                        >
                          <div className="h-40 bg-muted flex items-center justify-center relative overflow-hidden">
                            <img
                              src={`/placeholder.svg?height=200&width=400&text=${project.replace(/\s+/g, "+")}`}
                              alt={project}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <div className="p-4 relative">
                            {/* Animated border */}
                            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                            <h5 className="font-medium mb-2 group-hover:text-primary transition-colors">{project}</h5>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-0 h-auto text-primary hover:bg-transparent hover:text-primary flex items-center"
                            >
                              View details
                              <ChevronRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

