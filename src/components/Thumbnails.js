import React from 'react';
import imageData from '../data/imageData';
import './Thumbnails.css';

const Thumbnails = ({ seriesId, onThumbnailClick }) => {
    const series = imageData.find((series) => series.id === parseInt(seriesId));

    if (!series) {
        return <p>Series not found!</p>;
    }

    return (
        <div className='thumbnails'>
            <div className="thumbnails-grid">
                {series.images.map((image, index) => (
                    <div
                        key={index}
                        className="thumbnail-item"
                        onClick={() => onThumbnailClick(index)} // Call the passed onThumbnailClick function
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/${image.filename}`}
                            alt={image.title}
                            className="thumbnail-image"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Thumbnails;
