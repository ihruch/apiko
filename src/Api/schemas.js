import { schema } from "normalizr";

export const User = new schema.Entity("users");

export const Product = new schema.Entity("products",
  {
    owner: User
  }
);

export const sellerProduct = new schema.Entity("products");

export const Message = new schema.Entity('messages');
export const Chat = new schema.Entity('chats', {
  lastMessage: Message
});

export const sellerList = {list: [sellerProduct]};

export const ProductList = [Product];
export const ChatCollection = [Chat];
export const MessageCollection = [Message];

