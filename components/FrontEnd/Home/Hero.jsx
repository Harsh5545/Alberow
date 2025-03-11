"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cpu, Server, Layers, Zap } from 'lucide-react';
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.1})`,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(150, 150, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Code className="absolute top-1/4 left-1/5 h-12 w-12 text-blue-500/30 float-animation" />
        <Cpu className="absolute bottom-1/3 right-1/4 h-16 w-16 text-purple-500/30 float-slow" />
        <Server className="absolute top-1/3 right-1/5 h-10 w-10 text-pink-500/30 float-fast" />
        <Layers className="absolute bottom-1/4 left-1/3 h-14 w-14 text-cyan-500/30 float-animation" />
        <Zap className="absolute top-2/3 right-1/3 h-8 w-8 text-yellow-500/30 float-fast" />
        
        <div className="absolute top-1/4 right-1/4 h-32 w-32 rounded-full border-4 border-blue-500/20 float-slow" />
        <div className="absolute bottom-1/3 left-1/5 h-24 w-24 rounded-md border-4 border-purple-500/20 float-animation" />
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
            <span className="gradient-text">
              Transforming Ideas Into Digital Reality
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
            We are a cutting-edge web development and marketing agency that creates exceptional digital experiences to help businesses thrive in the digital world.
          </p>
          <div className="flex flex-row gap-2 md:gap-4">
            <Button
              size="lg"
              className="gap-2 flex p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
              asChild
            >
              <Link href="/contact">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" className="p-2 text-center flex justify-center items-center" variant="outline" asChild>
              <Link href="/work">
                View Our Work
              </Link>
            </Button>
          </div>

          <div className="mt-16 relative w-full max-w-5xl">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-card gradient-border">
              <img
                src="./assets/AlberowHome.webp"
                alt="Alberow Digital Agency Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-xl bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
