import React from 'react';
import s from './Register.module.scss';
import {routes} from './../router';
import {Link} from 'react-router-dom';

function Register() {
  return(
    <div>
      <Link to={routes.login}> login </Link>
    </div>
  );
}

export default Register;

