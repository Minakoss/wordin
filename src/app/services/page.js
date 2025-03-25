"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/logo/logo.png";

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 via-white to-green-400 relative flex flex-col">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center bg-transparent z-10">
        <div className="w-48 h-auto">
          <Image src={logo} alt="Logo" width={192} height={75} priority />
        </div>
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

      <main className="max-w-screen-xl mx-auto px-4 z-10 flex-grow">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-black text-center my-10">
          Υπηρεσίες
        </h1>

        {/* Grid για τα κουτάκια */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[80vh]">
          {/* Κουτάκι 1 */}
          <div className="border-1 border-black border-r-0 p-6 mb-6">
            <h2 className="text-2xl font-bold text-black">Copywriting</h2>
            <hr className="border-t border-black my-2" />
            <p className="text-lg text-black">
              Τα λόγια που θα χρησιμοποιήσετε στο site σας ή στα μέσα κοινωνικής
              δικτύωσης είναι η ταυτότητα της επιχείρησής σας. Είναι ο τρόπος να
              στείλετε σε όλους το μήνυμα για το ποιοι είστε και τι κάνετε. Στη
              WordIn, εσείς βάζετε το μήνυμα, εμείς το ντύνουμε με λέξεις.
            </p>
          </div>

          {/* Κουτάκι 2 */}
          <div className="border-1 border-black border-l-0 p-6 mb-6">
            <h2 className="text-2xl font-bold text-black">
              Advertorials / Natives / Blogposts
            </h2>
            <hr className="border-t border-black my-2" />
            <p className="text-lg text-black">
              Όπως και να θέλετε να διαφημίσετε τα προϊόντα ή τις υπηρεσίες σας,
              τα άρθρα είναι ξεχωριστές οντότητες με το δικό τους κοινό και το
              δικό τους εκτόπισμα. Advertorial, native, ή Blogpost – ελάτε να
              βρούμε τις διαφορές και να καλύψουμε τη δική σας ανάγκη.
            </p>
          </div>

          {/* Κουτάκι 3 */}
          <div className="border-1 border-black border-r-0 p-6 mb-6">
            <h2 className="text-2xl font-bold text-black">
              Media Relations / Communications Strategy
            </h2>
            <hr className="border-t border-black my-2" />
            <p className="text-lg text-black">
              Οι λέξεις έχουν απεύθυνση, και η απεύθυνση θα πρέπει να γίνεται
              στην κατάλληλη μορφή για να είναι πιο αποτελεσματική. Μάθετε για
              τις υπηρεσίες Σχεδιασμού Στρατηγικής Επικοινωνίας – είναι
              περισσότερο σημαντική από όσο νομίζετε.
            </p>
          </div>

          {/* Κουτάκι 4 */}
          <div className="border-1 border-black border-l-0 p-6 mb-6">
            <h2 className="text-2xl font-bold text-black">Μεταφράσεις</h2>
            <hr className="border-t border-black my-2" />
            <p className="text-lg text-black">
              Αν στοχεύετε σε κοινό εκτός Ελλάδας, η χρήση της Αγγλικής γλώσσας
              είναι επιβεβλημένη. Αληθινοί μεταφραστές, χωρίς Google Translate
              και Τεχνητή Νοημοσύνη: Η ανθρώπινη οπτική είναι αυτή που μιλά στη
              ψυχή του κοινού ανεξαρτήτως τόπου.
            </p>
          </div>

          {/* Κουτάκι 5 (Creative Copy) */}
          <div className="border-1 border-black p-6 mb-6 mx-auto text-center md:col-span-2">
            <h2 className="text-2xl font-bold text-black">Creative Copy</h2>
            <hr className="border-t border-black my-2" />
            <p className="text-lg text-black">
              Ο πομπός είναι ο δέκτης – ο δέκτης είναι ο...
            </p>
          </div>
        </section>
      </main>

      <hr className="border-t-1 border-black" />

      <footer className="p-4 text-center bg-transparent">
        <p className="text-black font-playfair">
          © 2025 WordIn. All rights reserved.
        </p>
      </footer>

      {/* Fullscreen Menu */}
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
            <a href="/" className="hover:underline" onClick={toggleMenu}>
              Αρχική
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline" onClick={toggleMenu}>
              Υπηρεσίες
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:underline" onClick={toggleMenu}>
              Επικοινωνία
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
