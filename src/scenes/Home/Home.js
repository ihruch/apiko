import React from "react";
import { Route, Switch} from 'react-router-dom';
import { routes } from "./../router";

import LatestList from './../LatestList/LatestListContainer';
import Header from './../../components/Header/Header';
import Product from './../Product/ProductContainer';
import Test from './../../components/test';
import s from './Home.module.scss';


function Home(props){
  console.log("Component HOME");
  console.log("Component HOME props", props);

  return(
    <div className={s.containe}>
      <Header></Header>
      <div className={s.container}>
        <Switch>
          <Route exact path={routes.home } component={LatestList} />
          <Route exact path={routes.product} component={Product}    />
        </Switch> 
      </div> 
      
    </div>
  );
}

export default Home;
