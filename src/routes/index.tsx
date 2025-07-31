import { AuthsLayout } from '@/components/Layout/Auths';
import { MiddleHeader } from '@/components/Layout/MiddleHeader/MiddleHaeder';
import { CLIENT_PATHS } from '@/constants/paths/client.path';
import Layout from '@/routes/layouts/Layout';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import ApprovalDetailPage from './pages/approval/detail';
import { ApprovalRegisterPage } from './pages/approval/register';
import { LoginPage } from './pages/auth/login';
import ManagementPage from './pages/management';
import ManagementCommonPage from './pages/management/common';
import ManagementDepartmentPage from './pages/management/department';
import ManagementNoticePage from './pages/management/notice';
import SystemAdminPage from './pages/systems';
import SystemPaymentDetailPage from './pages/systems/approval/detail';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={CLIENT_PATHS.MANAGEMENT.MAIN} />,
      },
      {
        path: CLIENT_PATHS.MANAGEMENT.MAIN,
        element: <MiddleHeader />,
        children: [
          {
            path: CLIENT_PATHS.MANAGEMENT.MAIN,
            element: <ManagementPage />,
          },
          {
            path: CLIENT_PATHS.MANAGEMENT.COMMON,
            element: <ManagementCommonPage />,
          },
          {
            path: CLIENT_PATHS.MANAGEMENT.DEPARTMENT,
            element: <ManagementDepartmentPage />,
          },
          {
            path: CLIENT_PATHS.MANAGEMENT.NOTICE,
            element: <ManagementNoticePage />,
          },
        ],
      },
      {
        path: CLIENT_PATHS.APPROVAL.REGISTER,
        element: <ApprovalRegisterPage />,
      },
      {
        path: CLIENT_PATHS.APPROVAL.DETAIL,
        element: <ApprovalDetailPage />,
      },
      {
        path: CLIENT_PATHS.SYSTEM.MAIN,
        element: <SystemAdminPage />,
      },
      {
        path: CLIENT_PATHS.SYSTEM.APPROVAL_DETAIL,
        element: <SystemPaymentDetailPage />,
      },
    ],
  },
  {
    path: CLIENT_PATHS.AUTH.BASE,
    element: <AuthsLayout />,
    children: [
      {
        path: CLIENT_PATHS.AUTH.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
