import React, { Component } from 'react';
import LoginButton from '../ButtonsContainer/LoginButton';
import SignupButton from '../ButtonsContainer/SignupButton';




export default class ForgotPassword extends Component {
    render() {
        return (
            <div className="ResetPassword">
                <div className="ForgotPassword-info">
                    <center>
                        <h1>Forgot Password</h1>
                        </center>
                        <form>
                            <center>
                            <input className="inputBox" type="text" name="Email" placeholder="Email Address" />
                            </center>
                            <br />
                            <br />
                            <center>
                            <input className="inputBox" type="password" name="password" placeholder="New Password" />
                            </center>
                            <br />
                            <br />
                            <center>
                            <input className="inputBox" type="password" name="password" placeholder="Confirm Password" />
                            </center>
                            <br />
                            <br />
                            <center>
                        <SignupButton />
                        <LoginButton />
                       </center>
                    </form>
                </div>
            </div>
        );
    }
}