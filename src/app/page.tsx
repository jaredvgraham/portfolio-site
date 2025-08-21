"use client";
import React from "react";
import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <AboutMe />
      <ContactForm />
    </main>
  );
};

export default HomePage;
