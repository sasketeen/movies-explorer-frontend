import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import SignIn from '@/pages/Auth/SignIn/SignIn';
import SignUp from '@/pages/Auth/SignUp/SignUp';
import MainPage from '@/pages/MainPage/MainPage';
import Movies from '@/pages/Movies/Movies';
import SavedMovies from '@/pages/SavedMovies/SavedMovies';
import Profile from '@/pages/Profile/Profile';
import CurrentUserContext from '@/contexts/currentUserContext';

import Preloader from '@/components/Preloader/Preloader';
import MainLayout from '@c/MainLayout/MainLayout';
import NotFound from '@/pages/NotFound/NotFound';
import MainApi from '@/utils/MainApi';
import getErrorText from '../../utils/getErrorText';

import './App.scss';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App () {
  const [isLoading, setIsLoading] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isUserSignIn, setIsUserSignIn] = useState(false);
  const [serverError, setServerError] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      MainApi.addToken();
      MainApi.getUser()
        .then((res) => {
          setCurrentUser(res);
          setIsUserSignIn(true);
        })
        .catch((err) => {
          console.log(err);
          handleSignOut();
        })
        .finally(() => setIsAppLoading(false));
    } else {
      handleSignOut();
      setIsAppLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isUserSignIn) {
      MainApi.addToken();
      Promise.allSettled([MainApi.getUser(), MainApi.getSavedMovies()])
        .then(([user, savedMovies]) => {
          setCurrentUser(user.value);
          setSavedMovies(savedMovies.value);
        })
        .catch((err) => console.log(getErrorText(err)));
    }
  }, [isUserSignIn]);

  const handleSignUp = (formdata) => {
    setIsLoading(true);
    MainApi.signUp(formdata)
      .then(() => {
        handleSignIn(formdata);
      })
      .catch((err) => setServerError(getErrorText(err)))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignIn = ({ email, password }) => {
    setIsLoading(true);
    MainApi.signIn({ email, password })
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setIsUserSignIn(true);
      })
      .catch((err) => setServerError(getErrorText(err)))
      .finally(() => {
        navigate('/');
        setIsLoading(false);
      });
  };

  const handleSignOut = () => {
    localStorage.clear();
    setIsUserSignIn(false);
    setSavedMovies([]);
    setCurrentUser({});
    setIsLoading(false);
    navigate('/');
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, isUserSignIn }}
    >
      <div className="app">
        {isAppLoading
          ? (
          <div className="app-loader">
            <Preloader />
          </div>
            )
          : (
          <Routes>
            <Route
              path="/signin"
              element={
                <SignIn
                  handleSubmit={handleSignIn}
                  isLoading={isLoading}
                  serverError={serverError}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <SignUp
                  handleSubmit={handleSignUp}
                  isLoading={isLoading}
                  serverError={serverError}
                />
              }
            />

            <Route path="/" Component={MainLayout}>
              <Route path="" Component={MainPage} />
              <Route
                path="movies"
                element={<ProtectedRoute element={Movies} />}
              />
              <Route
                path="saved-movies"
                element={<ProtectedRoute element={SavedMovies} />}
              />
              <Route
                path="profile"
                element={<ProtectedRoute element={Profile} handleSignOut={handleSignOut}/>}
              />
            </Route>
            <Route path="*" Component={NotFound} />
          </Routes>
            )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
