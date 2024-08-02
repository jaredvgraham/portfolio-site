// pages/scroll-animation.tsx
"use client";
import React, { useEffect, useState } from "react";
import { ContainerScroll } from "./ui/ctn-scroll-animation";
import Image from "next/image";
import react_logo from "../public/react_logo_dark.svg";
import { motion } from "framer-motion";

const ScrollAnimationPage = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isReallySmall, setIsReallySmall] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(true);

  function imgWidths() {
    if (isMobile) {
      return 200;
    } else if (isReallySmall) {
      return 200;
    } else {
      return 300;
    }
  }

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      console.log("window.innerWidth", width);

      if (width < 768) {
        setIsMobile(true);
        setIsReallySmall(true);
        setLoading(false);
      } else {
        setIsMobile(false);
        setIsReallySmall(false);
        setLoading(false);
      }

      console.log("isMobile", isMobile);
      console.log("isReallySmall", isReallySmall);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (loading) {
    return <div></div>;
  }

  return (
    <>
      <motion.div
        initial={{
          rotate: "180deg",
          scale: 0,
          opacity: 0,
        }}
        animate={{ rotate: "0", scale: 1, opacity: 1 }}
        transition={{ duration: 3.5, type: "spring", stiffness: 45 }}
      >
        <ContainerScroll
          titleComponent={
            <h1 className="text-4xl  text-slate-300 mb-3 font-thin ">
              Welcome to, <br />
              Jared Grahams Portfolio
            </h1>
          }
        >
          <main className="p-10 bg-black flex flex-col justify-between ">
            <h2 className="text-slate-300 text-3xl text-center">Skills</h2>

            <div
              className={`mt-10 flex justify-between ${
                isReallySmall && "justify-center"
              }`}
            >
              <Image
                src="/me.jpg"
                alt="react-logo"
                width={imgWidths()}
                height={imgWidths()}
                className={`mx-auto  ${
                  !isReallySmall && "mr-11"
                }  white-shadow-lg`}
              />
              {!isReallySmall && (
                <div className="mx-auto text-center  w-1/4 md:w-1/2  max-h-80 overflow-scroll scrol">
                  <h1 className="text-slate-300 text-center text-2xl">
                    Who am I?
                  </h1>
                  <div
                    className={`text-white text-center  
                  } overflow-hidden relative`}
                  >
                    <p className="text-slate-300">
                      I&apos;m Jared, a frontend developer with a habit of
                      creating full-stack applications using Next.js. My
                      expertise lies in both frontend and backend development,
                      allowing me to craft seamless, dynamic, and
                      high-performance web applications. I have a strong passion
                      for creating visually appealing and user-friendly
                      interfaces that are not only functional but also
                      aesthetically pleasing. My proficiency in modern web
                      technologies and my ability to implement AI solutions
                      using APIs like ChatGPT make me a versatile and innovative
                      developer.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </main>
          <div
            className={`${
              !isMobile && "mt - 5"
            } grid grid-flow-col grid-cols-7 gap-4`}
          >
            <Image
              src="/html.svg"
              alt="react-logo"
              width={58}
              height={58}
              className="mx-auto white-shadow-lg  "
            />
            <Image
              src="/css.svg"
              alt="react-logo"
              width={55}
              height={55}
              className="mx-auto white-shadow-lg mt-1 "
            />
            <Image
              src="/javascript.svg"
              alt="react-logo"
              width={55}
              height={55}
              className="mx-auto white-shadow-lg mt-1 "
            />

            <Image
              src="/typescript-icon.svg"
              alt="react-logo"
              width={55}
              height={55}
              className="mx-auto white-shadow-lg mt-1 "
            />
            <Image
              src="/react.svg"
              alt="react-logo"
              width={58}
              height={58}
              className="mx-auto white-shadow-lg "
            />

            <Image
              src="/next-logo.svg"
              alt="react-logo"
              width={58}
              height={58}
              className="mx-auto white-shadow-lg "
            />
            <Image
              src="/node-logo.svg"
              alt="react-logo"
              width={58}
              height={58}
              className="mx-auto white-shadow-lg "
            />
          </div>
        </ContainerScroll>
      </motion.div>
    </>
  );
};

export default ScrollAnimationPage;
