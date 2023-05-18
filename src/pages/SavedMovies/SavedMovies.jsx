import { useContext, useEffect, useState } from 'react';
import MoviesList from '@/components/MoviesList/MoviesList';
import SearchForm from '@/components/SearchForm/SearchForm';
import CurrentUserContext from '@/contexts/currentUserContext';
import { messages } from '../../utils/constants';
import filterMovies from '../../utils/filterMovies';

export default function SavedMovies () {
  const { savedMovies } = useContext(CurrentUserContext);
  const [message, setMessage] = useState('');
  const [results, setResults] = useState(savedMovies);
  const [filterParams, setFilterParams] = useState({});

  useEffect(() => {
    if (filterParams.name) {
      setResults(filterMovies({ filterParams, movies: savedMovies }));
    } else {
      setResults(savedMovies);
    }
  }, [savedMovies]);

  const handleSubmit = (searchParams) => {
    setFilterParams(searchParams);
    setMessage('');
    if (!searchParams.name) {
      setResults(savedMovies);
      return;
    }
    const filteredMovies = filterMovies({ filterParams: searchParams, movies: savedMovies });
    setResults(filteredMovies);
    if (!filteredMovies.length) setMessage(messages.noResults);
  };

  const getContent = () => {
    if (message) {
      return <p className="results-message">{message}</p>;
    } else {
      return <MoviesList data={results} />;
    }
  };

  return (
    <section className="container">
      <SearchForm handleSubmit={handleSubmit} />
      <div className="movies-container">
        {getContent()}
      </div>
    </section>
  );
}
