import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import './search.result.styles.scss';
import SideBar from '../../components/side-bar-collection/sidebar.component';
import Banner from '../../components/banner/other-hero-banner.component';

const SearchResults = ({ searchCollections }) => {
  const [price, setPrice] = React.useState(0);

  const data = (data) => {
    setPrice({ ...price, data });
  };

  return (
    <React.Fragment>
      <Banner>
        <h2>Search</h2>
      </Banner>
      <div className='search-page'>
        <div className='container-items'>
          <SideBar items={searchCollections} handleChange={data} />
          <div className='items'>
            {price.data !== undefined
              ? price.data.map((item) => (
                  <CollectionItem key={item.id} item={item} />
                ))
              : searchCollections.map((item) => (
                  <CollectionItem key={item.id} item={item} />
                ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  searchCollections: state.shop.searchCollections,
});

export default connect(mapStateToProps)(SearchResults);
