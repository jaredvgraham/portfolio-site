"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaReact,
  FaJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("skills");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-40 h-40 md:w-80 md:h-80 bg-teal-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-40 h-40 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-teal-600/5 via-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-1/4 md:top-20 md:right-1/4 w-32 h-32 md:w-60 md:h-60 bg-indigo-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 md:bottom-20 md:left-1/4 w-32 h-32 md:w-60 md:h-60 bg-teal-700/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight px-2">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-blue-500 bg-clip-text text-transparent">
              Jared Graham
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Full-Stack Developer crafting exceptional digital experiences with
            modern technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex justify-center items-center space-x-4 md:space-x-6">
            <a
              href="https://github.com/jaredvgraham"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-teal-700/20 hover:border-teal-700/50 hover:text-teal-300 transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="text-lg md:text-xl" />
            </a>
            <a
              href="mailto:jaredvgraham@gmail.com"
              className="w-10 h-10 md:w-12 md:h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope className="text-lg md:text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/jaredvgraham"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="text-lg md:text-xl" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col lg:flex-row items-center justify-center space-y-8 md:space-y-6 lg:space-y-0 lg:space-x-12"
        >
          <div className="relative order-2 lg:order-1">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700/30 via-teal-600/30 to-blue-500/30 rounded-full blur-xl"></div>
              <Image
                src="/me.jpg"
                alt="Jared Graham"
                fill
                className="rounded-full object-cover border-4 border-gray-700 shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="max-w-md text-center lg:text-left order-1 lg:order-2 px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">
              What I Do
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              I specialize in building modern, scalable web applications using
              cutting-edge technologies. From concept to deployment, I bring
              ideas to life with clean code and exceptional user experiences.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-300 text-sm sm:text-base">
                  Full-Stack Development
                </span>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300 text-sm sm:text-base">
                  AI Integration
                </span>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span className="text-gray-300 text-sm sm:text-base">
                  Performance Optimization
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <button
            onClick={scrollToNextSection}
            className="group flex items-center space-x-2 mx-auto text-white hover:text-teal-300 transition-colors duration-300"
          >
            <span className="text-base md:text-lg">Explore My Work</span>
            <FaArrowDown className="text-base md:text-lg group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Floating Tech Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 left-4 md:top-20 md:left-10 animate-bounce">
          <FaReact className="w-6 h-6 md:w-10 md:h-10 text-emerald-400 opacity-20" />
        </div>
        <div
          className="absolute top-20 right-4 md:top-40 md:right-20 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          <SiNextdotjs className="w-6 h-6 md:w-10 md:h-10 text-amber-400 opacity-20" />
        </div>
        <div
          className="absolute bottom-20 left-4 md:bottom-40 md:left-20 animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          <SiTypescript className="w-6 h-6 md:w-10 md:h-10 text-teal-400 opacity-20" />
        </div>
        <div
          className="absolute bottom-10 right-4 md:bottom-20 md:right-10 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        >
          <FaJs className="w-6 h-6 md:w-10 md:h-10 text-rose-400 opacity-20" />
        </div>
        <div
          className="absolute top-1/3 left-1/4 animate-bounce hidden md:block"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-teal-700 to-blue-600 rounded-lg opacity-20"></div>
        </div>
        <div
          className="absolute bottom-1/3 right-1/4 animate-bounce hidden md:block"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-lg opacity-20"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
