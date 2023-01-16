import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

import Head from 'next/head'
import BackgroundAnimation from '../components/BackgroundAnimation'
import NavOverlay from '../components/NavOverlay'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Home() {

  useEffect(() => {

    const cursor = document.querySelector(".cursor");
    const focus = document.querySelectorAll(".focus")
    document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: " + (e.clientY - 15) + "px; left: " + (e.clientX - 15) + "px;")
    });
    focus.forEach(link => {
      link.addEventListener('mouseover', () => {
        cursor.classList.add('link-focus')
      })
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('link-focus')
      })
    })
  });

  return (
    <motion.div
      variants={variants} 
      initial="hidden"
      animate="enter" 
      exit="exit" 
      transition={{ type: 'linear' }}
    >
      <Head>
        <title>Ash Bridges | Front End Developer</title>
        <meta name="description" content="Ash Bridges Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="cursor"></div>
      <div className="border"></div>
      <BackgroundAnimation />
      <NavOverlay />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </motion.div>
  )
}
