import { useContext, useState } from 'react';
import MainApi from '@/utils/MainApi';
import useForm from '@/hooks/useForm';
import useValidation from '@/hooks/useValidation';
import CurrentUserContext from '@/contexts/currentUserContext';
import SubmitButton from '@/components/SubmitButton/SubmitButton';
import './Profile.scss';
import getErrorText from '../../utils/getErrorText';

export default function Profile ({ handleSignOut }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [userData, setUserData] = useState(currentUser);
  const [handleValidation, errors, validity] = useValidation();
  const { values, handleChange } = useForm({
    name: userData.name,
    email: userData.email
  });
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    MainApi.editUserInfo(values)
      .then((data) => {
        setError('');
        setUserData(data);
        setIsEditing(false);
      })
      .catch((err) => {
        setError(getErrorText(err));
      })
      .finally(() => setIsLoading(false));
  };

  const isDisabled = !validity || isLoading || (values.name === userData.name && values.email === userData.email);

  return (
    <section className="profile">
      <div className="profile-wrapper">
        <h1 className="profile__title">Привет, {userData.name}!</h1>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <div className="profile__inputs">
            <div className="input-wrapper input-wrapper_for_name">
              <input
                type="text"
                id="input-name"
                className="profile__input"
                name='name'
                minLength={2}
                maxLength={30}
                required
                readOnly={!isEditing}
                value={values.name}
                onChange={(evt) => {
                  handleChange(evt);
                  handleValidation(evt);
                }}
              />
              <label htmlFor="input-name" className="profile__input-label">
                Имя
              </label>
            </div>
            <div className="input-wrapper input-wrapper_for_email">
              <input
                type="email"
                id="input-email"
                className="profile__input"
                name='email'
                required
                readOnly={!isEditing}
                value={values.email}
                onChange={(evt) => {
                  handleChange(evt);
                  handleValidation(evt);
                }}
              />
              <label htmlFor="input-email" className="profile__input-label">
                Email
              </label>
            </div>
          </div>

          {isEditing && (
            <div>
              <span className="profile__error-span">{error}</span>
              <SubmitButton disabled={isDisabled}>Сохранить</SubmitButton>
            </div>
          )}
        </form>

        {!isEditing && (
          <div className="profile__subaction">
            <button
              className="profile__button profile__button_for_edition"
              onClick={handleEdit}
            >
              Редактировать
            </button>
            <button
              className="profile__button profile__button_for_exit"
              onClick={handleSignOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
