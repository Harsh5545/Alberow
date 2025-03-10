"use client"

import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-0" />
      <div className="absolute inset-0 grid-background opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">
              Ready to <span className="gradient-text">Transform</span> Your Digital Presence?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Get in touch with our team to discuss how we can help elevate your brand online.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto animate-fade-in animation-delay-400">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input type="email" placeholder="Enter your email" className="pl-10" />
            </div>
            <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity whitespace-nowrap">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground animate-fade-in animation-delay-600">
            By submitting this form, you agree to our{" "}
            <a href="#" className="underline hover:text-foreground">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-foreground">
              Terms of Service
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  )
}

