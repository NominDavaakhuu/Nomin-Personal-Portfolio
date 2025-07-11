'use client';

import './globals.css';
import { Navbar } from "./main/navbar";
import { Body } from "./main/hero";
import { Particles } from "@/components/magicui/particles";
import { AboutMe } from './main/about';
import Projects from './main/projects';
import Skills from './main/skills';
import AnimatedGreeting from './main/opener';
import ContactForm from './main/contactMe';
import Footer from './main/footer';
import SideNavbar from './main/sideNav';
import { useState } from 'react';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen">
      
      {/* Opening Text Animation */}
      <AnimatedGreeting onComplete={handleIntroComplete} />

      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        staticity={50}
        size={2}
        ease={100}
        color="#fff"
        refresh
      />

      {/* Sticky Navbar - Only show after intro */}
      {introComplete && (
        <header className="w-full z-10 animate-fade-in">
          <Navbar />
        </header>
      )}

      {/* Side Navigation Bar - Only show after intro */}
      {introComplete && (
        <div className="animate-fade-in-delay">
          <SideNavbar />
        </div>
      )}

      {/* Body / Hero Section */}
      <section id="home" className="relative z-10 w-full max-w-6xl px-4 pt-20">
        <Body />
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 w-full max-w-6xl px-4">
        <Skills />
      </section>

      {/* About Me Section */}
      <section id="about" className="relative z-10 w-full">
        <AboutMe />
      </section>

      {/* Projects Section */}
      <div className="w-full py-36">
        <section
          id="projects"
          className="relative z-10 max-w-6xl mx-auto px-4"
        >
          <Projects />
        </section>
      </div>

      {/* Contact Section */}
      <div className="w-full py-6 bg-gray-100 dark:bg-gray-900">
        <section
          id="contact"
          className="relative z-10 max-w-6xl mx-auto px-4 text-gray-900 dark:text-white"
        >
          <ContactForm />
        </section>
      </div>

      {/* Footer Section */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}