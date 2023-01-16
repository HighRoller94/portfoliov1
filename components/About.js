import React, { useEffect } from 'react';
import Image from 'next/image'

import me from '../images/me.svg';

function About() {
    
    return (
        <div className="about__section" data-scroll-section id="about">
            <div className="about__container">
                <h1 data-aos="fade-right" className="about__header">A little about me.</h1>
                <div className="about__text">
                    <p data-aos="fade-right" data-aos-delay="200">
                    Hey there, I'm Ash, a <span>freelance front-end developer</span> from the UK. I have a background in visual communications, and have since turned to web development, where I quickly found a passion I didnt know was there! <br /><br />Always eager to learn new skills, I enjoy spending my time learning <span>new ways to bring designs to life</span>, and helping businesses make their mark on the web.
                    </p>
                    <div className="aboutImage">
                        <Image 
                            fill
                            src={me}
                            alt="Ash Bridges"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
