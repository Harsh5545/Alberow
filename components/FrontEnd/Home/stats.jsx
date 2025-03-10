"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Award, Briefcase, Clock } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: 150,
    label: "Happy Clients",
    suffix: "+",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: 25,
    label: "Awards Won",
    suffix: "+",
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    value: 300,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    value: 10,
    label: "Years Experience",
    suffix: "+",
  },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);

    const counters = stats.map((stat, i) => {
      let frame = 0;
      const countTo = stat.value;
      
      return setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(countTo * (progress < 1 ? progress : 1));
        
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[i] = currentCount;
          return newCounts;
        });
        
        if (frame === totalFrames) {
          clearInterval(counters[i]);
        }
      }, frameDuration);
    });

    return () => {
      counters.forEach(counter => clearInterval(counter));
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card border border-border/50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2 gradient-text">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
