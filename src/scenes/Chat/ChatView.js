import React from 'react';
import { routes } from './../router';
import { Redirect } from 'react-router-dom';
import Api from './../../Api';
import s from './Chat.module.scss';

function Chat({items, sendMessage, text, setText}) {


   return (
      <div className={s.container}>
         {items.map( (i) => <p>почему это </p>)}
         <input value={text} onChange={ e => setText(e.target.value)}/>
         <button onClick={sendMessage} type="button" >Send</button>
      </div>
   )
}

export default Chat;
