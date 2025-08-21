"use client";

import React from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaPlay,
  FaCalendarAlt,
  FaCode,
  FaRocket,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import { projects } from "@/components/Projects";
import Image from "next/image";

const ProjectDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Find the project by slug (convert title to slug)
  const project = projects.find(
    (p) =>
      p.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") === slug
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => router.push("/#projects")}
            className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const projectSlug = project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

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
        <button
          onClick={() => router.push("/#projects")}
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors duration-300 mb-8"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </button>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-2">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </div>

            {/* Project Info */}
            <div>
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
                  {project.category}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700/80 hover:border-gray-500 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700/80 hover:border-gray-500 transition-all duration-300 font-medium"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                )}
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 font-medium"
                  >
                    <FaPlay className="w-4 h-4" />
                    <span>Watch Demo</span>
                  </a>
                )}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <FaCode className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Technologies</p>
                      <p className="text-lg font-semibold text-white">
                        {project.technologies.length}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <FaRocket className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Category</p>
                      <p className="text-lg font-semibold text-white">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <FaCode className="w-8 h-8 text-teal-400 mr-3" />
            Technologies & Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center hover:border-teal-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <FaCode className="w-6 h-6 text-teal-400" />
                </div>
                <p className="text-white font-medium text-sm">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <FaLightbulb className="w-8 h-8 text-teal-400 mr-3" />
            Project Overview
          </h2>
          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Add more detailed content based on project */}
              {projectSlug === "sonexa-ai-powered-lyric-video-maker" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                      <h4 className="text-lg font-semibold text-teal-400 mb-3">
                        AI Lyric Video Creation
                      </h4>
                      <ul className="text-gray-300 space-y-2">
                        <li>
                          • Automatic audio transcription with OpenAI Whisper
                        </li>
                        <li>• Beat-synchronized lyrics with AI timing</li>
                        <li>
                          • Multiple creation modes for different content types
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                      <h4 className="text-lg font-semibold text-teal-400 mb-3">
                        Professional Rendering
                      </h4>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Remotion framework for studio-quality output</li>
                        <li>• Multiple export formats and resolutions</li>
                        <li>• Real-time preview and timeline controls</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {projectSlug === "pilotype-ai-powered-browser-autocomplete" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                      <h4 className="text-lg font-semibold text-teal-400 mb-3">
                        Browser Extension
                      </h4>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Universal input detection across all websites</li>
                        <li>• Real-time AI-powered text suggestions</li>
                        <li>• Cross-platform compatibility</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                      <h4 className="text-lg font-semibold text-teal-400 mb-3">
                        AI Integration
                      </h4>
                      <ul className="text-gray-300 space-y-2">
                        <li>• OpenAI GPT-4 for high-quality completions</li>
                        <li>• Google Gemini for fact extraction</li>
                        <li>• Memory-based personalization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Project Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Explore?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-700/80 hover:border-gray-500 transition-all duration-300 font-medium text-lg"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span>Visit Live Site</span>
              </a>
            )}
            <a
              href="/#projects"
              className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-700/80 hover:border-gray-500 transition-all duration-300 font-medium transform hover:scale-105"
            >
              <FaArrowLeft className="w-5 h-5" />
              <span>View All Projects</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
