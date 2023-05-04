import MoviesList from '@/components/MoviesList/MoviesList';
import SearchForm from '@/components/SearchForm/SearchForm';

export default function Movies ({ movies }) {
  return (
    <div className="container">
      <SearchForm></SearchForm>
      <div className='movies-container'>
        <MoviesList data={movies}></MoviesList>
      </div>
    </div>
  );
}
