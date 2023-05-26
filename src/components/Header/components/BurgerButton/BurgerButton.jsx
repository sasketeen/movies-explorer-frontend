import './BurgerButton.scss';

export default function BurgerButton ({ isMenuVisible, handleClickBurger }) {
  return (
    <button
      tabIndex={1}
      aria-label="Меню"
      className={`burger-button ${isMenuVisible ? 'burger-button_active' : ''}`}
      onClick={handleClickBurger}
    />
  );
}
