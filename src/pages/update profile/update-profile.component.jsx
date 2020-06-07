import React, { useState, useEffect } from 'react';
import SideBar from '../../components/side-bar/side-bar';
import { isAuthenticated } from '../../auth/auth';
import { read, update, updateUser } from '../../auth/apiUser';
import Banner from '../../components/banner/other-hero-banner.component';

const UpdateProfile = ({ match }) => {
  console.log(match);

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: false,
    success: false,
  });

  const { token } = isAuthenticated();
  const { name, email, password, error, success } = values;

  const init = (userId) => {
    // console.log(userId);
    read(userId, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true });
      } else {
        setValues({ ...values, name: data.name, email: data.email });
      }
    });
  };

  useEffect(() => {
    init(match.params.userId);
  }, []);

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(match.params.userId, token, { name, email, password }).then(
      (data) => {
        if (data.error) {
          // console.log(data.error);
          setValues({
            error: true,
          });
        } else {
          updateUser(data, () => {
            setValues({
              ...values,
              name: data.name,
              email: data.email,
              success: true,
            });
          });
        }
      }
    );
  };

  const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      <h2>{error}</h2>
    </div>
  );

  const showSuccess = () => (
    <div
      className='alert alert-info'
      style={{ display: success ? '' : 'none' }}
    >
      <h2>Profile updated</h2>
    </div>
  );

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
                Name&nbsp;<span className='required'>*</span>
              </label>
              <input onChange={handleChange('name')} type='text' value={name} />
              <label htmlFor='email'>
                Email &nbsp;<span className='required'>*</span>
              </label>
              <input
                onChange={handleChange('email')}
                value={email}
                type='email'
              />
              <label htmlFor='password'>
                Password&nbsp;<span className='required'>*</span>
              </label>
              <input
                onChange={handleChange('password')}
                type='password'
                value={password}
              />
              <button type='submit' className='form-login__submit'>
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdateProfile;
