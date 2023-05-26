export const movieServerLink = 'https://api.nomoreparties.co';
// export const mainServerLink = 'http://localhost:3001/api';
export const mainServerLink = 'https://sasketeen.diplom.nomoredomains.monster/api';

export const namePattern = '^[-a-zA-ZA-Яа-я\\s]+$';
export const emailRegexp = '[a-z0-9]+@[0-9a-z]+\\.[a-z]{2,}';
export const MOVIES_API_CONFIG = {
  serverLink: `${movieServerLink}/beatfilm-movies`,
  headers: {
    'Content-Type': 'application/json'
  }
};

export const MAIN_API_CONFIG = {
  serverLink: `${mainServerLink}`,
  headers: {
    'Content-Type': 'application/json'
  }
};

export const messages = {
  emptyInput: 'Нужно ввести ключевое слово',
  fetchError: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  noResults: 'Ничего не найдено',
  namePatter: 'Имя может содержать только буквы, дефис и пробел'
};

export const maxShortFilmDuration = 40;
