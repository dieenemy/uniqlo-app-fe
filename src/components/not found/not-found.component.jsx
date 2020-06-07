import React from 'react';
import ErrorPage from '../error-page/error-page.component';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <ErrorPage>
    <div className='notfound-404'>
      <h1>404</h1>
    </div>
    <h2>Oops! Nothing was found</h2>
    <p>
      The page you are looking for might have been removed had its name changed
      or is temporarily unavailable.{' '}
      <NavLink className='return' to='/'>
        Return to homepage
      </NavLink>
    </p>
  </ErrorPage>
);

export default NotFound;
