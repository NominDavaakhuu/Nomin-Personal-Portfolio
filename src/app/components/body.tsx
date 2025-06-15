"use client";

import { WordRotate } from "@/components/magicui/word-rotate";

export function Body() {

  return (
    <section className="relative size-full overflow-hidden">
      <div>
        <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-3xl md:text-6xl lg:text-7xl leading-none">
          <div>
            <h1 className="mt-10">NOMIN DAVAAKHUU</h1>
            <WordRotate 
              className=" text-10xl text-accent font-black"
              words={['WEB', 'Front-End', 'FullStack']}
            />
            <h1>DEVELOPER</h1>
          </div>
        </span>
      </div>
  </section>
  );
}  