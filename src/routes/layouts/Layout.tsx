import { Header } from '@/components/Layout/Header/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <div className="mx-auto h-screen ">
        <Outlet />
      </div>
    </>
  );
}
