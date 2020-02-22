import { combineReducers } from 'redux';
import app from './app';
import auth from './auth';
import viewer from './viewer';
import products from './products';

export default combineReducers({
    app,
    auth,
    viewer,
    products
})
