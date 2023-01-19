import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

import BackgroundAnimation from '../components/Background'
import AltNavOverlay from '../components/AltNavOverlay'
import Contact from '../components/Contact'
import Footer from '../components/Footer';

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
}

export default function ContactPage() {

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear', duration: 1 }}
        >
            <AltNavOverlay />
            <Contact />
            <Footer />
        </motion.div>
    )
}