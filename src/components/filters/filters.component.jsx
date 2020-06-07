import React, { useState } from 'react';
import './filter.styles.scss';

const Filters = ({
  prices,
  handleFilters,
  sortAscending,
  sortDescending,
  popularity,
  newness,
  collectionItem,
}) => {
  const [value, setValue] = useState(0);
  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilter = (e) => {
    e.preventDefault();
    setShowFilter(!showFilter);
  };

  const handleChange = (event) => {
    handleFilters(event.target.value);
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <div className='shop-loop-head'>
        <p className='result-count'>
          Showing all {collectionItem.length} results
        </p>
        <div className='uniqlo-show-sidebar-btn'>
          <span className='uniqlo-side-bar-icon'></span>
          <span>Show sidebar</span>
        </div>
        <div className='uniqlo-filter-buttons'>
          <a
            href=''
            className={`open-filters btn-opened ${showFilter ? 'show' : ''}`}
            onClick={handleShowFilter}
          >
            Filters
          </a>
        </div>
      </div>
      <div
        className={`filters-area filters-opened ${showFilter ? 'show' : ''}`}
      >
        <div className='filters-inner-area- row'>
          <div id='widget_sorting' className='filter-widget'>
            <h5 className='widget-title'>Price filter</h5>
            <form action='' className='with-list'>
              <ul>
                <li>
                  <span onClick={newness}>Default</span>
                </li>
                <li>
                  <span onClick={popularity}>Popularity</span>
                </li>
                <li>
                  <span>Average rating</span>
                </li>
                <li>
                  <span onClick={newness}>Newness</span>
                </li>
                <li>
                  <span onClick={sortAscending}>Price: low to high</span>
                </li>
                <li>
                  <span onClick={sortDescending}>Price: high to low</span>
                </li>
              </ul>
            </form>
          </div>
          <div id='price_filter' className='filter-widget'>
            <h5 className='widget-title'>Price filter</h5>
            <div className='uniqlo-price-filter'>
              <ul>
                {prices.map((price, index) => (
                  <li key={index}>
                    <input
                      onChange={handleChange}
                      value={`${price._id}`}
                      name={price}
                      type='radio'
                    />
                    <span>
                      <span className='price-amount'>
                        <span className='price-currency'></span>
                        {price.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='color_filter filter-widget'>
            <h5 className='widget-title'>filter by color</h5>
            <div className='has-scrollbar'>
              <ul>
                <li className='with-swatch-color'>
                  <span>
                    <span className='filter-swatch'>
                      <span style={{ backgroundColor: '#0c0c0c' }}></span>
                    </span>
                    Black
                  </span>
                </li>
                <li className='with-swatch-color'>
                  <span>
                    <span className='filter-swatch'>
                      <span style={{ backgroundColor: '#aa6927' }}></span>
                    </span>
                    Brown
                  </span>
                </li>
                <li className='with-swatch-color'>
                  <span>
                    <span className='filter-swatch'>
                      <span style={{ backgroundColor: '#539b2d' }}></span>
                    </span>
                    Green
                  </span>
                </li>
                <li className='with-swatch-color'>
                  <span>
                    <span className='filter-swatch'>
                      <span style={{ backgroundColor: '#1c9bb5' }}></span>
                    </span>
                    Blue
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Filters;
