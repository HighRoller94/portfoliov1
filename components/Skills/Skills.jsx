import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

import SkillsStyles from '../../styles/components/Skills.module.scss';

import Header from '../Header'
import SkillsContainer from './Skill/SkillsContainer';
import { SkillsContent } from './SkillsContent';

function Skills() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <div ref={ref} className={SkillsStyles.skillsRow} data-scroll-section id="skills">
            <div className={SkillsStyles.skillsHeader}>
                <Header 
                    pre=".03"
                    heading="What I've picked up."
                    id="skillsTitle"
                    // sub="Here are a few things I've picked up"
                    // highlighted=" along the way."
                />
                <p>Here are a few things I've picked up <span>along the way.</span></p>
            </div>
            <div className={SkillsStyles.skillsContainer}>
                {SkillsContent.map((content, index) => (
                    <SkillsContainer 
                        key={index}
                        inView = {inView}
                        icon = {content.icon}
                        title = {content.title}
                        body = {content.body}
                        sub = {content.sub}
                        skills = {content.skills}
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills
