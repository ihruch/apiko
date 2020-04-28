import React from "react";
import { Route, Switch} from 'react-router-dom';
import { routes } from "./../router";

import LatestList from './../LatestList/LatestListContainer';
import Header from '../../components/Header/HeaderContainer';
import Product from './../Product/ProductContainer';
import Seller from './../Seller/SellerContainer';

import s from './Home.module.scss';


function Home(){

  return(
    <div className={s.cont}>
      <Header />
      <div className={s.container}>
        <Switch>
          <Route exact path={routes.home}    component={LatestList} />
          <Route exact path={routes.product} component={Product}    />
          <Route exact path={routes.seller}  component={Seller}     />
        </Switch> 
      </div> 
      
    </div>
  );
}

export default Home;
