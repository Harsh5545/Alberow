"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, CreditCard, Package, BarChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "./ContactForm";

export default function EcommerceTemplate({ service = {} }) {
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
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,212,255,0.1)_0%,rgba(9,9,121,0.1)_35%,rgba(0,212,255,0.1)_100%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300 text-sm font-medium">
                E-commerce Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Start <span className="text-cyan-600 dark:text-cyan-400">Selling Online</span> with Confidence
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Custom online store solutions that drive sales, enhance customer experience, and grow your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-cyan-600 p-2 hover:bg-cyan-700">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="p-2">
                  View Demo Stores
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
                  src="/assets/AlberowEcommerce.webp"
                  alt="E-commerce"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-cyan-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our E-commerce Solutions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive e-commerce solutions to help your business sell online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(0, 6).map((feature, index) => (
              <Card
                key={index}
                className="border border-cyan-100 dark:border-cyan-900 hover:shadow-lg transition-shadow duration-300"
              >
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
                        <div className="mr-2 mt-1 h-5 w-5 text-cyan-600 dark:text-cyan-400">✓</div>
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

      {/* Store Types Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">E-commerce Store Types We Build</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We create custom online stores for various business types and industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mb-4">
                <ShoppingCart className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">B2C Online Stores</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Consumer-focused online stores with intuitive shopping experiences and streamlined checkout processes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">B2B E-commerce Platforms</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Business-to-business platforms with wholesale pricing, bulk ordering, and account management features.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Subscription Services</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Recurring billing platforms for subscription-based products and services with flexible payment options.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mb-4">
                <ShoppingCart className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Marketplace Platforms</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Multi-vendor marketplaces where multiple sellers can list products and manage their own inventory.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dropshipping Stores</h3>
              <p className="text-gray-600 dark:text-gray-300">
                E-commerce stores with integrated dropshipping capabilities and supplier management tools.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Product Stores</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Platforms for selling digital products like e-books, courses, software, and downloadable content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">E-commerce Development Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to create successful online stores
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
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">{ctaTitle}</h2>
                <p className="text-lg opacity-90">{ctaDescription}</p>
                <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
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