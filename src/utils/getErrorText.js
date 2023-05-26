export default function getErrorText (err) {
  switch (err) {
    case 401:
      return 'Неверный email или пароль';
    case 404:
      return 'По запросу ничего не найдено';
    case 409:
      return 'Пользователь с такими данными уже существует';
    case 500:
      return 'На сервере произошла ошибка!';
    default:
      return 'Что-то пошло не так';
  }
};
