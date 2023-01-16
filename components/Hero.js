import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { TiTick } from 'react-icons/Ti'
import { RiDownloadCloud2Fill } from 'react-icons/Ri'

function Home() {
    const [downloaded, setDownloaded] = useState(false);

    const toggle = () => {
        const download = document.querySelector('.download__btn');
        download.classList.add('clicked');
        setDownloaded(true)
    }

    useEffect(() => {
        const download = document.querySelector('.download__btn');
        const downloadMorph = () => {
            download.classList.toggle('active', window.scrollY > 500);
        }

        window.addEventListener("scroll", downloadMorph);
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
                    <h1>I'm Ash.</h1>
                </div>
                <div className="swipe__text secondary" >
                    <h3>A <span>freelance web developer</span> from the UK!</h3>
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
                                <a className="download link" href="cv/Ash-Bridges-CV.pdf" onClick={toggle} target="_blank">
                                    <RiDownloadCloud2Fill className="icon"/>
                                </a>
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="link downloaded">
                                <TiTick className="icon"/>
                            </button>
                            <h2>Got it!</h2>
                        </>
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
