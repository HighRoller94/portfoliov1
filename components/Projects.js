import React, { useEffect } from 'react';

import { ImGithub } from 'react-icons/Im';
import { GrLanguage } from 'react-icons/Gr';

import { ProjectsContent } from './ProjectsContent';
import Project from './Project';

import eatz from '../images/projects/eatz.svg';
import marquet from '../images/projects/marquet.png';
import pyre from '../images/projects/pyre.png';
import illume from '../images/projects/illume.svg'


function Projects() {
    console.log(ProjectsContent)
    return (
        <div className="projects__section" data-scroll-section id="projects">
        <div className="projects__header" data-aos="fade-right" data-aos-offset="0" >
            <h1 data-aos="fade-right" data-aos-offset="-100">Main portfolio</h1>
            <p data-aos="fade-right" data-aos-offset="-100">Check out some of the <span>projects I've been working on</span> recently!</p>
        </div>
        <div className="projects">
            {/* <div className="travair project" data-aos="fade-up">
                <img data-aos="fade-up" src={travair} alt="Travel" />
                <div data-aos="fade-up" data-aos-delay="200" className="project__text">
                    <h4>WEBSITE</h4>
                    <h1>Travel Site</h1>
                    <p>Travair is a <span> responsive single page </span> travel website built with HTML, SASS and JS.</p>
                    <div className="project__languages">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                    </div>
                    <div className="btns">
                        <a className="link" href="https://prestige-travel-cf76a.web.app/" target="_blank" rel="noreferrer">
                            <button className="site__btn focus">
                                <LanguageIcon className="icon"/>
                                Live Site
                            </button>
                        </a>
                        <a className="link" href="https://github.com/HighRoller94/travel-landing" target="_blank" rel="noreferrer">
                            <button className="git__btn focus">
                                <GitHubIcon className="icon"/>
                                View Code
                            </button>
                        </a>
                    </div>
                </div>
            </div> */}
            <div className="reverse project" >
                <img data-aos="fade-up" src={marquet} alt="Marquet" />
                <div data-aos="fade-up" className="project__text">
                <h4>WEBSITE</h4>
                    <h1>Marquet</h1>
                    <p>Marquet is a responsive <span>ecommerce multipage website</span> that features full cart functionality, built with HTML, SASS and JS.</p>
                    <div className="project__languages">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                    </div>
                    <div className="btns">
                        <a className="link" href="https://marquet-ecommerce.web.app/" target="_blank" rel="noreferrer">
                            <button className="site__btn focus">
                                <GrLanguage className="icon"/>
                                Live Site
                            </button>
                        </a>
                        <a className="link" href="https://github.com/HighRoller94/marquet-ecommerce" target="_blank" rel="noreferrer">
                            <button className="git__btn focus">
                                <ImGithub className="icon"/>
                                View Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="project">
                <img data-aos="fade-up"  src={eatz} alt="Eatz" />
                <div data-aos="fade-up"  data-aos-delay="200" className="project__text">
                <h4>WEBSITE</h4>
                    <h1>Eatz App</h1>
                    <p>Eatz is a recipe-lookup web application built with React and SASS, connected to an <span>external API</span>.</p>
                    <div className="project__languages">
                        <span>React</span>
                        <span>Edamam API</span>
                    </div>
                    <div className="btns">
                        <a className="link" href="https://recipe-app-bd949.web.app/" target="_blank" rel="noreferrer">
                            <button className="site__btn focus">
                                <GrLanguage className="icon"/>
                                Live Site
                            </button>
                        </a>
                        <a className="link" href="https://github.com/HighRoller94/eatz-recipe-app" target="_blank" rel="noreferrer">
                            <button className="git__btn focus">
                                <ImGithub className="icon"/>
                                View Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="reverse project">
                <img data-aos="fade-up" src={pyre} alt="Pyre" />
                <div data-aos="fade-up" data-aos-delay="200" className="project__text">
                    <h4>WEB APP</h4>
                    <h1>Pyre</h1>
                    <p><span>Music player app</span> with a simple dashboard layout. Built with React and SASS, <span>Pyre uses the Spotify API</span> to allows users to login, listen and manage their media.</p>
                    <div className="project__languages">
                        <span>React</span>
                        <span>Express</span>
                        <span>Spotify</span>
                    </div>
                    <div className="btns">
                        <a className="link" href="https://pyre-2e47e.web.app/" target="_blank" rel="noreferrer">
                            <button className="site__btn focus">
                                <GrLanguage className="icon"/>
                                Live Site
                            </button>
                        </a>
                        <a className="link" href="https://github.com/HighRoller94/pyre" target="_blank" rel="noreferrer">
                            <button className="git__btn focus">
                                <ImGithub className="icon"/>
                                View Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="illume project">
                <img data-aos="fade-up" src={illume} alt="illume" />
                <div data-aos="fade-up" data-aos-delay="200" className="project__text">
                    <h4>WEBSITE</h4>
                    <h1>Illume</h1>
                    <p>Illume is an ongoing <span>CRUD social media site</span> that aims to help creatives. Built with React, Illume includes a <span>number of features such as</span> custom authentication, user based profiles and cart functionality.</p>
                    <div className="project__languages">
                        <span>React</span>
                        <span>Firebase</span>
                        <span>Router</span>
                    </div>
                    <div className="btns">
                        <a className="link" href="https://illume-68c8e.web.app/home" target="_blank" rel="noreferrer">
                            <button className="site__btn focus">
                                <GrLanguage className="icon"/>
                                Live Site
                            </button>
                        </a>
                        <a className="link" href="https://github.com/HighRoller94/illume-app" target="_blank" rel="noreferrer">
                            <button className="git__btn focus">
                                <ImGithub className="icon"/>
                                View Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Projects
