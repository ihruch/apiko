import * as actions from './messagesActions';
import { normalize } from 'normalizr';
import Api, { schemas } from '../../Api';

//sendMessage
//fetchMessages

export function sendMessage(chatId, text) {

    return async function(dispatch, getState) {
        const state =  getState(); // редакс санк позволяет тут получить state

        try {
            dispatch(actions.sendMessage.start());

            const res = await Api.Messages.sendMessage(chatId, text);

            const {result, entities } = normalize(res.data, schemas.Message); 
           
            dispatch(actions.sendMessage.success({chatId, result, entities}));

        } catch(error){
            dispatch(actions.sendMessage.error({message: error.message}));
        }        
    }

}

export function fetchMessages(chatId) {

    return async function(dispatch) {
        try {
            dispatch(actions.fetchMessages.start());

            let res = await Api.Messages.fetchMessages(chatId);

            let { result, entities} = normalize(res.data, schemas.MessageCollection); 
           
            dispatch(actions.fetchMessages.success({ chatId, result, entities}));

        } catch(error){
            dispatch(actions.fetchMessages.error({message: error.message}));
        }        
    }

}
