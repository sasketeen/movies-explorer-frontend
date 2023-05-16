import MoviesList from '@/components/MoviesList/MoviesList';
import SearchForm from '@/components/SearchForm/SearchForm';

export default function SavedMovies () {
  return (
    <section className="container">
      <SearchForm></SearchForm>
      <div className="movies-container">
        <MoviesList data={[]}></MoviesList>
      </div>
    </section>
  );
}
