import React, { useState } from 'react';
import { isAuthenticated } from '../../auth/auth';
import { createCategory } from '../../auth/apiAdmin';
import SideBar from '../../components/side-bar/side-bar';
import Banner from '../../components/banner/other-hero-banner.component';
import './adminDashboard.styles.scss';

const AdminDashboard = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const handleChange = (e) => {
    setError('');
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError('');
        setSuccess(true);
      }
    });
  };

  const showSuccess = () => {
    if (success) {
      return <h2 className='text-success'>{name} is created</h2>;
    }
  };

  const showError = () => {
    if (error) {
      return <h2 className='text-danger'>{name} is should be unique</h2>;
    }
  };

  return (
    <React.Fragment>
      <Banner>
        <h2>MY ACCOUNT</h2>
      </Banner>
      <div className='site-content'>
        <div id='type-page'>
          <SideBar />
          <div className='account-content'>
            {showError()}
            {showSuccess()}
            <form className='create-category' onSubmit={handleSubmit}>
              <label htmlFor='name'>
                Create Category&nbsp;<span className='required'>*</span>
              </label>

              <input
                type='text'
                name='name'
                id='name'
                required
                value={name}
                onChange={handleChange}
              />
              <button type='submit' className='form-login__submit'>
                Create Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminDashboard;
