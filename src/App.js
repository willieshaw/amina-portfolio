// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Navigation from './components/Navigation';
import Slideshow from './components/Slideshow';
import Info from './components/Info';
import Index from './components/Index';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import './App.css';

const SlideshowWithParams = ({ setNavigationInfo }) => {
  const { seriesId } = useParams(); // Get seriesId from the URL params
  return <Slideshow seriesId={seriesId} setNavigationInfo={setNavigationInfo} />;
};

const App = () => {
  // State to hold the current slideshow navigation info
  const [navigationInfo, setNavigationInfo] = useState({
    currentSlideData: null,
    currentSeriesData: null,
    currentIndex: 0,
    totalSlides: 0
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
                <Homepage setNavigationInfo={setNavigationInfo} /> {/* Render Homepage */}
              </>
            }
          />

          {/* Slideshow route for each series by id */}
          <Route
            path="/slideshow/:seriesId"
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

          {/* Info route */}
          <Route
            path="/info"
            element={
              <>
                <Navigation isSlideshow={false} />
                <Info />
              </>
            }
          />

          {/* Index route */}
          <Route
            path="/index"
            element={
              <>
                <Navigation isSlideshow={false} />
                <Index />
              </>
            }
          />

          {/* Shop route */}
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
