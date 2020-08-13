import React from 'react';

import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
import './App.css';
import MyAmplifyTheme from './MyAmplifyTheme.js';
import DonationTester from './components/DonationContainer/DonationTester';


const App = () => {
  return (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "given_name",            
            placeholder: "First Name",
            required: true,
          },
          {
            type: "family_name",            
            placeholder: "Last Name",
            required: true,
          },
          {
            type: "email",  
            label: "",          
            placeholder: "Email Address",
            required: true,
          },
          {
            type: "phone_number", 
            label: "",           
            placeholder: "Phone Number (optional)",
            required: false,
          },
          {
            type: "password", 
            label: "",           
            placeholder: "Password",
            required: true,
          }          
        ]} 
      />
      <AmplifySignIn 
      headerText="Login"
      slot="sign-in" 
      usernameAlias="email"
      formFields={[        
        {
          type: "email",
          label: "",            
          placeholder: "Email Address",
          required: true,
        },        
        {
          type: "password",
          label: "",            
          placeholder: "Password",
          required: true,
        }          
      ]}  />
      <DonationTester/>
    </AmplifyAuthenticator>

  );
};

export default App;