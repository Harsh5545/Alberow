"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";

const categories = [
  { id: "all", label: "All Work" },
  { id: "web", label: "Web Development" },
  { id: "design", label: "UI/UX Design" },
  { id: "marketing", label: "Digital Marketing" },
];

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "web",
    image: "/placeholder.svg?height=600&width=800&text=E-commerce+Platform",
    description: "A modern e-commerce platform with seamless checkout experience.",
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "web",
    image: "/placeholder.svg?height=600&width=800&text=Financial+Dashboard",
    description: "Interactive dashboard for financial data visualization.",
  },
  {
    id: 3,
    title: "Mobile App Design",
    category: "design",
    image: "/placeholder.svg?height=600&width=800&text=Mobile+App+Design",
    description: "User-centered design for a fitness tracking mobile application.",
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "design",
    image: "/placeholder.svg?height=600&width=800&text=Brand+Identity",
    description: "Complete brand identity design for a tech startup.",
  },
  {
    id: 5,
    title: "SEO Campaign",
    category: "marketing",
    image: "/placeholder.svg?height=600&width=800&text=SEO+Campaign",
    description: "Successful SEO campaign that increased organic traffic by 200%.",
  },
  {
    id: 6,
    title: "Social Media Strategy",
    category: "marketing",
    image: "/placeholder.svg?height=600&width=800&text=Social+Media",
    description: "Comprehensive social media strategy for a retail brand.",
  },
];

export default function WorkShowcase() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="work" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects and digital solutions
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-background/50 backdrop-blur-sm">
              {categories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <Card 
                  key={project.id}
                  className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={project.image || "/placeholder.svg"} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <Button 
                          variant="default" 
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-opacity"
                          asChild
                        >
                          <Link href={`/work/${project.id}`}>
                            View Project
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="group"
            asChild
          >
            <Link href="/work">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
