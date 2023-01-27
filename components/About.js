import React from 'react';
import Image from 'next/image'

import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

import AboutStyles from '../styles/components/About.module.scss';

import me from '../images/me.svg';
import AnimatedText from "./AnimatedText";

function About({ offsetY }) {

    const placeholderText = [
        { type: "heading", text: "A little about me." }
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.03
            }
        }
    };
    
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
                variants={container}
                >
                <span>.01</span>
                <h2 className={AboutStyles.aboutTitle}>
                    A little about me.
                    {/* {placeholderText.map((item, index) => {
                        return <AnimatedText {...item} key={index} />;
                    })} */}
                </h2>
                </motion.div>
                <div className={AboutStyles.aboutText}>
                    <p>
                        Hey there, I'm Ash, a <span>front-end developer</span> from the UK. I have a background in visual communications, and have since turned to web development, where I quickly found a passion I didnt know was there! <br /><br />Always eager to learn new skills, I enjoy spending my time learning <span>new ways to bring designs to life</span> and helping businesses make their mark on the web. Feel free to browse over my work, and thanks for stopping by!
                    </p>
                    <div className={AboutStyles.aboutImage}  >
                        <Image
                            fill
                            src={me}
                            alt="Ash Bridges"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
