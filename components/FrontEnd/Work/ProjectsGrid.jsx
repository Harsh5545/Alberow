"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "design", label: "UI/UX Design" },
  { id: "marketing", label: "Digital Marketing" },
  { id: "ecommerce", label: "E-commerce" },
]

const projects = [
  {
    title: "Artisan Cafe Rebrand",
    description: "Complete website redesign and digital marketing strategy for a premium coffee chain.",
    image: "/placeholder.svg?height=600&width=800&text=Artisan+Cafe",
    category: ["web", "design", "marketing"],
    link: "#",
    client: "Artisan Cafe",
    completed: "January 2025",
  },
  {
    title: "EcoShop E-commerce Platform",
    description: "Custom e-commerce solution with integrated inventory management and payment processing.",
    image: "/placeholder.svg?height=600&width=800&text=EcoShop",
    category: ["web", "ecommerce"],
    link: "#",
    client: "EcoShop",
    completed: "December 2024",
  },
  {
    title: "TechPro App UI Design",
    description: "Intuitive mobile app interface design for a tech products company with user testing and prototyping.",
    image: "/placeholder.svg?height=600&width=800&text=TechPro+App",
    category: ["design"],
    link: "#",
    client: "TechPro",
    completed: "November 2024",
  },
  {
    title: "Global Finance SEO Campaign",
    description: "Comprehensive SEO strategy that increased organic traffic by 150% in 6 months.",
    image: "/placeholder.svg?height=600&width=800&text=Global+Finance",
    category: ["marketing"],
    link: "#",
    client: "Global Finance",
    completed: "October 2024",
  },
  {
    title: "Fitness Tracker Website",
    description: "Responsive website with user dashboard for tracking fitness goals and progress.",
    image: "/placeholder.svg?height=600&width=800&text=Fitness+Tracker",
    category: ["web", "design"],
    link: "#",
    client: "FitLife",
    completed: "September 2024",
  },
  {
    title: "Luxury Brand Online Store",
    description: "High-end e-commerce platform with custom product configurator and virtual try-on feature.",
    image: "/placeholder.svg?height=600&width=800&text=Luxury+Brand",
    category: ["web", "ecommerce", "design"],
    link: "#",
    client: "Lux Collection",
    completed: "August 2024",
  },
  {
    title: "Restaurant Chain Marketing",
    description: "Integrated marketing campaign across digital channels that increased foot traffic by 35%.",
    image: "/placeholder.svg?height=600&width=800&text=Restaurant+Marketing",
    category: ["marketing"],
    link: "#",
    client: "Flavor Fusion",
    completed: "July 2024",
  },
  {
    title: "Medical Services Portal",
    description: "Healthcare portal with appointment scheduling, patient records, and telemedicine integration.",
    image: "/placeholder.svg?height=600&width=800&text=Medical+Portal",
    category: ["web", "design"],
    link: "#",
    client: "HealthPoint",
    completed: "June 2024",
  },
]

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category.includes(activeCategory))

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-12">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-4 py-2 data-[state=active]:text-blue-500"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button
                      className="bg-white text-black hover:bg-white/90"
                      size="sm"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.category.map((cat) => (
                      <Badge key={cat} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {categories.find((c) => c.id === cat)?.label}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Client</p>
                      <p className="text-muted-foreground">{project.client}</p>
                    </div>
                    <div>
                      <p className="font-medium">Completed</p>
                      <p className="text-muted-foreground">{project.completed}</p>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="mt-4 p-0 h-auto text-primary hover:bg-transparent hover:text-primary group flex items-center"
                  >
                    View case study
                    <ArrowRight
                      className={`ml-2 h-4 w-4 transition-transform duration-300 ${hoveredIndex === index ? "translate-x-1" : ""}`}
                    />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

