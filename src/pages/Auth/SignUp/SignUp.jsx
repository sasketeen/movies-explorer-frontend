import AuthLayout from '../../../components/AuthLayout/AuthLayout';
import InputGroup from '../../../components/InputGroup/InputGroup';

export default function SignUp () {
  return (
    <AuthLayout
      pageTitle="Добро пожаловать!"
      submitButtonTitle="Зарегистрироваться"
      sublinkParagraph={'Уже зарегистрированы?'}
      sublinkTitle={'Войти'}
      sublinkPath={'/signin'}
    >
      <InputGroup inputId="name" label="Имя" type="text" />
      <InputGroup inputId="email" label="E-mail" type="email" />
      <InputGroup inputId="password" label="Пароль" type="password" />
    </AuthLayout>
  );
}
