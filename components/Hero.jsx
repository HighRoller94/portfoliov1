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
            <div className="hero__text" style={{ transform: `translateY(${offsetY * -0.1}px)`}}>
                <motion.h2 initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0, duration: .5 }}>
                    Hey there, I'm Ash.
                </motion.h2>
                <div className="swipe__text">
                    <h1 data-value="I'm Ash." id="heroTitle">I'm a freelance <span>web developer</span> and <span>designer</span> based in Kent.</h1>
                </div>
                <motion.div
                    className="btn fade focus"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}>
                    <Link to="projects">
                        View Works
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
