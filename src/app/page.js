"use client";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-purple-400 relative flex flex-col">
      {/* Navbar with Hamburger */}
      <nav className="p-6 flex justify-between items-center bg-transparent z-10">
        <div className="text-3xl font-bold text-black font-playfair">
          Wordin
        </div>
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Hamburger Icon */}
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-black"></span>
              <span className="block w-8 h-0.5 bg-black"></span>
              <span className="block w-8 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Horizontal Line */}
      <hr className="border-t-1 border-black z-10" />

      {/* Wrapper for the content */}
      <main className="max-w-screen-xl mx-auto px-4 z-10 flex-grow">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center min-h-[80vh]">
          <h1 className="text-6xl font-playfair font-bold text-black leading-tight">
            Plain language,
            <br />
            Extraordinary results
          </h1>
          <hr className="border-t border-black my-6 w-1/2" />
          <p className="text-xl font-light text-black max-w-2xl font-playfair">
            We specialize in creative, clear, and cohesive communications
            solutions that build memorable, impactful content.
          </p>

          {/* Mailing List Section */}
          <div className="mt-8 w-full max-w-lg">
            <p className="text-xl font-light text-black font-playfair mb-2">
              Mailing List
            </p>
            <div className="flex border border-black bg-transparent">
              <input
                type="email"
                placeholder="Your email"
                className="p-4 w-full border-none focus:outline-none bg-transparent text-black"
              />
              <button className="p-4 border-l border-black bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Horizontal line for footer */}
      <hr className="border-t-1 border-black" />

      {/* Footer Section */}
      <footer className="p-4 text-center bg-transparent">
        <p className="text-black font-playfair">
          © 2024 Wordin. All rights reserved.
        </p>
      </footer>

      {/* Fullscreen Menu hamburger */}
      <div
        className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50 transition-transform duration-700 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-7 text-white text-4xl focus:outline-none"
        >
          ✕
        </button>
        <ul className="space-y-6 text-2xl">
          <li>
            <a href="#" className="hover:underline" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
