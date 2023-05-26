import { maxShortFilmDuration } from './constants';

export default function filterMovies ({ filterParams, movies }) {
  console.log(filterParams.isShortMovies);
  if (filterParams.isShortMovies) {
    movies = movies.filter((movie) => {
      return checkDuration(movie.duration, maxShortFilmDuration);
    });
  }
  if (filterParams.name) {
    movies = movies.filter((movie) => checkName(movie.nameRU, filterParams.name));
  };
  return movies;
}

const checkName = (movieName, searchName) => {
  return movieName.toLowerCase().includes(searchName.toLowerCase());
};

const checkDuration = (movieDuration, maxTime) => {
  return movieDuration <= maxTime;
};
