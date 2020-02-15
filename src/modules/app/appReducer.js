import { handleActions } from '@letapp/redux-actions';
import * as actions from './appActions';

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    error: null,

}
export default handleActions({
    [ actions.initialization.start ]: ( state, action ) => ({
        ...state,
        isLoading: true,
        error: null, 
        isError: false
    }),
    
    [ actions.initialization.success ]: ( state, action ) => ({
        ...state,
        isLoading: false
    }),
    
    [ actions.initialization.error ]: ( state, action ) => ({
        ...state,
        isLoading: false,
        error: action.payload, 
        isError: true
    })



}, INITIAL_STATE)