import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaCode,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-4">
                Jared Graham
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-Stack Developer passionate about creating exceptional
                digital experiences with modern technologies and innovative
                solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="block text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-400 hover:text-rose-400 transition-colors duration-300 text-sm"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://github.com/jaredvgraham/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jared-graham-0416b62a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-amber-500/20 hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://twitter.com/jaredcodesstuff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-rose-500/20 hover:border-rose-500/50 hover:text-rose-400 transition-all duration-300 hover:scale-110"
                >
                  <FaTwitter className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mb-6"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <FaCode className="text-emerald-400" />
              <span>© 2024 Jared Graham. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Built with</span>
              <a
                href="https://nextjs.org/"
                className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-medium"
              >
                Next.js
              </a>
              <span>and</span>
              <a
                href="https://tailwindcss.com/"
                className="text-amber-400 hover:text-amber-300 transition-colors duration-300 font-medium"
              >
                Tailwind CSS
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
