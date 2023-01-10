import React, { useEffect, useRef } from 'react';

import Head from 'next/head'

import NavOverlay from '../components/NavOverlay'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {

  useEffect(() => {

    const cursor = document.querySelector(".cursor");
    const focus = document.querySelectorAll(".focus")
    document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.clientY - 15)+"px; left: "+(e.clientX - 15)+"px;")
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
    <div>
      <Head>
        <title>Ash Bridges | Front End Developer</title>
        <meta name="description" content="Ash Bridges Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="cursor"></div>
      <div className="border"></div>
    <NavOverlay />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    </div>
  )
}
