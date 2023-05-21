import AuthLayout from '@/components/AuthLayout/AuthLayout';
import InputGroup from '@/components/InputGroup/InputGroup';
import useForm from '@/hooks/useForm';
import useValidation from '@/hooks/useValidation';
import { emailRegexp, namePattern } from '../../../utils/constants';

export default function SignUp ({ handleSubmit, ...props }) {
  const [handleValidation, errors, validity, setErrors] = useValidation();
  const { values, handleChange } = useForm({
    name: '',
    email: '',
    password: ''
  });

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit(values);
  };

  return (
    <main>
      <AuthLayout
        pageTitle="Добро пожаловать!"
        submitButtonTitle="Зарегистрироваться"
        sublinkParagraph={'Уже зарегистрированы?'}
        sublinkTitle={'Войти'}
        sublinkPath={'/signin'}
        onSubmit={onSubmit}
        validity={validity}
        {...props}
      >
        <InputGroup
          inputId="name"
          label="Имя"
          type="text"
          name="name"
          min-length={2}
          max-length={30}
          pattern={namePattern}
          required
          value={values.name}
          error={errors.name}
          onChange={(evt) => {
            handleChange(evt);
            handleValidation(evt);
          }}
        />
        <InputGroup
          inputId="email"
          label="E-mail"
          type="email"
          name="email"
          required
          value={values.email}
          error={errors.email}
          pattern={emailRegexp}
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
          label="Пароль"
          type="password"
          name="password"
          required
          value={values.password}
          error={errors.password}
          onChange={(evt) => {
            handleChange(evt);
            handleValidation(evt);
          }}
        />
      </AuthLayout>
    </main>
  );
}
