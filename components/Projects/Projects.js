import React, { useEffect, useState } from 'react';
import { AnimatePresence, wait, motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';

import ProjectsStyles from '../../styles/components/Projects.module.scss';

import Modal from './Project/Modal';
import AnimatedText from "../AnimatedText";
import { ProjectsContent } from './ProjectsContent';
import Project from './Project/Project';

function Projects() {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalData, setModalData] = useState(null)

    const handleModal = () => {
        setModalOpen(!modalOpen)
    }

    const placeholderText = [
        { type: "heading", text: "Things I've built." }
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.03
            }
        }
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <div ref={ref} className={ProjectsStyles.projectsSection} data-scroll-section id="projects">
        <div className={ProjectsStyles.projectsTitle}>
            <span>.02</span>
            <motion.h2 
                className={ProjectsStyles.projectsHeader}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={container}
            >
                Things I've built.
                {/* {placeholderText.map((item, index) => {
                        return <AnimatedText {...item} key={index} />;
                })} */}
                
            </motion.h2>
            <p>Check out some of the <span>projects I've been working on.</span></p>
        </div>
        
        <div className={ProjectsStyles.projects}>
            {ProjectsContent.map((project, index) => (
                <Project 
                    key={index}
                    data={project}
                    title={project.title}
                    type={project.type}
                    desc={project.desc}
                    inView = {inView}
                    image={project.image}
                    gitLink={project.gitLink}
                    siteLink={project.siteLink}
                    languages={project.languages}
                    handleModal={handleModal}
                    setModalData={setModalData}
                />
            ))}
        </div>
        <AnimatePresence
            initial={false}
            mode={wait}
            onExitComplet={() => null}
        >
            {modalOpen && 
            <Modal 
                modalOpen={modalOpen}
                handleModal={handleModal}
                title={modalData.title}
                type={modalData.type}
                desc={modalData.desc}
                longerDesc={modalData.longerDesc}
                image={modalData.image}
                gallery={modalData.gallery}
                gitLink={modalData.gitLink}
                siteLink={modalData.siteLink}
                languages={modalData.languages}
            />}
        </AnimatePresence>
        </div>
    )
}

export default Projects
