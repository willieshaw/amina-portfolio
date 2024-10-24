import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imageData from '../data/imageData';
import './Index.css';

const Index = () => {
  const [sortBy, setSortBy] = useState('date'); // Default sorting by date
  const [sortDirection, setSortDirection] = useState('desc'); // Default sorting direction is descending

  // Sort function to handle different sorting columns
  const sortedData = [...imageData]
    .filter((series) => series.id !== 0) // Exclude series with id: 0
    .sort((a, b) => {
      if (sortBy === 'date') {
        return sortDirection === 'asc'
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      } else if (sortBy === 'title') {
        return sortDirection === 'asc'
          ? a.series.localeCompare(b.series)
          : b.series.localeCompare(a.series);
      } else if (sortBy === 'natureOfWork') {
        return sortDirection === 'asc'
          ? (a.natureOfWork || '').localeCompare(b.natureOfWork || '')
          : (b.natureOfWork || '').localeCompare(a.natureOfWork || '');
      } else if (sortBy === 'medium') {
        return sortDirection === 'asc'
          ? a.medium.localeCompare(b.medium)
          : b.medium.localeCompare(a.medium);
      }
      return 0;
    });

  // Updated toggle sorting direction
  const handleSort = (column) => {
    if (sortBy === column) {
      setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc')); // Toggle between ascending and descending
    } else {
      setSortBy(column);
      setSortDirection('desc'); // Default to descending when switching columns
    }
  };

  return (
    <div className="index-page">
      <div className="desktop-index">
        {/* <div className='threshold-wrapper'>
          <div className="sorting-buttons">
            <button
              className={sortBy === 'title' ? 'active-filter' : ''}
              onClick={() => handleSort('title')}
              id="sort-title"
            >
              Title
              {sortBy === 'title' && (
                <span className="sort-direction">{sortDirection === 'asc' ? '▲' : '▼'}</span>
              )}
            </button>
            <button
              className={sortBy === 'natureOfWork' ? 'active-filter' : ''}
              onClick={() => handleSort('natureOfWork')}
              id="sort-nature"
            >
              Client
              {sortBy === 'natureOfWork' && (
                <span className="sort-direction">{sortDirection === 'asc' ? '▲' : '▼'}</span>
              )}
            </button>
            <button
              className={sortBy === 'medium' ? 'active-filter' : ''}
              onClick={() => handleSort('medium')}
              id="sort-medium"
            >
              Medium
              {sortBy === 'medium' && (
                <span className="sort-direction">{sortDirection === 'asc' ? '▲' : '▼'}</span>
              )}
            </button>
            <button
              className={sortBy === 'date' ? 'active-filter' : ''}
              onClick={() => handleSort('date')}
              id="sort-date"
            >
              Date
              {sortBy === 'date' && (
                <span className="sort-direction">{sortDirection === 'asc' ? '▲' : '▼'}</span>
              )}
            </button>
          </div>
        </div> */}

        {sortedData.map((series) => (
          <div key={series.id} className="series-section">
            <Link to={`/slideshow/${series.id}/0`}>
            <div className="series-thumbnail">
                    <img
                      key={series.id}
                      src={`${process.env.PUBLIC_URL}/images/${series.thumbnail}`}
                      alt={series.series}
                    />
                  </div>
              {/* <div className='threshold-wrapper'> */}
                
                <div className="series-item">
                  {/* Thumbnail image */}

                  <div className="series-title">
                    {series.series}
                    <p>{series.images.length} images</p>
                  </div>
                  <div className="series-nature">
                    {series.natureOfWork && <p>{series.natureOfWork}</p>}
                  </div>
                  <div className="series-medium">
                    <p>{series.medium}</p>
                  </div>
                  <div className="series-info">
                    <p>{series.date.split('-')[0]}</p>
                  </div>
                </div>
              {/* </div> */}

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
