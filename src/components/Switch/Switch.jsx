import './Switch.scss';

export default function Switch ({ label }) {
  return (
    <label htmlFor="switcher-checkbox" className="switcher">
      <input
        type="checkbox"
        id="switcher-checkbox"
        className="switcher__checkbox"
      />
      <span className="switcher__block"></span>
      {label}
    </label>
  );
}
