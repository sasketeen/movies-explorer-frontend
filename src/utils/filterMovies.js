import { maxShortFilmDuration } from './constants';

export default function filterMovies ({ filterParams, movies }) {
  if (filterParams.isShortMovies) {
    return movies.filter((movie) => {
      return checkName(movie.nameRU, filterParams.name) && checkDuration(movie.duration, maxShortFilmDuration);
    });
  } else {
    return movies.filter((movie) => checkName(movie.nameRU, filterParams.name));
  };
}

const checkName = (movieName, searchName) => {
  return movieName.toLowerCase().includes(searchName.toLowerCase());
};

const checkDuration = (movieDuration, maxTime) => {
  return movieDuration <= maxTime;
};
