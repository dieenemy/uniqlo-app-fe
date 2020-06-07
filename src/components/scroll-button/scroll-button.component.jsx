import React from 'react';
import { OtherFunction } from '../../provider/scroll-button.provider';
import './scroll-button.styles.scss';

const ScrollButton = () => {
  const { height } = React.useContext(OtherFunction);

  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={height > 100 ? 'scrollToTop show-scroll' : 'scrollToTop'}
      onClick={scrollBackToTop}
    >
      <span className='ti-angle-up'></span>
    </button>
  );
};

export default ScrollButton;
