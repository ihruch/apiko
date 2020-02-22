
import React from 'react';
import s from './Login.module.scss';
import Input from './../../components/Form/Input/Input';
import { Link } from 'react-router-dom';
import  { routes } from './../router.js';

function Login({ fields, isLoading, handleLogin, handleFieldsChange }) {
 return(
    <div>
        <Input  
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={fields.email}         
          textLabel="EMAIL"
          onChange={handleFieldsChange}
        />
        <Input 
         
          type="password"
          name="password" 
          value={fields.password}   
          textLabel="PASSWORD"
          onChange={handleFieldsChange}
        />

        <button type="button" onClick={handleLogin}>
          {isLoading ? "loading... " : "login"}  
        </button>
       <Link to={routes.register}> register </Link>
    </div>
 );
}

export default Login;

