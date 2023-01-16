import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { ImGithub } from 'react-icons/Im';
import { FaLinkedin } from 'react-icons/Fa';
import { BsArrowLeftShort } from 'react-icons/Bs'
import Link from 'next/link'


function AltNavOverlay() {

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
                            <li className="mobile__contact focus">
                                <pageLink to="contact"><button className="navbar__links">Contact</button></pageLink>
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
            <div className="socials" >
                    <motion.a 
                            className="link" href="https://www.linkedin.com/in/ash-bridges/" target="_blank" rel="noreferrer" >
                        <FaLinkedin className="linked__icon focus" />
                    </motion.a>
                    <motion.a
                            className="link" href="https://github.com/HighRoller94" target="_blank" rel="noreferrer" >
                        <ImGithub className="git__icon focus" />
                    </motion.a>
                    <motion.svg initial="hidden" animate="visible" xmlns="http://www.w3.org/2000/svg" width="2" height="229.494" viewBox="0 0 2 229.494">
                        <motion.path id="Path_48" data-name="Path 48" d="M14904.395,1586.325V1356.831" transform="translate(-14903.395 -1356.831)" fill="currentColor" stroke="currentColor" strokeWidth="3"/>
                    </motion.svg>
            </div>
        </motion.div>
    )
}

export default AltNavOverlay
