import React, { useEffect } from 'react';
import Image from 'next/image'

import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

import AboutStyles from '../styles/components/About.module.scss';

import me from '../images/me.svg';
import AnimatedText from "./AnimatedText";

function About({ offsetY }) {

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    useEffect(() => {
        document.querySelector('#aboutTitle').onmouseover = e => {
            let iteration = 0;
            clearInterval(interval);

            interval = setInterval(() => {
                e.target.innerText = e.target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                    return e.target.dataset.value[index];
                    }
                
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
                
                if(iteration >= e.target.dataset.value.length){ 
                clearInterval(interval);
                }
                
                iteration += 1 / 3;
            }, 10);
        }   
    })

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.475
    });

    return (
        <div className={AboutStyles.aboutSection} data-scroll-section id="about">
            <div ref={ref} className={AboutStyles.aboutContainer} >
                
                <motion.div className={AboutStyles.aboutHeader}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                >
                <span>.01</span>
                <h2 data-value="A little about me." id="aboutTitle" className={AboutStyles.aboutTitle}>
                    A little about me.
                    {/* {placeholderText.map((item, index) => {
                        return <AnimatedText {...item} key={index} />;
                    })} */}
                </h2>
                </motion.div>
                <div className={AboutStyles.aboutText}>
                    <motion.p 
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}} 
                    transition={{ duration: 1 }}>
                        Hey there, I'm Ash, a <span>web developer</span> from the UK. I have a background in visual communications, and have since turned to web development, combining my creative experience with my more technical interests.<br /><br />Always eager to learn new skills, I enjoy spending my time learning <span>new ways to bring designs to life</span> and helping people make their mark on the web. Feel free to browse over my work, and thanks for stopping by!
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
