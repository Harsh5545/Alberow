export default function Clients() {
    // Array of client logos (using placeholder images)
    const clients = Array.from({ length: 8 }, (_, i) => ({
      name: `Client ${i + 1}`,
      logo: `/placeholder.svg?height=100&width=200&text=Client+${i + 1}`
    }));
  
    return (
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Trusted By</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're proud to work with amazing companies across various industries
            </p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-6 bg-card rounded-xl border border-border/50 hover:shadow-md transition-all duration-300"
              >
                <img 
                  src={client.logo || "/placeholder.svg"} 
                  alt={client.name}
                  className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  