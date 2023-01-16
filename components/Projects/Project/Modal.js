import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'

function Modal({ handleModal, title, type, desc, image, gallery, gitLink, siteLink }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const dropIn = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2,
            }
        },
        exit: {
            opacity: 0,
        },
    };

    return (
        <>
            <motion.div
                onClick={handleModal}
                className="modalBackdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}

            >
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="modal"
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                <Carousel  slides={gallery}/>
                <h4>{type}</h4>
                <h2>{title}</h2>
                <p>{desc}</p>
                </motion.div>
            </motion.div>

        </>
    )
}

export default Modal