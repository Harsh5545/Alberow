export default function AboutHero() {
    return (
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-0" />
        <div className="absolute inset-0 grid-background opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">About Alberow</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              We're a team of passionate digital experts dedicated to creating exceptional web experiences that drive business growth.
            </p>
          </div>
          
          <div className="mt-12 relative max-w-5xl mx-auto">
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src="/placeholder.svg?height=720&width=1280&text=Our+Team"
                alt="Alberow Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-xl bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl opacity-50" />
          </div>
        </div>
      </section>
    );
  }
  