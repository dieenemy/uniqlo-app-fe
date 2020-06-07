import React from 'react';
import './wishlist.styles.scss';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectFavoriteItems } from '../../redux/cart/cart.selectors';
import WishlistItem from '../../components/wishlist-item/wishlist-item.component';
import Banner from '../../components/banner/other-hero-banner.component';
import ScrollButton from '../../components/scroll-button/scroll-button.component';

const Wishlist = ({ favoriteItems }) => (
  <React.Fragment>
    <Banner>
      <h2>Wishlist</h2>
    </Banner>
    <ScrollButton />

    {favoriteItems.length > 0 ? (
      <div className='wishlist'>
        <div className='wishlist-content-wrapper'>
          <div className='wishlist-content'>
            <div className='wishlist-heading-wrapper'>
              <h4 className='wishlist-title'>Your products wishlist</h4>
            </div>
            <div className='products-element'>
              {favoriteItems.map((favoriteItem) => (
                <WishlistItem
                  key={favoriteItem.id}
                  favoriteItem={favoriteItem}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <span className='empty-message'>Your wishlist is empty</span>
    )}
  </React.Fragment>
);

const mapStateToProps = createStructuredSelector({
  favoriteItems: selectFavoriteItems,
});

export default connect(mapStateToProps)(Wishlist);
