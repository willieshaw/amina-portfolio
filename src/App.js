import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Slideshow from './components/Slideshow';
import Thumbnails from './components/Thumbnails';
import Info from './components/Info';
import Index from './components/Index';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import './App.css';

// Slideshow component with params
const SlideshowWithParams = ({ setNavigationInfo }) => {
  const { seriesId, slideIndex } = useParams();
  return <Slideshow seriesId={seriesId} initialIndex={parseInt(slideIndex)} setNavigationInfo={setNavigationInfo} />;
};

// Thumbnails component with params
const ThumbnailsWithParams = () => {
  const { seriesId } = useParams();
  const navigate = useNavigate(); // Use useNavigate to programmatically navigate

  const handleThumbnailClick = (index) => {
    // Navigate to the clicked image's slideshow route
    navigate(`/slideshow/${seriesId}/${index}`);
  };

  return <Thumbnails seriesId={seriesId} onThumbnailClick={handleThumbnailClick} />;
};

const App = () => {
  const [navigationInfo, setNavigationInfo] = useState({
    currentSlideData: null,
    currentSeriesData: null,
    currentIndex: 0,
    totalSlides: 0,
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Homepage route */}
          <Route
            path="/"
            element={
              <>
                <Navigation
                  isSlideshow={true}
                  currentSlideData={navigationInfo.currentSlideData}
                  currentSeriesData={navigationInfo.currentSeriesData}
                  currentIndex={navigationInfo.currentIndex}
                  totalSlides={navigationInfo.totalSlides}
                />
                <Homepage setNavigationInfo={setNavigationInfo} />
              </>
            }
          />

          {/* Slideshow route with seriesId and slideIndex */}
          <Route
            path="/slideshow/:seriesId/:slideIndex"
            element={
              <>
                <Navigation
                  isSlideshow={true}
                  currentSlideData={navigationInfo.currentSlideData}
                  currentSeriesData={navigationInfo.currentSeriesData}
                  currentIndex={navigationInfo.currentIndex}
                  totalSlides={navigationInfo.totalSlides}
                />
                <SlideshowWithParams setNavigationInfo={setNavigationInfo} />
              </>
            }
          />

          {/* Thumbnails route */}
          <Route
            path="/thumbnails/:seriesId"
            element={
              <>
                <Navigation
                  isSlideshow={false}
                  currentSlideData={navigationInfo.currentSlideData}
                  currentSeriesData={navigationInfo.currentSeriesData}
                  currentIndex={navigationInfo.currentIndex}
                  totalSlides={navigationInfo.totalSlides}
                />
                <ThumbnailsWithParams />
              </>
            }
          />

          {/* Other routes */}
          <Route
            path="/info"
            element={
              <>
                <Navigation isSlideshow={false} />
                <Info />
              </>
            }
          />

          <Route
            path="/index"
            element={
              <>
                <Navigation isSlideshow={false} />
                <Index />
              </>
            }
          />

          <Route
            path="/shop"
            element={
              <>
                <Navigation isSlideshow={false} />
                <Shop />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
