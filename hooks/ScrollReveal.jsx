"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    sections.forEach((section) => {
      const headings = section.querySelectorAll("h1, h2, h3");
      const paragraphs = section.querySelectorAll("p");
      const buttons = section.querySelectorAll("button, a");
      const cards = section.querySelectorAll(".card, [class*='grid'] > div");
      
      headings.forEach((el, i) => {
        if (!el.classList.contains("reveal") && !el.classList.contains("reveal-left") && !el.classList.contains("reveal-right")) {
          el.classList.add("reveal");
          el.style.transitionDelay = `${i * 100}ms`;
        }
      });
      
      paragraphs.forEach((el, i) => {
        if (!el.classList.contains("reveal") && !el.classList.contains("reveal-left") && !el.classList.contains("reveal-right")) {
          el.classList.add("reveal");
          el.style.transitionDelay = `${i * 100 + 200}ms`;
        }
      });
      
      buttons.forEach((el, i) => {
        if (!el.classList.contains("reveal") && !el.classList.contains("reveal-left") && !el.classList.contains("reveal-right")) {
          el.classList.add("reveal");
          el.style.transitionDelay = `${i * 100 + 300}ms`;
        }
      });
      
      cards.forEach((el, i) => {
        if (!el.classList.contains("reveal") && !el.classList.contains("reveal-left") && !el.classList.contains("reveal-right")) {
          el.classList.add("reveal");
          el.style.transitionDelay = `${i * 100 + 100}ms`;
        }
      });
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}
