import React from 'react';
import { API } from '../../config';

import './cart-item.styles.scss';

const CartItem = ({ item: { price, name, count, _id } }) => (
  <div className='cart-item'>
    <img src={`${API}/product/photo/${_id}`} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {count} x {price}
      </span>
    </div>
  </div>
);
export default React.memo(CartItem);
