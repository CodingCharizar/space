import React, { component } from 'react';
import { Redirect, Route } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, ...rest }) =>
const ProtectedRoute = ({ isLogin, component: Component, ...rest }) => {
//  For future use, check authentication and apply route as a response
console.log('entering protected route')
  return (
    
 <Route
      {...rest}
      render={() => (isLogin ? <Component {...rest} /> : <Redirect to='/' />)}
    //  render = {() => <Component {...rest}/>}
    />

   
  );
};

export default ProtectedRoute;