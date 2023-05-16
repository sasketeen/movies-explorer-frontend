import { useEffect, useState } from 'react';

import MoviesList from '@/components/MoviesList/MoviesList';
import SearchForm from '@/components/SearchForm/SearchForm';
import Preloader from '@/components/Preloader/Preloader';
import moviesApi from '@/utils/MoviesApi';

import { messages, movieServerLink } from '../../utils/constants';
import filterMovies from '../../utils/filterMovies';

import './Movies.scss';

export default function Movies () {
  const [message, setMessage] = useState('');
  const [results, setResults] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const results = JSON.parse(localStorage.getItem('results'));
    if (results) setResults(results);
  }, []);

  // useEffect(() => {
  //   setResults(results.map(movie => {

  //   }));
  // }, [results]);

  const handleSubmit = (searchParams) => {
    if (!searchParams.name) {
      setMessage(messages.emptyInput);
      localStorage.setItem('results', JSON.stringify([]));
      return;
    }
    setIsFetching(true);
    setMessage('');
    moviesApi
      .getMovies()
      .then((res) => {
        const movies = res.map((item) => {
          return {
            ...item,
            image: `${movieServerLink}/${item.image.url}`,
            thumbnail: `${movieServerLink}/${item.image.formats.thumbnail.url}`
          };
        });
        const results = filterMovies({ filterParams: searchParams, movies });
        setResults(results);
        localStorage.setItem('results', JSON.stringify(results));
        if (!results.length) setMessage(messages.noResults);
      })
      .catch(() => setMessage(messages.fetchError))
      .finally(() => setIsFetching(false));
  };

  const getContent = () => {
    if (isFetching) {
      return <Preloader />;
    } else if (message) {
      return <p className="results-message">{message}</p>;
    } else {
      return <MoviesList data={results} />;
    }
  };

  return (
    <section className="container">
      <SearchForm handleSubmit={handleSubmit}></SearchForm>
      <div className="movies-container">{getContent()}</div>
    </section>
  );
}
