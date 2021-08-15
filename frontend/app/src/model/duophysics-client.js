
class DuoPhysicsClient {
  constructor() {
    this._userId = localStorage.getItem('UserId');
    this._userName = localStorage.getItem('UserName');
    this._userToken = localStorage.getItem('UserToken');
  }

  ServerUrl = "http://localhost:8080"

  _userId = ""
  _userToken = ""
  _userName = ""

  updateHeaderCallback = undefined

  isLoggedIn = () => {
    if (!this._userToken || this._userToken.length == 0) {
      return false;
    }
    return true;
  }

  getUserId = () => {
    return this._userId;
  }

  getUserToken = () => {
    return this._userToken;
  }

  getUserName = () => {
    return this._userName;
  }

  onLogin = (id, userName, userToken) => {
    localStorage.setItem('UserId', id);
    localStorage.setItem('UserName', userName);
    localStorage.setItem('UserToken', userToken);

    this._userId = id;
    this._userToken = userToken;

    if (this.updateHeaderCallback) {
      this.updateHeaderCallback();
    }
  }

  logout = () => {
    localStorage.removeItem('UserId');
    localStorage.removeItem('UserToken');
    localStorage.removeItem('Username');

    this._userId = "";
    this._userToken = "";
    this._userName = "";

    if (this.updateHeaderCallback) {
      this.updateHeaderCallback();
    }
  }
}

export let client = new DuoPhysicsClient()
export default client
