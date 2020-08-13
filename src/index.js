import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';

//components
import WelcomeTester from './components/LoginContainer/WelcomeTester';
import DonationTester from './components/DonationContainer/DonationTester';


Amplify.configure(awsmobile);





// import fonts
import './assets/fonts/OpenSans-ExtraBold.ttf'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      <Route exact path='/' component={WelcomeTester} />
      <Route path='/donatetest' component={App} />
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
