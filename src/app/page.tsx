'use client';

import './globals.css';
import { Navbar } from "./components/navbar";
import { Body } from "./components/body";
import { Particles } from "@/components/magicui/particles";
import Experience from './components/experience';
import Skills from './components/skills';
import AnimatedGreeting from './components/opener';
import { AboutMe } from './components/about';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen">

      {/* Opening Text Animation */}
      <AnimatedGreeting />

      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={100}
        color="#fff"
        refresh
      >
      </Particles>

      {/* Sticky Navbar */}
      <header className="w-full z-10">
        <Navbar />
      </header>

      {/* Body / Hero Section */}
      <section id="home" className="relative z-10 w-full max-w-6xl px-4 py-24">
        <Body />
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 w-full max-w-6xl px-4 py-24">
        <Skills />
      </section>

    <AboutMe/>

      {/* Experience Section */}
      <div className="w-full py-36">
        <section
          id="experience"
          className="relative z-10 max-w-6xl mx-auto px-4 text-white"
        >
          <Experience />
        </section>
      </div>
    </div>
  );
}
