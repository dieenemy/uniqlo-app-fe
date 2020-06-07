import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, inverted, otherStyle, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      otherStyle ? 'other-style' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
