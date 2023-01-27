import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { TiTick } from 'react-icons/Ti'


function Home({ offsetY, toggle, downloaded }) {

    useEffect(() => {
        const download = document.querySelector('.download__btn');

        const downloadMorph = () => {
            if (window.scrollY > 500) {
                download.style.opacity = '0';
            } else {
                download.style.opacity = '1';
            }
        }

        window.addEventListener("scroll", downloadMorph);


    }, []);

    return (
        <div className="hero__section" data-scroll-section id="home">
            <div className="hero__text">
                <motion.h2 initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0, duration: .5 }}>
                    Hey,
                </motion.h2>
                <div className="swipe__text">
                    <h1>I'm Ash.</h1>
                </div>
                <div className="swipe__text secondary" >
                    <h3>A <span>web developer</span> based in Kent.</h3>
                </div>
                <motion.div
                    className="download__btn fade focus"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}>
                    {!downloaded ? (
                        <>
                            <button className="link">
                                <a className="span link" href="cv/Ash-Bridges-CV.pdf" onClick={toggle} target="_blank">
                                    Download CV
                                </a>
                            </button>
                        </>
                    ) : (
                        <div className="downloaded">
                            <button className="link">
                                <TiTick className="icon" />
                            </button>
                            <h2>Got it!</h2>
                        </div>

                    )}

                </motion.div>
                <motion.div
                    className="scroll__btn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}>
                    <div className="mouse">
                        <div className="scroller"></div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Home
