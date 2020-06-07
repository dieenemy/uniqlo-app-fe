import React from 'react';

import './backdrop.styles.scss';

const backdrop = ({ show, handleShow }) => (
  <div className={`backdrop ${show ? 'show' : ''}`} onClick={handleShow}></div>
);

export default backdrop;
