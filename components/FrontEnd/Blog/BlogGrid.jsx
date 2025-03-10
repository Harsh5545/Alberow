"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, Calendar, Clock, User, Search, Grid, List, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const categories = ["All", "Web Development", "Design", "Marketing", "Business", "Technology"]

const blogPosts = [
  {
    title: "10 Web Design Trends That Will Dominate 2025",
    excerpt: "Explore the cutting-edge design trends that will shape the digital landscape in the coming year.",
    content:
      "Web design is constantly evolving, with new trends emerging every year. In 2025, we expect to see a focus on immersive experiences, micro-interactions, and accessibility. Dark mode designs will continue to gain popularity, while 3D elements will become more mainstream. Voice user interfaces will be integrated more seamlessly, and AI-driven personalization will enhance user experiences. Sustainability in design will also be a key consideration, with more brands adopting eco-friendly design practices.",
    image: "/placeholder.svg?height=400&width=600&text=Web+Design+Trends",
    category: "Design",
    author: "Sophia Chen",
    authorImage: "/placeholder.svg?height=100&width=100&text=SC",
    date: "March 5, 2025",
    readTime: "5 min read",
    tags: ["Design", "Trends", "UI/UX", "Web Development"],
  },
  {
    title: "The Ultimate Guide to SEO in 2025",
    excerpt: "Learn the latest techniques and strategies to boost your website's visibility in search engines.",
    content:
      "Search engine optimization continues to evolve with algorithm updates and changing user behaviors. In 2025, voice search optimization will be essential, as more users rely on voice assistants. Mobile-first indexing will remain critical, and page experience signals like Core Web Vitals will carry more weight. AI-generated content will need to be high-quality and provide value to rank well. Local SEO will become more sophisticated, with greater emphasis on user-generated content and reviews.",
    image: "/placeholder.svg?height=400&width=600&text=SEO+Guide",
    category: "Marketing",
    author: "Olivia Martinez",
    authorImage: "/placeholder.svg?height=100&width=100&text=OM",
    date: "February 28, 2025",
    readTime: "8 min read",
    tags: ["SEO", "Digital Marketing", "Content Strategy", "Analytics"],
  },
  {
    title: "How to Build a Scalable E-commerce Platform",
    excerpt: "A comprehensive look at the technologies and best practices for creating robust online stores.",
    content:
      "Building a scalable e-commerce platform requires careful planning and the right technology stack. Start with a solid architecture that can handle increasing traffic and transactions. Choose a reliable hosting solution with auto-scaling capabilities. Implement efficient database design with proper indexing and caching strategies. Use a headless commerce approach for flexibility across different frontend experiences. Ensure your payment processing is secure and supports multiple payment methods. Implement robust inventory management and order fulfillment systems that can scale with your business.",
    image: "/placeholder.svg?height=400&width=600&text=Ecommerce+Platform",
    category: "Web Development",
    author: "Marcus Williams",
    authorImage: "/placeholder.svg?height=100&width=100&text=MW",
    date: "February 20, 2025",
    readTime: "7 min read",
    tags: ["E-commerce", "Web Development", "Scalability", "Performance"],
  },
  {
    title: "The ROI of Digital Marketing in 2025",
    excerpt: "Understanding how to measure and maximize the return on investment for your digital marketing efforts.",
    content:
      "Measuring the ROI of digital marketing requires a comprehensive approach that goes beyond simple metrics. Start by setting clear objectives and KPIs aligned with business goals. Implement proper attribution modeling to understand which channels drive conversions. Use marketing automation tools to track customer journeys across touchpoints. Calculate customer lifetime value to assess long-term ROI. Analyze both quantitative metrics and qualitative feedback. Regularly audit and optimize campaigns based on performance data. In 2025, predictive analytics will play a larger role in forecasting marketing ROI.",
    image: "/placeholder.svg?height=400&width=600&text=Digital+Marketing+ROI",
    category: "Marketing",
    author: "Alex Johnson",
    authorImage: "/placeholder.svg?height=100&width=100&text=AJ",
    date: "February 15, 2025",
    readTime: "6 min read",
    tags: ["Digital Marketing", "ROI", "Analytics", "Strategy"],
  },
  {
    title: "User Experience Design Principles for Mobile Apps",
    excerpt: "Essential UX design principles that will help you create intuitive and engaging mobile applications.",
    content:
      "Creating exceptional mobile app experiences requires adherence to key UX design principles. Focus on simplicity and clarity in your interface design. Ensure consistency across all screens and interactions. Prioritize accessibility to make your app usable by everyone. Design for one-handed use, considering thumb zones and reachability. Optimize loading times and provide feedback during processes. Use familiar patterns and gestures that users already understand. Implement progressive disclosure to reduce cognitive load. Test with real users throughout the design process to identify and address usability issues.",
    image: "/placeholder.svg?height=400&width=600&text=UX+Design+Principles",
    category: "Design",
    author: "David Kim",
    authorImage: "/placeholder.svg?height=100&width=100&text=DK",
    date: "February 10, 2025",
    readTime: "5 min read",
    tags: ["UX Design", "Mobile Apps", "User Research", "Interaction Design"],
  },
  {
    title: "The Future of AI in Web Development",
    excerpt:
      "How artificial intelligence is transforming web development and what it means for developers and businesses.",
    content:
      "Artificial intelligence is revolutionizing web development in numerous ways. AI-powered code generation tools are increasing developer productivity by automating routine tasks. Personalization engines are creating tailored user experiences based on behavior and preferences. Chatbots and virtual assistants are enhancing customer service capabilities. Predictive analytics are helping businesses anticipate user needs and optimize websites accordingly. AI is also improving accessibility through automatic alt text generation and other features. As these technologies mature, we'll see more sophisticated applications that blur the line between human and AI-generated work.",
    image: "/placeholder.svg?height=400&width=600&text=AI+Web+Development",
    category: "Technology",
    author: "Marcus Williams",
    authorImage: "/placeholder.svg?height=100&width=100&text=MW",
    date: "February 5, 2025",
    readTime: "9 min read",
    tags: ["AI", "Web Development", "Machine Learning", "Automation"],
  },
  {
    title: "5 Strategies to Improve Your Content Marketing",
    excerpt: "Proven strategies to enhance your content marketing efforts and drive more engagement and conversions.",
    content:
      "Effective content marketing requires a strategic approach focused on providing value to your audience. Start by developing detailed buyer personas to understand your target audience's needs and pain points. Create a content calendar that aligns with your business goals and audience interests. Focus on quality over quantity, producing comprehensive, well-researched content. Repurpose successful content across different formats and channels to maximize reach. Use data analytics to measure performance and refine your strategy. Incorporate storytelling techniques to make your content more engaging and memorable. Optimize for search engines without sacrificing readability and user experience.",
    image: "/placeholder.svg?height=400&width=600&text=Content+Marketing",
    category: "Marketing",
    author: "Emma Wilson",
    authorImage: "/placeholder.svg?height=100&width=100&text=EW",
    date: "January 28, 2025",
    readTime: "6 min read",
    tags: ["Content Marketing", "Strategy", "Engagement", "Conversion"],
  },
  {
    title: "Building a Successful Business Website",
    excerpt: "Essential elements and strategies for creating a business website that attracts and converts visitors.",
    content:
      "A successful business website combines aesthetic appeal with functional design and strategic content. Start with clear business objectives and user goals to guide your design decisions. Ensure your site has a responsive design that works well on all devices. Optimize page loading speed to reduce bounce rates. Include clear calls-to-action throughout the site to guide users toward conversion. Implement SEO best practices to improve visibility in search results. Use high-quality images and videos that reflect your brand identity. Include social proof elements like testimonials and case studies. Make contact information easily accessible and provide multiple ways for customers to reach you.",
    image: "/placeholder.svg?height=400&width=600&text=Business+Website",
    category: "Business",
    author: "Alex Johnson",
    authorImage: "/placeholder.svg?height=100&width=100&text=AJ",
    date: "January 20, 2025",
    readTime: "7 min read",
    tags: ["Business", "Web Design", "Conversion Rate", "User Experience"],
  },
]

