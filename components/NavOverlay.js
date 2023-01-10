import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { ImGithub } from 'react-icons/Im';
import { FaLinkedin } from 'react-icons/Fa';

import { Link } from 'react-scroll';

function NavOverlay() {
    const [downloaded, setDownloaded] = useState(false);

    const toggle = () => {
        setDownloaded(true)
    }

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 1,
                delay: 3,
                ease: "easeInOut"
            }
        }
    }

    useEffect(() => {
        const menu = document.querySelector(".navbar__toggle");
        const navMenu = document.querySelector(".sidebar");
        
        menu.addEventListener("click", () => {
            menu.classList.toggle('active')
            navMenu.classList.toggle('active')
        })

        const homeLink = document.querySelector(".nav__logo");
        homeLink.addEventListener("click", () => {
            navMenu.classList.remove('active');
            menu.classList.toggle('active');
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
        
        window.addEventListener("scroll", scrollNav);
    }, [])

    return (
        <motion.div className="overlay"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ delay: 2.75, duration: 1 }}>
            <div className="navbar">
                <div className="navbar__container">
                    <Link to="home">
                        <svg id="Layer_1"  className="nav__logo focus" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251.01 229.13">
                            <path d="M269.51,265.91h26.37L295,415.25H273.46l.2-62.7-49.05.26L197.7,382.64l-27.23-.17Zm4.14,70.25,2.74-47.36-40.11,46.53Z" transform="translate(-167.64 -233.05)" fill="currentColor"/>
                            <path d="M307.68,265.91h60.13c15.42,0,25.27,5.45,31.78,15.48,3.83,5.92,6.14,15.18,6.14,22.93,0,9.05-2,18.11-6.66,23.9-2.44,3.06-4.69,4.93-9.26,7.47,6.71,2.8,10.1,5.25,13.43,8.77q8.82,9.38,8.81,25.88c0,9.24-1.93,19.82-7.25,27.31-7.94,11.2-21.44,17.6-38.77,17.6H307.68Zm52.79,63.51q11.34,0,17.64-3.42,9.9-5.37,9.9-19.34t-10.53-18.94Q371.54,285,359.84,285H327.9v44.44Zm7.54,64c11,0,16-4.09,20-9,2.94-4.36,3.74-8,3.74-14.19,0-10.42-3-16.58-11.61-20.36-4.55-2-9.38-2.29-16.88-2.29h-33l.26,45.81Z" transform="translate(-167.64 -233.05)" fill="currentColor"/><rect width="251.01" height="229.13" fill="none"/>
                        </svg>                    
                    </Link>
                    <div className="sidebar">
                        <ul className="navbar__menu">
                            <li className="sidebar__name">
                                <h3>Ash Bridges</h3>
                                <h4>Web Developer</h4>
                            </li>
                            <motion.li 
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}} 
                                    transition={{ delay: 3, duration: 1 }} 
                                    className="navbar__item focus">
                                <Link to="about"><h1 className="navbar__links focus">About</h1></Link>
                            </motion.li>
                            <motion.li 
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}} 
                                    transition={{ delay: 3.25, duration: 1 }} 
                                    className="navbar__item focus">
                                <Link to="projects"><h1 className="navbar__links focus">Portfolio</h1></Link>
                            </motion.li>
                            <motion.li 
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}} 
                                    transition={{ delay: 3.5, duration: 1 }} 
                                    className="navbar__item focus">
                                <Link to="skills"><h1 className="navbar__links focus">Skills</h1></Link>
                            </motion.li>
                            <li className="mobile__contact focus">
                                <Link to="contact"><button className="navbar__links">Contact</button></Link>
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
                        <Link to="contact"><h1>CONTACT</h1></Link>
                    </div>
                </div>
            </div>
            <div className="socials" >
                    <motion.a 
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}} 
                            transition={{ delay: 4.75, duration: 1 }}  
                            className="link" href="https://www.linkedin.com/in/ash-bridges/" target="_blank" rel="noreferrer" >
                        <FaLinkedin className="linked__icon focus" />
                    </motion.a>
                    <motion.a
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}} 
                            transition={{ delay: 4.5, duration: 1 }} 
                            className="link" href="https://github.com/HighRoller94" target="_blank" rel="noreferrer" >
                        <ImGithub className="git__icon focus" />
                    </motion.a>
                    <motion.svg initial="hidden" animate="visible" xmlns="http://www.w3.org/2000/svg" width="2" height="229.494" viewBox="0 0 2 229.494">
                        <motion.path variants={pathVariants} id="Path_48" data-name="Path 48" d="M14904.395,1586.325V1356.831" transform="translate(-14903.395 -1356.831)" fill="currentColor" stroke="currentColor" stroke-width="3"/>
                    </motion.svg>
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
