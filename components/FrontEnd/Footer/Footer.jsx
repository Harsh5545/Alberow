import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold gradient-text">Alberow</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Transforming ideas into exceptional digital experiences. We create innovative web solutions that drive business growth.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-500/10 hover:text-blue-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-400/10 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-500/10 hover:text-pink-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-700/10 hover:text-blue-700">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800/10 hover:text-gray-800 dark:hover:text-white">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Work", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Web Development", 
                "UI/UX Design", 
                "Digital Marketing", 
                "SEO Optimization", 
                "Content Strategy", 
                "E-commerce Solutions"
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="/services"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  123 Innovation Street, Tech City, TC 10101
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">info@alberow.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="bg-background" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 mt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Alberow. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link href="/privacy" className="text-sm hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm hover:text-foreground transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
