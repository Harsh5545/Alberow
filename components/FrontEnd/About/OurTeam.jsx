"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Facebook, Twitter, Linkedin, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400&text=AJ",
    bio: "Alex has over 15 years of experience in web development and digital marketing. He founded Alberow with a vision to create a digital agency that combines technical excellence with creative innovation.",
    skills: ["Strategic Planning", "Business Development", "Team Leadership", "Client Relations"],
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#"
    }
  },
  {
    name: "Sophia Chen",
    role: "Creative Director",
    image: "/placeholder.svg?height=400&width=400&text=SC",
    bio: "Sophia brings 10+ years of design experience to Alberow. Her background in both traditional and digital design allows her to create unique visual identities and user experiences for our clients.",
    skills: ["UI/UX Design", "Brand Identity", "Visual Design", "Creative Strategy"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Marcus Williams",
    role: "Lead Developer",
    image: "/placeholder.svg?height=400&width=400&text=MW",
    bio: "Marcus is a full-stack developer with expertise in React, Next.js, and various backend technologies. He leads our development team in creating robust, scalable web applications.",
    skills: ["React/Next.js", "Node.js", "Database Design", "API Development"],
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Olivia Martinez",
    role: "Digital Marketing Manager",
    image: "/placeholder.svg?height=400&width=400&text=OM",
    bio: "Olivia specializes in creating comprehensive digital marketing strategies that drive traffic and conversions. She has a proven track record of successful campaigns across various industries.",
    skills: ["SEO/SEM", "Content Strategy", "Social Media Marketing", "Analytics"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "David Kim",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=400&width=400&text=DK",
    bio: "David is passionate about creating intuitive, user-centered designs. He combines aesthetic sensibility with a deep understanding of user behavior to create engaging interfaces.",
    skills: ["User Research", "Wireframing", "Prototyping", "Interaction Design"],
    social: {
      linkedin: "#",
      dribbble: "#"
    }
  },
  {
    name: "Emma Wilson",
    role: "Content Strategist",
    image: "/placeholder.svg?height=400&width=400&text=EW",
    bio: "Emma crafts compelling content strategies that tell our clients' stories and engage their target audiences. She has a background in journalism and digital content creation.",
    skills: ["Content Creation", "Brand Storytelling", "SEO Writing", "Editorial Planning"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openMemberDialog = (member) => {
    setSelectedMember(member);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The talented individuals behind Alberow's success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => openMemberDialog(member)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image || "/placeholder.svg"} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedMember && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedMember.name}</DialogTitle>
                <DialogDescription className="text-lg text-primary">{selectedMember.role}</DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={selectedMember.image || "/placeholder.svg"} 
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <p className="mb-4">{selectedMember.bio}</p>
                  
                  <h4 className="font-semibold mb-2">Skills & Expertise:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedMember.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-muted rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    {selectedMember.social.linkedin && (
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    )}
                    {selectedMember.social.twitter && (
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    )}
                    {selectedMember.social.facebook && (
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  <X className="h-4 w-4 mr-2" />
                  Close
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}
