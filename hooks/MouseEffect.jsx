"use client";

import { useEffect, useState } from "react";

export default function MouseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handlePointerDetection = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        setIsPointer(computedStyle.cursor === "pointer");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    const pointerInterval = setInterval(handlePointerDetection, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(pointerInterval);
    };
  }, [position]);

  if (typeof window === "undefined") return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
          width: isPointer ? "16px" : "8px",
          height: isPointer ? "16px" : "8px",
          backgroundColor: isPointer ? "rgba(138, 43, 226, 0.9)" : "rgba(138, 43, 226, 0.7)",
        }}
      />
      <div
        className="cursor-outline"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
          width: isPointer ? "48px" : "40px",
          height: isPointer ? "48px" : "40px",
        }}
      />
    </>
  );
}
