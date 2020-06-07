import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import './home-hero-banner.styles.scss';

const HeroBanner = () => {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <Slide {...properties}>
      <div className='hero-banner'>
        <div className='banner-paragraph'>
          <div className='text-backward'>
            <span>2020</span>
          </div>
          <div className='text-title'>
            <span>Man Bags</span>
          </div>
          <div className='text-subtitle'>
            <span>New Men's Collection</span>
          </div>
          <div className='learn-more-wrapper'>
            <button className='button learn-more'>Learn more</button>
          </div>
          <Link to='/shop' className='open-shop-wrapper'>
            <button className='button open-shop'>Open Shop</button>
          </Link>
        </div>
        <div className='banner-img-wrapper'>
          <div className='banner-img'>
            <img
              src='https://i.ibb.co/Gvw5bf8/bag-on-slider-demo.png'
              alt='banner img'
            />
          </div>
        </div>
      </div>
      <div className='hero-banner-wrapper'>
        <div className='text-backward'>
          <span>2020</span>
        </div>
        <div className='text-title'>
          <span>New Style</span>
        </div>
        <div className='text-subtitle'>
          <span>Boots Collection For Men</span>
        </div>
      </div>
    </Slide>
  );
};

export default HeroBanner;
