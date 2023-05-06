import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

import HeaderStyles from '../styles/components/Header.module.scss';

const Header = ({ id, pre, heading, sub, highlighted}) => {
    const [viewed, setViewed] = useState(false)
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
        
    const animatedText = (e) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            e.innerText = e.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                return e.dataset.value[index];
                }
            
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
            
            if(iteration >= e.dataset.value.length){ 
                clearInterval(interval);
            }
            
            iteration += 1 / 3;
        }, 10);
            
    }

    useEffect(() => {
        if (inView) {
            console.log(inView)
            const e = document.getElementById(`${id}`)
            animatedText(e)
        }
    }, [inView])

    return (
        <div ref={ref} className={HeaderStyles.container}>
            <motion.div 
                className={HeaderStyles.header}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                >
                {pre && 
                    <span className={HeaderStyles.pre}>{pre}</span>
                }
                {heading && 
                    <h2 className={HeaderStyles.title} data-value={heading} id={id}>{heading}</h2>
                }
                {sub && 
                    <p className={HeaderStyles.sub}>{sub}</p>
                }
            </motion.div>
        </div>
    )
}

export default Header