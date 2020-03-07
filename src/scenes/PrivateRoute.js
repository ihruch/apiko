import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { routes } from './router';
import { connect } from 'react-redux';


const PrivateRoute = ({component: Component, ...rest}) => {
    console.log('PrivateRoute rest', rest.viewer)
    return(
      <Route 
        {...rest} 
        render={ (props) =>    
            rest.viewer ? <Component {...props} />  :  <Redirect to={routes.login} /> 
        }
      />  
    );
}

// export default PrivateRoute;

const mapStateToProps = state => ({viewer: state.viewer.user })
export default connect(mapStateToProps)(PrivateRoute);
