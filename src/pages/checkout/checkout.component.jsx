import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutPayment from '../../components/checkout/checkout.component';
import './checkout.styles.scss';
import Banner from '../../components/banner/other-hero-banner.component';

const Checkout = ({ cartItems, total }) => {
  const [values, setValues] = useState({
    loading: false,
    error: '',
    address: '',
    postcode: '',
    city: '',
    email: '',
    phone: '',
    lastName: '',
    firstName: '',
    company: '',
  });

  const {
    city,
    firstName,
    lastName,
    company,
    email,
    phone,
    postcode,
    address,
  } = values;

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <React.Fragment>
      <Banner>
        <h2>Checkout</h2>
      </Banner>

      <form id='checkout'>
        <div className='checkout-wrapper'>
          <div className='billing-details'>
            <div className='first-name__wrapper'>
              <label htmlFor='firstName'>
                First name&nbsp;<span className='required'>*</span>
              </label>
              <input
                onChange={handleChange('firstName')}
                type='text'
                value={firstName}
                className='first-name'
              />
            </div>
            <div className='last-name__wrapper'>
              <label htmlFor='lastName'>
                Last name&nbsp;<span className='required'>*</span>
              </label>
              <input
                onChange={handleChange('lastName')}
                type='text'
                value={lastName}
                className='last-name'
              />
            </div>
            <label htmlFor='company'>
              Company name (optional) &nbsp;<span className='required'>*</span>
            </label>
            <input
              onChange={handleChange('company')}
              type='text'
              value={company}
            />
            <label htmlFor='address'>
              Street address &nbsp;<span className='required'>*</span>
            </label>
            <input
              onChange={handleChange('address')}
              type='text'
              value={address}
            />
            <label htmlFor='postcode'>
              Postcode / ZIP (optional) &nbsp;
              <span className='required'>*</span>
            </label>
            <input
              onChange={handleChange('postcode')}
              type='number'
              value={postcode}
            />
            <label htmlFor='city'>
              Town / City &nbsp;<span className='required'>*</span>
            </label>
            <input onChange={handleChange('city')} type='text' value={city} />
            <label htmlFor='phone'>
              Phone &nbsp;<span className='required'>*</span>
            </label>
            <input
              onChange={handleChange('phone')}
              type='number'
              value={phone}
            />
            <label htmlFor='email'>
              Email address &nbsp;<span className='required'>*</span>
            </label>
            <input onChange={handleChange('email')} type='text' value={email} />
          </div>
          <div className='checkout-details'>
            <div className='checkout-order-review'>
              <h3 className='order-review__heading'>Your order</h3>
              <div id='order-review'>
                <div className='responsive-table'>
                  <table className='checkout-review__table'>
                    <thead>
                      <tr>
                        <th className='product-name'>Product</th>
                        <th className='product-total'>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((cartItem) => (
                        <tr key={cartItem._id} className='cart-item__checkout'>
                          <td className='product-name'>
                            {cartItem.name}&nbsp;
                            <strong className='product-quantity'>
                              x&nbsp;{cartItem.count}
                            </strong>
                          </td>
                          <td className='product-total'>
                            <span className='price-amount'>
                              <span className='price-currency'>
                                £{cartItem.count * cartItem.price}
                              </span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className='cart-subtotal'>
                        <th>Subtotal</th>
                        <td>
                          <span className='price-amount'>
                            <span className='price-currency'>£{total}</span>
                          </span>
                        </td>
                      </tr>
                      <tr className='order-total'>
                        <th>Total</th>
                        <td>
                          <strong>
                            <span className='price-amount'>
                              <span className='price-currency'>£{total}</span>
                            </span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div id='payment'>
                  <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                  <CheckoutPayment products={cartItems} values={values} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Checkout);
