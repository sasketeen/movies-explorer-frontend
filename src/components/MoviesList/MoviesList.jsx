import { useLocation } from 'react-router-dom';

import MovieCard from '../MovieCard/MovieCard';

import './MoviesList.scss';

export default function MoviesList ({ data }) {
  const { pathname } = useLocation();
  const isSavedMoviePage = pathname === '/saved-movies';

  return (
    <>
      <ul className='movies-list'>
        {data.map((movie) => {
          return (
            <li key={movie.id} className='movies-list__item'>
              <MovieCard {...movie} />
            </li>
          );
        })}
      </ul>
      {!isSavedMoviePage && <button className='more-button'>Еще</button>}
    </>
  );
}
