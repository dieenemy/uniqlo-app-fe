import React from 'react';
import { connect } from 'react-redux';
import { API } from '../../config';
import './quick-view.styles.scss';
import { addItem } from '../../redux/cart/cart.actions';
import { OtherFunction } from '../../provider/scroll-button.provider';

const QuickView = ({ item, addItem }) => {
  const { visible, cssClass } = React.useContext(OtherFunction);
  const { name, price, description } = item;

  const changeClass = () => {
    cssClass();
  };

  return (
    <div className={`quick-view__container ${visible ? 'visible' : ''}`}>
      <div className='quick-view__content'>
        <div className='quick-view__body'>
          <div className='quick-view__product'>
            <div className='product-images'>
              <div className='main-images images'>
                <img src={`${API}/product/photo/${item._id}`} alt='' />
              </div>
            </div>
            <div className='product-info'>
              <span className='ti-close' onClick={() => changeClass()}></span>
              <div className='product-info-container'>
                <h1>{name}</h1>
                <div className='price-box'>
                  <span className='price'>£{price}</span>
                </div>
                <div className='quick-desc'>{description}</div>
                <div className='select__color'>
                  <h2>Color</h2>
                  <ul className='color__list'>
                    <li className='red'>
                      <span id='red'></span>
                    </li>
                    <li className='gold'>
                      <span id='gray'></span>
                    </li>
                    <li className='orange'>
                      <span id='orange'></span>
                    </li>
                    <li className='blue'>
                      <span id='blue'></span>
                    </li>
                  </ul>
                </div>
                <div className='select__size'>
                  <h2>Select size</h2>
                  <ul className='color__list'>
                    <li className='l__size'>
                      <span id='l__size'>L</span>
                    </li>
                    <li className='m__size'>
                      <span id='m__size'>M</span>
                    </li>
                    <li className='s__size'>
                      <span id='s__size'>S</span>
                    </li>
                    <li className='xl__size'>
                      <span id='xl__size'>XL</span>
                    </li>
                    <li className='xl__size'>
                      <span id='xl__size'>XXL</span>
                    </li>
                  </ul>
                </div>
                <button
                  type='submit'
                  onClick={() => addItem(item)}
                  className='add_to_cart_button'
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(QuickView);
