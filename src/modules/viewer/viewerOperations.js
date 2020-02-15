import * as actions from './viewerActions';
import Api from '../../Api';


export function fetchViewer() {

    return async function(dispatch) {
        try {
            dispatch(actions.fetchViewer.start());
            
            const res = await Api.Viewer.get();

            dispatch(actions.fetchViewer.success(res.data));
        } catch(error){
            dispatch(actions.fetchViewer.error(error));
        }        
    }
}
