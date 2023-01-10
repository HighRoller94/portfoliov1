import React, { useEffect } from 'react';

import { ProjectsContent } from './ProjectsContent';
import Project from './Project';

function Projects() {
    return (
        <div className="projects__section" data-scroll-section id="projects">
        <div className="projects__header" data-aos="fade-right" data-aos-offset="0" >
            <h1 data-aos="fade-right" data-aos-offset="-100">Main portfolio</h1>
            <p data-aos="fade-right" data-aos-offset="-100">Check out some of the <span>projects I've been working on</span> recently!</p>
        </div>
            {ProjectsContent.map((project, key) => (
                <Project 
                    key={key}
                    title={project.title}
                    type={project.type}
                    desc={project.desc}
                    image={project.image}
                    gitLink={project.gitLink}
                    siteLink={project.siteLink}
                    languages={project.languages}
                />
            ))}
        </div>
    )
}

export default Projects
