import './SignIn.css';
// import { Link } from 'react-router-dom';
import AuthLayout from '../../../components/AuthLayout/AuthLayout';
import InputGroup from '../../../components/InputGroup/InputGroup';

export default function SignIn () {
  return (
    <main>
        <AuthLayout
          pageTitle="Рады видеть!"
          submitButtonTitle='Войти'
          sublinkParagraph={'Ещё не зарегистрированы?'}
          sublinkTitle={'Регистрация'}
          sublinkPath={'/'}
        >
          <InputGroup inputId='email' label='E-mail' type='email'></InputGroup>
          <InputGroup inputId='password' label='Пароль' type='password'></InputGroup>
        </AuthLayout>
    </main>
  );
}
