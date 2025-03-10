"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Alberow transformed our online presence with a stunning website and effective marketing strategy that increased our sales by 45% in just three months.",
    author: "Sarah Johnson",
    position: "CEO, Artisan Cafe",
    company: "Artisan Cafe",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100&text=SJ",
  },
  {
    quote:
      "The team at Alberow delivered an e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is unmatched.",
    author: "Michael Chen",
    position: "Founder",
    company: "EcoShop",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100&text=MC",
  },
  {
    quote:
      "Working with Alberow was a game-changer for our business. Their SEO strategy significantly improved our visibility and brought in quality leads.",
    author: "Emily Rodriguez",
    position: "Marketing Director",
    company: "Global Finance",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100&text=ER",
  },
  {
    quote:
      "The UI/UX design that Alberow created for our app was intuitive and beautiful. Our users love the experience, and it's helped us stand out in a crowded market.",
    author: "David Kim",
    position: "Product Manager",
    company: "TechPro",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100&text=DK",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block animate-fade-in">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Hear from the businesses we've helped succeed
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div
            className="absolute inset-y-0 left-0 z-10 flex items-center"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm"
              onClick={prev}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </Button>
          </div>

          <div
            className="absolute inset-y-0 right-0 z-10 flex items-center"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm"
              onClick={next}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div className="overflow-hidden relative px-10">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-border/50 bg-card">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>

                      <blockquote className="text-xl italic mb-6">"{testimonial.quote}"</blockquote>

                      <div className="flex items-center">
                        <div className="mr-4">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === current ? "bg-primary" : "bg-muted-foreground/30"
                } transition-colors`}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

