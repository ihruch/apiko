
import React from 'react';
//import s from './Login.module.scss';

import { FormContainer } from './../../components/Form';
import * as yup from 'yup'; 

const initialValue = {
  fields: [
    {
      name: 'email',
      type: 'email',
      label: 'EMAIL'
    },{ 
      name: 'password',
      type: 'password',
      label: 'PASSWORD'
    }
  ]
}

const validationSchema = yup.object().shape({
      email: yup.string()
          .email("Email is invalid")
          .required("Email is required"),
      password: yup.string()
          .required("Email is required")
})

const Login = ({ handleLogin }) => {

  return (
    <FormContainer 
      validationSchema = {validationSchema}
      initValues={initialValue} 
      handleLogin={handleLogin}
    >   
    </FormContainer>
  );
    
}

export default Login;


