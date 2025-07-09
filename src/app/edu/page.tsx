"use client";

import { Code } from "lucide-react";
import { Calculator } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { BackButton } from "@/components/ui/backButton";

const Education = [
  {
    Icon: Code,
    name: "Software Development",
    description:(
      <>
        <span className="font-bold">Master of Information Technology, </span>
        <span className="block text-sm font-semibold text-indigo-500">GPA: 6.1/7.0 </span>
        QUEENSLAND UNIVERISTY OF TECHNOLOGY | Graduated June 2025. Focused on software development and project management.
      </>
    ),
    className: "lg:row-start-1 lg:col-start-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />,
  },
  {
    Icon: Calculator,
    name: "Accounting",
    description:(
      <>
        <span className="font-bold">Bachelor of Business Administration, </span>
        <span className="block text-sm font-semibold text-indigo-500">GPA: 3.4/4.0 </span>
        NATIONAL UNIVERSITY OF MONGOLIA | Graduated June 2020. Focused on accounting and finance.
      </>
    ),
    className: "lg:row-start-2 lg:col-start-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />,
  },
];

export default function EducationPage() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="p-4">
            <BackButton label="Go back" />
        </div>
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-20">
        Education
      </h2>
      <BentoGrid className="lg:grid-rows-2">
        {Education.map((item) => (
          <BentoCard key={item.name} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
}