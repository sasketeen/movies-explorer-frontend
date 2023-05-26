import MyInput from '../Input/MyInput';
import './InputGroup.scss';

export default function InputGroup ({ inputId, label, error, ...props }) {
  return (
    <>
      {label && (
        <label htmlFor="inputId" className="input-label">
          {label}
        </label>
      )}
      <MyInput id={inputId} error={error} {...props}></MyInput>
      {error && <span className="input-error">{error}</span>}
    </>
  );
}
