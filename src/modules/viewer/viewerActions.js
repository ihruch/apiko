import { createAction, createAsyncActions }from '@letapp/redux-actions';

export const fetchViewer = createAsyncActions('viewer/FETCH_VIEWER');
export const logout   = createAction('viewer/LOGOUT_VIEWER');