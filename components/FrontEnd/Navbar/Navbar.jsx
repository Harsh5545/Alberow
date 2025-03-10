"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
    submenu: [
      { name: "Our Story", path: "/about#story" },
      { name: "Our Team", path: "/about#team" },
      { name: "Our Process", path: "/about#process" },
    ],
  },
  {
    name: "Work",
    path: "/work",
    submenu: [
      { name: "Web Development", path: "/work?category=web" },
      { name: "UI/UX Design", path: "/work?category=design" },
      { name: "Digital Marketing", path: "/work?category=marketing" },
    ],
  },
  { name: "Blog", path: "/blog" },

  { name: "Services", dropdown: true, subItems: [
      { name: "Web Development", path: "/services/web-development" },
      { name: "UI/UX Design", path: "/services/ui-ux-design" },
      { name: "SEO Optimization", path: "/services/seo-optimization" },
      { name: "Social Media Marketing", path: "/services/social-media-marketing" }
    ]},

]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = useState(null)

  // Fix for navbar disappearing after navigation
  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Close mobile menu when route changes
    setIsOpen(false)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  const toggleSubmenu = (index) => {
    if (openSubmenu === index) {
      setOpenSubmenu(null)
    } else {
      setOpenSubmenu(index)
    }
  }

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  }

  const submenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4 },
    },
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-md border-b border-border/30"
          : "bg-background/40 backdrop-blur-md",
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
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <motion.span
                className="text-2xl font-bold gradient-text"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Alberow
              </motion.span>
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

=======
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        className={cn(
                          "text-foreground/80 hover:text-foreground transition-colors relative py-2 flex items-center",
                          pathname.startsWith(item.path) && "text-foreground font-medium",
                        )}
                        onClick={() => toggleSubmenu(index)}
                        onMouseEnter={() => setOpenSubmenu(index)}
                        onMouseLeave={() => setOpenSubmenu(null)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      <AnimatePresence>
                        {(openSubmenu === index || pathname.startsWith(item.path)) && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-1 w-48 rounded-md bg-background/95 backdrop-blur-md shadow-lg border border-border/30 overflow-hidden z-50"
                            onMouseEnter={() => setOpenSubmenu(index)}
                            onMouseLeave={() => setOpenSubmenu(null)}
                          >
                            <div className="py-2">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.path}
                                  className="block px-4 py-2 text-sm hover:bg-primary/10 transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={cn(
                        "text-foreground/80 hover:text-foreground transition-colors relative py-2 block",
                        pathname === item.path &&
                          "text-foreground font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500",
                      )}
                    >
                      {item.name}
                      {pathname === item.path && (
                        <motion.span
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                          layoutId="navbar-underline"
                          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                        />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {mounted && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
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
              </motion.div>
            )}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="default"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
              >
                Get Started
              </Button>

            )}
            <Link href="/contact">
            <Button
              variant="default"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
            >
              Get Started
            </Button></Link>
            </motion.div>

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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="relative z-50"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 overflow-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.div key={item.name} variants={itemVariants}>
                  {item.submenu ? (
                    <div className="border-b border-border/30 py-2">
                      <button
                        className={cn(
                          "flex w-full justify-between items-center py-2 text-lg font-medium",
                          pathname.startsWith(item.path) && "text-primary",
                        )}
                        onClick={() => toggleSubmenu(index)}
                      >
                        {item.name}
                        <motion.div animate={{ rotate: openSubmenu === index ? 90 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronRight className="h-5 w-5" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openSubmenu === index && (
                          <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={submenuVariants}
                            className="pl-4 overflow-hidden"
                          >
                            {item.submenu.map((subItem) => (
                              <motion.div key={subItem.name} variants={itemVariants} className="py-1">
                                <Link
                                  href={subItem.path}
                                  className="block py-2 pl-4 border-l-2 border-primary/30 hover:border-primary transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className={cn(
                        "block py-3 text-lg border-b border-border/30",
                        pathname === item.path ? "text-primary font-medium" : "text-foreground/80",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        {item.name}
                      </motion.div>
                    </Link>
                  )}
                </motion.div>
              ))}
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
  )
}

