import * as actions from './productsActions';
import Api from '../../Api';

export function fetchLatest() {

    return async function(dispatch) {
        try {
            dispatch(actions.fetchLatest.start());
            
            const res = await Api.Products.getLatest();
            dispatch(actions.fetchLatest.success(res.data));

        } catch(error){
            dispatch(actions.fetchLatest.error(error));
        }        
    }

}

export function addProduct(body) {

    return async function(dispatch) {
        try {
            dispatch(actions.addProduct.start());
            
            const res = await Api.Products.addProduct(body);
            dispatch(actions.addProduct.success(res.data));

        } catch(error){
            console.error(error.message);
            dispatch(actions.addProduct.error(error));
        }        
    }

}
