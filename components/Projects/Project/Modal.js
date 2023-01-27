import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'

import ModalStyles from '../../../styles/components/Modal.module.scss';

import { ImGithub } from 'react-icons/im';
import { BiWorld } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

function Modal({ modalOpen, handleModal, title, type, longerDesc, gallery, gitLink, siteLink }) {
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

    useEffect(() => {

        const cursor = document.querySelector(".cursor");

        console.log(modalOpen)
        if (modalOpen === true) {
            const carouselFocus = document.querySelectorAll(".carouselImage")
            carouselFocus.forEach(carousel => {
                carousel.addEventListener('mouseover', () => {
                    cursor.classList.add('carouselFocus')
                    cursor.innerHTML = '<span>DRAG</span>'

                })
                carousel.addEventListener('mouseleave', () => {
                    cursor.classList.remove('carouselFocus')
                    cursor.innerHTML = ''
                })
                
            })
        } else {
            cursor.classList.remove('carouselFocus')
        }
    }, [handleModal])

    return (
        <>
            <motion.div
                onClick={handleModal}
                className={ModalStyles.modalBackdrop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}

            >
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className={ModalStyles.modal}
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className={ModalStyles.modalClose} onClick={handleModal} >
                        <MdClose className={ModalStyles.modalCloseIcon} />
                    </div>
                    <Carousel slides={gallery} />
                    <div className={ModalStyles.modalContent}>
                        <h4>{type}</h4>
                        <h2>{title}</h2>
                        <p>{longerDesc}</p>
                        <div className={ModalStyles.btns}>
                            <a className="link" href={siteLink} target="_blank" rel="noreferrer">
                                <button className={`${ModalStyles.siteBtn} focus`}>
                                    <BiWorld className={ModalStyles.icon} />
                                    Live Site
                                </button>
                            </a>
                            <a className="link" href={gitLink} target="_blank" rel="noreferrer">
                                <button className={`${ModalStyles.gitBtn} focus`}>
                                    <ImGithub className={ModalStyles.icon} />
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>

                </motion.div>
            </motion.div>

        </>
    )
}

export default Modal