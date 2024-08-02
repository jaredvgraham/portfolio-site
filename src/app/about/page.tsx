"use client";
import SocialMediaLinks from "@/components/SMLinks";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutPage = () => {
  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref5, inView5] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="flex flex-col items-center min-h-screen text-gray-300 p-4">
      <div className="sm:w-11/12 md:w-2/3 white-shadow-md rounded-lg p-8">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-center text-gray-300"
        >
          A Deeper Dive
        </motion.h1>

        <motion.section
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={sectionVariants}
          className="mt-8"
        >
          <h2 className="text-3xl font-semibold text-gray-300">
            Passion for Web Development
          </h2>
          <p className="text-lg mt-4 text-gray-400">
            I'm a passionate web developer with a deep love for creating
            seamless, dynamic web applications. Over the past year, I have honed
            my skills in HTML, CSS, JavaScript, and Next.js, building a
            portfolio that showcases my ability to tackle both frontend and
            backend development with proficiency.
          </p>
        </motion.section>

        <motion.section
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={sectionVariants}
          className="mt-8"
        >
          <h2 className="text-3xl font-semibold text-gray-300">Recent Work</h2>
          <p className="text-lg mt-4 text-gray-400">
            In my recent work, I've developed a full-stack task management app
            using Next.js, demonstrating my knack for creating user-friendly,
            efficient web applications. I've also integrated AI-powered features
            into various projects, like my job application management tool,
            which streamlines and enhances the job search process.
          </p>
        </motion.section>

        <motion.section
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={sectionVariants}
          className="mt-8"
        >
          <h2 className="text-3xl font-semibold text-gray-300">
            Development Approach
          </h2>
          <p className="text-lg mt-4 text-gray-400">
            My approach to development is rooted in a strong work ethic,
            creativity, and a relentless drive to learn and grow. I believe in
            the power of visually appealing and intuitive interfaces, and I
            strive to ensure that every project I undertake prioritizes the user
            experience.
          </p>
        </motion.section>

        <motion.section
          ref={ref4}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={sectionVariants}
          className="mt-8"
        >
          <h2 className="text-3xl font-semibold text-gray-300">
            Background and Expertise
          </h2>
          <p className="text-lg mt-4 text-gray-400">
            My background has equipped me with the ability to bring innovative
            solutions to real-world problems, and I'm excited to bring this
            energy and expertise to every project I work on. I'm eager to
            connect with like-minded professionals and explore new opportunities
            where I can contribute my skills and enthusiasm.
          </p>
        </motion.section>

        <motion.section
          ref={ref5}
          initial="hidden"
          animate={inView5 ? "visible" : "hidden"}
          variants={sectionVariants}
          className="mt-8"
        >
          <h2 className="text-3xl font-semibold text-gray-300">
            Let's Connect
          </h2>
          <p className="text-lg mt-4 text-gray-400">
            Let's create something amazing together!
          </p>
          <ul className="mt-2">
            <li>Email: jaredvgraham@gmail.com</li>
            <a href="tel:7813367247">
              <li>Phone: 781-336-7247</li>
            </a>
          </ul>
          <SocialMediaLinks />
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
