import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getProducts, read } from '../../auth/apiCore';
import QuickView from '../quick-view/quick-view.component';
import CollectionItem from '../collection-item/collection-item.component';
import './item.styles.scss';

const Item = ({ quickViewItem }) => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productByArrival, setProductByArrival] = useState([]);
  const [error, setError] = useState([]);

  const loadProductsBySell = () => {
    getProducts('sold').then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts('createdAt').then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <React.Fragment>
      <div className='item-page'>
        <div className='title-wrapper'>
          <span className='subtitle'>MADE THE HARD WAY</span>
          <span className='title'>NEW ARRIVAL</span>
          <div className='title-separator'>
            <span>x</span>
          </div>
        </div>
        <div className='container-items'>
          <div className='items'>
            {productByArrival
              .filter((item, index) => index < 4)
              .map((item) => (
                <CollectionItem key={item._id} item={item} />
              ))}
          </div>
          <QuickView item={quickViewItem} />
        </div>
      </div>
      <div className='item-page'>
        <div className='title-wrapper'>
          <span className='subtitle'>MADE THE HARD WAY</span>
          <span className='title'>BEST SELLER</span>
          <div className='title-separator'>
            <span>x</span>
          </div>
        </div>
        <div className='container-items'>
          <div className='items'>
            {productsBySell
              .filter((item, index) => index < 4)
              .map((item) => (
                <CollectionItem key={item._id} item={item} />
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  quickViewItem: state.shop.itemQuickView,
});

export default connect(mapStateToProps)(Item);
