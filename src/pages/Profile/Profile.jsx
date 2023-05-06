import { useState } from 'react';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import './Profile.scss';

export default function Profile () {
  const name = 'Виталий';

  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="profile">
      <div className="profile-wrapper">
        <h1 className="profile__title">Привет, {name}!</h1>
        <form className="profile__form">
          <div className="profile__inputs">
            <div className="input-wrapper input-wrapper_for_name">
              <input type="text" id="input-name" className="profile__input" />
              <label htmlFor="input-name" className="profile__input-label">
                Имя
              </label>
            </div>
            <div className="input-wrapper input-wrapper_for_email">
              <input type="email" id="input-email" className="profile__input" />
              <label htmlFor="input-email" className="profile__input-label">
              Email
              </label>
            </div>
          </div>

          {isEditing && (
            <div>
              <span className="profile__error-span">err</span>
              <SubmitButton>Сохранить</SubmitButton>
            </div>
          )}
        </form>

        {!isEditing && (
          <div className="profile__subaction">
            <button className="profile__button profile__button_for_edition">
              Редактировать
            </button>
            <button className="profile__button profile__button_for_exit">
              Выйти из аккаунта
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
