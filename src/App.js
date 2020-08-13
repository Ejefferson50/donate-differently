import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Welcome from "./components/WelcomeContainer/Welcome.js";
import Login from "./components/LoginContainer/Login.js"
import Feed from "./components/FeedContainer/Feed.js";


function App() {
  return (
    <Router>
    <div className="App">
    <div className="auth-wrapper">
       <div className="auth-inner">
      <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route path="/log-in" component={Login} />
        <Route path="/feed" component={Feed} />
        {/* <Route path="/forgotpw" component={ForgotPassword} /> */}
        {/* <Route path="/menu" component={Menu} /> */}
      </Switch>
      </div>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
