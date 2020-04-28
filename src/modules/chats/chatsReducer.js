import { handleActions } from '@letapp/redux-actions';
import * as actions from './chatsActions';

const INITIAL_STATE = {
    items: [],  // массив id всех чатов 
    createChat: {
        isLoading: true,
        error: null, 
        isError: false
    },
    fetchChats: {
        isLoading: true,
        error: null, 
        isError: false
    }


}

// createChat
// fetchChats
export default handleActions({
    [ actions.createChat.start ]: ( state, action ) => ({
        ...state,
        createChat: {
            ...state.createChat,
            isLoading: true,
            error: null, 
            isError: false
        }
    }),
    
    [ actions.createChat.success ]: ( state, action ) => ({
        ...state,
        items: [action.payload.result].concat(state.items),
        createChat: {
            ...state.createChat,
            isLoading: false
        }    
    }),
    
    [ actions.createChat.error ]: ( state, action ) => ({
        ...state,
        createChat: {
            ...state.createChat,
            isLoading: false,
            error: action.payload, 
            isError: true
        }
    }),


    //FETCH ALL CHATS
    [ actions.fetchChats.start ]: ( state, action ) => ({
        ...state,
        fetchChats: {
            ...state.fetchChats,
            isLoading: true,
            error: null, 
            isError: false
        }
    }),
    
    [ actions.fetchChats.success ]: ( state, action ) => ({
        ...state,
        items: action.payload.result,
        fetchChats: {
            ...state.fetchChats,
            isLoading: false
        }    
    }),
    
    [ actions.fetchChats.error ]: ( state, action ) => ({
        ...state,
        fetchChats: {
            ...state.fetchChats,
            isLoading: false,
            error: action.payload, 
            isError: true
        }
    }),


}, INITIAL_STATE)