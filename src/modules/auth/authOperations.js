import * as actions from './authActions';
import Api from '../../Api';

export function login(body) {

    return async function(dispatch) {
        try {
            dispatch(actions.login.start());
            
            const res = await Api.Auth.login(body);
            const { user, token } = res.data;  

            Api.Auth.setToken(token);

            dispatch(actions.login.success(user));
        } catch(error){
            dispatch(actions.login.error(error));
        }        
    }
}

export function register(body) {

    return async function(dispatch) {
        try {
            dispatch(actions.register.start());
            
            const res = await Api.Auth.register(body);
            const { user, token } = res.data; // т.к используется axios response приходит в "data"
            
            Api.Auth.setToken(token);

            dispatch(actions.register.success(user));
        } catch(error){
            dispatch(actions.register.error(error));
        }        
    }
}

