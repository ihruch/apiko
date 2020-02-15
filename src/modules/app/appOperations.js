import * as actions from './appActions';
import Api from '../../Api';
import {viewerOperations} from './../viewer';

export function init() {

    return async function(dispatch) {
        try {
            dispatch(actions.initialization.start());
            // await new Promise(resolve => setTimeout(resolve, 3000)) ;  ПРОСТО ПРОВЕРКА 
            
            //при запуске приложения инициализируем токен если она есть в localstorage
            await Api.init();

            // Также при инициализации приложенеия фетчим юзера если все ок есть юзер то
            // приложение загружается если нет получаем ошибку
            await dispatch( viewerOperations.fetchViewer());
            
            dispatch(actions.initialization.success());

        } catch(error){
            dispatch(actions.initialization.error(error));
        }        
    }

}
