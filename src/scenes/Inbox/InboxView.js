import React from 'react';
import { Route, Link, generatePath } from "react-router-dom";
import s from './Inbox.module.scss';
// import Api from './../../Api';
import { routes } from './../router';
import Chat from './../Chat/ChatContainer';

function Inbox({isLoading, items}) {
  console.log({items})
   return (
      <div className={s.container}>
         <aside className={s.aside}>
            Cmponent Inbox
            { !items.length?
              null :
              items.map( i =>
                <div key={i.id}>
                  <Link  to={generatePath(routes.chat, {id: i.id})}>
                    {i.product.title}
                  </Link><br/>
                  <small>{i.lastMessage.text}</small>
                  <hr/>
                </div>

            )}
         </aside>

         <div className={s.main}>
            <Route path={routes.chat} component={Chat} />
         </div>
      </div>
   )
}

export default Inbox;
