
import React from 'react';
import s from './Header.module.scss';
import { routes } from '../../scenes/router';
import { Link } from 'react-router-dom';
import Api  from '../../Api';
import Button from './../Button/Button';
import Icon from './../Icon/Icon';
import Avatar from './../Avatar/Avatar';
import Popover from './../Popover/Popover';

function HeaderView ({children, viewer, handleLogout, bgDark, isShowPopover, handlePopoverToggle}) {
    
  return(
    
    <header className={bgDark? s.headerDark : s.header}>
      <div className={s.container}> 

        <div className={s.topLine}>
         
          <div className={s.left}>
            <Link to={routes.home} className={s.logo}>       apiko </Link>
            <Link to={routes.addProduct} className={s.logo}> add </Link>
            <Link to={routes.inbox} className={s.logo}>      inb </Link>
   

          </div> 
         
          <div className={s.right}>
            <Button type="button" title="Sell" height='31px' width='131px'/>
            
            { viewer ?
               <div  className={s.wrapperAvatar}  onClick={(event) => handlePopoverToggle(event)} >
                <Avatar 
                  viewer={viewer} 
                  height="40" 
                  width="40" 
                  className={s.avatar} 
                  circle
                  badge                 
                />
                {isShowPopover &&   
                  <Popover 
                    className={s.popover} 
                    handleLogout={handleLogout}
                    viewer={viewer} 
                  />}
              </div>
              :
              <Link to={routes.login} className={s.loginLink}> Login </Link>
            }
            {/* <Icon name="heart" className={s.favourite}  onClick={() => { console.log('ICON'); }}  /> */}
          </div>

        </div>

        <div className={s.innerContainer}>
          place for search bar
        </div>
         
      </div>
    </header>
  );
}


export default HeaderView;

/* <Link to={routes.home}> Marketplace </Link>
            {" | "}
            <Link to={routes.inbox}> inbox </Link>
            {" | "}
            <Link to={{ pathname: routes.addProduct, state: { modal: true } }}> Add new product </Link> */
