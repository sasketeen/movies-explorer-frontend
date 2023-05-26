import { Link, useNavigate } from 'react-router-dom';
import './NotFound.scss';

export default function NotFound () {
  const navigate = useNavigate();
  return (
    <div className='not-found'>
      <div className='not-found__wrapper'>
        <span className='not-found__code'>404</span>
        <h1 className='not-found__title'>Страница не найдена</h1>
      </div>
      <button className='not-found__go-back-button' onClick={() => { navigate(-1); }}>Назад</button>
    </div>
  );
}
