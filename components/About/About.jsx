"use client"

import React, { useEffect } from "react";
import Image from "next/image";

import SplitType from "split-type";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/dist/all";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import AboutStyles from "./About.module.scss";

import me from "../../images/me.svg";
import Header from "../Header";

function About() {

  useEffect(() => {
    const splitTypes = document.querySelectorAll(".reveal-text");
    gsap.registerPlugin(ScrollTrigger);
    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, {
        types: "words",
      });
      gsap.from(text.words, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  }, []);

  return (
    <div className={AboutStyles.aboutSection}>
      <div
        className={AboutStyles.aboutContainer}
        data-scroll-section
        id="about"
      >
        <Header pre=".01" heading="A little about me." id="aboutTitle" />
        <div className={AboutStyles.aboutText}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="reveal-text"
          >
            Hi, I'm Ash! A <span>web developer</span> and <span>creative</span>{" "}
            based in Kent. I have a background in visual communications, and
            have since turned to web development, combining my creative
            experience with my more technical interests!
            <br />
            <br />
            Always eager to learn new skills, I enjoy spending my time learning{" "}
            <span>new ways to bring designs to life</span> and helping people
            make their mark on the web. Feel free to browse over my work, and
            thanks for stopping by!
          </motion.p>
          <div className={AboutStyles.box}>
            <div className={AboutStyles.aboutImage}>
              <Image fill src={me} alt="Ash Bridges" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
