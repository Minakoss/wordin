"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/logo/logo.png";

export default function Contacts() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-white to-orange-400 relative flex flex-col">
      {/* Navbar με εικόνα αριστερά */}
      <nav className="p-6 flex justify-between items-center bg-transparent z-10">
        {/* Αντικατάσταση WordIn με εικόνα */}
        <a href="/" className="w-48 h-auto">
          <Image src={logo} alt="Logo" width={192} height={75} priority />
        </a>

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

      <main className="max-w-screen-xl mx-auto px-4 z-10 flex flex-col md:flex-row items-center md:items-start justify-between mt-10">
        {/* Αριστερό τμήμα */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-6xl font-bold text-black">Contact</h1>
          <p className="text-lg text-black mt-4">
            Have a creative project in mind? Need an enthusiastic collaborator
            in your corner? Drop us a line via the contact form and we'll be in
            touch soon.
          </p>
        </div>

        {/* Δεξί τμήμα */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col items-center">
          <form className="w-full max-w-lg space-y-6">
            <div>
              <label className="block text-black font-bold">Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full p-2 border border-black rounded-none bg-transparent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-black font-bold">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-black rounded-none bg-transparent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-black font-bold">Message</label>
              <textarea
                placeholder="How can we help?"
                className="w-full p-2 border border-black rounded-none bg-transparent focus:outline-none"
                rows="4"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="border border-black px-6 py-2 text-black font-bold flex items-center"
              >
                Submit <span className="ml-2">→</span>
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="p-4 text-center bg-transparent">
        <p className="text-black font-playfair">
          © 2025 WordIn. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