const MotionCard = motion(Card)

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState("grid") // grid or list
  const [selectedPost, setSelectedPost] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [visiblePosts, setVisiblePosts] = useState(6)
  const loadMoreRef = useRef(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
  })

  const filteredPosts = blogPosts
    .filter((post) => activeCategory === "All" || post.category === activeCategory)
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  const displayedPosts = filteredPosts.slice(0, visiblePosts)

  useEffect(() => {
    if (inView && visiblePosts < filteredPosts.length) {
      setTimeout(() => {
        setVisiblePosts((prev) => Math.min(prev + 3, filteredPosts.length))
      }, 500)
    }
  }, [inView, filteredPosts.length, visiblePosts])

  const openPostDialog = (post) => {
    setSelectedPost(post)
    setIsDialogOpen(true)
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

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
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

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md overflow-hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`rounded-none ${viewMode === "grid" ? "bg-primary/10" : ""}`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4 mr-1" />
                  Grid
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`rounded-none ${viewMode === "list" ? "bg-primary/10" : ""}`}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4 mr-1" />
                  List
                </Button>
              </div>

              <div className="relative group">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <div className="p-2 flex flex-wrap gap-1">
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant={activeCategory === category ? "default" : "outline"}
                        onClick={() => setActiveCategory(category)}
                        className="cursor-pointer m-1"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={
              viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6"
            }
          >
            {displayedPosts.map((post, index) => (
              <motion.div key={index} variants={item}>
                {viewMode === "grid" ? (
                  <MotionCard
                    className="h-full flex flex-col border-border/50 hover:shadow-lg transition-all duration-300 overflow-hidden group"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
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
                        onClick={() => openPostDialog(post)}
                      >
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </MotionCard>
                ) : (
                  <MotionCard
                    className="border-border/50 hover:shadow-lg transition-all duration-300 overflow-hidden group"
                    whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 aspect-video md:aspect-square"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="mb-3 inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {post.category}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-muted-foreground flex-wrap gap-y-2 mb-4">
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
                        <Button
                          variant="ghost"
                          className="p-0 h-auto text-primary hover:bg-transparent hover:text-primary group flex items-center"
                          onClick={() => openPostDialog(post)}
                        >
                          Read more
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </MotionCard>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {visiblePosts < filteredPosts.length && (
          <div className="flex justify-center mt-12" ref={ref}>
            <Button variant="outline" size="lg" ref={loadMoreRef}>
              {inView ? "Loading more..." : "Load More"}
            </Button>
          </div>
        )}

        {/* Blog Post Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedPost && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{selectedPost.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
                    <img
                      src={selectedPost.image || "/placeholder.svg"}
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                      <img
                        src={selectedPost.authorImage || "/placeholder.svg"}
                        alt={selectedPost.author}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{selectedPost.author}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>{selectedPost.date}</span>
                        <span className="mx-2">•</span>
                        <span>{selectedPost.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
                    <p>{selectedPost.content}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {selectedPost.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

