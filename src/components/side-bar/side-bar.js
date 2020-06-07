import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { isAuthenticated } from '../../auth/auth';
import './side-bar.scss';

const SideBar = ({ match }) => {
  const { user } = isAuthenticated();
  const {
    user: { _id },
  } = isAuthenticated();

  return (
    <div className='sidebar'>
      <h3 className='account-title'>My Account</h3>
      <nav className='account-navigation'>
        {user && user.role === 1 ? (
          <ul>
            <li className='account-navigation__link--category'>
              <NavLink to='/admin/dashboard'>Create Category</NavLink>
            </li>
            <li className='account-navigation__link--product'>
              <NavLink to='/admin/product/create'>Create Product</NavLink>
            </li>
            <li className='account-navigation__link--orders'>
              <NavLink to='/admin/orders'>View Orders</NavLink>
            </li>
            <li className='account-navigation__link--manage'>
              <NavLink to='/admin/products'>Manage Product</NavLink>
            </li>
          </ul>
        ) : (
          <ul>
            <li className='account-navigation__link--category'>
              <NavLink to='/user/dashboard'>Orders</NavLink>
            </li>
            <li className='account-navigation__link--product'>
              <NavLink to={`/update/profile/${_id}`}>Account details</NavLink>
            </li>
            {/*<li className='account-navigation__link--orders'>
              <NavLink to='/'>My cart</NavLink>
        </li> */}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default withRouter(SideBar);
