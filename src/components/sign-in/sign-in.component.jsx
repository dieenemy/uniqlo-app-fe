import React, { useState } from 'react';
import { signin, authenticate, isAuthenticated } from '../../auth/auth';
import { Redirect } from 'react-router-dom';

import './sign-in.component.styles.scss';

const SignIn = ({ handleShowRegister }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferer: false,
  });

  const {
    email,
    password,
    error,
    loading,
    redirectToReferer,
  } = userCredentials;
  const { user } = isAuthenticated();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setCredentials({ ...userCredentials, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.err) {
        setCredentials({
          ...userCredentials,
          error: data.err,
          loading: false,
        });
      } else {
        authenticate(data, () => {
          setCredentials({
            ...userCredentials,
            redirectToReferer: true,
          });
        });
      }
    });
  };

  const redirectUser = () => {
    if (redirectToReferer) {
      if (user && user.role === 1) {
        return <Redirect to='/admin/dashboard' />;
      } else {
        return <Redirect to='/user/dashboard' />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to='/' />;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  const showError = () => (
    <div className='show-error' style={{ display: error ? '' : 'none' }}>
      <h2>
        <strong>Error</strong>: {error}
      </h2>
    </div>
  );

  return (
    <div className='login'>
      {showError()}
      {redirectUser()}

      <div className='login-container'>
        <article id='login'>
          <div className='login-page'>
            <div id='customer-login'>
              <div className='form-login-wrapper'>
                <h2>
                  <span className='ti-user'></span>
                  Login
                </h2>
                <form className='form-login' onSubmit={handleSubmit}>
                  <p className='form-row-username'>
                    <label htmlFor='email'>
                      Username or email&nbsp;<span className='required'>*</span>
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      value={email}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p className='form-row-username'>
                    <label htmlFor='password'>
                      Password&nbsp;<span className='required'>*</span>
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      value={password}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p className='form-row'>
                    <button type='submit' className='form-login__submit'>
                      Log in
                    </button>
                  </p>
                  <div className='login-form-footer'>
                    <span className='lost-password'>
                      <span className='ti-settings'></span>Lost your password?
                    </span>
                    <label htmlFor='' className='form__label-checkbox'>
                      <input type='checkbox' className='form__input-checkbox' />
                      <span>Remember me</span>
                    </label>
                  </div>
                  <div className='social-login-title'>Or login with</div>
                  <div className='social-login'>
                    <div className='social-login-btn'>
                      <span className='btn login-fb-link'>
                        <span className='ti-facebook'></span>
                        Facebook
                      </span>
                    </div>
                    <div className='social-login-btn'>
                      <span className='btn login-google-link'>
                        <span className='ti-google'></span>
                        Google
                      </span>
                    </div>
                  </div>
                </form>
              </div>
              <div className='register-text'>
                <span className='register-or'>Or</span>

                <h2>Register</h2>
                <div className='register-info'>
                  Registering for this site allows you to access your order
                  status and history. Just fill in the fields below, and we’ll
                  get a new account set up for you in no time. We will only ask
                  you for information necessary to make the purchase process
                  faster and easier.
                </div>
                <button
                  onClick={handleShowRegister}
                  className='btn switch-to-register'
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SignIn;
