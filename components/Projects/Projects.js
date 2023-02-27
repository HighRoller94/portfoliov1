import React, { useState } from 'react';
import { AnimatePresence, wait } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

import ProjectsStyles from '../../styles/components/Projects.module.scss';

import Modal from './Project/Modal';
import Header from '../Header'
import { ProjectsContent } from './ProjectsContent';
import Project from './Project/Project';

function Projects() {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalData, setModalData] = useState(null)

    const handleModal = () => {
        setModalOpen(!modalOpen)
    }

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <div ref={ref} className={ProjectsStyles.projectsSection} data-scroll-section id="projects">
        <div className={ProjectsStyles.projectsTitle}>
            <Header 
                pre=".02"
                heading="Things I've built."
                id="projectsTitle"
                // sub="Check out some of the"
                // highlighted="projects I've worked on."
            />
            <p>Check out some of the <span>projects I've worked on.</span></p>
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
 
            {/* <div className="moreProjects">
                <div className="arrow left">
                    <span className="shaft"></span>
                </div>
                <div className="main">
                    <span>Explore More</span>
                    <div className="arrow right">
                        <span className="shaft"></span>
                    </div>
                </div>
            </div> */}
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
