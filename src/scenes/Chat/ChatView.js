import React, {useRef, useEffect} from 'react';
import { routes } from './../router';
import { Redirect } from 'react-router-dom';
import Api from './../../Api';
import s from './Chat.module.scss';



function Chat({items, sendMessage, text, setText}) {
   const msgRef = React.createRef();
  console.log('Chat ', items)
   useEffect(() => {
         //msgRef.current.offsetTop = msgRef.current.scrollHeight;

         msgRef.current.scrollIntoView({
            behavior: 'smooth'
          });
      },
      [items]
    );

   return (
      <div className={s.container}>
         <div className={s.header}>
            {items.map( (i) =>
               <p key={i.id} className={s.message}>{i.text}</p>)
            }
            <div ref={msgRef} />
         </div>
         <div className={s.footer}>
            <input value={text} onChange={ e => setText(e.target.value)}/>
            <button onClick={sendMessage} type="button" >Send</button>
         </div>
      </div>
   )
}

export default Chat;
