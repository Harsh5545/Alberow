"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, BarChart, Share2, Mail, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "./ContactForm";

export default function DigitalMarketingTemplate({ service = {} }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const { process = [], ctaTitle = "", ctaDescription = "" } = service;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-200/30 via-transparent to-transparent dark:from-purple-900/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-sm font-medium">
                Digital Marketing
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Grow Your <span className="text-purple-600 dark:text-purple-400">Online Presence</span> & Reach
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Strategic marketing solutions to increase your online visibility, drive traffic, and grow your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="p-2 bg-purple-600 hover:bg-purple-700">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="p-2">
                  View Case Studies
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/AlberowSocialMM.webp"
                  alt="Digital Marketing"
                  width={600}
                  height={400}
                  className="w-full bg-cover h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-pink-600 rounded-full opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Marketing Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to help your business grow online
            </p>
          </div>

          <Tabs defaultValue="seo" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12">
              <TabsTrigger value="seo" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                <Search className="mr-2 h-4 w-4" /> SEO
              </TabsTrigger>
              <TabsTrigger value="social" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                <Share2 className="mr-2 h-4 w-4" /> Social Media
              </TabsTrigger>
              <TabsTrigger value="ppc" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                <BarChart className="mr-2 h-4 w-4" /> PPC
              </TabsTrigger>
              <TabsTrigger value="email" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                <Mail className="mr-2 h-4 w-4" /> Email
              </TabsTrigger>
              <TabsTrigger value="content" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                <FileText className="mr-2 h-4 w-4" /> Content
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                <BarChart className="mr-2 h-4 w-4" /> Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="seo" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    Search Engine Optimization
                  </h3>
                  <p className="text-lg">
                    We improve your search engine rankings and drive organic traffic to your website through strategic
                    SEO.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-purple-600 dark:text-purple-400">✓</div>
                      <span>Comprehensive keyword research and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-purple-600 dark:text-purple-400">✓</div>
                      <span>On-page optimization for better rankings</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-purple-600 dark:text-purple-400">✓</div>
                      <span>Technical SEO to improve site performance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-purple-600 dark:text-purple-400">✓</div>
                      <span>Link building strategies to boost authority</span>
                    </li>
                  </ul>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=SEO"
                    alt="Search Engine Optimization"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="social" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Social Media Marketing</h3>
                  <p className="text-lg">
                    We build your brand presence and engage with your audience on social media platforms.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-purple-600 dark:text-purple-400">✓</div>
                      <span>Strategic social media content planning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-purple-600 dark:text-purple-400">✓</div>
                      <span>Community management and engagement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-purple-600 dark:text-purple-400">✓</div>
                      <span>Paid social media advertising campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-purple-600 dark:text-purple-400">✓</div>
                      <span>Influencer marketing and partnerships</span>
                    </li>
                  </ul>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Social+Media"
                    alt="Social Media Marketing"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Add similar TabsContent for other tabs */}
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Results Speak for Themselves</h2>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              We've helped businesses of all sizes achieve significant growth through our digital marketing strategies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-300 mb-2">250%</div>
              <p className="text-lg">Average Traffic Increase</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-300 mb-2">180%</div>
              <p className="text-lg">Conversion Rate Improvement</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-300 mb-2">95%</div>
              <p className="text-lg">Client Retention Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-300 mb-2">300+</div>
              <p className="text-lg">Successful Campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Marketing Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a data-driven approach to deliver results
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((step, index) => (
              <motion.div key={index} variants={fadeIn} className={`rounded-xl p-6 ${step.bgColor}`}>
                <div className="flex items-center mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${step.textColor} bg-white dark:bg-gray-800 mr-3`}
                  >
                    {index + 1}
                  </div>
                  <h3 className={`text-xl font-bold ${step.textColor}`}>{step.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">{ctaTitle}</h2>
                <p className="text-lg opacity-90">{ctaDescription}</p>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}