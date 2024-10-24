import React, { useEffect, useState, useRef } from 'react';
import imageData from '../data/imageData';
import './Slideshow.css';

const Slideshow = ({ setNavigationInfo, seriesId, initialIndex = 0 }) => {
  const series = imageData.find((series) => series.id === parseInt(seriesId));
  const [currentIndex, setCurrentIndex] = useState(initialIndex); // Use initialIndex to set the starting slide
  const [startTouch, setStartTouch] = useState({ x: 0, y: 0 });
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);

  const currentSlideData = series ? series.images[currentIndex] : null;

  useEffect(() => {
    if (series) {
      setNavigationInfo({
        currentSlideData,
        currentSeriesData: series,
        currentIndex,
        totalSlides: series.images.length,
      });
    }
  }, [currentIndex, setNavigationInfo, series, currentSlideData]);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % series.images.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + series.images.length) % series.images.length);
  };

  return (
    <div className="slideshow-container">
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/${currentSlideData.filename}`}
          alt={currentSlideData ? currentSlideData.title : 'Image'}
        />
      </div>
      <div className="clickable-area">
        <div className="left-half" onClick={handlePrevSlide}></div>
        <div className="right-half" onClick={handleNextSlide}></div>
      </div>
    </div>
  );
};

export default Slideshow;
