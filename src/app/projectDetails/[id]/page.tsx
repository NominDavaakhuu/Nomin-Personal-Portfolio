'use client';
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";
import { BackButton } from "@/components/ui/backButton";

type Project = {
  id: string;
  title: string;
  role: string;
  description: string;
  technologies?: string[];
  features?: string[];
  duration?: string;
  hostedOn?: string;
  storage?: string;
  database?: string;
  images?: string[]; 
};

const projects: Project[] = [
  {
    id: "1",
    title: "Room Portfolio",
    role: "Developer",
    description:
      "Developing a 3D portfolio using Three.js and Blender. The project aims to showcase my skills in 3D modeling and web development, featuring an interactive 3D room with various elements that highlight my work and interests.",
    technologies: ["Three.js", "Blender", "JavaScript", "TailwindCSS"],
    features: [
      "Blender 3D modeling",
      "Interactive 3D room",
      "Responsive design",
      "Custom animations",
      "WebGL rendering",
    ],
    duration: "Currently in progress",
    images: ["/images/room1.png", "/images/room2.png"],
  },
  {
    id: "2",
    title: "Find Your Zing Web app",
    role: "Developer",
    description:
      "Developed a website as part of BigFish’s development team, implementing the design and creative vision provided by the design team. Built the application under the guidance of a senior developer, ensuring adherence to best practices and project requirements.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    features: [
      "Responsive interface",
      "Mailchimp form integration",
    ],
    duration: "2 weeks",
    images: ["/images/zing1.png", "/images/zing2.png"],
    },
  {
    id: "2",
    title: "Event Calendar",
    role: "Front-End Developer",
    description:
      "Developed a full-stack web application (Team of 4) to manage events efficiently with features like real-time calendar updates, user authentication, and role-based access.",
    technologies: ["Next","TypeScript", "Node", "MySQL", "Full-Calendar", "Docker", "TailwindCSS"],
    features: [
      "Event management dashboard",
      "User management",
      "Organisation management",
      "Secure login and authentication",
      "Event Calendar with real-time updates",
      "Event clone, edit, and delete functionality",
      "Role-based access control",
      "Event search and filter options",
      "Event reporting and analytics",
      "Responsive design for mobile and desktop",
      "User-friendly interface",
    ],
    duration: "3 months",
    hostedOn: "Azure",
    storage: "MySQL",
    database: "MySQL",
    images: [
      "/images/calendar.png",
      "/images/calendar-2.png",
    ],
  },
  {
    id: "3",
    title: "Video Transcoding App",
    role: "Uni Project",
    description:
      "Developed a video transcoding app that converts videos into multiple formats and manages video files efficiently. Implemented secure user authentication using AWS Cognito and hosted the application on an AWS EC2 instance. Videos are stored in an S3 bucket, while metadata is saved in an RDS SQL database, ensuring scalable and secure management of video assets.",
    technologies: ["React", "AWS Cognito", "AWS EC2", "AWS S3", "RDS SQL"],
    features: [
      "Multi-format video transcoding",
      "Secure login and authentication",
      "Video management dashboard",
      "Scalable cloud hosting",
    ],
    duration: "1 month",
    hostedOn: "AWS EC2",
    storage: "AWS S3",
    database: "AWS RDS SQL",
    images: [
      "/images/transcode1.png",
      "/images/transcode2.png",
    ],
  },
  {
    id: "4",
    title: "Note-Taking App",
    role: "Uni Project",
    description:
      "Developed a robust note-taking mobile app to help users efficiently create, organize, and search their notes. Implemented offline support and a clean user interface with React Native.",
    technologies: ["React Native", "Expo", "SQLite", "Android Studio", "TailwindCSS"],
    features: [
      "Create, edit, and delete notes",
      "Settings section for adjustable text size",
      "User-friendly mobile interface",
    ],
    duration: "1 month",
    hostedOn: "Expo Go",
    storage: "Local Storage",
    database: "SQLite",
    images: [
      "/images/note.png",
      "/images/note-2.png",
    ],
  },
];

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <section className="max-w-5xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="mb-6">
        <BackButton label="Go back" className="text-white bg-background" />
      </div>
      <h1 className="text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
        {project.title}
      </h1>
      <p className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
        {project.role}
      </p>
      <p className="mb-8 leading-relaxed text-gray-700 dark:text-gray-300 text-lg">
        {project.description}
      </p>

      {/* Images */}
      {project.images && project.images.length > 0 && (
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.images.slice(0, 2).map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-md cursor-zoom-in transform transition-transform hover:scale-105"
            >
              <Image
                width={600}
                height={400}
                src={src}
                alt={`${project.title} screenshot ${idx + 1}`}
                className={`w-full object-cover rounded-md ${
                    project.id === "4" ? "max-w-48" : "h-auto"
                }`}
                />
            </div>
          ))}
        </div>
      )}

      {/* Technologies */}
      {project.technologies && (
        <>
          <h2 className="text-3xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Technologies Used
          </h2>
          <ul className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Features */}
      {project.features && (
        <>
          <h2 className="text-3xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Key Features
          </h2>
          <ul className="list-disc list-inside mb-8 text-gray-700 dark:text-gray-300 space-y-1">
            {project.features.map((feature) => (
              <li key={feature} className="text-lg">
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Other details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300 text-lg">
        {project.duration && (
          <p>
            <strong>Duration:</strong> {project.duration}
          </p>
        )}
        {project.hostedOn && (
          <p>
            <strong>Hosting:</strong> {project.hostedOn}
          </p>
        )}
        {project.storage && (
          <p>
            <strong>Storage:</strong> {project.storage}
          </p>
        )}
        {project.database && (
          <p>
            <strong>Database:</strong> {project.database}
          </p>
        )}
      </div>
    </section>
  );
}