"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Lightbulb, Code, Rocket, BarChart, Repeat } from 'lucide-react';

const Palette = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="13.5" cy="6.5" r="2.5"/>
    <circle cx="19" cy="13" r="2.5"/>
    <circle cx="6" cy="12" r="2.5"/>
    <circle cx="10" cy="20" r="2.5"/>
    <path d="M2 2h20v20H2z"/>
  </svg>
);

const processSteps = [
  {
    id: "discovery",
    icon: <Search className="h-6 w-6" />,
    title: "Discovery",
    description: "We start by understanding your business, goals, target audience, and competition to create a solid foundation for your project.",
    details: [
      "In-depth client interviews",
      "Market and competitor analysis",
      "User research and persona development",
      "Project goals and KPIs definition"
    ],
    color: "blue"
  },
  {
    id: "strategy",
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Strategy",
    description: "Based on our discoveries, we develop a comprehensive strategy that outlines the approach, timeline, and deliverables.",
    details: [
      "Content strategy development",
      "Technical requirements planning",
      "User experience mapping",
      "Project roadmap creation"
    ],
    color: "purple"
  },
  {
    id: "design",
    icon: <Palette className="h-6 w-6" />,
    title: "Design",
    description: "Our designers create visually stunning, user-friendly interfaces that align with your brand and business objectives.",
    details: [
      "Wireframing and prototyping",
      "Visual design and UI development",
      "Responsive design for all devices",
      "Client feedback and revisions"
    ],
    color: "pink"
  },
  {
    id: "development",
    icon: <Code className="h-6 w-6" />,
    title: "Development",
    description: "Our development team brings the designs to life, creating robust, scalable, and secure digital solutions.",
    details: [
      "Front-end and back-end development",
      "CMS integration",
      "E-commerce functionality",
      "Performance optimization"
    ],
    color: "cyan"
  },
  {
    id: "launch",
    icon: <Rocket className="h-6 w-6" />,
    title: "Launch",
    description: "We meticulously test and refine before launching your project, ensuring everything works flawlessly.",
    details: [
      "Quality assurance testing",
      "Cross-browser and device testing",
      "SEO implementation",
      "Deployment and go-live support"
    ],
    color: "yellow"
  },
  {
    id: "growth",
    icon: <BarChart className="h-6 w-6" />,
    title: "Growth",
    description: "Post-launch, we monitor performance, gather user feedback, and make data-driven improvements to ensure ongoing success.",
    details: [
      "Analytics setup and monitoring",
      "Performance reporting",
      "Conversion optimization",
      "Ongoing maintenance and support"
    ],
    color: "green"
  }
];



export default function OurProcess() {
  const [activeTab, setActiveTab] = useState("discovery");

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How we transform your ideas into exceptional digital experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="discovery" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              {processSteps.map((step) => (
                <TabsTrigger 
                  key={step.id} 
                  value={step.id}
                  className="flex flex-col items-center gap-2 py-3 data-[state=active]:text-blue-500"
                >
                  <div className={`p-2 rounded-full bg-${step.color}-500/10 text-${step.color}-500`}>
                    {step.icon}
                  </div>
                  <span className="text-xs">{step.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {processSteps.map((step) => (
              <TabsContent key={step.id} value={step.id} className="mt-0">
                <div className="bg-card rounded-xl border border-border/50 p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-full bg-${step.color}-500/10 text-${step.color}-500 mr-4`}>
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  
                  <p className="text-lg mb-6">{step.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => {
                        const currentIndex = processSteps.findIndex(s => s.id === activeTab);
                        const prevIndex = (currentIndex - 1 + processSteps.length) % processSteps.length;
                        setActiveTab(processSteps[prevIndex].id);
                      }}
                      className="text-sm flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      disabled={activeTab === processSteps[0].id}
                    >
                      {activeTab !== processSteps[0].id && (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                            <path d="m15 18-6-6 6-6"/>
                          </svg>
                          Previous: {processSteps[(processSteps.findIndex(s => s.id === activeTab) - 1 + processSteps.length) % processSteps.length].title}
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={() => {
                        const currentIndex = processSteps.findIndex(s => s.id === activeTab);
                        const nextIndex = (currentIndex + 1) % processSteps.length;
                        setActiveTab(processSteps[nextIndex].id);
                      }}
                      className="text-sm flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      disabled={activeTab === processSteps[processSteps.length - 1].id}
                    >
                      {activeTab !== processSteps[processSteps.length - 1].id && (
                        <>
                          Next: {processSteps[(processSteps.findIndex(s => s.id === activeTab) + 1) % processSteps.length].title}
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                            <path d="m9 18 6-6-6-6"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <Repeat className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-xl font-semibold">Continuous Improvement</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our process doesn't end with launch. We continuously monitor, analyze, and improve your digital presence to ensure long-term success and ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
