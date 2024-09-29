"use client";

import { useState, useEffect } from "react";

export default function About() {
  const [bgClass, setBgClass] = useState("bg-white");

  useEffect(() => {
    const timer = setTimeout(() => {
      setBgClass("bg-gradient-to-r from-pink-300 via-purple-300 to-purple-400");
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col ${bgClass} transition-colors duration-700`}
    >
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center bg-transparent">
        <div className="text-3xl font-bold text-black font-playfair">
          Wordin
        </div>
      </nav>

      {/* Horizontal Line */}
      <hr className="border-t-1 border-black" />

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-4 flex-grow">
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-playfair font-bold text-black leading-tight">
            About Us
          </h1>
          <hr className="border-t border-black my-6 w-1/2" />
          <p className="text-xl font-light text-black max-w-2xl font-playfair">
            We are a team of experienced communicators that specialize in
            creating impactful, cohesive content to help your business succeed.
          </p>
        </section>
      </main>

      {/* Horizontal Line for Footer */}
      <hr className="border-t-1 border-black" />

      {/* Footer */}
      <footer className="p-4 text-center bg-transparent">
        <p className="text-black font-playfair">
          © 2024 Wordin. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
