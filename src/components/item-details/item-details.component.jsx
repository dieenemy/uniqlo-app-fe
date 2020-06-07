import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { API } from '../../config';
import { read, listRelated } from '../../auth/apiCore';
import RelatedItem from '../related item/related-item.component';
import MoreInformation from '../comment item/comment-item.component';
import './item-details.styles.scss';

const ItemDetails = ({ match }) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);
  const { name, price, _id, description, quantity } = product;

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    const productId = match.params.productId;
    loadSingleProduct(productId);
  }, [match]);

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className='in-stock'>In Stock </span>
    ) : (
      <span className='out-stock'>Out of Stock </span>
    );
  };

  return (
    <div className='item-details'>
      <div className='item-details__top'>
        <div className='image'>
          <img src={`${API}/product/photo/${_id}`} alt='' id='image__detail' />
        </div>
        <div className='item-info'>
          <div className='main-info'>
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
            <button type='submit' className='add_to_cart_button'>
              Add to cart
            </button>
            {showStock(quantity)}
          </div>
          <div className='other-info'>
            <div className='add-wishlist'>
              <span className='ti-heart'></span>
              <p>Add to wishlist</p>
            </div>
            <span className='category'>
              Category:<p>{product.category && product.category.name}</p>
            </span>
          </div>
        </div>
      </div>
      <MoreInformation name={name} product={product} />
      <RelatedItem item={relatedProduct} />
    </div>
  );
};

export default withRouter(ItemDetails);
