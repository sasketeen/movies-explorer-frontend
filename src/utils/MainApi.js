import { MAIN_API_CONFIG } from './constants';

class MainApi {
  constructor ({ serverLink, headers }) {
    this._serverLink = serverLink;
    this._headers = headers;
  }

  _checkResponse (res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  signUp (formData) {
    return fetch(`${this._serverLink}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(formData)
    }).then(this._checkResponse);
  };

  signIn (formData) {
    return fetch(`${this._serverLink}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(formData)
    }).then(this._checkResponse);
  };

  getUser () {
    return fetch(`${this._serverLink}/users/me`, {
      headers: this._headers
    }).then(this._checkResponse);
  }

  editUserInfo (formData) {
    return fetch(`${this._serverLink}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(formData)
    }).then(this._checkResponse);
  }

  getSavedMovies () {
    return fetch(`${this._serverLink}/movies`, {
      headers: this._headers
    }).then(this._checkResponse);
  }

  saveMovie (movie) {
    return fetch(`${this._serverLink}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movie)
    }).then(this._checkResponse);
  }

  deleteMovie (movieId) {
    return fetch(`${this._serverLink}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._checkResponse);
  }

  addToken () {
    this._headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
  }
}

export default new MainApi(MAIN_API_CONFIG);
