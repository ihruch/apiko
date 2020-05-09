// import { createSelector } from 'reselect'
//
//
// const getChatsEntities = state => state.entities.chats;
// const getMessagesEntities = state => state.entities.messages;
// const getIds = state => state.chats.items;
//
//
// export const getChats = createSelector(
//     [getChatsEntities, getIds],
//     (entities, ids) => ids.map(i => entities[i])
// );
//
// export const getChatsWithLastMsg = createSelector(
//   [getChats, getMessagesEntities],
//   (items, messages) => {
//     items.map(item => ({
//       ...item,
//       lastMessage: messages[item.lastMessage],
//     }))
//   }
// );

import { createSelector } from 'reselect';

export const getChatsEntities = (state) => state.entities.chats;
const getChatsIds = (state) => state.chats.items;
const getMessagesEntities = (state) => state.entities.messages;

export const getChats = createSelector(
  [getChatsEntities, getChatsIds],
  (entities, ids) => ids.map((i) => entities[i]),
);

export const getChatsWithLastMessage = createSelector(
  [getChats, getMessagesEntities],
  (chats, messages) =>
    chats.map((chat) => ({ ...chat, lastMessage: messages[chat.lastMessage] })),
);

export const getChat = createSelector(
  (state, id) => getChatsEntities(state)[id],
  (item) => item,
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


