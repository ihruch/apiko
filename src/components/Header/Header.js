
import React from 'react';
import s from './Header.module.scss';
import { routes } from '../../scenes/router';
import { Link, withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';
import Api  from './../../Api';
import { connect } from 'react-redux';
import { viewerActions } from './../../modules/viewer';

function Header ({handleLogout}) {
  return(
    <header className={s.header}>
      <div className={s.left}>
        <Link to={routes.home}> Marketplace </Link>
        {" | "}
        <Link to={routes.inbox}> inbox </Link>
        {" | "}
        <Link to={routes.addProduct}> Add new product </Link>

      </div>

      <div className={s.right}>
        { Api.Auth.isLoggedIn ?
          <button type="button" onClick={handleLogout}> Logout</button>
          :
          <Link to={routes.login}> Login </Link>
        }
      </div>

    </header>
  );
}

const mapDispatchToProps = {
  logoutAction: viewerActions.logout
};

const enhancer = compose(
  withRouter,
  connect(null, mapDispatchToProps),
  withHandlers({
    handleLogout: (props) => () => {
     
      Api.Auth.logout();
      props.logoutAction();
      props.history.push(routes.home);
     
    },
  })
);

export default enhancer(Header);

