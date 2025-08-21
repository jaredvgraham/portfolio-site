"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaPlay,
  FaArrowRight,
} from "react-icons/fa";

export const projects = [
  {
    id: 1,
    title: "Sonexa - AI-Powered Lyric Video Maker",
    description:
      "A comprehensive AI-powered platform that transforms audio and video content into engaging, professionally-styled lyric videos and captions. Features automatic transcription, beat-synchronized lyrics, and professional video rendering with Remotion framework.",
    image: "/sonexa-placeholder.png",
    liveUrl: "https://sonexa.cc",

    videoUrl: null,
    technologies: [
      "Next.js 15",
      "React 19",
      "AI Integration",
      "Video Processing",
      "Remotion",
      "OpenAI Whisper",
      "Real-time Collaboration",
    ],
    category: "AI/Enterprise",
  },
  {
    id: 2,
    title: "Pilotype - AI Browser Autocomplete",
    description:
      "A sophisticated browser extension that provides intelligent AI-powered text autocompletion across any website. Features real-time suggestions, context-aware AI, memory-based personalization, and seamless integration with OpenAI and Google Gemini.",
    image: "/pilotype-placeholder.png",
    liveUrl: "https://pilotype.io",

    videoUrl: "https://www.youtube.com/watch?v=fzec6n9ONtM",
    technologies: [
      "Next.js 15",
      "React 19",
      "Browser Extension",
      "Plasmo Framework",
      "OpenAI GPT-4",
      "Google Gemini",
      "MongoDB",
      "Stripe Integration",
    ],
    category: "AI/Productivity",
  },

  {
    id: 3,
    title: "Dating App",
    description:
      "A sophisticated dating application featuring a unique matching algorithm based on user ratings and preferences. Includes real-time messaging and advanced filtering.",
    image: "/dating-app.png",
    liveUrl: "https://raet.io/",
    githubUrl: "https://github.com/jaredvgraham/raet",
    videoUrl: null,
    technologies: [
      "React Native",
      "Expo",
      "Express",
      "MongoDB",
      "Firebase",
      "Real-time",
      "Typescript",
    ],
    category: "Full-Stack",
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 text-white text-xs font-medium rounded-full ${
              project.category === "AI/Enterprise"
                ? "bg-emerald-600/90"
                : project.category === "AI/Productivity"
                ? "bg-amber-500/90"
                : project.category === "Full-Stack"
                ? "bg-teal-600/90"
                : "bg-rose-500/90"
            }`}
          >
            {project.category}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-teal-700/30 hover:border-teal-700/50 transition-all duration-300"
            >
              <FaExternalLinkAlt className="text-sm" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-indigo-500/30 hover:border-indigo-500/50 transition-all duration-300"
            >
              <FaGithub className="text-sm" />
            </a>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
            >
              <FaPlay className="text-sm" />
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">
          <a
            href={`/projects/${project.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "")}`}
            className="hover:text-teal-300 transition-colors duration-300"
          >
            {project.title}
          </a>
        </h3>

        <div className="mb-4">
          <p
            className={`text-gray-300 text-sm leading-relaxed transition-all duration-300 ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {project.description}
          </p>

          {project.description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-teal-300 hover:text-teal-200 text-xs font-medium mt-2 transition-colors duration-300 flex items-center space-x-1"
            >
              <span>{isExpanded ? "Read Less" : "Read More"}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </button>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, idx: number) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <div className="flex items-center justify-between">
          <a
            href={`/projects/${project.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "")}`}
            className="inline-flex items-center space-x-2 text-teal-300 hover:text-teal-200 transition-colors duration-300 group/btn"
          >
            <span className="text-sm font-medium">View Details</span>
            <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Here are some of my recent projects that demonstrate my skills in
            full-stack development, AI integration, and creating exceptional
            user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
