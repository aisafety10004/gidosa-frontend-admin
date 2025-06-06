import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex overflow-x-auto pt-80pxr  min-h-screen justify-center">
      <Outlet />
    </div>
  );
}
