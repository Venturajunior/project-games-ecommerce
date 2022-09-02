/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import './styles.css';

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { length } = slides;
  const currentSlide = slides[currentIndex];

  const handleNextIndex = () => {
    const nextIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const handlePreviousIndex = () => {
    const previousIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
    setCurrentIndex(previousIndex);
  };

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={handlePreviousIndex} />
      <FaArrowAltCircleRight className="right-arrow" onClick={handleNextIndex} />
      <img src={currentSlide.image} alt="games images" />
    </section>
  );
}

export default ImageSlider;
