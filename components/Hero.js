import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { TiTick } from 'react-icons/ti'
import Image from 'next/image'
import { Link } from 'react-scroll';
import blob from '../images/blob.svg';

function Home({ offsetY, toggle, downloaded }) {

    // useEffect(() => {
    //     const download = document.querySelector('.download__btn');

    //     const downloadMorph = () => {
    //         if (window.scrollY > 500) {
    //             download.style.opacity = '0';
    //         } else {
    //             download.style.opacity = '1';
    //         }
    //     }

    //     window.addEventListener("scroll", downloadMorph);


    // }, []);

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
                    className="btn fade focus"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}>
                    <Link to="projects">
                        View Projects
                    </Link>
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
            {/* <div className="blobbieHolder">
                <Image
                    className="blobbie"
                    fill
                    src={blob}
                    alt="Ash Bridges"
                />
            </div> */}
        </div>
    )
}

export default Home
