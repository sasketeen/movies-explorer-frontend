import AuthLayout from '@c/AuthLayout/AuthLayout';
import InputGroup from '@c/InputGroup/InputGroup';

export default function SignIn () {
  return (
    <main>
      <AuthLayout
        pageTitle="Рады видеть!"
        submitButtonTitle="Войти"
        sublinkParagraph={'Ещё не зарегистрированы?'}
        sublinkTitle={'Регистрация'}
        sublinkPath={'/signup'}
      >
        <InputGroup inputId="email" label="E-mail" type="email" />
        <InputGroup inputId="password" label="Пароль" type="password" />
      </AuthLayout>
    </main>
  );
}
