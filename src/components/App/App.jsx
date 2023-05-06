import { Route, Routes } from 'react-router-dom';
import SignIn from '@/pages/Auth/SignIn/SignIn';
import SignUp from '@/pages/Auth/SignUp/SignUp';
import MainPage from '@/pages/MainPage/MainPage';
import Movies from '@/pages/Movies/Movies';
import SavedMovies from '@/pages/SavedMovies/SavedMovies';
import Profile from '@/pages/Profile/Profile';

import MainLayout from '@c/MainLayout/MainLayout';

import movies from '@/utils/exampleMovies';
import './App.scss';
import NotFound from '../../pages/NotFound/NotFound';

function App () {
  return (
    <div className="app">
      <Routes>
        <Route path="/signin" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/" Component={MainLayout}>
          <Route path="" Component={MainPage} />
          <Route path="movies" element={<Movies movies={movies} />} />
          <Route
            path="saved-movies"
            element={<SavedMovies movies={movies} />}
          />
          <Route path="profile" Component={Profile} />
        </Route>
        <Route path='*' Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
