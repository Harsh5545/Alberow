"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Blog", path: "/blog" },
  { name: "Services", dropdown: true, subItems: [
      { name: "Web Development", path: "/services/web-development" },
      { name: "UI/UX Design", path: "/services/ui-ux-design" },
      { name: "SEO Optimization", path: "/services/seo-optimization" },
      { name: "Social Media Marketing", path: "/services/social-media-marketing" }
    ]},

];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/70 backdrop-blur-xl shadow-sm border-b border-border/30"
          : "bg-background/40 backdrop-blur-md"
      )}
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1 left-[50%] h-8 w-8 rounded-full border-2 border-primary/50" />
        <div className="absolute bottom-1 right-[40%] h-6 w-6 rounded-md border-2 border-primary/50" />
        <svg className="absolute -bottom-10 -left-10 h-32 w-32 text-primary/20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20,50 L80,50" stroke="currentColor" strokeWidth="2" />
          <path d="M50,20 L50,80" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="absolute -top-10 -right-10 h-32 w-32 text-primary/20" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20,50 L80,50" stroke="currentColor" strokeWidth="2" />
          <path d="M50,20 L50,80" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">
                Alberow
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
          <ul className="flex space-x-8">
  {navItems.map((item) => (
    <li key={item.name} className="relative">
      {item.dropdown ? (
        <div className="group">
          <button className="text-foreground/80 hover:text-foreground transition-colors relative py-2">
            {item.name}
          </button>
          <ul className="absolute left-0 top-full hidden group-hover:block bg-background/90 shadow-md rounded-lg mt-2 py-2 w-48">
            {item.subItems.map((sub) => (
              <li key={sub.name}>
                <Link href={sub.path} className="block px-4 py-2 hover:bg-muted rounded-md">
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Link href={item.path} className="text-foreground/80 hover:text-foreground transition-colors py-2">
          {item.name}
        </Link>
      )}
    </li>
  ))}
</ul>

          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-700" />
                )}
              </Button>
            )}
            <Link href="/contact">
            <Button
              variant="default"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
            >
              Get Started
            </Button></Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="rounded-full"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-700" />
                )}
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-b border-border/30">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md",
                  pathname === item.path && "text-foreground bg-muted font-medium"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-border/30">
              <Button
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}