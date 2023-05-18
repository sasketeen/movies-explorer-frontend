export const movieServerLink = 'https://api.nomoreparties.co';
export const mainServerLink = 'https://sasketeen.diplom.nomoredomains.monster';

export const MOVIES_API_CONFIG = {
  serverLink: `${movieServerLink}/beatfilm-movies`,
  headers: {
    'Content-Type': 'application/json'
  }
};

export const MAIN_API_CONFIG = {
  serverLink: `${mainServerLink}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
};

export const messages = {
  emptyInput: 'Нужно ввести ключевое слово',
  fetchError: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  noResults: 'Ничего не найдено'
};

export const maxShortFilmDuration = 40;
