import React, { useState } from 'react';
import Image from 'next/image';

export default function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)


    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    console.log(slides)
    return (
        <div className="carousel">
            <div className="carouselImage">
                <Image
                    src={`/images/${slides[currentIndex]}`}
                    alt="Project Image"
                    fill
                />
            </div>
            <div className="carouselArrow left" onClick={goToPrevious}></div>
            <div className="carouselArrow right" onClick={goToNext}></div>
            <div className="carouselIndicators">
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        onClick={() => goToSlide(index)}
                        className={index === currentIndex ? "active" : ""}
                    >
                    </div>
                ))}
            </div>
        </div>
    )
}