"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image"; // Import Next.js Image component

const itemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const projectLinks = [
  {
    id: 1,
    title: "Business Task Manager",
    url: "https://bizzy-task.vercel.app/",
    imgSrc: "/bizzy-task.png",
    description: "A task management app with AI integration",
    videoUrl: "https://www.youtube.com/watch?v=8Jjzv1QJ1zA",
    gitHub: "https://github.com/jaredvgraham/bizzyTask",
  },
  {
    id: 2,
    title: "Job Application Tracker",
    url: "https://apply-frame.vercel.app/",
    imgSrc: "/applyFrame.png",
    description: "A job application tracker and AI resume builder/tailoring",
    videoUrl: "https://www.youtube.com/watch?v=8Jjzv1QJ1zA",
    gitHub: "https://github.com/jaredvgraham/apply-frame",
  },
  {
    id: 3,
    title: "My Freelancing Website",
    url: "https://www.bsites.io/",
    imgSrc: "/bsites.png",
    description: "My freelance web development website",
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
    videoUrl: "https://www.youtube.com/watch?v=8Jjzv1QJ1zA",
    gitHub: "https://github.com/jaredvgraham/dating-app",
  },
  {
    id: 5,
    title: "Car Detailing Website",
    url: "https://www.jakecleanscars.com/",
    imgSrc: "/jake.png",
    description: "A car detailing website I built for a client",
    videoUrl: "https://www.youtube.com/watch?v=8Jjzv1QJ1zA",
    gitHub: "https://github.com/evanwilson2123/JakeCleansCars",
  },
  {
    id: 6,
    title: "Learn More",
    url: "/projects",
    imgSrc: "/learn-more.png",
    description: "Read more about my projects",
    videoUrl: "/projects",
    gitHub: "/projects",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center p-10">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-white text-center mb-10 text-3xl"
      >
        My Apps
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {projectLinks.map((project, index) => {
          const [ref, inView] = useInView({
            threshold: 0.1,
            triggerOnce: true,
          });

          return (
            <motion.div
              key={project.id}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="relative bg-white white-shadow-lg rounded-lg shadow-lg overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              {hoveredProject === project.id && (
                <div className="absolute inset-0 bg-black bg-opacity-85 flex flex-col justify-center items-center text-white p-4">
                  <h2 className="text-xl mb-2">{project.title}</h2>
                  <p className="mb-4 text-center">{project.description}</p>
                  <div className="flex space-x-4">
                    <ul className="flex space-x-4">
                      <li>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Live Site
                        </a>
                      </li>
                      <li>
                        <a
                          href={project.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Video Demo
                        </a>
                      </li>
                      <li>
                        <a
                          href={project.gitHub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          GitHub
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
                <h2 className="text-gray-800 text-center">{project.title}</h2>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
