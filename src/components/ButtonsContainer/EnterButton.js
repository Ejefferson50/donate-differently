import React from 'react';
import { withRouter } from 'react-router-dom';


function EnterButton() {
     const Button = withRouter(({history}) => (
        <button type="button" className=" Enter-button " 
        onClick={() => {history.push('/enter')}}> Enter </button>

    ));
    return <Button />
}

export default EnterButton;