import React, { useEffect, useState } from 'react';

import BackgroundStyles from '../styles/components/Background.module.scss';


function Background() {



    useEffect(() => {

        const cursor = document.querySelector(".cursor");
        const focus = document.querySelectorAll(".focus");

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: " + (e.clientY - 15) + "px; left: " + (e.clientX - 15) + "px;")
        });
        focus.forEach(link => {
            link.addEventListener('mouseover', () => {
                cursor.classList.add('link-focus')
            })
            link.addEventListener('mouseleave', () => {
                cursor.classList.remove('link-focus')
            })
        })

        const projectFocus = document.querySelectorAll(".projectImage")
        projectFocus.forEach(project => {
            project.addEventListener('mouseover', () => {
                cursor.classList.add('projectFocus')
                cursor.innerHTML = '<span>CLICK</span>'
            })
            project.addEventListener('mouseleave', () => {
                cursor.classList.remove('projectFocus')
                cursor.innerHTML = ''
            })
        })

    }, []);

    return (
        <>
            <div className="cursor"></div>
            <div className={BackgroundStyles.border}></div>
            <div className={BackgroundStyles.mainArea} >
                <div className={BackgroundStyles.circles}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {/* <svg class="arrowBig" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305.76 292.72">
                <path fill="none" stroke="currentColor" class="b" d="M283.25,273.75C289.05,8.44,.01,.5,.01,.5" opacity="1" stroke-dashoffset="0px" stroke-dasharray="440.9320068359375px 440.9320068359375px"></path>
                <path fill="none" stroke="currentColor" class="b" d="M261.92,257.34s21.39,20.39,20.66,35.26" opacity="1" stroke-dashoffset="0px" stroke-dasharray="41.81951904296875px 41.81951904296875px"></path>
                <path fill="none" stroke="currentColor" class="b" d="M282.74,292.58c-1.88-6.79,22.51-37.2,22.53-36.99" opacity="1" stroke-dashoffset="0px" stroke-dasharray="43.84518051147461px 43.84518051147461px"></path>
            </svg> */}
        </>


    )
}

export default Background