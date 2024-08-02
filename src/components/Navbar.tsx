// components/Navbar.js
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 border-slate-600  border-b w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-slate-200">
            Home
          </Link>
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
