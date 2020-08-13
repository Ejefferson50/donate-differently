import React, {Component} from 'react';
import {AmplifySignOut} from '@aws-amplify/ui-react'


export default class DonationTester extends Component{

    render(){
        return(
            <div className="welcome-test">
                <h1>You have successfully entered the App</h1>
                <h3>Good for you!! Yay!</h3>
                <h4>What do you want a cookie now!?</h4>
                 <AmplifySignOut/>
            </div>
        )
    }
}