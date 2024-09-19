// src/components/Slideshow.js
import React, { useEffect, useState } from 'react';
import imageData from '../data/imageData'; // Import the updated imageData
import './Slideshow.css';

const Slideshow = ({ setNavigationInfo, seriesId }) => {
  const series = imageData.find((series) => series.id === parseInt(seriesId)); // Find the correct series by id

  // Always call hooks at the top of the component
  const [currentIndex, setCurrentIndex] = useState(0);

  // Always calculate the current slide data
  const currentSlideData = series ? series.images[currentIndex] : null;

  // Always call useEffect, but only perform side effects if the series exists
  useEffect(() => {
    if (series) {
      setNavigationInfo({
        currentSlideData,
        currentSeriesData: series,
        currentIndex,
        totalSlides: series.images.length
      });
    }
  }, [currentIndex, setNavigationInfo, series, currentSlideData]);

  // Handle keydown event for left and right arrow keys
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNextSlide();
      } else if (event.key === "ArrowLeft") {
        handlePrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Fallback for undefined series
  if (!series) {
    return <p>No series found for this ID.</p>;
  }

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % series.images.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + series.images.length) % series.images.length);
  };

  const handleClick = (e) => {
    const halfWidth = window.innerWidth / 2;
    if (e.clientX < halfWidth) {
      handlePrevSlide(); // Left side click
    } else {
      handleNextSlide(); // Right side click
    }
  };

  return (
    <div className="slideshow-container">

        <div className="clickable-area">
        <div
          className="left-half"
          onClick={handlePrevSlide}
        ></div>
        <div
          className="right-half"
          onClick={handleNextSlide}
        ></div>
      </div>
      <div className="image-container">
        <img src={currentSlideData.url} alt={currentSlideData.title} />
      </div>

    </div>
  );
  
};

export default Slideshow;
