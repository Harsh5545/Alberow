import { Heart, Users, Shield, Zap, Star, Compass } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Passion",
    description: "We're passionate about digital excellence and pour our heart into every project."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Collaboration",
    description: "We work closely with our clients, treating their goals as our own."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our business practices."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to stay ahead."
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our work, no matter how small."
  },
  {
    icon: <Compass className="h-8 w-8" />,
    title: "Adaptability",
    description: "We embrace change and adapt quickly to new challenges and opportunities."
  }
];

export default function OurValues() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Our Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do at Alberow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <CardContent className="p-8">
                <div className="mb-6 p-3 rounded-full bg-primary/10 text-primary inline-block group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
