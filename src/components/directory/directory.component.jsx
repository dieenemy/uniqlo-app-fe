import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'bags',
          imageUrl: 'https://i.ibb.co/YjTJhBP/cat-bag-5-546x546.jpg',
          id: 1,
          linkUrl: 'shop/bags',
        },
        {
          title: 'shoes',
          imageUrl: 'https://i.ibb.co/gvQdNMy/boot-category-1-3.jpg',
          id: 2,
          linkUrl: 'shop/shoes',
        },
        {
          title: 'accessories',
          imageUrl: 'https://i.ibb.co/JqtX1B3/extra-product-12-1.jpg',
          id: 3,
          linkUrl: 'shop/accessories',
        },
        {
          title: 'watches',
          imageUrl: 'https://i.ibb.co/BKxmb2g/cat-watch-2.jpg',
          id: 4,
          linkUrl: 'shop/watches',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory'>
        <div className='title-wrapper'>
          <span className='subtitle'>MADE THE HARD WAY</span>
          <span className='title'>FEATURED CATEGORIES</span>
          <div className='title-separator'>
            <span>x</span>
          </div>
        </div>
        <div className='directory-menu'>
          {this.state.sections.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default Directory;
