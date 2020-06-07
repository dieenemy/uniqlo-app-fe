import React from 'react';
import './search-button.styles.scss';
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import { searchCollections } from '../../redux/shop/shop.actions';

import { connect } from 'react-redux';

class SearchButton extends React.Component {
  state = {
    search: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSearch = (event) => {
    event.preventDefault();
    const { collections, searchCollections } = this.props;
    const { search } = this.state;

    const collectionsFilters = collections[0].items.concat(
      collections[1].items,
      collections[2].items,
      collections[3].items
    );

    if (search.length > 0) {
      searchCollections(
        collectionsFilters.filter((item) => {
          let tempTitle = item.name.toLowerCase().slice(0, search.length);
          if (search.toLowerCase() === tempTitle) {
            return item;
          }
        })
      );
    }
    this.setState({
      search: '',
    });
    this.props.history.push('/searchresults');
  };

  render() {
    return (
      <form className='search-container' onSubmit={this.handleSearch}>
        <button className='search' type='submit'>
          <img src={process.env.PUBLIC_URL + '/images/search.svg'} alt='' />
        </button>
        <input
          onChange={this.handleChange}
          type='text'
          className='search-text'
          name='search'
          placeholder='Search'
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchCollections: (searchItem) => dispatch(searchCollections(searchItem)),
});

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchButton)
);
