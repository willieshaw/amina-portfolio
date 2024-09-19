// src/components/Info.js
import React from 'react';
import './Info.css';
import infoData from '../data/infoData'; // Importing the data file

const Info = () => {
  return (
    <div className="info-page">
        <div className='margin-wrapper'>
        <div className='threshold-wrapper'>
      {infoData.map((section, index) => (
        <div className="info-section" key={index}>
          <h2 className="section-headline">{section.headline}</h2>
          <p className="section-body">{section.body}</p>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
};

export default Info;
