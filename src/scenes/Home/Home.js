import React from "react";
import { Route, Switch } from 'react-router-dom';
import { routes } from "./../router";

import LatestList from './../LatestList/LatestListContainer';
import Header from './../../components/Header/Header';
import Product from './../Product/ProductContainer';
import s from './Home.module.scss';


function Home(){
  return(
    <div className={s.containe}>
      <Header></Header>

      <Switch>
        <Route exact path={routes.home} component={LatestList} />
        <Route exact path={routes.product} component={Product} />
      </Switch>  
      
    </div>
  );
}

export default Home;
