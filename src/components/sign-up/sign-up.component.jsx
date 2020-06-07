import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sign-up.component.styles.scss';
import { signup } from '../../auth/auth';

const SignUp = ({ handleShowLogin }) => {
  const [userCredentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
  });

  const { name, email, password, error, success } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (password !== confirmPassword) {
    //   alert("password don't match");
    //   return;
    // }

    setCredentials({ ...userCredentials, error: false });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setCredentials({
          ...userCredentials,
          error:
            data.error.split(' ')[0] === 'Password'
              ? data.error
              : data.error.split(':')[2],
          success: false,
        });
      } else {
        setCredentials({
          ...userCredentials,
          name: '',
          email: '',
          password: '',
          error: '',
          success: true,
        });
      }
    });
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

  const showSuccess = () => (
    <div className='show-success' style={{ display: success ? '' : 'none' }}>
      <h2>
        New account is created. Please{' '}
        <strong>
          <Link to='/signinandsignup'>Signin</Link>
        </strong>
      </h2>
    </div>
  );

  return (
    <div className='register'>
      {showError()}
      {showSuccess()}

      <div className='register-container'>
        <article id='register'>
          <div className='register-page'>
            <div id='customer-register'>
              <div className='form-register-wrapper'>
                <h2>
                  <span className='ti-user'></span>
                  Register
                </h2>
                <form className='form-register' onSubmit={handleSubmit}>
                  <p className='form-row-username'>
                    <label htmlFor='name'>
                      Username&nbsp;<span className='required'>*</span>
                    </label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      value={name}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p className='form-row-username'>
                    <label htmlFor='email'>
                      Email address&nbsp;<span className='required'>*</span>
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

                  <div className='privacy-policy-text'>
                    <p>
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our privacy policy
                    </p>
                  </div>
                  <p className='form-row'>
                    <button type='submit' className='form-login__submit'>
                      Register
                    </button>
                  </p>
                </form>
              </div>
              <div className='register-text'>
                <h2>Register</h2>
                <div className='register-info'>
                  Registering for this site allows you to access your order
                  status and history. Just fill in the fields below, and
                  weâ€™ll get a new account set up for you in no time. We
                  will only ask you for information necessary to make the
                  purchase process faster and easier.
                </div>
                <button
                  onClick={handleShowLogin}
                  className='btn switch-to-register'
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SignUp;
