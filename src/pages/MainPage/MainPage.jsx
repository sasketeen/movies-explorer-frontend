import './MainPage.scss';
import mainImage from '@/assets/images/mainpage-pic.svg';
import myPhoto from '@/assets/images/my-photo.jpg';
import { useRef } from 'react';

export default function MainPage () {
  const projectSection = useRef();

  const scrollToSection = (e) => {
    e.preventDefault();
    projectSection.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="intro">
        <div className="container intro__container">
          <div>
            <h1 className="intro__title">
              Учебный проект студента факультета Веб&#8209;разработки
            </h1>
            <p className="intro__subtitle">
              Листайте ниже, чтобы узнать больше про этот проект и его создателя
            </p>
            <a
              href="#project"
              className="intro__button-link"
              onClick={scrollToSection}
            >
              Узнать больше
            </a>
          </div>
          <img
            src={mainImage}
            alt="Земной шар составленный из слов Web"
            className="intro__main-image"
          />
        </div>
      </section>

      <section id="project" ref={projectSection} className="project">
        <div className="container section-container">
          <h2 className="section-container__title">О проекте</h2>
          <div className="project__description">
            <div>
              <h3 className="project__subtitle">
                Дипломный проект включал 5 этапов
              </h3>
              <p className="section-container__paragraph project__paragraph">
                Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки
              </p>
            </div>
            <div>
              <h3 className="project__subtitle">
                На выполнение диплома ушло 5 недель
              </h3>
              <p className="section-container__paragraph project__paragraph">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься
              </p>
            </div>
          </div>
          <div className="project__times">
            <div className="project__time-diagram project__time-diagram_for_back">
              <span>1 неделя</span>
            </div>
            <span className="project__time-diagram-caption project__time-diagram-caption_for_back">
              Back-end
            </span>

            <div className="project__time-diagram project__time-diagram_for_front">
              <span>4 недели</span>
            </div>
            <span className="project__time-diagram-caption project__time-diagram-caption_for_front">
              Front-end
            </span>
          </div>
        </div>
      </section>

      <section className="technologies">
        <div className="container section-container">
          <h2 className="section-container__title">Технологии</h2>
          <h3 className="technologies__subtitle">7 технологий</h3>
          <p className="section-container__paragraph technologies__paragraph">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте
          </p>
          <ul className="technologies__list">
            <li className="technologies__list-item">HTML</li>
            <li className="technologies__list-item">CSS</li>
            <li className="technologies__list-item">JS</li>
            <li className="technologies__list-item">React</li>
            <li className="technologies__list-item">Git</li>
            <li className="technologies__list-item">Express.js</li>
            <li className="technologies__list-item">mongoDB</li>
          </ul>
        </div>
      </section>

      <section className="student">
        <div className="container section-container">
          <h2 className="section-container__title">Студент</h2>
          <div className="student__description">
            <div className="student__bio">
              <div>
                <h3 className="student__name">Станислав</h3>
                <p className="student__subtitle">
                  Frontend-разработчик, 25 лет
                </p>
                <p className="section-container__paragraph student__paragraph">
                  Привет! Я junior frontend-разработчик. Живу и работаю в
                  Санкт-Петербурге. Отучился на инженера по системам управления
                  летательными аппаратами, но спустя 3 года работы в космической
                  отрасли понял, что хочу развиваться в другой области. И вот я
                  прошел курсы по web разработке и уже пол года работаю в этой
                  сфере
                </p>
              </div>
              <a
                href="https://github.com/sasketeen"
                target="_black"
                className="link student__link"
              >
                Github
              </a>
            </div>

            <img
              src={myPhoto}
              alt="Фотография разработчика сайта"
              className="student__photo"
            />
          </div>

          <div className="student__portfolio">
            <h3 className="student__portfolio-subtitle">Порфолио</h3>
            <ul className="student__portfolio-list">
              <li className="student__portfolio-list-item">
                <a
                  href="https://github.com/sasketeen/how-to-learn"
                  target="_blank"
                  className="link student__portfolio-link"
                  rel="noreferrer"
                >
                  Статичный сайт
                  <span className="link-arrow" />
                </a>
              </li>
              <li className="student__portfolio-list-item">
                <a
                  href="https://sasketeen.github.io/russian-travel/"
                  target="_blank"
                  className="link student__portfolio-link"
                  rel="noreferrer"
                >
                  Адаптивный сайт
                  <span className="link-arrow" />
                </a>
              </li>
              <li className="student__portfolio-list-item">
                <a
                  href="https://sasketeen.github.io/react-mesto-auth/"
                  target="_blank"
                  className="link student__portfolio-link"
                  rel="noreferrer"
                >
                  Одностраничное приложение
                  <span className="link-arrow" />
                </a>
              </li>
              <li className="student__portfolio-list-item">
                <a
                  href="https://sasketeen.github.io/simple-hotel-check/"
                  target="_blank"
                  className="link student__portfolio-link"
                  rel="noreferrer"
                >
                  Одностраничное приложение RTK + Redux Saga
                  <span className="link-arrow" />
                </a>
              </li>
              <li className="student__portfolio-list-item">
                <a
                  href="https://sasketeen.github.io/workersControl/"
                  target="_blank"
                  className="link student__portfolio-link"
                  rel="noreferrer"
                >
                  Одностраничное приложение Vue3 + Vuetify
                  <span className="link-arrow" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
