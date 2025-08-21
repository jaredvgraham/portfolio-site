"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaGraduationCap,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaMap,
  FaGlobe,
} from "react-icons/fa";
import SocialMediaLinks from "./SMLinks";

const AboutMe = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    {
      icon: FaCode,
      title: "Full-Stack Expertise",
      description:
        "Proficient in both frontend and backend development, creating seamless full-stack applications.",
    },
    {
      icon: FaRocket,
      title: "AI Integration",
      description:
        "Successfully implemented AI solutions using ChatGPT APIs to enhance user experiences.",
    },
    {
      icon: FaUsers,
      title: "Client-Focused",
      description:
        "Delivered high-quality solutions for various clients with excellent communication and project management.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation-Driven",
      description:
        "Always exploring new technologies and creative solutions to solve complex problems.",
    },
  ];

  const journey = [
    {
      year: "2025",
      title: "Serial Founder",
      description:
        "Started multiple companies, including Pilotype, and Sonexa.",
    },
    {
      year: "2024",
      title: "Advanced AI Integration",
      description:
        "Successfully integrated AI solutions across multiple projects, enhancing user experiences and automation.",
    },
    {
      year: "2023",
      title: "Full-Stack Mastery",
      description:
        "Developed comprehensive full-stack applications using Next.js, React, and modern backend technologies.",
    },
    {
      year: "2022",
      title: "Frontend Foundation",
      description:
        "Built a strong foundation in modern frontend development with React, TypeScript, and Tailwind CSS.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-900/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I&apos;m a passionate full-stack developer who loves creating
            exceptional digital experiences and solving complex problems with
            innovative solutions.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FaHeart className="text-red-400 mr-3" />
              My Story
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I&apos;m Jared Graham, a dedicated full-stack developer with a
                passion for creating seamless, dynamic web applications. My
                journey in web development started with the fundamentals of
                HTML, CSS, and JavaScript, and has evolved into expertise with
                modern frameworks like Next.js, React, and TypeScript.
              </p>
              <p>
                What drives me is the opportunity to solve real-world problems
                through technology. I&apos;ve successfully built applications
                that integrate AI solutions, manage complex business processes,
                and provide exceptional user experiences. My approach combines
                technical excellence with creative problem-solving.
              </p>
              <p>
                I believe in continuous learning and staying current with the
                latest technologies. Every project is an opportunity to grow,
                innovate, and push the boundaries of what&apos;s possible in web
                development.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FaGlobe className="text-blue-400 mr-3" />
              My Journey
            </h3>
            <div className="space-y-6">
              {journey.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-500/30"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-2"></div>
                  <div className="mb-2">
                    <span className="text-blue-400 font-semibold">
                      {item.year}
                    </span>
                    <h4 className="text-white font-semibold text-lg">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  index === 0
                    ? "bg-gradient-to-br from-emerald-500 to-emerald-600"
                    : index === 1
                    ? "bg-gradient-to-br from-amber-500 to-orange-600"
                    : index === 2
                    ? "bg-gradient-to-br from-teal-500 to-cyan-600"
                    : "bg-gradient-to-br from-rose-500 to-pink-600"
                }`}
              >
                <highlight.icon className="text-white text-2xl" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">
                {highlight.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 border border-teal-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Let&apos;s Work Together
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              I&apos;m always excited to take on new challenges and collaborate
              on interesting projects. Whether you have a specific project in
              mind or just want to discuss possibilities, I&apos;d love to hear
              from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <FaEnvelope className="text-teal-400" />
                <span>jaredvgraham@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FaPhone className="text-teal-400" />
                <span>781-336-7247</span>
              </div>
            </div>

            <SocialMediaLinks />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
