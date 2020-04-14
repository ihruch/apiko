import * as actions from './productsActions';
import {normalize} from 'normalizr';
import Api, {schemas} from '../../Api';

export function fetchLatest() {

    return async function(dispatch) {
        try {
            dispatch(actions.fetchLatest.start());
            
            const res = await Api.Products.getLatest();

            let {result, entities} = normalize(res.data, schemas.ProductList);
           
            dispatch(actions.fetchLatest.success({result, entities}));

        } catch(error){            
            dispatch(actions.fetchLatest.error(error.message));
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
            dispatch(actions.addProduct.error(error));
        }        
    }

}

export function fetchProduct(id) {
   
    return async function(dispatch) {
        
        try {
            dispatch(actions.fetchProduct.start());
            
            const res = await Api.Products.getProduct(id);

            let { entities } = normalize(res.data, schemas.Product);

            dispatch(actions.fetchProduct.success({ entities }) );

        } catch(error){
            dispatch(actions.fetchProduct.error({ message: error.message }));
        }        
    }

}

export function fetchSeller(id) {
    
    return async function(dispatch) {
        try {
            dispatch(actions.fetchSeller.start());

            const res = await Api.Products.getSeller(id)

            let { entities } = normalize(res.data, schemas.User);

            dispatch(actions.fetchSeller.success({entities}));
        } catch (error) {
            dispatch(actions.fetchSeller.error({ message: error.message }))

        }    
    }
}

export function fetchSellerProducts(id) {

    return async function(dispatch) {
        try {
            dispatch(actions.fetchSellerList.start());

            const res = await Api.Products.getSellerProducts(id);

            let { result, entities} = normalize(res.data, schemas.sellerList)
           
            dispatch(actions.fetchSellerList.success({ result, entities}));
        } catch (error) {
            dispatch(actions.fetchSellerList.error({message: error.message})); 
        }
    }
    
}
