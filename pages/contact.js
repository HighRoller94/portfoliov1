import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

import BackgroundAnimation from '../components/BackgroundAnimation'
import AltNavOverlay from '../components/AltNavOverlay'
import Contact from '../components/Contact'

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
}

export default function ContactPage() {

    useEffect(() => {

        const cursor = document.querySelector(".cursor");
        const focus = document.querySelectorAll(".focus")
        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: " + (e.clientY - 15) + "px; left: " + (e.clientX - 15) + "px;")
        });
        focus.forEach(link => {
            link.addEventListener('mouseover', () => {
                cursor.classList.add('link-focus')
            })
            link.addEventListener('mouseleave', () => {
                cursor.classList.remove('link-focus')
            })
        })
    });

    return (
        <motion.div
        variants={variants} 
        initial="hidden"
        animate="enter" 
        exit="exit" 
        transition={{ type: 'linear' }}
        >
            <div className="cursor"></div>
            <div className="border"></div>
            <BackgroundAnimation />
            <AltNavOverlay />
            <Contact />
        </motion.div>
    )
}