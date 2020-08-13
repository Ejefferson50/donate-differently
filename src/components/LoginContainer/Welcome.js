import React, { Component } from 'react';
import LogoTransparent from '../../images/LogoTransparent.png';
import LoginButton from '../ButtonsContainer/LoginButton';
import SignupButton from '../ButtonsContainer/SignupButton';




export default class Welcome extends Component {
    render() {

        return (
            <div className="welcome">
                <div className="welcome-info">
                    <center>
                    <h1>Donate</h1>
                    <h2>Differently</h2>
                    </center>
                    <div>
                    <center>
                    <img src={LogoTransparent} alt="logo" className="welcomelogo" />
                    </center>
                    <center>
                    <LoginButton />
                    <SignupButton />
                    
                    </center>
                </div>
                
                </div>
            </div>
        );



    }
}