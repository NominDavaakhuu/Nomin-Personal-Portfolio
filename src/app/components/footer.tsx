import React from 'react'
import Image from "next/image"

const Footer = () => {
  return (
    <div>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/icons/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Resume
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/icons/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Projects
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.linkedin.com/in/nomin-erdene-davaakhuu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/icons/linkedin.svg"
                alt="LinkedIn icon"
                width={16}
                height={16}
              />
              LinkedIn →
            </a>
          </footer>
    </div>
  )
}

export default Footer