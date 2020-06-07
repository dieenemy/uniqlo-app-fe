import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { isAuthenticated, signout } from '../../auth/auth';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import './.navigation-bar.styles.scss';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import Backdrop from '../backdrop/backdrop.component';

const Navigation = ({ history, hidden }) => {
  const [show, setShow] = useState(false);
  const isAuth = isAuthenticated();

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <Backdrop show={show} handleShow={handleShow} />
      <div className={`mobile-nav ${show ? 'show' : ''}`} onClick={handleShow}>
        <form action='' id='searchform'>
          <label className='screen-reader-text'>Search for:</label>
          <input
            type='text'
            className='search-field'
            placeholder='Search for products'
            autoComplete='off'
          />
          <input type='hidden' name='post-type' id='post-type' />
          <button id='searchsubmit'>
            <span className='ti-search'></span>
          </button>
        </form>
        <div className='menu-mobile-nav-container'>
          <ul id='menu-mobile-nav' className='site-mobile-menu'>
            <li id='menu=item'>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li id='menu=item'>
              <NavLink to='/'>Dashboard</NavLink>
            </li>
            <li id='menu=item'>
              <NavLink to='/'>Shop</NavLink>
            </li>
            <li id='menu=item'>
              <NavLink to='/'>Cart</NavLink>
            </li>
            <li id='menu=item'>
              <NavLink to='/'>Wishlist</NavLink>
            </li>
            <li id='menu=item'>
              <NavLink to='/'>Signout</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className='navigation'>
        <nav className='navigation-header'>
          <ul>
            <li>
              <NavLink exact to='/'>
                Home
              </NavLink>
            </li>
            {isAuthenticated() && isAuthenticated().user.role === 0 ? (
              <li>
                <NavLink to='/user/dashboard'>Dashboard</NavLink>
              </li>
            ) : (
              <li>
                <NavLink to='/admin/dashboard'>Dashboard</NavLink>
              </li>
            )}
            <li>
              <NavLink to='/shop'>Shop</NavLink>
            </li>
            <li>
              <NavLink to='/shop'>Cart</NavLink>
            </li>
          </ul>
        </nav>
        <NavLink to='/' className='navigation-logo'>
          <img
            src={process.env.PUBLIC_URL + '/images/logo/logo-basel.svg'}
            alt='header logo'
          />
        </NavLink>
        <nav className='navigation-icon'>
          <ul>
            {isAuth ? (
              <li>
                <div
                  onClick={() =>
                    signout(() => {
                      history.push('/');
                    })
                  }
                >
                  Sign Out
                </div>
              </li>
            ) : (
              <li>
                <NavLink to='/signinandsignup'>Sign In</NavLink>
              </li>
            )}
            <li>
              <NavLink to='/wishlist'>
                <span className='ti-heart navbar'></span>
              </NavLink>
            </li>
            <li>
              <CartIcon />
            </li>
          </ul>
        </nav>
        <div className='mobile-nav-icon' onClick={handleShow}>
          <span className='uniqlo-burger'></span>
        </div>
        {hidden ? null : <CartDropDown />}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default withRouter(connect(mapStateToProps)(Navigation));
