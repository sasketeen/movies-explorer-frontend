import AuthLayout from '@c/AuthLayout/AuthLayout';
import InputGroup from '@c/InputGroup/InputGroup';
import useForm from '@/hooks/useForm';
import useValidation from '@/hooks/useValidation';
import { emailRegexp } from '../../../utils/constants';

export default function SignIn ({ handleSubmit, ...props }) {
  const [handleValidation, errors, validity, setErrors] = useValidation();
  const { values, handleChange } = useForm({ email: '', password: '' });

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit(values);
  };

  return (
    <main>
      <AuthLayout
        pageTitle="Рады видеть!"
        submitButtonTitle="Войти"
        sublinkParagraph={'Ещё не зарегистрированы?'}
        sublinkTitle={'Регистрация'}
        sublinkPath={'/signup'}
        onSubmit={onSubmit}
        validity={validity}
        {...props}
      >
        <InputGroup
          inputId="email"
          name="email"
          label="E-mail"
          type="email"
          value={values.email}
          error={errors.email}
          pattern={emailRegexp}
          required
          onChange={(evt) => {
            handleChange(evt);
            handleValidation(evt);
            if (evt.target.validity.patternMismatch) {
              setErrors({ ...errors, email: 'Неверный формат email' });
            }
          }}
        />
        <InputGroup
          inputId="password"
          name="password"
          label="Пароль"
          type="password"
          value={values.password}
          error={errors.password}
          required
          onChange={(evt) => {
            handleChange(evt);
            handleValidation(evt);
          }}
        />
      </AuthLayout>
    </main>
  );
}
