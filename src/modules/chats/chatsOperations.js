import * as actions from './chatsActions';
import { normalize } from 'normalizr';
import Api, { schemas } from '../../Api';

export function createChat() {

    return async function(dispatch) {
        try {
            dispatch(actions.createChat.start());

            const res = await Api.Chats.createChat();

            const {result, entities } = normalize(res.data, schemas.Chat); 
           
            dispatch(actions.createChat.success({result, entities}));

        } catch(error){
            dispatch(actions.createChat.error({message: error.message}));
        }        
    }

}

export function fetchChats() {

    return async function(dispatch) {
        try {
            dispatch(actions.fetchChats.start());

            let res = await Api.Chats.fetchChats();
            
            let { result, entities} = normalize(res.data, schemas.ChatCollection); 
           
            dispatch(actions.fetchChats.success({ result, entities}));

        } catch(error){
            dispatch(actions.fetchChats.error({message: error.message}));
        }        
    }

}
