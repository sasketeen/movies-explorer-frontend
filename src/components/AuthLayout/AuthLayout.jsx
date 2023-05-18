import { Link } from 'react-router-dom';

import LogoLink from '../LogoLink/LogoLink';
import SubmitButton from '../SubmitButton/SubmitButton';

import './AuthLayout.scss';

export default function AuthLayout ({
  pageTitle,
  submitButtonTitle,
  children,
  serverError,
  sublinkParagraph,
  sublinkTitle,
  sublinkPath,
  onSubmit,
  isLoading,
  validity
}) {
  return (
    <section className="auth-layout">
      <div className="auth-wrapper">

        <div className="auth-layout__logo-wrapper">
          <LogoLink />
        </div>

        <h1 className="auth-layout__title">{pageTitle}</h1>
        <form className="auth-layout__form" onSubmit={onSubmit} noValidate>
          <div>{children}</div>
          <div>
            {serverError && <span className='auth-layout__server-error'>{serverError}</span>}
            <SubmitButton disabled={isLoading || !validity}>{submitButtonTitle}</SubmitButton>
          </div>
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
