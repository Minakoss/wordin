"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/logo/logo.png";

export default function Contacts() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xzzekakb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 via-white to-green-400 relative flex flex-col">
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

      {/* Κεντρικό περιεχόμενο */}
      <main className="max-w-screen-xl mx-auto px-4 z-10 min-h-screen flex flex-col md:flex-row items-center justify-between">
        {/* Κείμενο αριστερά */}
        <div className="w-full md:w-1/2 text-left self-center">
          <h1 className="text-6xl font-bold text-black">Επικοινωνία</h1>
          <p className="text-lg text-black mt-4">
            Have a creative project in mind? Need an enthusiastic collaborator
            in your corner? Drop us a line via the contact form and we will be
            in touch soon.
          </p>
        </div>

        {/* Φόρμα δεξιά */}
        <div className="w-full md:w-1/2 flex flex-col items-end self-center">
          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
            <div>
              <label className="block text-black font-bold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-2 border border-black rounded-none bg-transparent focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-black font-bold">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-black rounded-none bg-transparent focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-black font-bold">Message</label>
              <textarea
                name="message"
                placeholder="How can we help?"
                className="w-full p-2 border border-black rounded-none bg-transparent focus:outline-none"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === "sending"}
                className={`border border-black px-6 py-2 text-black font-bold flex items-center ${
                  status === "sending" ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {status === "sending" ? "Sending..." : "Αποστολή"}{" "}
                <span className="ml-2">→</span>
              </button>
            </div>
            {/* Feedback */}
            {status === "success" && (
              <p className="text-green-700 font-semibold">
                ✔ Το μήνυμα στάλθηκε με επιτυχία!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-700 font-semibold">
                ✖ Υπήρξε πρόβλημα κατά την αποστολή.
              </p>
            )}
          </form>
        </div>
      </main>

      <hr className="border-t-1 border-black" />
      <footer className="p-4 text-center bg-transparent">
        <p className="text-black font-playfair">
          © 2025 WordIn. All rights reserved.
        </p>
      </footer>

      {/* Fullscreen Menu */}
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
            <a href="/" className="hover:underline" onClick={toggleMenu}>
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
