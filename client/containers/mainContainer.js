import React, { component, useState, useEffect } from 'react';
import SpaceContainer from './spaceContainer';
import MarsContainer from './marsContainer';
import EarthContainer from './earthContainer';
import HomeContainer from './homeContainer';
import Nav from '../components/nav';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useRouteMatch,
  } from 'react-router-dom';

  const MainContainer = () => {
    let main = useRouteMatch();
    return (
        <div className='main_container'>
            {<Nav />}
            <div className = 'container_content'>
            <Switch>
            <Route
            path={main.path}
            exact
            render={() => <HomeContainer />}
            />
            <Route
            path={`${main.path}/space`}
            exact
            render={() => <SpaceContainer />}
            />
            <Route
            path={`${main.path}/mars`}
            exact
            render={() => <MarsContainer />}
            />
            <Route
            path={`${main.path}/earth`}
            exact
            render={() => <EarthContainer/>}
            />
            </Switch>
            </div>
        </div>
    )
  }


export default MainContainer