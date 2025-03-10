export default function BlogHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-0" />
      <div className="absolute inset-0 grid-background opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Our Blog</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Insights, tips, and industry news from the Alberow team
          </p>
        </div>
      </div>
    </section>
  )
}

