import React from 'react';
import ErrorPage from '../error-page/error-page.component';
import { NavLink } from 'react-router-dom';

const ErrorHappen = () => (
  <ErrorPage>
    <div className='notfound-404'>
      <h1>404</h1>
    </div>
    <h2>Oops! Something went wrong</h2>
    <p>
      We are sorry for the inconvenience.{' '}
      <NavLink className='return' to='/'>
        Return to homepage
      </NavLink>
    </p>
  </ErrorPage>
);

export default ErrorHappen;
