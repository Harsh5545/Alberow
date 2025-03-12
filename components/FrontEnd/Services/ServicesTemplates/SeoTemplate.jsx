"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "./ContactForm";

export default function SeoTemplate({ service = {} }) {
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

  const { process = [], features = [], ctaTitle = "", ctaDescription = "" } = service;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-200/30 via-transparent to-transparent dark:from-green-900/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-sm font-medium">
                SEO Optimization
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Boost Your <span className="text-green-600 dark:text-green-400">Search Rankings</span> & Visibility
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Improve your search engine rankings, drive organic traffic, and increase your online visibility.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="p-2 bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="p-2">
                  Free SEO Audit
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
                  src="/assets/AlberowSeo.webp"
                  alt="SEO Optimization"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-green-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-yellow-600 rounded-full opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive SEO solutions to improve your search engine rankings and drive organic traffic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.iconColor} bg-gray-100 dark:bg-gray-800 mb-4`}
                  >
                    {feature.icon && <feature.icon className="h-6 w-6" />}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1 h-5 w-5 text-green-600 dark:text-green-400">✓</div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real SEO Results</h2>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              We've helped businesses of all sizes achieve significant improvements in their search rankings and organic
              traffic
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-300 mb-2">300%</div>
              <p className="text-lg">Average Traffic Increase</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-300 mb-2">85%</div>
              <p className="text-lg">First Page Rankings</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-300 mb-2">200%</div>
              <p className="text-lg">Conversion Rate Growth</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-300 mb-2">150+</div>
              <p className="text-lg">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a data-driven approach to improve your search engine rankings
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

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SEO Case Studies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses improve their search rankings and organic traffic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Case+Study+1"
                  alt="Case Study 1"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">E-commerce</div>
                <h3 className="text-xl font-bold mb-2">300% Increase in Organic Traffic</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  How we helped an e-commerce store increase their organic traffic and sales through comprehensive SEO.
                </p>
                <Button variant="outline" className="w-full">
                  Read Case Study
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Case+Study+2"
                  alt="Case Study 2"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">Local Business</div>
                <h3 className="text-xl font-bold mb-2">Top 3 Rankings for Local Keywords</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  How we helped a local business dominate local search results and increase foot traffic.
                </p>
                <Button variant="outline" className="w-full">
                  Read Case Study
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Case+Study+3"
                  alt="Case Study 3"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">SaaS</div>
                <h3 className="text-xl font-bold mb-2">200% Increase in Qualified Leads</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  How we helped a SaaS company increase their qualified leads through targeted SEO strategies.
                </p>
                <Button variant="outline" className="w-full">
                  Read Case Study
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-600 to-yellow-600 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">{ctaTitle}</h2>
                <p className="text-lg opacity-90">{ctaDescription}</p>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
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