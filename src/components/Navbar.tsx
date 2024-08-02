// components/Navbar.js
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 border-slate-600  border-b w-full white-shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link className="text-slate-200" href="/">
            Jared Graham
          </Link>
        </div>
        <div className="flex justify-around w-1/2">
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
      </div>
    </nav>
  );
};

export default Navbar;
