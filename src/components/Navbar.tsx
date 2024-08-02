"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black p-4 border-slate-600 border-b w-full white-shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link className="text-slate-200" href="/">
            Jared Graham
          </Link>
        </div>
        <div className="hidden md:flex justify-around w-1/2">
          <Link href="/about" className="text-slate-200">
            About
          </Link>
          <Link href="/projects" className="text-slate-200">
            Projects
          </Link>
          <Link href="/contact" className="text-slate-200">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="text-slate-200 text-2xl" />
            ) : (
              <FaBars className="text-slate-200 text-2xl" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4">
          <Link
            href="/about"
            className="text-slate-200 py-2"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-slate-200 py-2"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-slate-200 py-2"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
