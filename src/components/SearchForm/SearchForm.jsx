import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import Switch from '../Switch/Switch';
import './SearchForm.scss';

export default function SearchForm ({ handleSubmit }) {
  const { values, setValues, handleChange } = useForm({
    name: '',
    isShortMovies: false
  });

  useEffect(() => {
    const searchParams = JSON.parse(localStorage.getItem('searchParams'));
    if (searchParams) setValues(searchParams);
  }, []);

  const onSubmit = (evt) => {
    evt.preventDefault();
    localStorage.setItem('searchParams', JSON.stringify(values));
    handleSubmit(values);
  };

  const handleCheckbox = (evt) => {
    setValues({ ...values, isShortMovies: evt.target.checked });
  };

  return (
    <form className="search" onSubmit={onSubmit} noValidate >
      <div className="search__wrapper">
        <input
          type="text"
          className="search__input"
          name="name"
          placeholder="Фильмы"
          value={values.name}
          onChange={(evt) => {
            handleChange(evt);
          }}
          required
        />
        <button type="submit" className="search__submit-button">
          Найти
        </button>
      </div>
      <div className="switch-wrapper">
        <Switch
          label={'Короткометражки'}
          onChange={handleCheckbox}
          checked={values.isShortMovies}
        ></Switch>
      </div>
    </form>
  );
}
