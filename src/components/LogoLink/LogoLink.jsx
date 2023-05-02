import { Link } from 'react-router-dom';

import './LogoLink.scss';

export default function LogoLink (props) {
  return (
    <Link
      to={'/'}
      aria-label="Вернуться на главную страницу"
      className="logo-link"
      {...props}
    ></Link>
  );
}
