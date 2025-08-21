"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

const experiences = [
  {
    icon: FaCode,
    title: "Full-Stack Development",
    description:
      "Built complete web applications from concept to deployment using modern technologies like Next.js, React, and Node.js.",
    achievements: [
      "Full-stack applications",
      "API development",
      "Database design",
      "Performance optimization",
    ],
  },
  {
    icon: FaRocket,
    title: "AI Integration",
    description:
      "Successfully integrated AI solutions using ChatGPT APIs to enhance user experience and automate complex tasks.",
    achievements: [
      "ChatGPT API integration",
      "AI-powered features",
      "Automation solutions",
      "Smart algorithms",
    ],
  },
  {
    icon: FaUsers,
    title: "Client Projects",
    description:
      "Delivered high-quality websites and applications for various clients, ensuring satisfaction and meeting deadlines.",
    achievements: [
      "Client communication",
      "Project management",
      "Quality assurance",
      "Timely delivery",
    ],
  },
  {
    icon: FaLightbulb,
    title: "Innovation & Problem Solving",
    description:
      "Developed creative solutions for complex technical challenges, always pushing the boundaries of what&apos;s possible.",
    achievements: [
      "Creative problem solving",
      "Technical innovation",
      "Best practices",
      "Continuous improvement",
    ],
  },
];

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: any;
  index: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const IconComponent = experience.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 group"
    >
      <div className="flex items-center space-x-4 mb-6">
        <div
          className={`w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
            index === 0
              ? "bg-gradient-to-br from-emerald-600 to-emerald-500"
              : index === 1
              ? "bg-gradient-to-br from-amber-500 to-orange-600"
              : index === 2
              ? "bg-gradient-to-br from-teal-600 to-cyan-600"
              : "bg-gradient-to-br from-rose-500 to-pink-600"
          }`}
        >
          <IconComponent className="text-white text-2xl" />
        </div>
        <h3 className="text-white font-bold text-xl">{experience.title}</h3>
      </div>

      <p className="text-slate-300 mb-6 leading-relaxed">
        {experience.description}
      </p>

      <div className="space-y-2">
        {experience.achievements.map((achievement: string, idx: number) => (
          <div key={idx} className="flex items-center space-x-2">
            <div
              className={`w-2 h-2 rounded-full ${
                index === 0
                  ? "bg-emerald-500"
                  : index === 1
                  ? "bg-amber-500"
                  : index === 2
                  ? "bg-teal-500"
                  : "bg-rose-500"
              }`}
            ></div>
            <span className="text-gray-300 text-sm">{achievement}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 px-4 bg-gray-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in web development has equipped me with diverse skills
            and experiences that enable me to tackle any project with confidence
            and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-900/30 via-blue-900/30 to-indigo-900/30 border border-teal-600/30 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I&apos;m always excited to take on new projects and technologies.
              Let&apos;s work together to bring your ideas to life!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
