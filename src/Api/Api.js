import axios from 'axios';
import { addProduct } from '../modules/products/productsOperations';

const urls = {
  login:     '/api/auth/login',
  register:  '/api/auth/register',
  getViewer: '/api/account/user',
  productsLatest: '/api/products/latest',
  addProduct: '/api/products',
  product: '/api/products',
  upload: '/api/upload/images',
}

export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  setToken(token) {
    this._token = token;
    this._storeToken();
    this._setTokenToAxious();
  },

  init(){
    try {
      const token = window.localStorage.getItem('token');
      this._token = JSON.parse(token);
      this._setTokenToAxious(token);
    } catch (error) {
      console.error(error);
    }
  },

  login(body) {
      return axios.post(urls.login, body);
  },

  register(body) {
    return axios.post(urls.register, body );
  },

  logout() {
    this._token = null;
    try {
      window.localStorage.removeItem('token');
    } catch(error) {
      console.error(error);
    }
  },

  _storeToken(){
    try {
      window.localStorage.setItem('token', JSON.stringify(this._token));
    } catch (error)  {
      console.error(error);
    }
  },

  _setTokenToAxious(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${this._token}`;
  },


}//END 

export function init(){
  Auth.init();
}

export const Viewer = {
  getViewer() {
    return axios.get(urls.getViewer);
  }
}// end

export  const Products = {
  getLatest() {
    return axios.get(urls.productsLatest);
  },

  addProduct(body) {
    return axios.post(urls.addProduct, body);
  },

  getProduct(id){
    return axios.get(`${urls.product}/${id}`)
  }
}// end

export const Upload = {
  uploadImage(body) {
    return axios.post(urls.upload, body);
  }
}