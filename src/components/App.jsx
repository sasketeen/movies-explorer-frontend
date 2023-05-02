import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/Auth/SignIn/SignIn';
import SignUp from '../pages/Auth/SignUp/SignUp';
import MainPage from '../pages/MainPage/MainPage';

function App () {
  return (
    <div className="app">
      <Routes>
        <Route path="/signin" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/" Component={MainPage} />
      </Routes>
    </div>
  );
}

export default App;
