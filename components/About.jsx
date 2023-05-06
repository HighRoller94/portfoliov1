import React from 'react';
import Image from 'next/image'

import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

import AboutStyles from '../styles/components/About.module.scss';

import me from '../images/me.svg';
import Header from './Header'

function About({ offsetY }) {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.475
    });

    return (
        <div className={AboutStyles.aboutSection}>
            <div ref={ref} className={AboutStyles.aboutContainer} data-scroll-section id="about" >
                <Header 
                    pre=".01"
                    heading="A little about me."
                    id="aboutTitle"
                />
                <div className={AboutStyles.aboutText}>
                    <motion.p 
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}} 
                    transition={{ duration: 1 }}>
                        Hi, I'm Ash! A <span>web developer</span> and <span>designer</span> based in Kent. I have a background in visual communications, and have since turned to web development, combining my creative experience with my more technical interests!<br /><br />Always eager to learn new skills, I enjoy spending my time learning <span>new ways to bring designs to life</span> and helping people make their mark on the web. Feel free to browse over my work, and thanks for stopping by!
                    </motion.p>
                    <div className={AboutStyles.box}>
                        <div className={AboutStyles.aboutImage}>
                            <Image
                                fill
                                src={me}
                                alt="Ash Bridges"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
