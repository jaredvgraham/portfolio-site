"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image"; // Using Next.js Image component for optimization

const ProjectsPage = () => {
  const projectLinks = [
    {
      id: 1,
      title: "Business Task Manager",
      url: "https://bizzy-task.vercel.app/",
      imgSrc: "/bizzy-task.png",
      description: "A task management app with AI integration",
      inDepthDescription:
        "This app helps businesses manage their tasks efficiently with AI integration. It allows for task assignment, progress tracking, and AI-powered task suggestions.",
      techStack: "React, Node.js, Express, MongoDB, OpenAI API",
      usefulness:
        "Improves task management and productivity in business environments.",
      developmentProcess:
        "The app was built using React for the frontend and Node.js for the backend. MongoDB was used for the database, and the OpenAI API was integrated for AI functionalities.",
      videoUrl: "https://www.youtube.com/watch?v=8Jjzv1QJ1zA",
      gitHub: "https://github.com/jaredvgraham/bizzyTask",
    },
    {
      id: 2,
      title: "Job Application Tracker",
      url: "https://apply-frame.vercel.app/",
      imgSrc: "/applyFrame.png",
      description: "A job application tracker and AI resume builder/tailoring",
      inDepthDescription:
        "This app helps users track their job applications and tailor their resumes for each application using AI.",
      techStack: "React, Node.js, Express, MongoDB, OpenAI API",
      usefulness:
        "Streamlines the job application process and enhances resume customization.",
      developmentProcess:
        "The project involved creating a user-friendly interface with React and handling backend operations with Node.js and MongoDB. The OpenAI API was used for AI-driven resume tailoring.",
      videoUrl: "https://www.youtube.com/watch?v=8Jjzv1QJ1zA",
      gitHub: "https://github.com/jaredvgraham/apply-frame",
    },
    {
      id: 3,
      title: "My Freelancing Website",
      url: "https://www.bsites.io/",
      imgSrc: "/bsites.png",
      description: "My freelance web development website",
      inDepthDescription:
        "A portfolio website showcasing my freelance web development projects and services.",
      techStack: "Next.js, Tailwind CSS, Vercel",
      usefulness:
        "Helps potential clients learn about my services and see examples of my work.",
      developmentProcess:
        "Built with Next.js for server-side rendering and Tailwind CSS for styling. Deployed on Vercel for optimized performance and scalability.",
      videoUrl: "https://www.youtube.com/watch?v=8Jjzv1QJ1zA",
      gitHub: "https://github.com/jaredvgraham/top-of-the-web",
    },
    {
      id: 4,
      title: "Dating App (Not Live)",
      url: "https://www.bsites.io/",
      imgSrc: "/dating-app.png",
      description:
        "A dating app with a matching algorithm but the app is not live",
      inDepthDescription:
        "A dating app designed with a unique matching algorithm to connect compatible users.",
      techStack: "React Native, Firebase, Node.js",
      usefulness: "Enhances user experience in finding compatible matches.",
      developmentProcess:
        "Developed using React Native for cross-platform compatibility, Firebase for backend services, and Node.js for server-side logic.",
      videoUrl: "https://www.youtube.com/watch?v=8Jjzv1QJ1zA",
      gitHub: "https://github.com/jaredvgraham/dating-app",
    },
    {
      id: 5,
      title: "Car Detailing Website",
      url: "https://www.jakecleanscars.com/",
      imgSrc: "/jake.png",
      description: "A car detailing website I built for a client",
      inDepthDescription:
        "A professional website for a car detailing business, showcasing services and allowing online bookings.",
      techStack: "WordPress, HTML, CSS, JavaScript",
      usefulness:
        "Increases online presence and allows customers to book detailing services online.",
      developmentProcess:
        "Developed with WordPress for easy content management and custom HTML, CSS, and JavaScript for unique functionality.",
      videoUrl: "https://www.youtube.com/watch?v=8Jjzv1QJ1zA",
      gitHub: "https://github.com/evanwilson2123/JakeCleansCars",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center min-h-screen text-gray-300 p-4"
    >
      <h1 className="text-5xl font-bold text-center text-gray-300 mb-10">
        Projects
      </h1>
      {projectLinks.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full max-w-4xl my-10 p-8 white-shadow-md rounded-lg shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center">
            <Image
              src={project.imgSrc}
              alt={project.title}
              width={400}
              height={200}
              className="rounded-lg object-cover mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline mb-4 block"
              >
                Visit Live Site
              </a>
              <a
                href={project.gitHub}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline mb-4 block"
              >
                View on GitHub
              </a>
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline mb-4 block"
              >
                Watch Video Demo
              </a>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-2">
              In-Depth Description
            </h3>
            <p className="text-gray-400 mb-4">{project.inDepthDescription}</p>
            <h3 className="text-2xl font-semibold mb-2">Tech Stack</h3>
            <p className="text-gray-400 mb-4">{project.techStack}</p>
            <h3 className="text-2xl font-semibold mb-2">Usefulness</h3>
            <p className="text-gray-400 mb-4">{project.usefulness}</p>
            <h3 className="text-2xl font-semibold mb-2">Development Process</h3>
            <p className="text-gray-400">{project.developmentProcess}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsPage;
