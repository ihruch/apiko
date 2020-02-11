import React from "react";
import s from './Home.module.scss';
import Header from './../../components/Header/Header';

function Home(){
  return(
    <div className={s.container}>
      <Header />
      <hr/>
      HOME PAGE
    </div>
  );
}

export default Home;
