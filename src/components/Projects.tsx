"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image"; // Import Next.js Image component

const itemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const projectLinks = [
  {
    id: 1,
    title: "Business Task Manager",
    url: "https://bizzy-task.vercel.app/",
    imgSrc: "/bizzy-task.png",
    description: "A task management app with AI integration",
    videoUrl: "https://youtu.be/UlgvA3kXimU",
    gitHub: "https://github.com/jaredvgraham/bizzyTask",
  },
  {
    id: 2,
    title: "Job Application Tracker",
    url: "https://apply-frame.vercel.app/",
    imgSrc: "/applyFrame.png",
    description: "A job application tracker and AI resume builder/tailoring",
    videoUrl: "https://youtu.be/tasZs_QQkdo",
    gitHub: "https://github.com/jaredvgraham/apply-frame",
  },
  {
    id: 3,
    title: "My Freelancing Website",
    url: "https://www.bsites.io/",
    imgSrc: "/bsites.png",
    description: "My freelance web development website",

    gitHub: "https://github.com/jaredvgraham/top-of-the-web",
  },
  {
    id: 4,
    title: "Dating App (Not Live)",

    imgSrc: "/dating-app.png",
    description:
      "A dating app with a matching algorithm but the app is not live",

    gitHub: "https://github.com/jaredvgraham/dating-app",
  },
  // {
  //   id: 5,
  //   title: "Car Detailing Website",
  //   url: "https://www.jakecleanscars.com/",
  //   imgSrc: "/jake.png",
  //   description: "A car detailing website I built for a client",

  //   gitHub: "https://github.com/evanwilson2123/JakeCleansCars",
  // },
  {
    id: 6,
    title: "Learn More",
    url: "/projects",
    imgSrc: "/read-more.png",
    description: "Read more about my projects",
    videoUrl: "/projects",
    gitHub: "/projects",
  },
];
type Props = {
  project: {
    id: number;
    title: string;
    url?: string;
    imgSrc: string;
    description: string;
    videoUrl?: string | null;
    gitHub: string;
  };
  index: number;
};

const ProjectItem = ({ project, index }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative bg-white white-shadow-lg rounded-lg shadow-lg overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      transition={{ delay: index * 0.2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
      {hovered && (
        <div className="absolute inset-0 bg-black bg-opacity-85 flex flex-col justify-center items-center text-white p-4">
          <h2 className="text-xl mb-2">{project.title}</h2>
          <p className="mb-4 text-center">{project.description}</p>
          <div className="flex space-x-4">
            <ul className="flex space-x-4 mb-5">
              <li>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Site
                  </a>
                )}
              </li>
              <li>
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Video Demo
                  </a>
                )}
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
};

const Projects = () => {
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
        {projectLinks.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
