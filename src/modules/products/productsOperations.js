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
