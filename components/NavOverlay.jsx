import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Magnetic from "./Magnetic/index.jsx";

import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";


import { Link as Scroll } from "react-scroll";

function NavOverlay() {
  const [downloaded, setDownloaded] = useState(false);
  const [show, setShow] = useState();

  useEffect(() => {
    // PROCESS SCROLLBAR

    let processScroll = () => {
      let docElement = document.documentElement,
        docBody = document.body,
        scrollTop = docElement["scrollTop"] || docBody["scrollTop"],
        scrollBottom =
          (docElement["scrollHeight"] || docBody["scrollHeight"]) -
          window.innerHeight,
        scrollPercent = (scrollTop / scrollBottom) * 100 + "%";
      // console.log(scrollPercent)
      const bar = document.getElementById("progressBar");
      if (bar) {
        bar.style.setProperty("--scrollAmount", scrollPercent);
      }
    };

    document.addEventListener("scroll", processScroll);

    // NAVBAR TOGGLES

    const menu = document.querySelector(".navbar__toggle");
    const navMenu = document.querySelector(".sidebar");

    menu.addEventListener("click", () => {
      menu.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    const links = document.querySelectorAll(".navbar__links");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menu.classList.toggle("active");
      });
    });

    const nav = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        if (navMenu.classList.contains("active")) {
          return;
        } else {
          nav.classList.add("nav__hidden");
        }
      } else {
        nav.classList.remove("nav__hidden");
      }
      lastScrollY = window.scrollY;
    });

    const scrollNav = () => {
      if (window.scrollY > 10) {
        nav.classList.add("active");
      } else {
        nav.classList.remove("active");
      }
    };

    document.addEventListener("scroll", scrollNav);
  }, []);

  return (
    <motion.div
      className="overlay"
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <div className="navbar">
        <div className="barContainer">
          <div id="progressBar"></div>
        </div>
        <div className="navbar__container">
          <Scroll to="home" className="homeLink">
            <motion.div
              className="nav__logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <Image src='/logoFill.svg' fill alt="Logo" />
            </motion.div>
          </Scroll>
          <div className="sidebar">
            <ul className="navbar__menu">
              <li className="sidebar__name">
                <h3>Ash Bridges</h3>
                <h4>Web Developer</h4>
              </li>
              <Magnetic>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                  className="navbar__item interactive"
                >
                  <Scroll
                    smooth
                    spy
                    activeClass="activeNavLink"
                    to="about"
                    offset={-70}
                  >
                    <h1 className="navbar__links">About</h1>
                  </Scroll>
                </motion.li>
              </Magnetic>
              <Magnetic>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.25, duration: 1 }}
                  className="navbar__item interactive"
                >
                  <Scroll
                    smooth
                    spy
                    activeClass="activeNavLink"
                    to="projects"
                    offset={-30}
                  >
                    <h1 className="navbar__links">Portfolio</h1>
                  </Scroll>
                </motion.li>
              </Magnetic>
              <Magnetic>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5, duration: 1 }}
                  className="navbar__item interactive"
                >
                  <Scroll
                    smooth
                    spy
                    activeClass="activeNavLink"
                    to="skills"
                    offset={-25}
                  >
                    <h1 className="navbar__links">Skills</h1>
                  </Scroll>
                </motion.li>
              </Magnetic>
              <li className="mobile__contact">
                <Scroll smooth spy activeClass="activeNavLink" to="contact">
                  <button className="navbar__links interactive">Contact</button>
                </Scroll>
              </li>
              <div className="tab__toggle"></div>
              <div className="menu__socials">
                <a
                  className="link"
                  href="https://www.linkedin.com/in/ash-bridges/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="li__icon" />
                </a>
                <a
                  className="link"
                  href="https://github.com/HighRoller94"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImGithub className="gh__icon" />
                </a>
              </div>
            </ul>
          </div>
          <div className="mobile__toggles">
            <div className="navbar__toggle focus">
              <span className="bar half start"></span>
              <span className="bar"></span>
              <span className="bar half end"></span>
            </div>
          </div>
          <motion.div
            className="nav__button__div interactive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Scroll to="contact">
              <FiMessageCircle fill="white" className="contactIcon" size={24} />
              <span>Say Hello</span>
            </Scroll>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default NavOverlay;
