import { ImGithub } from 'react-icons/Im';
import { GrLanguage } from 'react-icons/Gr';

function Project({ title, type, desc, image, gitLink, siteLink, languages}) {

    return (
        <div className="project">
            <img data-aos="fade-up" src={image} alt="Project Image" />
            <div data-aos="fade-up" className="project__text">
                <h4>{type}</h4>
                <h1>{title}</h1>
                <p>{desc}</p>
                <div className="project__languages">
                    {languages.map((language, key) => (
                        <span>{language}</span>
                    ))}    
                </div>
                <div className="btns">
                    <a className="link" href={siteLink} target="_blank" rel="noreferrer">
                        <button className="site__btn focus">
                            <GrLanguage className="icon"/>
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
    )
}

export default Project
