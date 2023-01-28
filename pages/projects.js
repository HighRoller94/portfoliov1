import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import AltNavOverlay from '../components/AltNavOverlay'

import Footer from '../components/Footer';

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
}

export default function ContactPage() {
    const [offsetY, setOffSetY]  = useState()
  
    const handleScroll = () => setOffSetY(window.pageYOffset);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, [])
      
    return (
        <>
            <Head>
                <title>Ash Bridges | Projects</title>
                <meta 
                    name="description" 
                    content="Got an idea for a project? Get in touch!" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/logoFill.svg" />
            </Head>

            <AnimatePresence>
                <motion.div
                    className="projectPage"
                    key="project"
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ type: 'linear', duration: 1 }}
                >
                    <AltNavOverlay />

                    <Footer />
                </motion.div>
            </AnimatePresence>
        </>
    )
}