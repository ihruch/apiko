import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { appOperations } from './modules/app';
import store from './store/createStore';
import Router from './scenes/router.js';
import './style.scss';


class App extends Component {
  constructor(props){
    super(props);

    props.dispatch(appOperations.init());
  }

  render() {
    const { isLoading } = this.props;  

    if(isLoading) {
      return (<div> Loading...</div>)
    }

    return (
      <div className="root">
        <Router />
      </div>
    )
  }
};

store.subscribe( () => {
  console.log( "State :", {state: store.getState()} );
});

const mapStateToProps = (state) => ({
      isLoading: state.app.isLoading 
});

const AppConnect = connect(mapStateToProps, null)(App)

ReactDOM.render(
  <Provider store={store}>
    <AppConnect />
  </Provider>
  , document.getElementById('root')
);

