import MoviesList from '@/components/MoviesList/MoviesList';
import SearchForm from '@/components/SearchForm/SearchForm';

export default function SavedMovies ({ movies }) {
  return (
    <section className="container">
      <SearchForm></SearchForm>
      <div className="movies-container">
        <MoviesList data={movies}></MoviesList>
      </div>
    </section>
  );
}
