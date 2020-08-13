import React, {Component} from 'react';
import EnterButton from '../UtilitiesContainer/ButtonTester';

export default class WelcomeTester extends Component{

    render(){
        return(
            <div className="welcome-test">
                <h1>Welcome Tester Page</h1>
                 <EnterButton/>
            </div>
        )
    }
}