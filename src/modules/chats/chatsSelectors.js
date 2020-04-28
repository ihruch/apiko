import { createSelector } from 'reselect'


const getChatsEntities = state => state.entities.chats;
const getUserEntities = state => state.entities.users;
const getIds = state => state.chats.items;


export const getChats = createSelector(
    [getChatsEntities, getIds],
    (entities, ids) => ids.map(i => entities[i])
);

// export const getProduct = createSelector(
//     (state, id) => getProductEntities(state)[id],
//     product => product
// );


// export const getProductOwner = createSelector(
//     (state, id) => {
//         const users = getUserEntities(state);
//         const products = getProductEntities(state);
//         const product = products[id];
        
//         if(!product) { return undefined;} // если нет продукта по вернем yndefined чтобы знат точно
//         return users[product.owner || product.ownerId];
//     },
//     item => item

// );


