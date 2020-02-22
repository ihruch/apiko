import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
    latest: {
        items: [],
        isLoading: false,
        isError: false,
        error: null
    }
}
export default handleActions({
    [ actions.fetchLatest.start ]: ( state, action ) => ({
        ...state,
        latest: {
            ...state.latest,
            isLoading: true,
        }       
    }),
    
    [ actions.fetchLatest.success ]: ( state, action ) => ({
        ...state,
        latest: {
            ...state.latest,
            isLoading: false, 
            items: action.payload
        }
    }),
    
    [ actions.fetchLatest.error ]: ( state, action ) => ({
        ...state,
        latest: {
            ...state.latest,
            error: action.payload, 
            isError: true
        }
    })



}, INITIAL_STATE)