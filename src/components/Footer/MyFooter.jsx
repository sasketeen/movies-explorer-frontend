import './MyFooter.scss';

export default function MyFooter () {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__caption">
          Учебный проект Яндекс.Практикум х BeatFilm
        </p>

        <div className="footer__container">
          <span className="footer__copy">&copy; 2023</span>
          <ul className="footer__links-list">
            <li>
              <a
                href="https://practicum.yandex.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="link footer__link"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sasketeen"
                target="_blank"
                rel="noopener noreferrer"
                className="link footer__link"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
