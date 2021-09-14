import React, { component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link,
  Redirect,
} from 'react-router-dom';

const Nav = () => {
  let main = useRouteMatch();
  return (
    <div className='nav'>
        <Link to='/main'>
        <button className='nav_btns'>Home</button>
      </Link>
      <Link to='/main/space'>
        <button className='nav_btns'>Space</button>
      </Link>
      <Link to='/main/mars'>
        <button className='nav_btns'>Mars</button>
      </Link>
      <Link to='/main/earth'>
        <button className='nav_btns'>Earth</button>
      </Link>
      <div className='user_info'>
        <button className='user_btn'>sign out</button>
      </div>
    </div>
  );
};

export default Nav;
