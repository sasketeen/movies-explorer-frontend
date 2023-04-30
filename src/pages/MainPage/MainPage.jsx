import MyHeader from '@c/Header/MyHeader';

import './MainPage.scss';
import mainImage from '@/assets/images/mainpage-pic.svg';

export default function MainPage () {
  return (
    <>
      <MyHeader></MyHeader>

      <section className='intro'>
        <div className="container intro__container">
          <div>
            <h1 className='intro__title'>Учебный проект студента факультета Веб&#8209;разработки</h1>
            <p className='intro__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя</p>
            <a href="#about" className='intro__button-link'>Узнать больше</a>
          </div>
          <img src={mainImage} alt="Земной шар составленный из слов Web" className='intro__main-image'/>
        </div>
      </section>
      <section id='about'></section>
    </>
  );
}
