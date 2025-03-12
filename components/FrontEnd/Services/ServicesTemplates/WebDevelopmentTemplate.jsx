"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Server, Database, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

export default function WebDevelopmentTemplate({ service = {} }) {
  const [activeTab, setActiveTab] = useState("frontend");

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-blue-500/[0.05] bg-[size:20px_20px] dark:bg-grid-white/[0.05]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium">
                Web Development
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Bringing Your <span className="text-blue-600 dark:text-blue-400">Digital Vision</span> to Life
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Custom websites and web applications built with modern technologies to help your business stand out and
                succeed online.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="p-2 bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
                <Button size="lg" variant="outline p-2">
                  View Our Work
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
                  src={"/assets/AlberowWebsite.webp"|| "/placeholder.svg?height=400&width=600&text=Web+Development"}
                  alt="Web Development"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Development Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of web development services to meet your business needs
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={activeTab === "frontend" ? "default" : "outline"}
              onClick={() => setActiveTab("frontend")}
              className={activeTab === "frontend" ? "bg-blue-600 p-2     flex flex-col h-16" : " p-2     flex flex-col h-16"}
            >
              <Code className="mr-2 h-4 w-4" /> Frontend Development
            </Button>
            <Button
              variant={activeTab === "backend" ? "default" : "outline "}
              onClick={() => setActiveTab("backend")}
              className={activeTab === "backend" ? "bg-purple-600  p-2     flex flex-col h-16" : " p-2     flex flex-col h-16"}
            >
              <Server className="mr-2 h-4 w-4" /> Backend Development
            </Button>
            <Button
              variant={activeTab === "database" ? "default" : "outline"}
              onClick={() => setActiveTab("database")}
              className={activeTab === "database" ? "bg-pink-600  p-2     flex flex-col h-16" : " p-2     flex flex-col h-16"}
            >
              <Database className="mr-2 h-4 w-4" /> Database Solutions
            </Button>
            <Button
              variant={activeTab === "ecommerce" ? "default" : "outline"}
              onClick={() => setActiveTab("ecommerce")}
              className={activeTab === "ecommerce" ? "bg-cyan-600  p-2     flex flex-col h-16" : " p-2     flex flex-col h-16"}
            >
              <Globe className="mr-2 h-4 w-4" /> E-commerce Solutions
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {activeTab === "frontend" && (
              <>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Frontend Development</h3>
                  <p className="text-lg">
                    We create beautiful, responsive user interfaces that provide exceptional user experiences across all
                    devices.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-blue-600 dark:text-blue-400">✓</div>
                      <span>Modern frameworks like React, Next.js, and Vue.js</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-blue-600 dark:text-blue-400">✓</div>
                      <span>Responsive design that works on all devices</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-blue-600 dark:text-blue-400">✓</div>
                      <span>Performance optimization for fast loading times</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-blue-600 dark:text-blue-400">✓</div>
                      <span>Accessibility compliance for all users</span>
                    </li>
                  </ul>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Frontend+Development"
                    alt="Frontend Development"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </>
            )}

            {activeTab === "backend" && (
              <>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Backend Development</h3>
                  <p className="text-lg">
                    We build robust server-side solutions that power your applications with security and scalability.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-purple-600 dark:text-purple-400">✓</div>
                      <span>Node.js, Python, and PHP development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-purple-600 dark:text-purple-400">✓</div>
                      <span>RESTful API development and integration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-purple-600 dark:text-purple-400">✓</div>
                      <span>Authentication and authorization systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-purple-600 dark:text-purple-400">✓</div>
                      <span>Serverless architecture and cloud functions</span>
                    </li>
                  </ul>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Backend+Development"
                    alt="Backend Development"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </>
            )}

            {activeTab === "database" && (
              <>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400">Database Solutions</h3>
                  <p className="text-lg">
                    We design and implement efficient data storage and management systems tailored to your specific
                    needs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-pink-600 dark:text-pink-400">✓</div>
                      <span>SQL and NoSQL database design</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-pink-600 dark:text-pink-400">✓</div>
                      <span>Data migration and integration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-pink-600 dark:text-pink-400">✓</div>
                      <span>Database performance optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-pink-600 dark:text-pink-400">✓</div>
                      <span>Data backup and recovery solutions</span>
                    </li>
                  </ul>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Database+Solutions"
                    alt="Database Solutions"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </>
            )}

            {activeTab === "ecommerce" && (
              <>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">E-commerce Solutions</h3>
                  <p className="text-lg">
                    We build complete online store solutions with secure payment processing and inventory management.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-cyan-600 dark:text-cyan-400">✓</div>
                      <span>Custom e-commerce website development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-cyan-600 dark:text-cyan-400">✓</div>
                      <span>Shopping cart and checkout optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-cyan-600 dark:text-cyan-400">✓</div>
                      <span>Payment gateway integration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-cyan-600 dark:text-cyan-400">✓</div>
                      <span>Inventory and order management systems</span>
                    </li>
                  </ul>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=E-commerce+Solutions"
                    alt="E-commerce Solutions"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to deliver high-quality web solutions
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">{ctaTitle}</h2>
                <p className="text-lg opacity-90">{ctaDescription}</p>
                <Button size="lg" className="bg-white flex items-center justify-center p-2 text-blue-600 hover:bg-gray-100">
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