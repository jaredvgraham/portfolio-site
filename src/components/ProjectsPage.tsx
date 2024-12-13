"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image"; // Using Next.js Image component for optimization
import { url } from "inspector";

const ProjectsPage = () => {
  const projectLinks = [
    {
      id: 1,
      title: "Sales Prospecting SAAS",
      url: "https://sale-sphere.vercel.app/",
      imgSrc: "/sales.png",
      description: "A sales prospecting SAAS with AI integration",
      inDepthDescription: [
        "Automatically finds thousands of companies similar to a user-inputted root company.",
        "Retrieves key details like company website, LinkedIn profile, relationships to the root company, data from Wikipedia API, number of employees, annual revenue, number of locations.",
        "Identifies nearby companies and key people, such as C-level executives.",
        "Provides company location details, products, and services.",
        "Allows for iterative searches to discover more related companies from initial findings.",
        "Generates customized email templates based on user business and company data.",
        "Stores contact details and other information for future use.",
        "Subscription plans (Basic, Standard, Premium) managed through Stripe's API.",
      ],
      techStack:
        "Next.js, Typescript, Tailwind, Mongo, OpenAI API, Google Search API, Wikipedia API, Stripe",
      usefulness:
        "Enhances sales prospecting by automating company discovery and outreach.",
      developmentProcess:
        "Built with Next.js, Firestore for database, and integrated with Stripe for payments.",

      gitHub: "https://github.com/jaredvgraham/SaleSphere",
    },
    {
      id: 5,
      title: "Raet Dating App",
      imgSrc: "/dating-app.png",
      url: "https://raet.io",
      description:
        "A unique dating app designed to enhance match quality and streamline the dating process.",
      inDepthDescription: [
        "Utilizes a unique group-based matching system, where users are grouped by ratings given by the community. This allows users to find high-quality matches more quickly.",
        "The rating system lets users provide feedback on profiles they interact with, helping to categorize people based on overall compatibility and interactions.",
        "This system improves the experience by reducing the time spent on incompatible matches, and connecting users with profiles that align with their preferences and community ratings.",
        "Features real-time chat, allowing matched users to connect instantly, fostering better engagement and connection-building.",
        "Integrates content moderation tools including flagging and blocking for a safer experience.",
        "Provides an intuitive interface for seamless profile creation and navigation.",
      ],
      techStack:
        "React Native, Expo, Node.js, Express.js, TypeScript, Tailwind CSS, Clerk Auth, Firebase Real-time Database, MongoDB",
      usefulness:
        "Enhances dating efficiency by allowing community-driven ratings to guide matching, creating a safer and more meaningful experience.",
      developmentProcess:
        "Built using React Native and Expo for mobile, with a Node.js and Express backend. Firebase Real-time Database supports secure data storage and live updates.",
      gitHub: "https://github.com/jaredvgraham/raet",
    },
    {
      id: 2,
      title: "Business Task Manager",
      url: "https://bizzy-task.vercel.app/",
      imgSrc: "/bizzy-task.png",
      description: "A task management app with AI integration",
      inDepthDescription: [
        "Organizes tasks into categories, descriptions, and tracks progress.",
        "AI-powered templates generate task plans based on business prompts.",
        "Enables team collaboration in real-time using webhooks.",
        "Provides a progress dashboard and task status overview for enhanced productivity.",
      ],
      techStack:
        "Next.js, Typescript, Tailwind, Firestore, Webhooks, OpenAI API",
      usefulness:
        "Improves task management and productivity in business environments.",
      developmentProcess:
        "Built with Next.js, Firestore for data management, and integrated with OpenAI API.",
      videoUrl: "https://youtu.be/UlgvA3kXimU",
      gitHub: "https://github.com/jaredvgraham/bizzyTask",
    },
    {
      id: 3,
      title: "Job Application Tracker",
      url: "https://apply-frame.vercel.app/",
      imgSrc: "/applyFrame.png",
      description: "A job application tracker and AI resume builder/tailoring",
      inDepthDescription: [
        "Tracks job applications and generates AI-driven resumes tailored to job descriptions.",
        "Users upload resumes, which are optimized via OpenAI API and saved in the database.",
        "Customizes resumes based on specific job requirements and generates downloadable PDFs.",
      ],
      techStack: "Next.js, Typescript, Tailwind, MongoDB, OpenAI API",
      usefulness:
        "Streamlines the job application process and enhances resume customization.",
      developmentProcess:
        "Built with Next.js and MongoDB. Puppeteer is used for screenshot capture and PDF generation.",
      videoUrl: "https://youtu.be/tasZs_QQkdo",
      gitHub: "https://github.com/jaredvgraham/apply-frame",
    },
    {
      id: 4,
      title: "My Freelancing Website",
      url: "https://www.bsites.io/",
      imgSrc: "/bsites.png",
      description: "My freelance web development website",
      inDepthDescription: [
        "A website offering web development services such as web design, development, and SEO optimization.",
        "Integrated with Stripe for clients to directly purchase services.",
        "Includes case studies and portfolio sections to showcase previous work.",
      ],
      techStack: "Next.js, Tailwind CSS, MongoDB, Stripe",
      usefulness:
        "Helps potential clients learn about services and purchase them directly online.",
      developmentProcess:
        "Built with Next.js for server-side rendering and Stripe for payment integration.",
      gitHub: "https://github.com/jaredvgraham/top-of-the-web",
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
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline mb-4 block"
                >
                  Visit Live Site
                </a>
              )}

              <a
                href={project.gitHub}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline mb-4 block"
              >
                View on GitHub
              </a>
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline mb-4 block"
                >
                  Watch Video Demo
                </a>
              )}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-2">
              In-Depth Description
            </h3>
            <ul className="text-gray-400 mb-4 p-4">
              {project.inDepthDescription.map((item, i) => (
                <li className="list-disc mt-2" key={i}>
                  {item}
                </li>
              ))}
            </ul>
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
