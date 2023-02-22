import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

import SkillsStyles from '../../styles/components/Skills.module.scss';

import SkillsContainer from './Skill/SkillsContainer';
import { SkillsContent } from './SkillsContent';

function Skills() {
 
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    useEffect(() => {
        document.querySelector('#skillsTitle').onmouseover = e => {
            let iteration = 0;
            clearInterval(interval);

            interval = setInterval(() => {
                e.target.innerText = e.target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                    return e.target.dataset.value[index];
                    }
                
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
                
                if(iteration >= e.target.dataset.value.length){ 
                clearInterval(interval);
                }
                
                iteration += 1 / 3;
            }, 10);
        }   
    })

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <div ref={ref} className={SkillsStyles.skillsRow} data-scroll-section id="skills">
            <div className={SkillsStyles.skillsHeader}>
                <span>.03</span>
                <motion.h2 
                    className={SkillsStyles.skillsTitle}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    id="skillsTitle"
                    data-value="What I've picked up."
                >
                    What I've picked up.
                {/* {placeholderText.map((item, index) => {
                    return <AnimatedText {...item} key={index} />;
                })} */}
                </motion.h2>
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
