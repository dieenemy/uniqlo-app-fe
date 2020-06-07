import React from 'react';
import './sidebar.styles.scss';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      max: 0,
      min: 0,
      price: 0,
      test: false,
    };
  }

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      this.filtered
    );
  };

  filtered = () => {
    let filterItem = this.props.items;
    filterItem = filterItem.filter((item) => item.price <= this.state.price);
    this.props.handleChange(filterItem);
  };

  render() {
    const { min, max, price } = this.state;
    return (
      <div className='sidebar-collection'>
        <div className='sidebar-filter'>
          <div className='filter price'>
            <h2>Filter by price</h2>
            <input
              type='range'
              name='price'
              onChange={this.handleChange}
              min={min}
              max={this.props.maxPrice}
              value={this.props.maxPrice}
            />
            <div className='price-output'>
              <p>
                Price: <span>£{this.props.maxPrice}</span>
              </p>
            </div>
          </div>
          <div className='filter categories'>
            <h2>Products categories</h2>
            <ul className='categories-list'>
              <li>
                <p>accessories</p>
              </li>
              <li>
                <p>books</p>
              </li>
              <li>
                <p>clothings</p>
              </li>
              <li>
                <p>homelife</p>
              </li>
              <li>
                <p>stationery</p>
              </li>
            </ul>
          </div>
          <div className='filter colour'>
            <h2>Choose colour</h2>

            <ul>
              <li>
                <span className='color black'></span>
                <p name='color' value='black'>
                  black
                </p>
              </li>
              <li>
                <span className='color blue'></span>
                <p name='color' value='blue'>
                  blue
                </p>
              </li>
              <li>
                <span className='color brown'></span>
                <p name='color' value='grey'>
                  grey
                </p>
              </li>
              <li>
                <span className='color red'></span>
                <p name='color' value='red'>
                  red
                </p>
              </li>
              <li>
                <span className='color orange'></span>
                <p name='color' value='orange'>
                  orange
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
