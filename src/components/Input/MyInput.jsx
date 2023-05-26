import './MyInput.scss';

export default function MyInput ({ error, ...props }) {
  return (
    <input className={`input ${error ? 'input_type_error' : ''}`} {...props} />
  );
}
