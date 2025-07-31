import { Outlet } from 'react-router-dom';

export function AuthsLayout() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="m-auto flex w-full flex-1 items-center justify-center py-80pxr">
        <Outlet />
      </div>
    </main>
  );
}
