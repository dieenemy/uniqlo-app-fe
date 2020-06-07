import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import Banner from '../../components/banner/other-hero-banner.component';

const Cart = ({ cartItems, total }) => {
  // if (!isAuthenticated) {
  //   return <Redirect to='/signinandsignup' />;
  // }

  return (
    <React.Fragment>
      <Banner>
        <h2>Checkout</h2>
      </Banner>
      <div className='checkout-container'>
        <div className='checkout-page'>
          {cartItems.length > 0 ? (
            <div className='responsive-table'>
              <table className='shop-table'>
                <thead>
                  <tr>
                    <th className='product-remove'>&nbsp;</th>
                    <th className='product-thumbnail'>&nbsp;</th>
                    <th className='product-name'>Product</th>
                    <th className='product-price'>Price</th>
                    <th className='product-quantity'>Quantity</th>
                    <th className='product-subtotal'>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem._id} cartItem={cartItem} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}

          <div className='cart-collaterals'>
            <div className='cart-totals'>
              <h2>Cart Totals</h2>
              <div className='responsive-table__wrapper'>
                <div className='responsive-table'>
                  <table className='shop_table_responsive'>
                    <tbody>
                      <tr className='cart-sub'>
                        <th>Subtotal</th>
                        <td data-title='Subtotal'>
                          <span className='amount-price'>
                            <span className='price-currency'>£{total}</span>
                          </span>
                        </td>
                      </tr>
                      <tr className='order-total'>
                        <th>Total</th>
                        <td data-title='Total'>
                          <strong className='amount-price'>
                            <span className='price-currency'>£{total}</span>
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <StripeCheckoutButton price={total} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
