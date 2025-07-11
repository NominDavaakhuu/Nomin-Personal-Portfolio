'use client';

import { WordRotate } from "@/components/magicui/word-rotate";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ['latin'], weight: ['800'] });

export function Body() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center px-4" id="skills">
      <div className="text-center space-y-6">
        <h1 className={`${orbitron.className} text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent`}>
          NOMIN DAVAAKHUU
        </h1>

        <WordRotate 
          className="text-3xl md:text-5xl lg:text-6xl font-black text-accent "
          words={['WEB', 'Front-End', 'FullStack']}
        />

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white tracking-widest animate-fade-in-up">
          DEVELOPER
        </h1>
      </div>
    </section>
  );
}
