import React from 'react';
import { connect } from 'react-redux';

import QuickView from '../quick-view/quick-view.component';
import CollectionItem from '../collection-item/collection-item.component';
import './related-item.styles.scss';

const RelatedItem = ({ quickViewItem, item }) => {
  return (
    <React.Fragment>
      <div className='item-page'>
        <div className='title-wrapper'>
          <span className='title'>RELATED PRODUCTS</span>
        </div>
        <div className='items'>
          {item
            .filter((item, index) => index < 4)
            .map((item) => (
              <CollectionItem key={item._id} item={item} />
            ))}
        </div>
        <QuickView item={quickViewItem} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  quickViewItem: state.shop.itemQuickView,
});

export default connect(mapStateToProps)(RelatedItem);
