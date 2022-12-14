import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';
import { PATHS, ROUTES, URLS } from './paths';
import Overview from '../pages/Overview';
import LoginPage from '../pages/auth/Login';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to={URLS.overview} replace />,
    },
    {
      path: ROUTES.auth,
      element: <LogoOnlyLayout />,
      children: [
        { element: <Navigate to={URLS.login} replace />, index: true },
        {
          path: PATHS.login,
          element: <LoginPage />,
        },
      ],
    },
    {
      path: ROUTES.dashboard,
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={URLS.overview} replace />, index: true },
        { path: PATHS.overviewPath, element: <Overview /> },
        { path: PATHS.associationsPath, element: <AssociationsList /> },
        { path: PATHS.weeklyReport, element: <ComingSoon /> },
        { path: PATHS.demoCalendar, element: <ComingSoon /> },
      ],
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: PATHS[404], element: <NotFound /> },
        { path: '*', element: <Navigate to={ROUTES[404]} replace /> },
      ],
    },
    { path: '*', element: <Navigate to={ROUTES[404]} replace /> },
  ]);
}

// Dashboard
const AssociationsList = Loadable(lazy(() => import('../pages/AssociationsList')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
