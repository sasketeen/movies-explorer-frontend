import { Outlet } from 'react-router';
import MyHeader from '../Header/MyHeader';
import MyFooter from '../Footer/MyFooter';
import './MainLayout.scss';

export default function MainLayout () {
  return (
    <>
      <MyHeader />
        <main className='main'>
          <Outlet />
        </main>
      <MyFooter />
    </>
  );
}
