import React from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ currentSlideData, currentSeriesData, currentIndex, totalSlides }) => {
    const { title } = currentSlideData || {};
    const { date, natureOfWork, series } = currentSeriesData || {};
    const year = date ? date.split('-')[0] : '';

    const location = useLocation();
    const { seriesId } = useParams(); // Get the current seriesId from params
    const currentPath = location.pathname;

    // Determine whether we are on the slideshow or thumbnails page
    const isSlideshowPage = currentPath.includes('/slideshow');
    const isThumbnailsPage = currentPath.includes('/thumbnails');

    // Path to toggle between slideshow and thumbnails
    const togglePath = isSlideshowPage 
        ? `/thumbnails/${seriesId}` 
        : `/slideshow/${seriesId}/0`;

    return (
        <nav className="navigation">
            <div className='navigation-wrapper'>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            id='home-link'
                            className={({ isActive }) =>
                                (isActive || currentPath === '/' || currentPath.includes('/slideshow')) ? 'active-link' : ''
                            }
                        >
                            Amina Gingold&nbsp;
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/index" id='index-link' className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            Index
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/info" id='info-link' className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            Info
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop" id='shop-link' className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            Shop
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='image-info-wrapper'>
                <div id='image-info'>
                    {/* Show image-info only on the slideshow pages */}
                    {(currentPath.includes('/slideshow')) && (
                        <div className="image-info">
                            <div id='image-info-info'>
                                <p>{series}</p>
                                <p>March {year}</p>
                                <p>{natureOfWork}</p>
                            </div>
                            <p id='slide-number'>
                                {[...Array(totalSlides)].map((_, i) => (
                                    <span key={i} className={currentIndex === i ? 'active-slide-number' : ''}>
                                        {i + 1}
                                    </span>
                                ))}
                            </p>
                        </div>
                    )}
                </div>

            </div>

                {/* Add the toggle link for Thumbnails/Slideshow */}
                {(isSlideshowPage || isThumbnailsPage) && (
                    <div className="top-right">
                        <NavLink to={togglePath} id="toggle-view-link">
                            {isSlideshowPage ? 'Thumbnails' : 'Slideshow'}
                        </NavLink>
                    </div>
                )}
        </nav>
    );
};

export default Navigation;
