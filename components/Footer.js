import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion';

import { RiDownloadCloud2Fill } from 'react-icons/Ri'
import { ImGithub } from 'react-icons/Im';
import { FaLinkedin } from 'react-icons/Fa';

function Footer({ toggle, downloaded }) {

    
    useEffect(() => {

        // OFFSET SOCIALS 

        var socialFloat = document.querySelector('.socials');
        var footer = document.querySelector('.footer__section');
        var downloadIcon = document.querySelector('.download')

        function checkOffset() {
            function getRectTop(el){
                var rect = el.getBoundingClientRect();
                return rect.top;
            }

            if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
                socialFloat.style.position = 'fixed'; // restore when you scroll up
                socialFloat.style.bottom = "0px"
                downloadIcon.style.position = 'fixed'; // restore when you scroll up
                downloadIcon.style.bottom = "100px"

            if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop - 5)) {
                socialFloat.style.position = 'absolute';
                socialFloat.style.bottom = "175px"
                downloadIcon.style.position = 'absolute';
                downloadIcon.style.bottom = "220px"
            }
        }

        document.addEventListener("scroll", function(){
            checkOffset();
        });

        
        const showDownload = () => {
            if (window.scrollY > 500) {
                downloadIcon.classList.add('show')
            } else {
                downloadIcon.classList.remove('show')
            }
        }
        
        document.addEventListener('scroll', showDownload);

    }, [])

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: .75,
                delay: 2,
                ease: "easeInOut"
            }
        }
    }

    return (
        <>

            <div className="footer__section">

                <div className="socials" >
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.25, duration: 1 }}
                        className="link" href="https://www.linkedin.com/in/ash-bridges/" target="_blank" rel="noreferrer" >
                        <FaLinkedin className="linked__icon focus" />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 1 }}
                        className="link" href="https://github.com/HighRoller94" target="_blank" rel="noreferrer" >
                        <ImGithub className="git__icon focus" />
                    </motion.a>
                    <motion.svg initial="hidden" animate="visible" xmlns="http://www.w3.org/2000/svg" width="2" height="210" viewBox="0 0 2 210">
                        <motion.path variants={pathVariants} id="Path_48" data-name="Path 48" d="M14904.395,1586.325V1356.831" transform="translate(-14903.395 -1356.831)" fill="currentColor" stroke="currentColor" strokeWidth="3" />
                    </motion.svg>
                </div>
                

                {!downloaded ? (
                        <>
                            <a className="download link" href="cv/Ash-Bridges-CV.pdf" onClick={toggle} target="_blank">
                                <RiDownloadCloud2Fill className="icon" />
                            </a>
                        </>
                    ) : (
                        <h2>Got it</h2>
                    )}
                <div>

                    <svg id="Layer_1" className="footer__logo2 focus" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251.01 229.13">
                        <path d="M269.51,265.91h26.37L295,415.25H273.46l.2-62.7-49.05.26L197.7,382.64l-27.23-.17Zm4.14,70.25,2.74-47.36-40.11,46.53Z" transform="translate(-167.64 -233.05)" fill="currentColor" />
                        <path d="M307.68,265.91h60.13c15.42,0,25.27,5.45,31.78,15.48,3.83,5.92,6.14,15.18,6.14,22.93,0,9.05-2,18.11-6.66,23.9-2.44,3.06-4.69,4.93-9.26,7.47,6.71,2.8,10.1,5.25,13.43,8.77q8.82,9.38,8.81,25.88c0,9.24-1.93,19.82-7.25,27.31-7.94,11.2-21.44,17.6-38.77,17.6H307.68Zm52.79,63.51q11.34,0,17.64-3.42,9.9-5.37,9.9-19.34t-10.53-18.94Q371.54,285,359.84,285H327.9v44.44Zm7.54,64c11,0,16-4.09,20-9,2.94-4.36,3.74-8,3.74-14.19,0-10.42-3-16.58-11.61-20.36-4.55-2-9.38-2.29-16.88-2.29h-33l.26,45.81Z" transform="translate(-167.64 -233.05)" fill="currentColor" /><rect width="251.01" height="229.13" fill="none" />
                    </svg>

                </div>
                <div className="footer__icons">
                    <a data-aos="fade-up" className="link" href="https://www.linkedin.com/in/ash-bridges/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="li__icon" />
                    </a>
                    <a data-aos="fade-up" data-aos-delay="200" className="link" href="https://github.com/HighRoller94" target="_blank" rel="noreferrer">
                        <ImGithub className="gh__icon" />
                    </a>
                </div>
                <div className="footer__copyright ">
                    <p>Handcrafted by <span>Ash Bridges </span> &copy; 2022</p>
                </div>
            </div>
        </>

    )
}

export default Footer
