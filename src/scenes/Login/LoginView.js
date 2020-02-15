
import React from 'react';
import s from './Login.module.scss';
import Input from './../../components/Form/Input/Input';
import { Link } from 'react-router-dom';
import  { routes } from './../router.js';

function Login({ fields, isLoading, handleLogin, handleFieldsChange }) {
 return(
    <div>
        <Input  
          fields={fields}
          type="email"
          name="email"
          placeholder="example@gmail.com"
          textLabel="EMAIL"
          onChange={handleFieldsChange}
        />
        <Input 
          fields={fields} 
          type="password"
          name="password"    
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

