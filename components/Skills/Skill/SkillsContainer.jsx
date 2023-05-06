import React from 'react';
import SkillContainerStyles from '../../../styles/components/SkillsContainer.module.scss';

function SkillsContainer({ inView, icon, title, body, sub, skills }) {
    
    return (
        <div className={inView ? `${SkillContainerStyles.skillsSection} showSkills` : `${SkillContainerStyles.skillsSection} hideSkills`}>
            <div className={SkillContainerStyles.skillsIcon}>{icon}</div>
            <div className={SkillContainerStyles.skillsHeader}>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div className={SkillContainerStyles.skillsSubSection}>
                <h3>{sub}</h3>
                <div className={SkillContainerStyles.skills}>
                    {skills.map((skill, index)=> (
                        <h2 key={index}>{skill}</h2>
                    ))}  
                </div>
            </div>
        </div>
    )
}

export default SkillsContainer
