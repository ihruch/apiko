import { schema } from "normalizr";

export const User = new schema.Entity("users");

export const Product = new schema.Entity("products", 
  {
    owner: User
  }
);

export const sellerProduct = new schema.Entity("products");


export const sellerList = {list: [sellerProduct]}




export const ProductList = [Product];