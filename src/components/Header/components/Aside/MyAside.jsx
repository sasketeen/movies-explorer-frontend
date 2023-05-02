import './MyAside.scss';

export default function MyAside ({ isMenuVisible, children }) {
  return (
    <aside className={`aside ${isMenuVisible ? 'aside_open' : ''}`}>
      {children}
    </aside>
  );
}
