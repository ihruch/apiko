import { createSelector } from 'reselect'


const getProductEntities = state => state.entities.products;
const getUserEntities = state => state.entities.users;

const getLatestIds = state => state.products.latest.items;
const getSellerData = state => state.products.seller;

const sellerProductIds = state => state.products.sellerProducts.items;


export const getSellerProducts = createSelector(
    sellerProductIds,
    ids => ids    
);

export const getSeller = createSelector(
    (state, id) => {
        const users = getUserEntities(state);
        return users[id];
    },
    user => user
);

export const getLatest = createSelector(
    [getProductEntities, getLatestIds],
    (entities, ids) => ids.map(i => entities[i])
);

export const getProduct = createSelector(
    (state, id) => getProductEntities(state)[id],
    product => product
);


export const getProductOwner = createSelector(
    (state, id) => {
        const users = getUserEntities(state);
        const products = getProductEntities(state);
        const product = products[id];
        
        if(!product) { return undefined;} // если нет продукта по вернем yndefined чтобы знат точно
        return users[product.owner || product.ownerId];
    },
    item => item

);


