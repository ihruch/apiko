import React from "react";
import { Route, Switch } from 'react-router-dom';
import { routes } from "./../router";

import LatestList from './../LatestList/LatestListContainer';
import Header from './../../components/Header/Header';

import s from './Home.module.scss';


function Home(){
  return(
    <div className={s.containe}>
      <Header></Header>

      <Switch>
        <Route exact path={routes.home} component={LatestList} />
      </Switch>  
      
    </div>
  );
}

export default Home;
