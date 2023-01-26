import React from 'react';

import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

import SkillsStyles from '../../styles/components/Skills.module.scss';

import SkillsContainer from './Skill/SkillsContainer';
import { SkillsContent } from './SkillsContent';
import AnimatedText from "../AnimatedText";

function Skills() {
 
    const placeholderText = [
        { type: "heading", text: "What I've picked up." }
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
        <div ref={ref} className={SkillsStyles.skillsRow} data-scroll-section id="skills">
            <div className={SkillsStyles.skillsHeader}>
                <span>.03</span>
                <motion.div 
                    className={SkillsStyles.skillsTitle}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={container}
                >
                {placeholderText.map((item, index) => {
                    return <AnimatedText {...item} key={index} />;
                })}
                </motion.div>
                <p>Here are a few <span>things I've picked up</span> along the way.</p>
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
