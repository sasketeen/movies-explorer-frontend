import { Outlet, useLocation } from 'react-router';
import MyHeader from '../Header/MyHeader';
import MyFooter from '../Footer/MyFooter';
import './MainLayout.scss';

export default function MainLayout () {
  const { pathname } = useLocation();
  const isProfilePage = pathname === '/profile';
  return (
    <>
      <MyHeader />
        <main className='main'>
          <Outlet />
        </main>
      {!isProfilePage && <MyFooter />}
    </>
  );
}
