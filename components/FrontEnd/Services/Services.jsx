import { ArrowRight, Code, Palette, Globe, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    image: "./assets/AlberowWebsite.webp",
    link: "/services/web-development",
    icon: <Code className="h-8 w-8 text-primary" />,
    features: ["Next.js & React", "E-commerce Solutions", "CMS Integration"]
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that enhances user experience and engagement.",
    image: "./assets/AlberowUi.webp",
    link: "/services/ui-ux-design",
    icon: <Palette className="h-8 w-8 text-primary" />,
    features: ["User Research", "Wireframing", "Prototyping"]
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing to increase your online visibility and drive growth.",
    image: "./assets/AlberowSocialMM.webp",
    link: "/services/digital-marketing",
    icon: <Globe className="h-8 w-8 text-primary" />,
    features: ["SEO", "Content Marketing", "Social Media"]
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Helping your business grow with our expert digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-border/50 shadow-md transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-t-xl" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-3 w-full bg-gradient-to-r flex justify-center items-center from-blue-500 via-purple-500 to-pink-500" asChild>
                  <Link href={service.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
