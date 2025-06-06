import Layout from '@/routes/layouts/Layout';
import MainPage from '@/routes/pages/mainPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
