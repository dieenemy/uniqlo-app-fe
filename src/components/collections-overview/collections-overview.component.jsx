import React from 'react';
import { connect } from 'react-redux';

import './collections-overview.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.conponent';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import QuickView from '../quick-view/quick-view.component';
import { OtherFunction } from '../../provider/scroll-button.provider';

const CollectionOverview = ({ collections, quickViewItem }) => {
  const { visible, cssClass } = React.useContext(OtherFunction);

  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
      <QuickView cssClass={cssClass} visible={visible} item={quickViewItem} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  quickViewItem: state.shop.itemQuickView,
  collections: selectCollectionForPreview(state),
});

export default connect(mapStateToProps)(CollectionOverview);
