import React from 'react';
import { connect } from 'react-redux';
import { removeFavoriteItem } from '../../redux/cart/cart.actions';
import './wishlist-item.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import QuickView from '../quick-view/quick-view.component';
import { OtherFunction } from '../../provider/scroll-button.provider';

const WishlistItem = ({ favoriteItem, removeFavoriteItem, quickViewItem }) => {
  const { visible, cssClass } = React.useContext(OtherFunction);

  return (
    <div className='product-grid-item'>
      <div className='remove-button-wrap'>
        <span
          className='remove-button'
          onClick={() => removeFavoriteItem(favoriteItem)}
        >
          Remove
          <span className='remove-loader'></span>
        </span>
      </div>
      <CollectionItem item={favoriteItem} />
      <QuickView cssClass={cssClass} visible={visible} item={quickViewItem} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  quickViewItem: state.shop.itemQuickView,
});

const mapDispatchToProps = (dispatch) => ({
  removeFavoriteItem: (item) => dispatch(removeFavoriteItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistItem);
