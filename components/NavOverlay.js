import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useRunOnce from "./useRunOnce.js";
import Image from 'next/image'

import { ImGithub } from 'react-icons/im';
import { FaLinkedin } from 'react-icons/fa';

import logoFill from '../images/logoFill.svg';
import logo from '../images/logo.svg';

import Link from 'next/link'
import { Link as Scroll } from 'react-scroll';

function NavOverlay() {
    const [downloaded, setDownloaded] = useState(false);
    const [show, setShow] = useState();

    // useRunOnce({
    //     fn: () => {
    //       // This will not rerun when reloading the page.
    //       setAnimate(false)
    //     },
    //     // Try to change this key.
    //     sessionKey: "changeMeAndFnWillRerun"
    //   });

    const toggle = () => {
        setDownloaded(true)
    }

    let seen;

    const count = () => {
        var numberOfVisits = sessionStorage.getItem("numberOfVisits");
        numberOfVisits = +numberOfVisits + 1; 

        if (numberOfVisits == null) {
            
        } 
        
        sessionStorage.setItem("numberOfVisits", numberOfVisits);
        console.log(numberOfVisits);
        if (numberOfVisits == 1) {
            console.log('SHOW')
            seen = true;
            console.log(seen)
        } else {
            console.log('HIDE')
            seen = false;
            console.log(seen)
        }
    }

    useEffect(() => {

        // PROCESS SCROLLBAR
        
        let processScroll = () => {
            let docElement = document.documentElement,
                docBody = document.body,
                scrollTop = docElement['scrollTop'] || docBody['scrollTop'],
                scrollBottom = (docElement['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
                scrollPercent = scrollTop / scrollBottom * 100 + '%';
                // console.log(scrollPercent)
                const bar = document.getElementById('progressBar')
                if (bar) {
                    bar.style.setProperty('--scrollAmount', scrollPercent)
                }
        }

        document.addEventListener('scroll', processScroll);
        
        // NAVBAR TOGGLES

        const menu = document.querySelector(".navbar__toggle");
        const navMenu = document.querySelector(".sidebar");
        
        menu.addEventListener("click", () => {
            menu.classList.toggle('active')
            navMenu.classList.toggle('active')
        })

        const links = document.querySelectorAll(".navbar__links");
        links.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove('active');
                menu.classList.toggle('active');
            })
        })

        const nav = document.querySelector('.navbar');
        let lastScrollY = window.scrollY;
        window.addEventListener("scroll", () => {
            if (lastScrollY < window.scrollY) {
                if (navMenu.classList.contains('active')) {
                    return;
                } else {
                    nav.classList.add('nav__hidden');
                }
            } else {
                nav.classList.remove('nav__hidden');
            }
            lastScrollY = window.scrollY;
        })
        
        const scrollNav = () => {
            if (window.scrollY > 10) {
                nav.classList.add('active')
            } else {
                nav.classList.remove('active')
            }
        }
        
        document.addEventListener('scroll', scrollNav);

    }, [])


    return (
        <motion.div className="overlay"
            animate={{ opacity: 1 }}
            initial={seen == false ? { opacity: 1 } : { opacity: 0 } }
            transition={{ delay: 2, duration: 1 }}>
            <div className="navbar">
                <div className="barContainer">
                    <div id="progressBar"></div>
                </div>
                <div className="navbar__container">
                    <Scroll to="home">
                        <div className="nav__logo focus">
                            <Image
                                className="focus"
                                src={logoFill}
                                fill
                                alt="Logo"
                            />
                        </div>
                    </Scroll>
                    <div className="sidebar">
                        <ul className="navbar__menu">
                            <li className="sidebar__name">
                                <h3>Ash Bridges</h3>
                                <h4>Web Developer</h4>
                            </li>
                            <motion.li 
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}} 
                                    transition={{ delay: 2, duration: 1 }} 
                                    className="navbar__item focus">
                                <Scroll to="about"><h1 className="navbar__links focus">About</h1></Scroll>
                            </motion.li>
                            <motion.li 
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}} 
                                    transition={{ delay: 2.25, duration: 1 }} 
                                    className="navbar__item focus">
                                <Scroll to="projects"><h1 className="navbar__links focus">Portfolio</h1></Scroll>
                            </motion.li>
                            <motion.li 
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}} 
                                    transition={{ delay: 2.5, duration: 1 }} 
                                    className="navbar__item focus">
                                <Scroll to="skills"><h1 className="navbar__links focus">Skills</h1></Scroll>
                            </motion.li>
                            <li className="mobile__contact focus">
                                <Link href="/contact"><button className="navbar__links">Contact</button></Link>
                            </li>
                            <div className="tab__toggle">
                            </div>
                            <div className="menu__socials">
                                <a className="link" href="https://www.linkedin.com/in/ash-bridges/" target="_blank" rel="noreferrer">
                                    <FaLinkedin className="li__icon" />
                                </a>
                                <a className="link" href="https://github.com/HighRoller94" target="_blank" rel="noreferrer">
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
                    <div className="nav__button__div focus">
                        <Link href="/contact">Say Hello</Link>
                    </div>
                </div>
            </div>
            <div className="download__cv">
                <p className="socials__header">Download my CV!</p>
                <span className="bar"></span>
                <div className="icon__container focus">
                    {downloaded ? (
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" id="Icon_material-done"  data-name="Icon material-done" d="M13.5,24.3,7.2,18,6.075,19.125,5.1,20.1l8.4,8.4,18-18L29.4,8.4Z" transform="translate(-5.1 -8.4)"/>
                    </svg> 
                    ) :  (
                        <a onClick={toggle} className="link" href="cv/Ash-Bridges-CV.pdf" download >
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" id="Icon_awesome-download" data-name="Icon awesome-download" d="M11.834,0h4.383a1.312,1.312,0,0,1,1.315,1.315v9.2h4.8a1.094,1.094,0,0,1,.772,1.868l-8.333,8.338a1.061,1.061,0,0,1-1.5,0L4.936,12.387a1.094,1.094,0,0,1,.772-1.868h4.81v-9.2A1.312,1.312,0,0,1,11.834,0ZM28.05,20.6v6.136a1.312,1.312,0,0,1-1.315,1.315H1.315A1.312,1.312,0,0,1,0,26.735V20.6a1.312,1.312,0,0,1,1.315-1.315H9.352l2.684,2.684a2.807,2.807,0,0,0,3.977,0L18.7,19.284h8.037A1.312,1.312,0,0,1,28.05,20.6ZM21.256,25.42a1.1,1.1,0,1,0-1.1,1.1A1.1,1.1,0,0,0,21.256,25.42Zm3.506,0a1.1,1.1,0,1,0-1.1,1.1A1.1,1.1,0,0,0,24.763,25.42Z"/>
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default NavOverlay
