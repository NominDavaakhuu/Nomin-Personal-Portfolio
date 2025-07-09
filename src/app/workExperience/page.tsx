"use client";

import { Code } from "lucide-react";
import { Calculator } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { BackButton } from "@/components/ui/backButton";

const workExperience = [
  {
    Icon: Code,
    name: "Front-End Intern - STOIK",
    description: (
      <>
        <span className="block text-sm font-semibold text-indigo-500">Feb 2025 – May 2025</span>
        Developed responsive web designs, boosting user engagement by 20%. Collaborated with UX/UI teams to enhance user experience and satisfaction.
      </>
    ),
    className: "lg:row-start-1 lg:col-start-1",
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
        Prepared and maintained financial statements in compliance with accounting standards and company policies.,
        </>
    ),
    className: "lg:row-start-2 lg:col-start-1",
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
        Worked with financial reporting and reconciliations. Contributed to auditing processes and expense tracking.
        </>
    ),
      className: "lg:row-start-3 lg:col-start-1",
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
      <BentoGrid className="lg:grid-rows-3">
        {workExperience.map((item) => (
          <BentoCard key={item.name} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
}