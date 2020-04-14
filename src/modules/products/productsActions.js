import { createAsyncActions }from '@letapp/redux-actions';

export const fetchLatest = createAsyncActions('products/FETCH_LATEST');
export const addProduct = createAsyncActions('products/ADD_NEW_PRODUCT');
export const fetchProduct = createAsyncActions('products/FETCH_PRODUCT');

export const fetchSeller = createAsyncActions('priducts/FETCH_SELLER');
export const fetchSellerList = createAsyncActions('priducts/FETCH_SELLER_PRODUCTS');