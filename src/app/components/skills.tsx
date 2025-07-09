"use client";

import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const skills = () => {
  const skillList = [
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
  ];

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12">
      <Marquee pauseOnHover className="[--duration:25s]">
        {skillList.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 mx-4 px-6 py-3 rounded-full border text-sm font-semibold bg-white text-gray-800 dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 shadow-md"
          >
            <Image 
              width={20}
              height={20}
              src={skill.logo} 
              alt={skill.name} 
              className="w-5 h-5" />
            <span>{skill.name}</span>
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
    </div>
  );
};

export default skills;
