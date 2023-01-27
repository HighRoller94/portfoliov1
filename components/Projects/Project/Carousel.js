import React, { useState } from 'react';
import Image from 'next/image';
import Slider from "react-touch-drag-slider";

import CarouselStyles from '../../../styles/components/Carousel.module.scss';

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

    return (
        <div className={CarouselStyles.carousel}>
            <Slider
                onSlideComplete={(i) => {
                    setCurrentIndex(i)
                }}
                activeIndex={currentIndex}
                threshHold={100}
                transition={0.3}
                scaleOnDrag={false}
            >
                {slides.map(slide=> (
                    <div className={`${CarouselStyles.carouselImage} carouselImage`}>
                        <Image
                            src={`/images/${slide}`}
                            alt="Project Image"
                            fill
                        />
                    </div>
                ))}
            </Slider>
            {/* <div onClick={goToPrevious}>
                <FaChevronCircleLeft className={`${CarouselStyles.carouselArrow} left`} />
            </div>
            <div onClick={goToNext}>
                <FaChevronCircleRight className={`${CarouselStyles.carouselArrow} right`} />
            </div> */}
            <div className={CarouselStyles.carouselIndicators}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={index === currentIndex ? `${CarouselStyles.active}` : ""}
                    >
                    </div>
                ))}
            </div>
        </div>
    )
}