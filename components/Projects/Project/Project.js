
import { useState } from 'react';
import Image from 'next/image';

import { ImGithub } from 'react-icons/Im';
import { BiWorld } from 'react-icons/Bi';

function Project({ data, setModalData, handleModal, title, type, desc, image, gitLink, siteLink, languages}) {

    return (
        <>
            <div className="project">
                <div className="projectImage" onClick={() => {
                    setModalData(data)
                    handleModal()
                }}>
                    <Image 
                        src={`/images/${image}`}
                        alt="Project Image"
                        fill
                    />
                </div>
                
                <div data-aos="fade-up" className="project__text">
                    <h4>{type}</h4>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <div className="project__languages">
                        {languages.map((language, index)=> (
                            <span key={index}>{language}</span>
                        ))}    
                    </div>
                    <div className="btns">
                        <a className="link" href={siteLink} target="_blank" rel="noreferrer">
                            <button className="site__btn focus">
                                <BiWorld className="icon"/>
                                Live Site
                            </button>
                        </a>
                        <a className="link" href={gitLink} target="_blank" rel="noreferrer">
                            <button className="git__btn focus">
                                <ImGithub className="icon"/>
                                View Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
        </>
        
        
    )
}

export default Project
