import React from 'react';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';
import { API } from '../../config';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, _id, price, count } = cartItem;

  const subtotal = price * count;

  return (
    <tr className='checkout-item'>
      <td className='product-remove'>
        <span onClick={() => clearItem(cartItem)}>x</span>
      </td>
      <td className='product-thumbnail'>
        <img src={`${API}/product/photo/${_id}`} alt='img' />
      </td>
      <td data-title='Product' className='product-name'>
        {name}
      </td>
      <td data-title='Price' className='product-price'>
        <span className='price-amount'>
          <span className='price-currency'>£{price}</span>
        </span>
      </td>
      <td data-title='Quantity' className='product-quantity'>
        <div className='quantity'>
          <input
            onClick={() => removeItem(cartItem)}
            type='button'
            value='-'
            className='minus'
          />
          <input className='qty-text' name='quantity' value={count} />
          <input
            onClick={() => addItem(cartItem)}
            type='button'
            value='+'
            className='plus'
          />
        </div>
      </td>
      <td data-title='Subtotal' className='product-subtotal'>
        <span className='price-amount'>
          <span className='price-currency'>£{subtotal}</span>
        </span>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
