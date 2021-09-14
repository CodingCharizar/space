import React, { Component, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';


//Nate: OAuth?
const Login = () => {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [showError, setShowError] = useState(false);

  //this should start as false and be changed to true by checking our backend
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const userNameHandler = (e) => {
    setUserData((userData) => ({
      ...userData,
      username: e.target.value,
    }));
  };

  const passwordHandler = (e) => {
    setUserData((userData) => ({
      ...userData,
      password: e.target.value,
    }));
  };

  if (isAuthenticated) {
    return <Redirect to='/main' />;
  }

  return (
    <div className='login_page'>
      <div className='login_wallpaper'>
        <p className='login_head'>Welcome back!</p>
        <p className='login_intro'>Prepare for blastoff</p>
        <Link to='/signup'>
          <button className='login_wall_btn'>SIGN UP</button>
        </Link>
      </div>
      <div className='signin_page'>
        <p className='signin_head'>Sign in to Space</p>
        <form className='signin_form'>
          <input
            className='signin_input'
            placeholder='Username'
            type='text'
            value={userData.username}
            onChange={userNameHandler}
          ></input>
          <input
            className='signin_input signin_pw'
            placeholder='Password'
            type='password'
            value={userData.password}
            onChange={passwordHandler}
          ></input>
          {showError && (
            <div className='login_error'>Invalid username or password</div>
          )}
        </form>
        {/* <a className='signin_forgotPW'>Forgot your password?</a> */}
        <button className='signin_btn' onClick={(e) => userSignIn()}>
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default Login;
