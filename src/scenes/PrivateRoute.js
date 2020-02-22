import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Api from '../Api';
import { routes } from './router';


function PrivateRoute({component: Component, ...rest}) {
    return(
    <Route 
        {...rest} 
        render={ (props) =>     
                Api.Auth.isLoggedIn? 
                    <Component {...props}/> 
                : 
                    <Redirect to={routes.home} /> }
        />  
    ) 
}

export default PrivateRoute;
