import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/Auth/SignIn/SignIn';

function App () {
  return (
    <div className='app'>
      <Routes>
        <Route path='/signin' Component={SignIn}/>
        <Route path='/signup' Component={SignIn}/>
        <Route path='/' Component={SignIn}/>
      </Routes>
    </div>
  );
}

export default App;
