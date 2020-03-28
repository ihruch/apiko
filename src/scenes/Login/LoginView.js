
import React from 'react';
import s from './Login.module.scss';
import { routes } from './../router';
import { Link } from 'react-router-dom';
import { FormContainer } from './../../components/Form';
import * as yup from 'yup'; 

const initialValues = {
  fields: [
    {
      name: 'email',
      type: 'email',
      label: 'EMAIL'
    },{ 
      name: 'password',
      type: 'password',
      label: 'PASSWORD',
      icon: true
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

const Login = ({ handleSubmit }) => {

  return (
    <div className={s.pageLogin}>
      <div className={s.wrapper}>

        <div className={s.innerWrapper}> 
          <h2>Login</h2>
          <FormContainer 
            validationSchema={validationSchema}
            initValues={initialValues} 
            handleSubmit={handleSubmit}
            btnTitle="Continue"
            btnType="submit"
          >   
          </FormContainer>
        </div>

        <div className={s.secondPartForm}>
          I have no account, <Link to={routes.register}>REGISTER NOW</Link>
        </div>

      </div>     
    </div>
  );
    
}

export default Login;


