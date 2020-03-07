import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home.js';
import NotFound from './NotFound/NotFound'
import Auth from './Auth/Auth.js';
import Inbox from './Inbox/Inbox';
import PrivateRoute from './PrivateRoute';
import AddProduct from './AddProduct/AddProductContainer'

export const routes = {
  home: '/',
  auth: '/auth',
  login: '/auth/login',
  register: '/auth/register',
  addProduct: '/add-product',
  inbox: '/inbox',
};

export default function Router(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.auth} component={Auth} />
          <Route path={routes.addProduct} component={AddProduct} />
          <PrivateRoute path={routes.inbox} component={Inbox}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
}
/* <Route path={routes.inbox} component={Inbox} /> */