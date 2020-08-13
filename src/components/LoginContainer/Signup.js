import React, { Component } from 'react';
import LoginButton from '../ButtonsContainer/LoginButton';
import ForgotPassword from '../UtilitiesContainer/ForgotPassword';
import EnterButton from '../ButtonsContainer/EnterButton';



export default class Signup extends Component {

    render() {

        return (
            <div className="signup">
                <center>
                <h1>Signup</h1>
                </center>
                <center>
                    <form>
                        <div>
                            <input type="text" className="inputBox" placeholder="First Name" />
                        </div>
                        <br />

                        <div>
                            <input type="text" className="inputBox" placeholder="Last Name" />
                        </div>
                        <br />

                        <div>
                            <input type="email" className="inputBox" placeholder="Email" />
                        </div>
                        <br />

                        <div>
                            <input type="text" className="inputBox" placeholder="Phone Number (optional)" />
                        </div>
                        <br />

                        <div>
                            <input type="password" className="inputBox" placeholder="Password" />
                        </div>
                        <br />

                        <div>
                            <input type="password" className="inputBox" placeholder="Confirm Password" />
                        </div>
                        <small>**Password must contain at least 8 characters**</small>
                        <br />

                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                            <label className="custom-control-label" for="customControlInline">
                                <small>I have read and agreed to the terms and conditions</small>
                            </label>
                        </div>
                        <br />

                    </form>
                    <LoginButton />
                    <EnterButton />
                </center>
            </div>
        );
    }
}