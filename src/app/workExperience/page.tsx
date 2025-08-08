"use client";

import { Code } from "lucide-react";
import { Calculator } from "lucide-react";
import { Coffee } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { BackButton } from "@/components/ui/backButton";

const workExperience = [
  {
    Icon: Code,
    name: "Developer - BigFish Design",
    description: (
      <>
        <span className="block text-sm font-semibold text-indigo-500">July 2025 – Aug 2025</span>
        As a contract developer, I helped build responsive, user-friendly front-end web applications using Next.js and TailwindCSS. I wrote clean, efficient code to create visually appealing, high-performance interfaces, collaborating closely with senior developers to ensure quality and best practices.
      </>
    ),
    className: "lg:row-start-1 lg:col-start-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />
    ),
  },
  {
    Icon: Code,
    name: "Front-End Intern - STOIK",
    description: (
      <>
        <span className="block text-sm font-semibold text-indigo-500">Feb 2025 – May 2025</span>
        As a front-end developer, I contributed to building responsive and user-friendly web applications using modern JavaScript frameworks like React. I implemented clean, efficient code that improved overall performance and boosted user engagement by 20%. Working within an Agile team environment, I gained hands-on experience in iterative development, sprint planning, and continuous improvement. I also utilized Git for effective version control and collaboration, and used JIRA for task management and team coordination, ensuring transparency, accountability, and timely project delivery.
      </>
    ),
    className: "lg:row-start-2 lg:col-start-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />
    ),
  },
  {
    Icon: Coffee,
    name: "All-Rounder - Flame Cafe",
    description: (
        <>
        <span className="block text-sm font-semibold text-indigo-500">Dec 2023 – Current</span>
          Led daily café operations as a shift manager, delivering exceptional customer service while training staff, managing workflows, and ensuring a smooth, high-quality dining experience.
        </>
    ),
      className: "lg:row-start-3 lg:col-start-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />
    ),
  },
  {
    Icon: Calculator,
    name: "Accountant - STEPPELINK HOLDING",
    description: (
        <>
        <span className="block text-sm font-semibold text-indigo-500">Dec 2021 – Jul 2023</span>
        As an accountant, I was responsible for preparing and maintaining financial statements in accordance with accounting standards and internal policies. I ensured accurate and timely salary disbursements by processing monthly timesheets and payroll in compliance with employment regulations. Additionally, I utilised accounting software to efficiently manage transaction recording, generate reports, and perform account reconciliations, contributing to the financial accuracy and operational efficiency of the organisation.
        </>
    ),
    className: "lg:row-start-4 lg:col-start-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />
    ),
  },
  {
    Icon: Calculator,
    name: "Junior Accountant - NOMIN HOLDING",
    description: (
        <>
        <span className="block text-sm font-semibold text-indigo-500">May 2020 – Dec 2021</span>
        As a Junior Accountant, I was responsible for preparing monthly and annual Tax and Social Insurance reports in accordance with Mongolian regulations. I supported financial reporting, handled reconciliations, and ensured accurate documentation of transactions. My role involved using accounting software to streamline reporting processes and maintain compliance with internal policies and statutory requirements.
        </>
    ),
      className: "lg:row-start-5 lg:col-start-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />
    ),
  },
];

export default function ExperiencePage() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="p-4">
            <BackButton label="Go back" />
        </div>
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-20">
        Experience
      </h2>
      <BentoGrid className="lg:grid-rows-5">
        {workExperience.map((item) => (
          <BentoCard key={item.name} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
}