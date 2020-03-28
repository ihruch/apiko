import React from 'react';
import s from './Auth.module.scss'
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../router';
import Login from '../Login/LoginContainer';
import Register from '../Register/RegisterContainer';
import Header  from './../../components/Header/Header';

function Auth({viewer}) {

  console.log('Coponent Auth', viewer);
  return (
    <div className={s.container}>
      <Header />
      <Switch>
        {viewer && <Redirect to={routes.home} />} 
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.register} component={Register} />
        <Redirect from={routes.auth} to={routes.login} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  viewer: state.viewer.user
})
 
export default connect(mapStateToProps, null)(Auth);
