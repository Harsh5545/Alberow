"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "Alberow transformed our online presence completely. Their team delivered a stunning website that perfectly captures our brand identity and has significantly increased our conversion rates.",
    author: "Sarah Johnson",
    role: "CEO at TechCorp",
    avatar: "SJ",
  },
  {
    quote:
      "Working with Alberow was a game-changer for our business. Their digital marketing strategy helped us reach new audiences and grow our customer base by over 200% in just six months.",
    author: "Michael Chen",
    role: "Marketing Director at StartupX",
    avatar: "MC",
  },
  {
    quote:
      "The UI/UX design work that Alberow did for our app was exceptional. They created an intuitive, beautiful interface that our users love. The attention to detail was impressive.",
    author: "Alex Rodriguez",
    role: "Product Manager at DesignStudio",
    avatar: "AR",
  },
  {
    quote:
      "Alberow's SEO expertise has been invaluable to our business. They helped us climb to the first page of Google for our key search terms, resulting in a significant increase in organic traffic.",
    author: "Emily Parker",
    role: "Founder of GrowthBrand",
    avatar: "EP",
  },
  {
    quote:
      "The e-commerce platform Alberow built for us has revolutionized our online sales. The checkout process is seamless, and the integration with our inventory system works flawlessly.",
    author: "David Wilson",
    role: "E-commerce Manager at RetailPlus",
    avatar: "DW",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card border-border/50">
                    <CardContent className="p-8">
                      <div className="mb-6 text-primary">
                        <Quote className="h-10 w-10 opacity-50" />
                      </div>
                      <p className="text-lg mb-8">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={`/placeholder.svg?height=48&width=48&text=${testimonial.avatar}`} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-background shadow-md hover:bg-muted"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-background shadow-md hover:bg-muted"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
