// src/components/Homepage.js
import React, { useState, useEffect } from 'react';
import imageData from '../data/imageData';
import Slideshow from './Slideshow';

const Homepage = ({ setNavigationInfo }) => {
  const seriesId = 0; // Set the series ID to 0 for the homepage
  const series = imageData.find((series) => series.id === seriesId); // Find the series with id 0

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
        totalSlides: series.images.length,
      });
    }
  }, [currentIndex, series, currentSlideData, setNavigationInfo]);

  // If the series doesn't exist, render fallback
  if (!series) {
    return <p>No series found with id 0.</p>;
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % series.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + series.images.length) % series.images.length);
  };

  return (
    <Slideshow
      seriesId={seriesId} // Pass the seriesId to the Slideshow component
      setNavigationInfo={setNavigationInfo}
      handleNext={handleNext}
      handlePrev={handlePrev}
    />
  );
};

export default Homepage;
