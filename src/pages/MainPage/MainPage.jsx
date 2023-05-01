import MyHeader from '@c/Header/MyHeader';

import './MainPage.scss';
import mainImage from '@/assets/images/mainpage-pic.svg';
import { useRef } from 'react';

export default function MainPage () {
  const projectSection = useRef();

  const scrollToSection = (e) => {
    e.preventDefault();
    projectSection.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <MyHeader />

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
              <p className="project__paragraph">
                Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки
              </p>
            </div>
            <div>
              <h3 className="project__subtitle">
                На выполнение диплома ушло 5 недель
              </h3>
              <p className="project__paragraph">
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
    </>
  );
}
