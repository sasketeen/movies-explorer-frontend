import { NavLink } from 'react-router-dom';
import './NavLinks.scss';

export default function NavLinks () {
  return (
    <div className='nav-links'>
      <NavLink to={'/'} className='link header__link hidden'>Главная</NavLink>
      <NavLink to={'/movies'} className='link header__link'>Фильмы</NavLink>
      <NavLink to={'/saved-movies'} className='link header__link'>Сохраненные фильмы</NavLink>
    </div>
  );
}
