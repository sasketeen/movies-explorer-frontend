import { Link } from 'react-router-dom';
import { useState } from 'react';

import LogoLink from '../LogoLink/LogoLink';
import NavLinks from './components/NavLinks/NavLinks';
import BurgerButton from './components/BurgerButton/BurgerButton';
import MyAside from './components/Aside/MyAside';

import './MyHeader.scss';

export default function MyHeader () {
  const [isLogin, setIsLogin] = useState(true);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClickBurger = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className={`header ${isMenuVisible ? 'header_menu-visible' : ''}`}>
      <div className="container header__container">
        <LogoLink />
        {isLogin
          ? (
            <>
              <MyAside isMenuVisible={isMenuVisible}>
                <nav className="header__navigation">
                  <NavLinks />
                  <Link
                    to={'/profile'}
                    className="link header__link header__link_type_account"
                  >
                    <span className="account-logo" /> Аккаунт
                  </Link>
                </nav>
              </MyAside>

              <BurgerButton
                isMenuVisible={isMenuVisible}
                handleClickBurger={handleClickBurger}
              />
            </>
            )
          : (
            <nav className="header__auth-links-wrapper">
              <Link
                to={'/signup'}
                className="link header__link header__link_type_auth"
              >
                Регистрация
              </Link>
              <Link
                to={'/signin'}
                className="link header__link header__link_type_auth header__link_type_button"
              >
                Войти
              </Link>
            </nav>
            )}
      </div>
    </header>
  );
}
