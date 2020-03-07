import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
    latest: {
        items: [],
        isLoading: false,
        isError: false,
        error: null
    },
    addProduct: {
        product: {},
        isLoading: false,
        isError: false,
        error: null
    }

}
export default handleActions({
    [ actions.addProduct.start ]: ( state, action ) => ({
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
    }),

    // add new product
    [ actions.addProduct.start ]: ( state, action ) => ({
        ...state,
        addProduct: {
            ...state.addProduct,
            isLoading: true,
        }       
    }),
    
    [ actions.addProduct.success ]: ( state, action ) => ({
        ...state,
        addProduct: {
            ...state.addProduct,
            isLoading: false, 
            product: action.payload
        }
    }),
    
    [ actions.addProduct.error ]: ( state, action ) => ({
        ...state,
        addProduct: {
            ...state.addProduct,
            error: action.payload, 
            isError: true
        }
    })

}, INITIAL_STATE)
