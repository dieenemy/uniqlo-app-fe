import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import './collection-item.component.styles.scss';
import CustomButton from '../custom-button/custom-button';
import { addItem, addToFavorite } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectFavoriteItems } from '../../redux/cart/cart.selectors';
import { getItemQuickView } from '../../redux/shop/shop.actions';
import { OtherFunction } from '../../provider/scroll-button.provider';
import { API } from '../../config';

const CollectionItem = ({
  item,
  addItem,
  addToFavorite,
  favoriteItems,
  getItemQuickView,
  history,
}) => {
  const { name, price } = item;

  const { cssClass } = React.useContext(OtherFunction);

  const checkStatus = favoriteItems.some(
    (favoriteItem) => favoriteItem.id === item.id
  );

  const [likeStatus, setLikeStatus] = useState(checkStatus);

  const handleChangeStatus = () => {
    setLikeStatus(!likeStatus);
    console.log(likeStatus);
  };

  return (
    <div className='collection-item'>
      <Link
        to={`/product/${item._id}`}
        className='image'
        style={{
          backgroundImage: `url(${API}/product/photo/${item._id})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>£{price}</span>
      </div>

      <div
        className='quick-view'
        onClick={() => {
          getItemQuickView(item);
          cssClass();
        }}
      >
        <span data-tip data-for='view' className='ti-plus'></span>
        <ReactTooltip id='view' type='dark'>
          <span>Quick view</span>
        </ReactTooltip>
      </div>
      <div
        className='favorite-toggle'
        onClick={() => {
          addToFavorite(item);
          handleChangeStatus();
        }}
      >
        <span
          data-tip
          data-for='heart'
          className={`${likeStatus ? 'border--change' : ''} ti-heart`}
        />
        <ReactTooltip id='heart' type='dark'>
          <span>Add to favorite</span>
        </ReactTooltip>
      </div>

      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  favoriteItems: selectFavoriteItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addToFavorite: (item) => dispatch(addToFavorite(item)),
  getItemQuickView: (item) => dispatch(getItemQuickView(item)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CollectionItem)
);
