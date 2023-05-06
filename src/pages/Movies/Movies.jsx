import MoviesList from '@/components/MoviesList/MoviesList';
import SearchForm from '@/components/SearchForm/SearchForm';

import './Movies.scss';

export default function Movies ({ movies }) {
  return (
    <section className="container">
      <SearchForm></SearchForm>
      <div className='movies-container'>
        <MoviesList data={movies}></MoviesList>
      </div>
    </section>
  );
}
