import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Router from './scenes/router.js';
import './style.scss';
import Api from './Api';

class App extends Component {
  constructor(props){
    super(props);
    Api.init();
  }

  render() {
    return (
      <div className="root">
           <Router />
      </div>
    )
  }
}

ReactDOM.render(
  <App />
  , document.getElementById('root')
);

