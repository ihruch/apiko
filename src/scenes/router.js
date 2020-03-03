import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home.js';
import NotFound from './NotFound/NotFound'
import Auth from './Auth/Auth.js';
import Inbox from './Inbox/Inbox';
import PrivateRoute from './PrivateRoute';

export const routes = {
  home: '/',
  login: '/auth/login',
  register: '/auth/register',
  addProduct: '/add-product',
  auth: '/auth',
  inbox: '/inbox',
};

export default function Router(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <PrivateRoute path={routes.inbox} component={Inbox}/>
          <Auth />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
}
/* <Route path={routes.inbox} component={Inbox} /> */