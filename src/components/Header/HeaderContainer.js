
import React from 'react';
import { routes } from '../../scenes/router';
import { withRouter } from 'react-router-dom';
import { compose, withHandlers, withState } from 'recompose';
import Api  from './../../Api';
import { connect } from 'react-redux';
import { viewerActions, viewerSelector } from './../../modules/viewer';
import HeaderView from './HeaderView';

const mapStateToProps = state => ({
    viewer: viewerSelector.getUser(state)
});
const mapDispatchToProps = {
  logoutAction: viewerActions.logout
};

const enhancer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState('isShowPopover', 'popoverToggle' , false),
  withHandlers({

    handlePopoverToggle: (props) => (event) => {
      console.log(event.target);
      event.preventDefault();
      event.stopPropagation();
      props.popoverToggle(!props.isShowPopover);
    },

    handleLogout: (props) => () => {
      Api.Auth.logout();
      props.logoutAction();
      props.history.push(routes.home);
    },
    
  })
);

export default enhancer(HeaderView);

