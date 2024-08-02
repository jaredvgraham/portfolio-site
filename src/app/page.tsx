"use client";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollAnimationPage from "@/components/Hero";
import { ContainerScroll } from "@/components/ui/ctn-scroll-animation";
import React, { useEffect } from "react";
import SocialMediaLinks from "@/components/SMLinks";
import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";

const page = () => {
  // const [isMobile, setIsMobile] = React.useState<boolean>(false);
  // const [isReallySmall, setIsReallySmall] = React.useState<boolean>(false);

  // useEffect(() => {
  //   const checkMobile = () => {
  //     const width = window.innerWidth;
  //     console.log("window.innerWidth", width);

  //     if (width < 541) {
  //       setIsMobile(true);
  //       setIsReallySmall(true);
  //     } else if (width < 768) {
  //       setIsMobile(true);
  //       setIsReallySmall(false);
  //     } else {
  //       setIsMobile(false);
  //       setIsReallySmall(false);
  //     }

  //     console.log("isMobile", isMobile);
  //     console.log("isReallySmall", isReallySmall);
  //   };

  //   checkMobile(); // Initial check
  //   window.addEventListener("resize", checkMobile);
  //   return () => {
  //     window.removeEventListener("resize", checkMobile);
  //   };
  // }, [isMobile, isReallySmall]);
  return (
    <>
      <Navbar />
      <ScrollAnimationPage />
      <Projects />
      <AboutMe />
      <ContactForm />
    </>
  );
};

export default page;
