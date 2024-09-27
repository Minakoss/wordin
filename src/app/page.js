"use client";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-purple-400">
      {/* Navbar with Hamburger */}
      <nav className="p-6 flex justify-between items-center bg-transparent">
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

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-4 bg-white shadow-lg rounded-lg py-2">
              <a
                href="#"
                className="block px-6 py-2 text-black hover:bg-gray-200 font-playfair"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-6 py-2 text-black hover:bg-gray-200 font-playfair"
              >
                About
              </a>
              <a
                href="#projects"
                className="block px-6 py-2 text-black hover:bg-gray-200 font-playfair"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-6 py-2 text-black hover:bg-gray-200 font-playfair"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Μαύρη Οριζόντια Γραμμή */}
      <hr className="border-t-2 border-black" />

      {/* Wrapper για το περιεχόμενο */}
      <main className="max-w-screen-xl mx-auto px-4">
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
        </section>
      </main>
    </div>
  );
}
