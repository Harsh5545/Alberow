import { Layers, Zap, Palette, Smartphone, Moon, Code, Globe, Shield, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Modern Web Development",
    description: "We build responsive, fast-loading websites using the latest technologies like Next.js, React, and Tailwind CSS.",
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Creative UI/UX Design",
    description: "Our designers create intuitive, engaging interfaces that delight users and drive conversions.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to increase your online presence and drive qualified traffic.",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "SEO Optimization",
    description: "Improve your search engine rankings with our data-driven SEO strategies and content optimization.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Secure Solutions",
    description: "We prioritize security in all our projects, implementing best practices to protect your data and users.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Performance Focused",
    description: "Lightning-fast websites optimized for speed, user experience, and conversion rates.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">What We Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business succeed online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="text-primary mb-4 group-hover:text-blue-500 transition-colors duration-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
