import Link from "next/link"

export default function Sitemap() {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Services", url: "/services" },
        { name: "Projects", url: "/projects" },
        { name: "Blog", url: "/blog" },
        { name: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", url: "/services/web-development" },
        { name: "UI/UX Design", url: "/services/ui-ux-design" },
        { name: "Digital Marketing", url: "/services/digital-marketing" },
        { name: "SEO Optimization", url: "/services/seo-optimization" },
        { name: "Content Strategy", url: "/services/content-strategy" },
        { name: "E-commerce Solutions", url: "/services/ecommerce-solutions" },
      ],
    },
    {
      title: "Projects",
      links: [
        { name: "All Projects", url: "/projects" },
        { name: "Web Development", url: "/projects?category=web" },
        { name: "UI/UX Design", url: "/projects?category=design" },
        { name: "Digital Marketing", url: "/projects?category=marketing" },
        { name: "E-commerce", url: "/projects?category=ecommerce" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Our Team", url: "/team" },
        { name: "Careers", url: "/careers" },
        { name: "Testimonials", url: "/testimonials" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", url: "/blog" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Guides", url: "/guides" },
        { name: "FAQ", url: "/faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms of Service", url: "/terms" },
        { name: "Sitemap", url: "/sitemap" },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Sitemap</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteStructure.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.url} className="text-primary hover:underline flex items-center">
                    <span className="inline-block w-2 h-2 bg-primary/50 rounded-full mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-4">XML Sitemaps</h2>
        <p className="mb-4">For search engines, we also provide XML sitemaps:</p>
        <ul className="space-y-2">
          <li>
            <Link href="/sitemap.xml" className="text-primary hover:underline flex items-center" target="_blank">
              <span className="inline-block w-2 h-2 bg-primary/50 rounded-full mr-2"></span>
              Main Sitemap
            </Link>
          </li>
          <li>
            <Link
              href="/sitemap-projects.xml"
              className="text-primary hover:underline flex items-center"
              target="_blank"
            >
              <span className="inline-block w-2 h-2 bg-primary/50 rounded-full mr-2"></span>
              Projects Sitemap
            </Link>
          </li>
          <li>
            <Link href="/sitemap-blog.xml" className="text-primary hover:underline flex items-center" target="_blank">
              <span className="inline-block w-2 h-2 bg-primary/50 rounded-full mr-2"></span>
              Blog Sitemap
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

