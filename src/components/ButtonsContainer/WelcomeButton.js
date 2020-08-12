import React from 'react';
import { withRouter } from 'react-router-dom';
import './buttons.css';

function WelcomeButton() {
    const Button = withRouter(({history}) => (
       <button type="button" className="welcome" 
       onClick={() => {history.push('/log-in')}}> Welcome </button>

   ));
   return <Button />
}

export default WelcomeButton;