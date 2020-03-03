import React from 'react';
import { Route, Redirect } from 'react-router-dom'
// import Api from '../Api';
import { routes } from './router';
import { connect } from 'react-redux';


function PrivateRoute({component: Component, isLoggedOut,  ...rest}) {
    console.log('PrivateRoute', isLoggedOut)
    return(
    <Route 
      {...rest} 
      render={ props =>    
          ( isLoggedOut )? <Component {...props} />  :  <Redirect to={routes.home} /> 
      }
    />  
    ) 
}

//export default PrivateRoute;

const mapStateToProps = state => {  return {isLoggedOut: state.viewer.user } }

export default connect( mapStateToProps, null)(PrivateRoute);
