"use client";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-purple-400 relative">
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

      {/*Οριζόντια Γραμμή */}
      <hr className="border-t-2 border-black z-10" />

      {/* Wrapper για το περιεχόμενο */}
      <main className="max-w-screen-xl mx-auto px-4 z-10">
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

      {/* Fullscreen Menu hampuger */}
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
