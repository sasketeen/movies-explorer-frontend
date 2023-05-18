import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import CurrentUserContext from '@/contexts/currentUserContext';
import getPrettyTime from '../../utils/getPrettyTime';

import './MovieCard.scss';

export default function MovieCard ({
  data,
  isSaved,
  onSave,
  onDel
}) {
  const { pathname } = useLocation();
  const { savedMovies } = useContext(CurrentUserContext);
  const isSavedMoviePage = pathname === '/saved-movies';
  const { nameRU, trailerLink, image, duration, id, _id } = data;

  const handleClick = () => {
    if (isSaved) {
      if (isSavedMoviePage) {
        onDel(_id);
      } else {
        const deletedMovie = savedMovies.find(savedMovie => savedMovie.movieId === id);
        onDel(deletedMovie._id);
      }
    } else {
      const uData = { ...data };
      delete uData.id;
      delete uData.created_at;
      delete uData.updated_at;
      onSave(uData);
    }
  };

  return (
    <div className="card">
      <div className="card__movie-info">
        <p className="card__movie-name">{nameRU}</p>
        <span className="card__movie-duration">{getPrettyTime(duration)}</span>
      </div>
      <a
        href={trailerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="card__link"
      >
        <img
          src={image}
          alt={`Заставка трейлера к фильму ${nameRU}`}
          className="card__image"
        />
      </a>
      <button
        aria-label="Кнопка сохранения фильма"
        className={`card__button ${
          isSaved && !isSavedMoviePage ? 'card__button_type_saved' : ''
        } ${isSavedMoviePage ? 'card__button_type_delete' : ''}`}
        onClick={handleClick}
      >
        {!isSaved && !isSavedMoviePage && 'Сохранить'}
      </button>
    </div>
  );
}
