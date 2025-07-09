'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HyperText } from "@/components/magicui/hyper-text";

const inputStyle =
  'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStateMessage('✅ Message sent!  Thank you for reaching out!');
          setIsSubmitting(false);
          setTimeout(() => setStateMessage(null), 3000);
        },
        () => {
          setStateMessage('❌ Something went wrong. Please try again.');
          setIsSubmitting(false);
          setTimeout(() => setStateMessage(null), 3000);
        }
      );

    // Clear form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12" id="contact">

        <HyperText className="text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-10 text-background dark:text-white">
            Get in Touch
        </HyperText>
        <h1 className='text-center text-lg md:text-xl m-8 text-gray-700 dark:text-gray-300'>
            I&apos;d love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to drop me a message.
        </h1>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <input
            className={inputStyle}
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            />
            <input
            className={inputStyle}
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            />
        </div>
        <textarea
          className={inputStyle}
          name="message"
          rows={4}
          placeholder="Your Message"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-background font-bold text-white py-2.5 rounded-lg  hover:text-accent transition disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {stateMessage && (
          <p className="text-center mt-4 text-sm font-medium">
            {stateMessage}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;