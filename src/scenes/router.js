import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home.js';
import NotFound from './NotFound/NotFound'
import Auth from './Auth/Auth.js';
import Inbox from './Inbox/InboxContainer';
import PrivateRoute from './PrivateRoute';
import AddProduct from './AddProduct/AddProductContainer';
import Profile from './Profile/ProfileView';


export const routes = {
  home:       '/',
  auth:       '/auth',
  login:      '/auth/login',
  register:   '/auth/register',
  inbox:      '/inbox',
  addProduct: '/add-product',
  product:    '/products/:id',
  profile:    '/profile',
  seller:     '/users/:id',
  chat:       '/inbox/:id',
};

class SwitchRouters extends React.Component {

  render() {
    return(
      <Switch >
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.auth} component={Auth} />
        <PrivateRoute exact path={routes.inbox} component={Inbox}/>
        <PrivateRoute exact path={routes.chat} component={Inbox}/>

        <PrivateRoute exact path={routes.profile} component={Profile} />
        <Route exact path={routes.addProduct} component={AddProduct} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default function AllRoutes() {
  return (
    <BrowserRouter>
      < SwitchRouters /> 
    </BrowserRouter>
  );
}

// *******************************************************
// class SwitchRouters extends React.Component {
//   prevLocation = this.props.location;

//   componentWillUpdate(nextProps) {
//     const { location } = this.props;

//     if (nextProps.history.action !== 'POP' && 
//     (!location.state || !location.state.modal) ) {
//       this.prevLocation = this.props.location;
//     }
//   }

//   render() {
//     const { location } = this.props;
//     const isModal = !!(location.state && location.state.modal && this.prevLocation !== location);
  
//     return(
//       <Fragment>

//         <Switch location={isModal? this.prevLocation : location}>
//           <Route path={routes.auth} component={Auth} />
//           <PrivateRoute path={routes.inbox} component={Inbox}/>
//           <Route path={routes.addProduct} component={AddProduct} />
//           <Route exact path={routes.home} component={Home} />
//           <Route component={NotFound} />
//         </Switch>

//         { isModal  && <Route path={routes.addProduct}> <AddProduct isModal/></Route>}
        
//       </Fragment>
//     );
//   }
// }

// export default function AllRoutes() {
//   return (
//     <BrowserRouter>
//       <Route component={SwitchRouters} /> 
//     </BrowserRouter>
//   );
// }

