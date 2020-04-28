import { createAsyncActions }from '@letapp/redux-actions';

export const sendMessage = createAsyncActions('chats/SEND_MESSAGES');
export const fetchMessages = createAsyncActions('chats/FETCH_MESSAGES');