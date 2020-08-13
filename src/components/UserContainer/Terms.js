const { Component } = require("react")
import React, { Component } from 'react';

export default class UserPage extends Component{
    render(){
        return(
            <div className="Terms">
                <h1>Terms And Conditions</h1>
            
            <p>1. YOUR AGREEMENT
                By using this App, you agree to be bound by, and to comply with, these Terms and Conditions. 
                If you do not agree to these Terms and Conditions, please do not use this App.

                PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. 
                Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. 
                Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised 
                Terms and Conditions and the reasonableness of these standards for notice of changes. 
                For your information, this page was last updated as of the date at the top of these terms and conditions.
            </p>
            </div>
        );
    }
}