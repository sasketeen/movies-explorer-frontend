import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '@/contexts/currentUserContext';
import MovieCard from '../MovieCard/MovieCard';
import MainApi from '@/utils/MainApi';

import './MoviesList.scss';

export default function MoviesList ({ data }) {
  const { savedMovies, setSavedMovies } = useContext(CurrentUserContext);
  const [moviesLength, setMoviesLength] = useState(0);

  const { pathname } = useLocation();
  const isSavedMoviePage = pathname === '/saved-movies';

  useEffect(() => {
    handleChangeWidthScreen();
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

  const isSaved = (movie) => {
    if (isSavedMoviePage) {
      return true;
    } else {
      return savedMovies?.some((savedMovie) => {
        return savedMovie.movieId === movie.id;
      });
    }
  };

  const handleSaveMovie = (movie) => {
    MainApi.saveMovie(movie)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMovie = (id) => {
    MainApi.deleteMovie(id)
      .then((deletedMovie) => {
        setSavedMovies(savedMovies.filter((savedMovie) => {
          return !(savedMovie._id === deletedMovie._id);
        }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ul className='movies-list'>
        {(isSavedMoviePage ? data : data.slice(0, moviesLength)).map((movie) => {
          return (
            <li key={isSavedMoviePage ? movie._id : movie.id} className='movies-list__item'>
              <MovieCard data={movie} isSaved={isSaved(movie)} onSave={handleSaveMovie} onDel={handleDeleteMovie}/>
            </li>
          );
        })}
      </ul>
      {(!isSavedMoviePage && data.length > 0 && data.length > moviesLength) && <button className='more-button' onClick={loadMoreMovies}>Еще</button>}
    </>
  );
}
