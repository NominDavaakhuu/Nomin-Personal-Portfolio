'use client';

import './globals.css';
import { Navbar } from "./main/navbar";
import { Body } from "./main/hero";
import { Particles } from "@/components/magicui/particles";
import Experience from './main/projects';
import Skills from './main/skills';
import AnimatedGreeting from './main/opener';
import { AboutMe } from './main/about';
import ContactForm from './main/contactMe';
import ScrollToTop from '../components/ui/scrollToTop';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen">

      {/* Opening Text Animation */}
      <AnimatedGreeting />

      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        staticity={50}
        size={2}
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
      <section id="home" className="relative z-10 w-full max-w-6xl px-4 pt-20">
        <Body />
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 w-full max-w-6xl px-4 ">
        <Skills />
      </section>

      {/* About Me Section */}
      <AboutMe/>

      {/* Experience Section */}
      <div className="w-full py-36">
        <section
          id="experience"
          className="relative z-10 max-w-6xl mx-auto px-4 "
        >
          <Experience />
        </section>
      </div>

      {/*Contact Section */}
      <div className="w-full py-6 bg-gray-100 dark:bg-gray-900">
        <section
          id="contact"
          className="relative z-10 max-w-6xl mx-auto px-4 text-gray-900 dark:text-white"
        >
          <ContactForm />
        </section>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
