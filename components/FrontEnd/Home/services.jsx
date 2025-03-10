import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    image: "/placeholder.svg?height=400&width=600&text=Web+Development",
    link: "/services/web-development",
    features: ["Responsive Design", "Next.js & React", "E-commerce Solutions", "CMS Integration"]
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that enhances user experience and engagement.",
    image: "/placeholder.svg?height=400&width=600&text=UI/UX+Design",
    link: "/services/ui-ux-design",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing to increase your online visibility and drive growth.",
    image: "/placeholder.svg?height=400&width=600&text=Digital+Marketing",
    link: "/services/digital-marketing",
    features: ["SEO", "Content Marketing", "Social Media", "Email Campaigns"]
  }
];

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={service.image || "/placeholder.svg"} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group" asChild>
                  <Link href={service.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="default" 
            size="lg"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
            asChild
          >
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
