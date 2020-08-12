import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <h1>Login</h1>
                <form className="page-login">
                <div className="form-group">
                    {/* <label>Username</label> */}
                    <input type="text" className="form-control" placeholder="Enter username" />
                </div>
<br/>
                <div className="form-group">
                    {/* <label>Password</label> */}
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                
                <p className="pw">Forgot 
                        <Link className="link"to="/forgotpw"> Password</Link>
                        ?
                    </p>

                    <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                    <p className="signup">Don't have an Account? 
                        <Link className="link"to="/sign-up"> Sign Up</Link>
                    </p>
            </form>
            </Container>
        );
    }
}