import React, { useEffect } from 'react';
import { motion } from 'framer-motion'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import { Link } from 'react-scroll';

function Home({ offsetY, toggle, downloaded }) {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
        }, false);
    })
    return (
        <div className="hero__section" data-scroll-section id="home">
            <div className="hero__text">
                <motion.h2 initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0, duration: .5 }}>
                    Hey,
                </motion.h2>
                <div className="swipe__text">
                    <h1 data-value="I'm Ash." id="heroTitle">I'm Ash!</h1>
                </div>
                <div 
                className="swipe__text secondary"

                >
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
                    className="arrow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}>
                        <span className="shaft">
                            <div className="head">
                                <span></span>
                                <span></span>
                            </div>
                        </span>
                        
                    {/* <div className="mouse">
                        <div className="scroller"></div>
                    </div> */}
                </motion.div>

            </div>
        </div>
    )
}

export default Home
