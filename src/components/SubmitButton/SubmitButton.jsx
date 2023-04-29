import './SubmitButton.scss';

export default function SubmitButton ({ children, ...props }) {
  return (
    <button className='submit-button' {...props}>{children}</button>
  );
}
