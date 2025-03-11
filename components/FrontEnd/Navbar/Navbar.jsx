"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Blog", path: "/blog" },
  {
    name: "Services", path: "/services",
    // submenu: [
    //   { name: "Web Development", path: "/services/web-development" },
    //   { name: "UI/UX Design", path: "/services/ui-ux-design" },
    //   { name: "SEO Optimization", path: "/services/seo-optimization" },
    //   { name: "Social Media Marketing", path: "/services/social-media-marketing" },
    // ],
  },
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

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-xl shadow-md" : "bg-background/40 backdrop-blur-md"
      )}
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1 left-[50%] h-8 w-8 rounded-full border-2 border-primary/50 animate-pulse" />
        <div className="absolute bottom-1 right-[40%] h-6 w-6 rounded-md border-2 border-primary/50 animate-pulse" />
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
          <motion.span
            className="text-2xl font-bold gradient-text"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Alberow
          </motion.span>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) =>
              item.submenu ? (
                <div key={item.name} className="relative group">
                  <span
                    className={cn(
                      "text-foreground/80 hover:text-foreground transition-colors cursor-pointer",
                      pathname.startsWith("/services") && "text-primary font-medium"
                    )}
                  >
                    {item.name}
                  </span>
                  <div className="absolute left-0 hidden mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md group-hover:block">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        className={cn(
                          "block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted rounded-md",
                          pathname === subItem.path && "text-primary"
                        )}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.path}
                  className={cn(
                    "text-foreground/80 hover:text-foreground transition-colors",
                    pathname === item.path && "text-primary font-medium"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            <Button>Get Started</Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="md:hidden" initial="closed" animate="open" exit="closed" variants={mobileMenuVariants}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md">
              {navItems.map((item) =>
                item.submenu ? (
                  <div key={item.name} className="relative group">
                    <span
                      className={cn(
                        "block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md cursor-pointer",
                        pathname.startsWith("/services") && "text-primary"
                      )}
                    >
                      {item.name}
                    </span>
                    <div className="pl-4">
                      {item.submenu.map((subItem) => (
                        <motion.div key={subItem.name} variants={itemVariants}>
                          <Link
                            href={subItem.path}
                            className={cn(
                              "block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md",
                              pathname === subItem.path && "text-primary"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.path}
                      className={cn(
                        "block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md",
                        pathname === item.path && "text-primary"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              )}
              <motion.div variants={itemVariants} className="pt-6">
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}