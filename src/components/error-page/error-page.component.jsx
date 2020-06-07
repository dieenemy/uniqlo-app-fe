import React from 'react';
import './error-page.styles.scss';

const ErrorPage = ({ children }) => (
  <div id='notfound'>
    <div className='notfound'>{children}</div>
  </div>
);

export default ErrorPage;
