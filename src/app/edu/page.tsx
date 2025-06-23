"use client";

import {
  StackIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { BackButton } from "@/components/ui/backButton";

const workExperience = [
  {
    Icon: StackIcon,
    name: "Software Development",
    description:
      "Master of IT, QUT | Graduated June 2025. Focused on software engineering and project delivery.",
    className: "lg:row-start-1 lg:col-start-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />,
  },
  {
    Icon: StackIcon,
    name: "Accounting",
    description:
      "Bachelor of Business Administration, NUM | Graduated June 2020. Focused on accounting and finance.",
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
        {workExperience.map((item) => (
          <BentoCard key={item.name} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
}