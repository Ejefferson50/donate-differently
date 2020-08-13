import React from 'react';
import { withRouter } from 'react-router-dom';


function ForgotPasswordButton() {
     const Button = withRouter(({history}) => (
        <button type="button" className=" ForgotPassword-button " 
        onClick={() => {history.push('/forgotpassword')}}> Forgot Password </button>

    ));
    return <Button />
}

export default ForgotPasswordButton;