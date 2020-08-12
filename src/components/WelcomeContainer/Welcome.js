import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import logo from '../../assets/images/logo_transparent.png';
import WelcomeButton from '../ButtonsContainer/WelcomeButton.js';

export default class Welcome extends Component {
    render() {
        return (
            <Container>
                <Row className="main-pic"><Image src={logo} height="210px" className="main" alt="main logo" /> </Row>
                <Row className='start '> <WelcomeButton /> </Row>
            </Container>
        );
    }
}