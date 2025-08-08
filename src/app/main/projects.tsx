"use client";

import React, { useRef } from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import calendarImage from "../../../public/images/calendar.png";
import transcoderImage from "../../../public/images/transcode1.png";
import noteTakerImage from "../../../public/images/note.png";
import roomPortfolioImage from "../../../public/images/room1.png"; 
import zingImage from "../../../public/images/zing1.png";
import { HyperText } from "@/components/magicui/hyper-text";
import { StaticImageData } from "next/image";

interface ProjectExperience {
  id: number;
  title: string;
  role: string;
  description: string;
  technologies: string[];
  duration: string;
  link?: string;
  imageUrl?: StaticImageData;
}

const projects: ProjectExperience[] = [
  { 
    id: 1,
    title: "Room Portfolio",
    role: "Developer",
    description:
      "Developing a 3D portfolio using Three.js and Blender. Aims to showcase my skills in 3D modeling and web development, featuring an interactive 3D room with various elements that highlight my work and interests.",
    technologies: ["Three.js", "TailwindCSS", "JavaScript", "Blender"],
    duration: "Jul 2025 - Current",
    link: "projectDetails/1",
    imageUrl: roomPortfolioImage,
  },
  { 
    id: 2,
    title: "Find Your Zing",
    role: "Developer",
    description:
      'Developed a website as part of BigFish’s development team, implementing the design and creative vision provided by the design team. Built the application under the guidance of a senior developer, ensuring adherence to best practices and project requirements.',
    technologies: ["Next.js", "TailwindCSS", "TypeScript"],
    duration: "Jul 2025 - Aug 2025 ",
    link: "projectDetails/2",
    imageUrl: zingImage,
  },
  { 
    id: 3,
    title: "Event Calendar",
    role: "Front-End Developer",
    description:
      "Developed a full-stack web application to manage events efficiently with features like real-time calendar updates, user authentication, and role-based access.",
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "Node.js", "Express", "MySQL"],
    duration: "March 2025 - May 2025",
    link: "projectDetails/3",
    imageUrl: calendarImage,
  },
  {
    id: 4,
    title: "Video Transcoding App",
    role: "Uni Project",
    description:
      "Developed a video transcoding app that converts videos into multiple formats and manages video files efficiently.",
    technologies: ["Node.js", "AWS EC2", "AWS S3", "AWS RDS", "AWS-Cognito", "HTML & CSS"],
    duration: "Oct 2024 - Nov 2024",
    link: "projectDetails/4",
    imageUrl: transcoderImage,
  },
  { 
    id: 5,
    title: "Note-Taking App",
    role: "Uni Project",
    description:
      "Developed a robust mobile note-taking app with an intuitive UI to easily manage notes and tasks, featuring a customizable settings section for adjustable text size.",
    technologies: ["React Native", "Expo", "Node.js", "Express", "MySQL", "TailwindCSS"],
    duration: "May 2024 - Jun 2024",
    link: "projectDetails/5",
    imageUrl: noteTakerImage,
  },
];

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({ left: direction === "left" ? -500 : 500, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full mx-auto px-8 py-12" id="projects">
      <HyperText className="text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-10 text-white">
        Projects 
      </HyperText>

      <div className="relative">
        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth no-scrollbar py-2 px-2"
        >
          {projects.map((exp, index) => (
            <MagicCard
              key={index}
              className="min-w-[250px] max-w-[400px] p-8 rounded-2xl shadow-md flex-shrink-0 "
            >
              {exp.imageUrl && (
                <div className="relative w-full h-[250px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={exp.imageUrl}
                    alt={exp.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p><strong>Role:</strong> {exp.role}</p>
              <p><strong>Duration:</strong> {exp.duration}</p>
              <p className="my-4">{exp.description}</p>
              <p><strong>Technologies:</strong> {exp.technologies.join(", ")}</p>
              {exp.link && (
                <a
                  href={exp.link}
                  className="inline-block mt-4 text-accent hover:text-accent dark:text-violet-400 dark:hover:text-violet-300 font-medium underline"
                >
                  View Project
                </a>
              )}
            </MagicCard>
          ))}
        </div>

        {/* Outside scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-12 top-1/2 -translate-y-1/2 bg-inherit hover:bg-accent dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-full p-2 shadow z-20"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute -right-12 top-1/2 -translate-y-1/2 bg-inherit hover:bg-accent dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-full p-2 shadow z-20"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
