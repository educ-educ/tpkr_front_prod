import React from "react";
import { useState } from 'react'
import '../Reviews/Reviews.css'

import Review from "../Reviews/Review/Review";

const ReviewSlider = ({ reviews }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 3
    );
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 3 ? 0 : prevIndex + 3
    );
  };

  const visibleCards = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <div>
      <div className="reviews__container" >
        {
          visibleCards.map(value => <Review key={value.id} review={value} />)
        }
      </div>
      <div className="slider-buttons">
        <button onClick={handleClickPrev}>Prev</button>
        <button onClick={handleClickNext}>Next</button>
      </div>
    </div>
  );
};

export default ReviewSlider;


