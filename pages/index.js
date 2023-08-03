import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import NavOverlay from "../components/NavOverlay.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About/About.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Footer from "../components/Footer.jsx";
import Contact from "../components/Contact.jsx";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Preloader from "../components/Preloader/Preloader.jsx";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [offsetY, setOffSetY] = useState();

  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 3000);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", duration: 1 }}
      >
        <Head>
          <title>Ash Bridges | Web Developer</title>
          <meta
            name="description"
            content="Web Developer, designer, fella with a keyboard. Check out my works and thanks for stopping by!"
          />
          <meta property="og:title" content="Ash Bridges" />
          <meta
            property="og:description"
            content="Web Developer and Designer"
          />
          <meta
            property="og:image"
            content="https://example.com/images/cool-page.jpg"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logoFill.svg" />
        </Head>

        <NavOverlay />
        <Hero key="hero" offsetY={offsetY} />
        <About offsetY={offsetY} key="about" data-scroll-section />
        <Projects offsetY={offsetY} key="projects" />
        <Skills offsetY={offsetY} key="skills" />
        <Contact offsetY={offsetY} key="contact" />
        <Footer key="footer" offsetY={offsetY} />
      </motion.div>
    </>
  );
}
