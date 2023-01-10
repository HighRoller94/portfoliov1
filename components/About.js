import React, { useEffect } from 'react';
import Image from 'next/image'

import me from '../images/me.svg';

function About() {

    return (
        <div className="about__section" data-scroll-section id="about">
            <h1 className="bg-about">About</h1>
            <div className="about__container">
                <h1 data-aos="fade-right" className="about__header">A little about me.</h1>
                <div className="about__text">
                    <p data-aos="fade-right" data-aos-delay="200">
                    Hey there, I'm Ash, a <span>front-end developer</span> from the UK! I have a background in visual communications, and have recently turned to web development, where I quickly found my passion. <br /><br />I'm always eager to learn new skills, and enjoy spending my time learning <span>new ways to bring designs to life</span> (I know right? As if you havn't heard that one before).
                    </p>
                    <Image 
                        fill
                        src={me}
                        alt="Ash Bridges"
                    />
                </div>
            </div>
        </div>

    )
}

export default About
