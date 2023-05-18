import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MovieCard from '../MovieCard/MovieCard';

import './MoviesList.scss';

export default function MoviesList ({ data }) {
  const [moviesLength, setMoviesLength] = useState(window.innerWidth);

  const { pathname } = useLocation();
  const isSavedMoviePage = pathname === '/saved-movies';

  useEffect(() => {
    window.addEventListener('resize', handleChangeWidthScreen);
    return () => {
      window.removeEventListener('resize', handleChangeWidthScreen);
    };
  }, []);

  const handleChangeWidthScreen = () => {
    if (window.innerWidth <= 600) {
      setMoviesLength(5);
    } else if (window.innerWidth <= 1024) {
      setMoviesLength(8);
    } else {
      setMoviesLength(12);
    }
  };

  const loadMoreMovies = () => {
    if (window.innerWidth > 1024) setMoviesLength(moviesLength + 3);
    else {
      setMoviesLength(moviesLength + 2);
    }
  };

  return (
    <>
      <ul className='movies-list'>
        {data.slice(0, moviesLength).map((movie) => {
          return (
            <li key={movie.id} className='movies-list__item'>
              <MovieCard {...movie} />
            </li>
          );
        })}
      </ul>
      {(!isSavedMoviePage && data.length > 0 && data.length > moviesLength) && <button className='more-button' onClick={loadMoreMovies}>Еще</button>}
    </>
  );
}
