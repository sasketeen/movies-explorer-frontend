import Switch from '../Switch/Switch';
import './SearchForm.scss';

export default function SearchForm () {
  return (
    <form className="search">
      <div className="search__wrapper">
        <input type="text" className="search__input" placeholder='Фильмы'/>
        <button type="submit" className="search__submit-button">Найти</button>
      </div>
      <div className='switch-wrapper'>
        <Switch label={'Короткометражки'}></Switch>
      </div>
    </form>
  );
}
