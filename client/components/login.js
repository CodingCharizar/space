import React, { Component, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';


//Nate: OAuth?
const Login = ({isLogin, setIsLogin}) => {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [showError, setShowError] = useState(false);

  //this should start as false and be changed to true by checking our backend
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect( async ()=>{
    const response = await fetch('/api/user/checkCookie');
    const data = await response.json()
    console.log(data)
    if(data){
      setIsLogin(true)
    }

  }, [])

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

  const checkPassword = async (userData) => {
   const response = await fetch('/api/user/logIn', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userData)})
    console.log(response) 
    const data = await response.json()
    console.log(data)
    setIsLogin(data)
   }

   const signUp = async (userData) => {
    const response = await fetch('/api/user/signUp', {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(userData)})
     const data = await response.json()
     console.log(data)
     setIsLogin(data)
    }

  console.log('isAuthenticad', isLogin)
  
  if (isLogin) {
    console.log('redirected to main')
    return <Redirect to='/main' />;
  }

  return (
    <div className='login_page'>
      <div className='login_wallpaper'>
        <p className='login_head'>Welcome back!</p>
        <p className='login_intro'>Prepare for blastoff</p>
          
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
        <button className='signin_btn' onClick={()=>{checkPassword(userData)}}>
          SIGN IN
        </button>
        <button className='login_wall_btn' onClick={()=>{signUp(userData)}}>SIGN UP</button>
      </div>
    </div>
  );
};

export default Login;
