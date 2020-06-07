import React from 'react';
import { withRouter } from 'react-router-dom';
import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ history }) => {
  return (
    <button
      onClick={() => history.push('/checkout')}
      className='strip-button'
      type='submit'
    >
      Pay now
    </button>
  );
};

export default withRouter(StripeCheckoutButton);
