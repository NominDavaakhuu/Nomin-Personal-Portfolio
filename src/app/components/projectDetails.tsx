// ProjectDetails.tsx
import React from "react";

type Project = {
  title: string;
  role: string;
  description: string;
  technologies?: string[];
  features?: string[];
  duration?: string;
  hostedOn?: string;
  storage?: string;
  database?: string;
};

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h1>
      <p className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">{project.role}</p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>

      {project.technologies && (
        <>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Technologies Used</h2>
          <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </>
      )}

      {project.features && (
        <>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Features</h2>
          <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </>
      )}

      {project.duration && (
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          <strong>Duration: </strong> {project.duration}
        </p>
      )}

      {project.hostedOn && (
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          <strong>Hosting: </strong> {project.hostedOn}
        </p>
      )}

      {project.storage && (
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          <strong>Storage: </strong> {project.storage}
        </p>
      )}

      {project.database && (
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          <strong>Database: </strong> {project.database}
        </p>
      )}
    </section>
  );
}

// Example usage with mock data:

const exampleProject: Project = {
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
  duration: "6 months",
  hostedOn: "AWS EC2",
  storage: "AWS S3",
  database: "AWS RDS SQL",
};

export default function Demo() {
  return <ProjectDetails project={exampleProject} />;
}
