import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FiMail } from 'react-icons/Fi'

function Contact() {
    const [status, setStatus] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fppej9d', 'template_ij66m24', e.target, 'user_tPwEwZeUHFlaN3PHk72Nh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            setStatus(true)
    };
    
    return (
        <div className="contact__section" data-scroll-section id="contact">
            <div className="contact__container">
            
                <div className="contact">
                    <div className="contact__header">
                        <h2 data-aos="fade-right">What's next?</h2>
                        <h1 data-aos="fade-right">Get in touch!</h1>
                    </div>
                    <div className="contact__text">
                        <p data-aos="fade-right">I'd <span>love to hear from you</span>, feel free to shoot me a message!</p>
                        <div data-aos="fade-right" className="contact__mail focus">
                            <FiMail className="icon" />
                            <a href="mailto:ashbridgescodes@gmail.com">
                                <h2 className="focus">ashbridgescodes@gmail.com</h2>
                            </a> 
                        </div>
                        {/* 
                        <div data-aos="fade-right"className="contact__phone focus">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="36" height="36" viewBox="0 0 36 36">
                                <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt" d="M34.973,25.439,27.1,22.064a1.687,1.687,0,0,0-1.969.485L21.641,26.81A26.062,26.062,0,0,1,9.183,14.351l4.261-3.488A1.683,1.683,0,0,0,13.929,8.9L10.554,1.02A1.7,1.7,0,0,0,8.62.043L1.308,1.73A1.688,1.688,0,0,0,0,3.375,32.621,32.621,0,0,0,32.625,36a1.687,1.687,0,0,0,1.645-1.308l1.687-7.313a1.708,1.708,0,0,0-.985-1.941Z" transform="translate(0 0)"/>
                            </svg>
                            <h2>07523740508</h2>
                        </div>
                        */}
                        <div data-aos="fade-right"className="contact__cta focus">
                            <h2>Or use <span>this cool form!</span></h2>
                        </div>
                    </div>
                </div>
                <form className="contact__form" ref={form} noValidate autoComplete="off" onSubmit={sendEmail}>
                    <div className="text__field">
                        <input type="text" name="name" autoComplete="off" required />
                        <label htmlFor="name" className="label-name" ><span className="content-name">Name</span></label>
                    </div>
                    <div className="text__field">
                        <input type="text" name="email" autoComplete="off" required />
                        <label htmlFor="name" className="label-name" ><span className="content-name">Email</span></label>
                    </div>
                    <div className="text__area">
                        <textarea type="text" rows="10" name="message" autoComplete="off" required />
                        <label htmlFor="name" className="label-name" ><span className="content-name">Message</span></label>
                    </div>
                    {!status ? (
                        <button type="submit" className="send__btn focus">Send message!</button>
                    ) : (
                        <button className="send__btn sent">Message sent!</button>
                    )}
                </form>
                <h1 className="bg__contact2">Email</h1>
            </div>
        </div>
    )
}

export default Contact
