import { useLocation } from 'react-router-dom';

import './MovieCard.scss';

export default function MovieCard ({
  nameRU,
  trailerLink,
  thumbnail,
  duration,
  isSaved
}) {
  const { pathname } = useLocation();
  const isSavedMoviePage = pathname === '/saved-movies';

  return (
    <div className="card">
      <div className="card__movie-info">
        <p className="card__movie-name">{nameRU}</p>
        <span className="card__movie-duration">{duration}</span>
      </div>
      <a
        href={trailerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="card__link"
      >
        <img
          src={thumbnail}
          alt={`Заставка трейлера к фильму ${nameRU}`}
          className="card__image"
        />
      </a>
      <button
        aria-label="Кнопка сохранения фильма"
        className={`card__button ${
          isSaved && !isSavedMoviePage && 'card__button_type_saved'
        } ${isSavedMoviePage && 'card__button_type_delete'}`}
      >
        {!isSaved && !isSavedMoviePage && 'Сохранить'}
      </button>
    </div>
  );
}
