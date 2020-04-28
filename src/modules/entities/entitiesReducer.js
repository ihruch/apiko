
const INITIAL_STATE = {
    products: {
        // [id]: {}
    },
    users: {
        // [id]: {}
    },
    chats: {
        // [id]: {}
    },
    messages: {
        // [id]: {}
    }

}

function Reducer(state = INITIAL_STATE, action){

    if(action.payload && action.payload.entities) {
       // console.log('entities', action.payload.entities);

        return Object.keys(action.payload.entities).reduce( (accState, key) => {

            const entity = accState[key];
            accState[key] = Object.assign({}, entity, action.payload.entities[key] )

            return accState;
        }, {...state });
         
    }
    return state;
}

export default Reducer;

