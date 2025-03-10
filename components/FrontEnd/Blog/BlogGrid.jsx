"use client"

import { useState } from "react"
import { ArrowRight, Calendar, Clock, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const categories = ["All", "Web Development", "Design", "Marketing", "Business", "Technology"]

const blogPosts = [
  {
    title: "10 Web Design Trends That Will Dominate 2025",
    excerpt: "Explore the cutting-edge design trends that will shape the digital landscape in the coming year.",
    image: "/placeholder.svg?height=400&width=600&text=Web+Design+Trends",
    category: "Design",
    author: "Sophia Chen",
    date: "March 5, 2025",
    readTime: "5 min read",
  },
  {
    title: "The Ultimate Guide to SEO in 2025",
    excerpt: "Learn the latest techniques and strategies to boost your website's visibility in search engines.",
    image: "/placeholder.svg?height=400&width=600&text=SEO+Guide",
    category: "Marketing",
    author: "Olivia Martinez",
    date: "February 28, 2025",
    readTime: "8 min read",
  },
  {
    title: "How to Build a Scalable E-commerce Platform",
    excerpt: "A comprehensive look at the technologies and best practices for creating robust online stores.",
    image: "/placeholder.svg?height=400&width=600&text=Ecommerce+Platform",
    category: "Web Development",
    author: "Marcus Williams",
    date: "February 20, 2025",
    readTime: "7 min read",
  },
  {
    title: "The ROI of Digital Marketing in 2025",
    excerpt: "Understanding how to measure and maximize the return on investment for your digital marketing efforts.",
    image: "/placeholder.svg?height=400&width=600&text=Digital+Marketing+ROI",
    category: "Marketing",
    author: "Alex Johnson",
    date: "February 15, 2025",
    readTime: "6 min read",
  },
  {
    title: "User Experience Design Principles for Mobile Apps",
    excerpt: "Essential UX design principles that will help you create intuitive and engaging mobile applications.",
    image: "/placeholder.svg?height=400&width=600&text=UX+Design+Principles",
    category: "Design",
    author: "David Kim",
    date: "February 10, 2025",
    readTime: "5 min read",
  },
  {
    title: "The Future of AI in Web Development",
    excerpt:
      "How artificial intelligence is transforming web development and what it means for developers and businesses.",
    image: "/placeholder.svg?height=400&width=600&text=AI+Web+Development",
    category: "Technology",
    author: "Marcus Williams",
    date: "February 5, 2025",
    readTime: "9 min read",
  },
  {
    title: "5 Strategies to Improve Your Content Marketing",
    excerpt: "Proven strategies to enhance your content marketing efforts and drive more engagement and conversions.",
    image: "/placeholder.svg?height=400&width=600&text=Content+Marketing",
    category: "Marketing",
    author: "Emma Wilson",
    date: "January 28, 2025",
    readTime: "6 min read",
  },
  {
    title: "Building a Successful Business Website",
    excerpt: "Essential elements and strategies for creating a business website that attracts and converts visitors.",
    image: "/placeholder.svg?height=400&width=600&text=Business+Website",
    category: "Business",
    author: "Alex Johnson",
    date: "January 20, 2025",
    readTime: "7 min read",
  },
]

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts
    .filter((post) => activeCategory === "All" || post.category === activeCategory)
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="cursor-pointer"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card
                key={index}
                className="h-full flex flex-col border-border/50 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="mb-3 inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground flex-wrap gap-y-2">
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:bg-transparent hover:text-primary group flex items-center"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            Load More
          </Button>
        </div>
      </div>
    </section>
  )
}

