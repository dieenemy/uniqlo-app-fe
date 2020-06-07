import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getFilteredProducts, listRelatedProducts } from '../../auth/apiCore';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../collection-item/collection-item.component';
import './collection.styles.scss';
import QuickView from '../quick-view/quick-view.component';
import { OtherFunction } from '../../provider/scroll-button.provider';
import { prices } from '../fixedPrices';
import Filters from '../filters/filters.component';

const CollectionPage = ({ quickViewItem, match }) => {
  const [myFilters, setMyFilters] = useState({
    filters: { price: [] },
  });

  const { visible, cssClass } = React.useContext(OtherFunction);
  const [price, setPrice] = React.useState(0);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(100);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);

  const loadFilteredResults = (newFilters) => {
    // console.log(newFilters);
    getFilteredProducts(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const collectionItem = products.filter(
    (item) => item.category.name.toLowerCase() === match.params.collectionId
  );

  const handleFilters = (filters, filterBy) => {
    // console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === 'price') {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  const handlePrice = (value) => {
    const data = prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };

  const sortAscending = () => {
    const dataArray = [...collectionItem];
    setProducts(dataArray.sort((a, b) => a.price - b.price));
  };

  const sortDescending = () => {
    const dataArray = [...collectionItem];
    setProducts(dataArray.sort((a, b) => b.price - a.price));
  };

  const popularity = () => {
    const dataArray = [...collectionItem];
    setProducts(dataArray.sort((a, b) => b.sold - a.sold));
  };

  const newness = () => {
    const dataArray = [...collectionItem];
    setProducts(
      dataArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    );
  };

  useEffect(() => {
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);

  return (
    <div className='collection-page'>
      <h2 className='title'>{match.params.collectionId}</h2>
      <div className='container-items'>
        <Filters
          collectionItem={collectionItem}
          newness={newness}
          popularity={popularity}
          sortAscending={sortAscending}
          sortDescending={sortDescending}
          prices={prices}
          handleFilters={(filters) => handleFilters(filters, 'price')}
        />
        <div className='items'>
          {collectionItem.map((item) => (
            <CollectionItem key={item._id} item={item} />
          ))}
        </div>
      </div>
      <QuickView cssClass={cssClass} visible={visible} item={quickViewItem} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  quickViewItem: state.shop.itemQuickView,
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default withRouter(connect(mapStateToProps)(CollectionPage));
