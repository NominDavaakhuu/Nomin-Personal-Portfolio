"use client";

import {
  BackpackIcon,
  StackIcon,
  LightningBoltIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const aboutMe = [
  {
    Icon: StackIcon,
    name: "Education",
    description:
      "Master of IT, QUT | Graduated June 2025. Focused on software engineering and project delivery.",
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />,
  },
  {
    Icon: BackpackIcon,
    name: "Work Experience",
    description:
      "Interned as a software developer in a Fintech Start-Up company Stoik. Contributed to frontend systems using React & TypeScript.",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />,
    href: "https://www.linkedin.com/company/soik-digital/posts/?feedView=all",
    cta: "View Company",
  },
  {
    Icon: LightningBoltIcon,
    name: "Interests",
    description:
      "Passionate about frontend development, cloud technologies (AWS), and clean design systems.",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />,
  },
  {
    Icon: RocketIcon,
    name: "Current Project",
    description:
      "Building an 3D portfolio with Three.js and starting with blender.",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    background: <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />,
  },
  {
    Icon: PersonIcon,
    name: "Personal",
    description:
      "Love learning new tools, mentoring peers, and collaborating on team-driven projects. Curious and coachable.",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    background: <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />,
  },
];

export function AboutMe() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-12 text-indigo-950 dark:text-white">
        About Me
      </h2>
      <BentoGrid className="lg:grid-rows-2">
        {aboutMe.map((item) => (
          <BentoCard key={item.name} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
}

