import './Switch.scss';

export default function Switch ({ label, ...props }) {
  return (
    <label htmlFor="switcher-checkbox" className="switcher">
      <input
        type="checkbox"
        id="switcher-checkbox"
        className="switcher__checkbox"
        {...props}
      />
      <span className="switcher__block"></span>
      {label}
    </label>
  );
}
