import React from 'react';
import './other-hero-banner.styles.scss';

const OtherHeroBanner = ({ children }) => (
  <div className='page-title-page'>
    <div className='container'>
      <header className='entry-header'>{children}</header>
    </div>
  </div>
);

export default OtherHeroBanner;
