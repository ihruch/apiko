import React from 'react';
import s from './Auth.module.scss'
import  Header  from './../../components/Header/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../router';
import Login from '../Login/LoginContainer';
import Register from '../Register/Register';
import Api from '../../Api';

function Auth() {
  return (
    <div className={s.container}>
      <Header />

      <Switch>
        {Api.Auth.isLoggedIn && <Redirect to={routes.home} />}
        <Route path={routes.login} component={Login} />
        <Route path={routes.register} component={Register} />
      </Switch>
    </div>

  );
}

export default Auth;
