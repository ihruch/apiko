import axios from 'axios';

const urls = {
  login:     '/api/auth/login',
  register:  '/api/auth/register',
  getViewer: '/api/account/user'
}



export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  setToken(token) {
    this._token = token;
    this._storeToken();
    this._setTokenToAxious(token);
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
      return axios.post(urls.login, body );
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
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

}//END 

export const Viewer = {

  get(){
    return axios.get(urls.getViewer)
  }

}// end

export function init(){
  Auth.init();
}
