"use client";

import { Code } from "lucide-react";
import { Calculator } from "lucide-react";
import { BeerIcon } from "lucide-react";
import { UniversityIcon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { BackButton } from "@/components/ui/backButton";

const interest = [
  {
    Icon: Code,
    name: "EVENTS OFFICER - QUT CODE NETWORKS ",
    description: (
      <>
        <span className="block text-sm font-semibold text-indigo-500">Feb 2025 – Aug 2025</span>
        Helped plan and coordinate events such as coding workshops, hackathons, and networking nights. Collaborated with fellow executive members to increase student engagement and industry participation. Strengthened leadership, event planning, and communication skills while supporting a vibrant developer community on campus.
      </>
    ),
    className: "lg:row-start-1 lg:col-start-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />
    ),
  },
  {
    Icon: Calculator,
    name: "COMMITTEE MEMBER & VOLUNTEER - ACS QLD",
    description: (
        <>
        <span className="block text-sm font-semibold text-indigo-500">Dec 2023 – Current</span>
        Assisted in organizing industry events, student outreach activities, and panel discussions. Helped create inclusive networking opportunities and promoted awareness of emerging tech trends. Gained valuable experience in event coordination and community engagement within the professional tech sector.
        </>
    ),
    className: "lg:row-start-2 lg:col-start-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />
    ),
  },
  {
    Icon: BeerIcon,
    name: "VOLUNTEER - BEEROPS",
    description: (
      <>
        <span className="block text-sm font-semibold text-indigo-500">June 2025</span>
        Assisted with event operations at one of Australia’s largest tech networking events.
      </>
    ),
    className: "lg:row-start-3 lg:col-start-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />
    ),
  },
  {
    Icon: UniversityIcon,
    name: "VOLUNTEER - QUT STUDENT ASSOCIATION",
    description: (
        <>
        <span className="block text-sm font-semibold text-indigo-500">Feb 2025 – March 2025</span>
        Assisted with orientation week activities by guiding new students around campus, answering questions about university life, and providing essential information on academic and social support services. Helped foster a welcoming and inclusive environment for first-year students.
        </>
    ),
      className: "lg:row-start-4 lg:col-start-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />
    ),
  },
];

export default function InterestPage() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="p-4">
            <BackButton label="Go back" />
        </div>
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-20">
        Community & Interest
      </h2>
      <BentoGrid className="lg:grid-rows-4">
        {interest.map((item) => (
          <BentoCard key={item.name} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
}