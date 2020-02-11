
import React from 'react';
import s from './Login.mmodule.scss';
import { routes } from '../router';
import { Link, withRouter } from 'react-router-dom';
import { compose, withHandlers} from 'recompose';
import Api from '../../Api'

function Login({ handleLogin }) {
 return(
    <div>
      <button type="button" onClick={handleLogin}> login </button>
      <Link to={routes.register}> register </Link>
    </div>
 );
}

const enhancer = compose(
  withRouter,
  withHandlers({
    handleLogin: (props) => () => {
      Api.Auth.login();
      props.history.push(routes.home);
    }
  })
);
export default enhancer(Login);

