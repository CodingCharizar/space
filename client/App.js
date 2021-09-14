import React, { Component, useState, useEffect } from 'react';
import MainContainer from './containers/mainContainer';
import Login from './components/login';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './containers/protectedRoute';

const App = () => {

    //when we have a login set useState to false
    const [isLogin, setIsLogin] = useState(true);
    
    return (
    <Router>
        <Switch>
        <Login path='/' exact/>
        <ProtectedRoute 
                    path ='/main' 
                    component={MainContainer}
                    setIsLogin={setIsLogin}
                />
        </Switch>
    </Router>    
    )
}

export default App;