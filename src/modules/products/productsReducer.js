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
    },
    product: {
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
            isError: false,
            error: null
        }       
    }),
    
    [ actions.fetchLatest.success ]: ( state, action ) => ({
        ...state,
        latest: {
            ...state.latest,
            isLoading: false, 
            items: action.payload.result
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
    }),

    // fetch product 
    [ actions.fetchProduct.start ]: ( state, action ) => ({
        ...state,
        product: {
            ...state.product,
            isLoading: true,
        }       
    }),
    
    [ actions.fetchProduct.success ]: ( state ) => ({
        ...state,
        product: {
            ...state.product,
            isLoading: false, 
        }
    }),
    
    [ actions.fetchProduct.error ]: ( state, action ) => ({
        ...state,
        product: {
            ...state.product,
            error: action.payload, 
            isError: true
        }
    })

}, INITIAL_STATE)
