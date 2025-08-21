"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaPlay,
  FaArrowRight,
  FaCode,
  FaRocket,
  FaExternalLinkAlt as FaExternalLinkAltIcon,
} from "react-icons/fa";
import { projects } from "@/components/Projects";
import Link from "next/link";

const ProjectsPage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 p-6"
      >
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors duration-300 mb-8"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of full-stack applications, AI integrations,
            and innovative solutions. Each project showcases different aspects
            of modern web development and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-teal-500/30 hover:border-teal-500/50 transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-teal-500/30 hover:border-teal-500/50 transition-all duration-300"
                      >
                        <FaGithub className="text-sm" />
                      </a>
                    )}
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-red-500/30 hover:border-red-500/50 transition-all duration-300"
                      >
                        <FaPlay className="text-sm" />
                      </a>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                    <Link
                      href={`/projects/${project.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-+|-+$/g, "")}`}
                      className="hover:text-teal-400 transition-colors duration-300"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-md border border-gray-700">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/projects/${project.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-+|-+$/g, "")}`}
                      className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors duration-300 group/btn"
                    >
                      <span className="text-sm font-medium">View Details</span>
                      <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>

                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-500/50 transition-all duration-300"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-500/50 transition-all duration-300"
                        >
                          <FaGithub className="text-xs" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {projects.length}
              </h3>
              <p className="text-gray-400">Total Projects</p>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaRocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {projects.reduce(
                  (acc, project) => acc + project.technologies.length,
                  0
                )}
              </h3>
              <p className="text-gray-400">Technologies Used</p>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaExternalLinkAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {projects.filter((p) => p.liveUrl).length}
              </h3>
              <p className="text-gray-400">Live Demos</p>
            </div>
          </div>

          {/* Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700/80 hover:border-gray-500 transition-all duration-300 transform hover:scale-105"
          >
            <FaArrowLeft className="text-sm" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
