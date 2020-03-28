
import React from 'react';
import { routes } from './../router';
import { Link } from 'react-router-dom';

import { FormContainer } from './../../components/Form';
import * as yup from 'yup'; 

import s from './Register.module.scss';

const initialValues = {
  fields: [
    {
      name: 'fullName', 
      type: 'text',
      label: 'FULL NAME'
    },{
      name: 'email',
      type: 'email',
      label: 'EMAIL'
    },{ 
      name: 'password',
      type: 'password',
      label: 'PASSWORD',
      icon: true
    },{ 
      name: 'passwordConfirm',
      type: 'password',
      label: 'PASSWORD AGAIN',
      icon: true
    }
  ]
}


const validationSchema = yup.object().shape({
  fullName: yup.string().required("Name is required"),        
  email: yup.string()
            .email("Email is invalid")
            .required("Email is required"),       
  password: yup.string().required('Password is required'),
  passwordConfirm: yup.string()
            .test('passwordConfirm', 'Passwords must be a match', function(value) {
              return this.parent.password === value;
            })
            .required('Password is required'),
})

const Register = ({ handleSubmit, isError }) => {
  
  return (
    <div className={s.pageLogin}>
      <div className={s.wrapper}>
        {isError &&  <div style={{color: "red"}}>ERROR </div>}  
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
          I already have an account, <Link to={routes.login}>LOG IN</Link>
        </div>

      </div>     
    </div>
  );
    
}

export default Register;


