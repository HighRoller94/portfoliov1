import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

import Head from 'next/head'
import NavOverlay from '../components/NavOverlay'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer'
import Contact from '../components/Contact'

import { AnimatePresence } from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Home() {
  const [downloaded, setDownloaded] = useState(false);

  const [offsetY, setOffSetY] = useState()

  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const toggle = () => {
    setDownloaded(true)
  }

  return (

    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear', duration: 1 }}
    >
      <Head>
        <title>Ash Bridges | Web Developer</title>
        <meta name="description" content="Web Developer, designer, fella with a keyboard. Check out my works and thanks for stopping by!" />
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
      <AnimatePresence>
        <Hero
          key="hero"
          offsetY={offsetY}
          toggle={toggle}
          downloaded={downloaded}
        />
        <About 
        offsetY={offsetY} 
        key="about"
        />
        <Projects 
        offsetY={offsetY} 
        key="projects"
        />
        <Skills
         offsetY={offsetY}
         key="skills" 
         />
        <Contact
         offsetY={offsetY}
         key="contact"
          />
        <Footer
          key="footer"
          toggle={toggle}
          downloaded={downloaded}
          offsetY={offsetY}
        />
      </AnimatePresence>
    </motion.div >
  )
}
