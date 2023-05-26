import { useState } from 'react';

export default function useForm (inputValues) {
  const [values, setValues] = useState(inputValues);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setValues({ ...values, [name]: value });
  };
  return { values, setValues, handleChange };
}
