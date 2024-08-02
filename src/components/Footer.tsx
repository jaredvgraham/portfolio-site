import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-6  border-t-2">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-7 mb-4">
          <a
            href="https://github.com/jaredvgraham/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/jared-graham-0416b62a7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-2xl" />
          </a>
          <a
            href="https://twitter.com/jaredcodesstuff"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white text-2xl" />
          </a>
        </div>
        <p className="text-gray-400 mb-2">
          © 2024 Jared Graham. All rights reserved.
        </p>
        <p className="text-gray-400">
          Built with{" "}
          <a href="https://nextjs.org/" className="text-white hover:underline">
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            className="text-white hover:underline"
          >
            Tailwind CSS
          </a>
          .
        </p>
        <p className="p-2">Quick Links:</p>
        <div className="flex gap-4">
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-white hover:underline">
            About
          </Link>
          <Link href="/projects" className="text-white hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="text-white hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
