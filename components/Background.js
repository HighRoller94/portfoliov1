import React, { useEffect, useState } from 'react';

function Background() {

    useEffect(() => {

        const cursor = document.querySelector(".cursor");
        const focus = document.querySelectorAll(".focus")
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
                cursor.innerHTML = '<span>Click</span>'
            })
            project.addEventListener('mouseleave', () => {
                cursor.classList.remove('projectFocus')
                cursor.innerHTML = ''
            })
        })
    });

    return (
        <>
            <div className="cursor"></div>
            <div className="border"></div>
            <div className="main-area">
                <div className="circles">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    {/* <div></div>
                <div></div>
                <div></div> */}
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>


    )
}

export default Background