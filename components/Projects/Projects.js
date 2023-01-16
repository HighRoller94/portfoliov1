import React, { useEffect, useState } from 'react';
import { AnimatePresence, wait} from 'framer-motion'
import Modal from './Project/Modal';

import { ProjectsContent } from './ProjectsContent';
import Project from './Project/Project';

function Projects() {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalData, setModalData] = useState(null)

    const handleModal = () => {
        setModalOpen(!modalOpen)
        
    }

    return (
        <div className="projects__section" data-scroll-section id="projects">
        <div className="projects__header" data-aos="fade-right" data-aos-offset="0" >
            <h1 data-aos="fade-right" data-aos-offset="-100">Main portfolio.</h1>
            <p data-aos="fade-right" data-aos-offset="-100">Check out some of the <span>projects I've been working on...</span></p>
        </div>
        <div className="projects">
            {ProjectsContent.map((project, index) => (
                <Project 
                    key={index}
                    data={project}
                    title={project.title}
                    type={project.type}
                    desc={project.desc}
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
                open={modalOpen}
                handleModal={handleModal}
                title={modalData.title}
                type={modalData.type}
                desc={modalData.desc}
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
