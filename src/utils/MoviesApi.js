import { MOVIES_API_CONFIG } from './constants';

class MoviesApi {
  constructor ({ serverLink, headers }) {
    this._serverLink = serverLink;
    this._headers = headers;
  }

  _checkResponse (res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  getMovies () {
    return fetch(this._serverLink, {
      method: 'GET',
      headers: this._headers
    }).then(this._checkResponse);
  }
}

export default new MoviesApi(MOVIES_API_CONFIG);
