import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { ImGithub } from 'react-icons/Im';
import { FaLinkedin } from 'react-icons/Fa';

import { BsArrowLeftShort } from 'react-icons/Bs'
import Link from 'next/link'

import AltNavOverlayStyles from '../styles/components/AltNavOverlay.module.scss';

function AltNavOverlay() {

    useEffect(() => {
        const nav = document.querySelector('.navbar');
        const navMenu = document.querySelector(".sidebar");
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
    }, [])

    return (
        <motion.div className="overlay"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            viewport={{ once: true }}
            >
            <div className="navbar active alt">
                <div className="navbar__container">
                    <Link href="/">
                        <BsArrowLeftShort className="backIcon focus" />
                    </Link>
                    <div className="sidebar">
                        <ul className="navbar__menu">
                            <li className="sidebar__name">
                                <h3>Ash Bridges</h3>
                                <h4>Web Developer</h4>
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
                </div>
            </div>
        </motion.div>
    )
}

export default AltNavOverlay
