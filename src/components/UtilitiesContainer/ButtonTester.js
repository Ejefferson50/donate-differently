import React from 'react';
import { withRouter } from 'react-router-dom';


function EnterButton(){
    const Button = withRouter(({history}) => (
        <button       
        type="button"
        class="btn btn-info"         
        onClick={() => {history.push('/donatetest')}}
        > Enter </button>
    ));


    return <Button />    
    

}

export default EnterButton;