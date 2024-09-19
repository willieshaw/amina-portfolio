// src/components/Navigation.js
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ currentSlideData, currentSeriesData, currentIndex, totalSlides }) => {
    const { title } = currentSlideData || {};
    const { date, natureOfWork, series } = currentSeriesData || {};

    // Extract the year from the date (assuming it's in YYYY-MM-DD format)
    const year = date ? date.split('-')[0] : '';

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="navigation">
            <nav>
                <div className='navigation-wrapper'>
                    <div className="threshold-wrapper">
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        (isActive || currentPath === '/' || currentPath.includes('/slideshow')) ? 'active-link' : ''
                                    }
                                >
                                    Amina Gingold
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/index" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                                    Index
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/info" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                                    Info
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                                    Shop
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='image-info-wrapper'>
                    <div id='image-info'>
                        {/* Show image-info only on the homepage or slideshow pages */}
                        {(currentPath === '/' || currentPath.includes('/slideshow')) && (
                            <NavLink to="/index">
                                <div className="image-info">
                                    <p>{title}, {year}</p>
                                    <p>{natureOfWork}</p>
                                    <p>{series}</p>
                                    <p>{currentIndex + 1} · {totalSlides}</p>
                                </div>
                            </NavLink>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
