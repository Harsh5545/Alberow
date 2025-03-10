import { Rocket, Target, Lightbulb } from 'lucide-react';

export default function OurMission() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 gradient-text inline-block">Our Mission & Vision</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              At Alberow, we're on a mission to transform how businesses connect with their audiences in the digital world. We believe that exceptional digital experiences are the foundation of successful modern businesses.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              Our vision is to be the leading digital agency that combines cutting-edge technology with creative design to deliver solutions that not only meet but exceed our clients' expectations and business goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-full bg-blue-500/10 text-blue-500">
                  <Rocket className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    We constantly push the boundaries of what's possible in web development and digital marketing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-full bg-purple-500/10 text-purple-500">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                  <p className="text-muted-foreground">
                    We focus on delivering measurable results that contribute to our clients' business success.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-full bg-pink-500/10 text-pink-500">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creative Excellence</h3>
                  <p className="text-muted-foreground">
                    We blend technical expertise with creative thinking to create unique digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-xl border border-border/50 gradient-border">
              <img
                src="/placeholder.svg?height=800&width=800&text=Our+Mission"
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-xl bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl opacity-50" />
            
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-500/10 animate-morph"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-purple-500/10 animate-morph" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
