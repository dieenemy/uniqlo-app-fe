import React, { useState } from 'react';
import Banner from '../../components/banner/other-hero-banner.component';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  return (
    <React.Fragment>
      <Banner>
        <h2>{showRegister ? 'Register' : 'Login'}</h2>
      </Banner>
      <section className='signinup'>
        {showLogin ? (
          <SignIn handleShowRegister={handleShowRegister} />
        ) : (
          <SignUp handleShowLogin={handleShowLogin} />
        )}
      </section>
    </React.Fragment>
  );
};

export default SignInAndSignUpPage;
