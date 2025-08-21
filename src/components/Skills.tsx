"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaDatabase,
  FaFire,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiExpo,
} from "react-icons/si";

const skills = [
  // Full-Stack Technologies
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: 95,
    category: "Full-Stack",
    color: "text-white",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: 95,
    category: "Full-Stack",
    color: "text-blue-400",
  },

  {
    name: "React Native",
    icon: FaReact,
    level: 80,
    category: "Full-Stack",
    color: "text-cyan-400",
  },
  {
    name: "Expo",
    icon: SiExpo,
    level: 80,
    category: "Full-Stack",
    color: "text-white",
  },

  // Frontend Technologies
  {
    name: "React",
    icon: FaReact,
    level: 95,
    category: "Frontend",
    color: "text-cyan-400",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    level: 95,
    category: "Frontend",
    color: "text-orange-400",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    level: 85,
    category: "Frontend",
    color: "text-blue-400",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: 95,
    category: "Frontend",
    color: "text-teal-400",
  },

  // Backend Technologies
  {
    name: "Node.js",
    icon: FaNode,
    level: 85,
    category: "Backend",
    color: "text-green-400",
  },
  {
    name: "Express",
    icon: SiExpress,
    level: 85,
    category: "Backend",
    color: "text-green-400",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: 90,
    category: "Backend",
    color: "text-green-400",
  },
  {
    name: "Firebase",
    icon: FaFire,
    level: 75,
    category: "Backend",
    color: "text-orange-400",
  },
];

const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const IconComponent = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 group"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <IconComponent
            className={`w-6 h-6 ${skill.color} transition-colors duration-300`}
          />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
          <span className="text-gray-400 text-sm">{skill.category}</span>
        </div>
      </div>

      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className={`h-2 rounded-full ${
            skill.category === "Full-Stack"
              ? "bg-gradient-to-r from-emerald-600 to-emerald-500"
              : skill.category === "Frontend"
              ? "bg-gradient-to-r from-amber-500 to-orange-500"
              : "bg-gradient-to-r from-teal-600 to-cyan-500"
          }`}
        />
      </div>

      <div className="flex justify-between items-center mt-2">
        <span className="text-gray-400 text-sm">Used In Apps</span>
        <span className="text-white font-medium">{skill.level}%</span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I&apos;ve developed expertise across the full stack, from modern
            frontend frameworks to robust backend solutions. Here&apos;s a
            breakdown of my technical proficiency.
          </p>
        </motion.div>

        {/* Full-Stack Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Full-Stack Development
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills
              .filter((skill) => skill.category === "Full-Stack")
              .map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
          </div>
        </div>

        {/* Frontend Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Frontend Development
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills
              .filter((skill) => skill.category === "Frontend")
              .map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Backend Development
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills
              .filter((skill) => skill.category === "Backend")
              .map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-900/30 via-blue-900/30 to-indigo-900/30 border border-teal-600/30 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I&apos;m constantly expanding my skill set and staying up-to-date
              with the latest technologies and best practices in web
              development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
