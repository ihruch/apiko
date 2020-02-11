export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  init(){
    try {
      const token = window.localStorage.getItem('token');
      this._token = JSON.parse(token);
    } catch (error) {
      console.error(error);
    }
  },

  login() {
    this._token = 'token';
    this._storeToken();
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
    } catch (error) {
      console.error(error);
    }

  }

}

export function init(){
  Auth.init();
}
