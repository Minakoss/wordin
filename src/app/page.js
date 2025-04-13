"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/logo/logo.png";
import { Phone, ChevronDown } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-white to-orange-400 relative flex flex-col">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center bg-transparent z-10">
        <a href="/" className="w-48 h-auto">
          <Image src={logo} alt="Logo" width={192} height={75} priority />
        </a>
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-black"></span>
              <span className="block w-8 h-0.5 bg-black"></span>
              <span className="block w-8 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </nav>

      <hr className="border-t-1 border-black z-10" />

      {/* Mobile - Fullscreen Intro */}
      <div className="md:hidden flex flex-col items-center justify-start h-screen text-center px-4 pt-44 relative">
        <h1 className="text-4xl font-playfair font-bold text-black leading-tight">
          Μία λέξη, Χίλιες εικόνες
        </h1>
        <p className="text-lg font-light text-black font-playfair mt-4 max-w-md">
          We specialize in creative, clear, and cohesive communications
          solutions that build memorable, impactful content.
        </p>
        <a href="#mobile-contact" className="mt-12 animate-bounce">
          <ChevronDown className="w-10 h-10 text-black" />
        </a>
      </div>

      {/* Mobile - Contact Section */}
      <div
        id="mobile-contact"
        className="md:hidden flex flex-col items-center justify-center min-h-screen text-center px-4"
      >
        <p className="text-2xl font-light text-black font-playfair mb-4">
          Επικοινωνία
        </p>
        <div className="flex flex-col items-center w-full space-y-4">
          <div className="flex border border-black bg-transparent w-full max-w-md">
            <a
              href="mailto:aggelosandreou83@gmail.com"
              className="p-4 w-full text-black"
            >
              aggelosandreou32@gmail.com
            </a>
            <a
              href="mailto:aggelosandreou83@gmail.com"
              className="p-4 border-l border-black bg-transparent flex items-center justify-center"
            >
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
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-6 h-6 text-black" />
            <span className="text-xl text-black">6940556709</span>
          </div>
        </div>
      </div>

      {/* Desktop - Content Section */}
      <main className="hidden md:block max-w-screen-xl mx-auto px-4 z-10 flex-grow">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[80vh] items-center">
          {/* Left Side - Contact */}
          <div className="flex flex-col justify-center" id="contact">
            <p className="text-xl font-light text-black font-playfair mb-2">
              Επικοινωνία
            </p>
            <div className="flex border border-black bg-transparent w-full md:w-3/4">
              <a
                href="mailto:aggelosandreou83@gmail.com"
                className="p-4 w-full border-none bg-transparent text-black"
              >
                aggelosandreou32@gmail.com
              </a>
              <a
                href="mailto:aggelosandreou83@gmail.com"
                className="p-4 border-l border-black bg-transparent flex items-center justify-center"
              >
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
              </a>
            </div>
            <span className="text-xl font-light text-black font-playfair mt-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-6 h-6 text-black" />
                <span>6940556709</span>
              </div>
            </span>
          </div>

          {/* Right Side - Main Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-playfair font-bold text-black leading-tight">
              Μία λέξη, Χίλιες εικόνες
            </h1>
            <hr className="border-t border-black my-6 w-11/12" />
            <p className="text-xl font-light text-black font-playfair">
              We specialize in creative, clear, and cohesive communications
              solutions that build memorable, impactful content.
            </p>
            <div className="mt-8">
              <a
                href="/services"
                className="flex items-center justify-center w-32 h-12 border border-black bg-transparent transition hover:bg-black group"
              >
                <span className="text-black font-bold group-hover:text-white transition">
                  Υπηρεσίες
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <hr className="border-t-1 border-black" />

      <footer className="p-4 text-center bg-transparent">
        <p className="text-black font-playfair">
          © 2025 WordIn. All rights reserved.
        </p>
      </footer>

      {/* Fullscreen Hamburger Menu */}
      <div
        className={`fixed inset-0 bg-white/70 backdrop-blur text-black flex flex-col items-center justify-center z-50 transition-transform duration-700 ${
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
              Αρχική
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Υπηρεσίες
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline" onClick={toggleMenu}>
              Επικοινωνία
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
