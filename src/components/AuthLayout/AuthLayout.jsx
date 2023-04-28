import { Link } from 'react-router-dom';
import LogoLink from '../LogoLink/LogoLink';
import SubmitButton from '../SubmitButton/SubmitButton';
import './AuthLayout.scss';

export default function AuthLayout ({
  pageTitle,
  submitButtonTitle,
  children,
  sublinkParagraph,
  sublinkTitle,
  sublinkPath
}) {
  return (
    <section className="auth-layout">
      <div className="auth-wrapper">

        <div className="auth-layout__logo-wrapper">
          <LogoLink />
        </div>

        <h1 className="auth-layout__title">{pageTitle}</h1>
        <form className="auth-layout__form">
          <div>{children}</div>
          <SubmitButton>{submitButtonTitle}</SubmitButton>
        </form>

        <p className="auth-layout__sublink-paragraph">
          {sublinkParagraph}{' '}
          <Link to={sublinkPath} className="link">
            {sublinkTitle}
          </Link>
        </p>

      </div>
    </section>
  );
}
