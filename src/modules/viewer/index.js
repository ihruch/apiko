// нужен для инициализации app

import reducer from  './viewerReducer';
import * as viewerActions from './viewerActions';
import * as viewerOperations from './viewerOperations';
import * as viewerSelector from './viewerSelector';

export {
    viewerActions, viewerOperations, viewerSelector
};

export default reducer;