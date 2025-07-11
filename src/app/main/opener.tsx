"use client";

import React, { useEffect, useState } from "react";
import { HyperText } from "@/components/magicui/hyper-text";

const greetings = ["Hi"];

interface AnimatedGreetingProps {
  onComplete: () => void;
}

export default function AnimatedGreeting({ onComplete }: AnimatedGreetingProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(false); // default false
  const [fadeOut, setFadeOut] = useState(false);

  // Check if intro has been seen
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      setShowIntro(true);
      sessionStorage.setItem("hasSeenIntro", "true");
    } else {
      // If intro has been seen, immediately call onComplete
      onComplete();
    }
  }, [onComplete]);

  // Progress greeting sequence
  useEffect(() => {
    if (!showIntro) return;

    if (currentIndex < greetings.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 950);
      return () => clearTimeout(timeout);
    } else {
      // Start fade out
      const timeout = setTimeout(() => {
        setFadeOut(true);
      }, 900);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, showIntro]);

  // Remove intro after fade and call onComplete
  useEffect(() => {
    if (fadeOut) {
      const timeout = setTimeout(() => {
        setShowIntro(false);
        onComplete(); // Call onComplete when animation finishes
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [fadeOut, onComplete]);

  if (!showIntro) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
      style={{
        backgroundColor: "var(--custom-bg)",
        padding: "3rem",
      }}
    >
      <div className="max-w-4xl w-full text-center px-6">
        <h1 className="text-8xl md:text-10xl font-extrabold text-accent drop-shadow-lg">
          <HyperText key={greetings[currentIndex]}>
            {greetings[currentIndex]}
          </HyperText>
        </h1>
      </div>
    </div>
  );
}
