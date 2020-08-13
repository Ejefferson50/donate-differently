import React, { Component } from 'react';
import SignupButton from '../ButtonsContainer/SignupButton';
import ForgotPasswordButton from '../ButtonsContainer/ForgotPasswordButton';
import EnterButton from '../ButtonsContainer/EnterButton';



export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="loginInfo">
                    <center>
                        <h1>Log In</h1>
                        </center>
                        <form>
                            <center>
                            <input className="inputBox" type="text" name="Email" placeholder="Email Address" />
                            </center>
                            <br />
                            <br />
                            <center>
                            <input className="inputBox" type="password" name="password" placeholder="Password" />
                            </center>
                            <br />
                            <br />


                           <center>
                        <SignupButton />
                        <ForgotPasswordButton />
                        <EnterButton />
                        </center>
                       
                    </form>
                </div>
            </div>
        );
    }
}