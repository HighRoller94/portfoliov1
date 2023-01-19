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

import { AnimatePresence } from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Home() {

  return (

    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear', duration: 1 }}
    >
      <Head>
        <title>Ash Bridges | Front End Developer</title>
        <meta name="description" content="Ash Bridges Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavOverlay />
      <Hero />

      <About />
      <Projects />
      <Skills />
      <GetInTouch />
      <Footer />
    </motion.div>
  )
}
