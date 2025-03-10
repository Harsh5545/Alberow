import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's work together to create exceptional digital experiences that drive results
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input type="email" placeholder="Enter your email" className="flex-grow" />
            <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            We'll get back to you within 24 hours to discuss your project.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" size="lg" className="group" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="default" size="lg" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity" asChild>
              <Link href="/work">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
