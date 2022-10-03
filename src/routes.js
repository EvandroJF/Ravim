import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
// agendamento
import Schedule from './pages/Schedule/Schedule';
import SchedulePending from './pages/Schedule/SchedulePending';
// Pages
import Login from './pages/Login';
import NotFound from './pages/Page404';
// import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Info from './pages/Info';
import History from './pages/History';
import Settings from './pages/Settings';
import Management from './pages/Management';

import BusinessList from './pages/business/BusinessList';
import BusinessAdd from './pages/business/BusinessAdd';
import BusinessEdit from './pages/business/BusinessEdit';

import CollaboratorList from './pages/collaborator/CollaboratorList';
import CollaboratorAdd from './pages/collaborator/CollaboratorAdd';
import CollaboratorEdit from './pages/collaborator/CollaboratorEdit';

import AccreditedList from './pages/accredited/AccreditedList';
import AccreditedAdd from './pages/accredited/AccreditedAdd';
import AccrediteEdit from './pages/accredited/AccreditedEdit';

import UserInfo from './pages/UserInfo';

// ----------------------------------------------------------------------

import { AuthContext } from './contexts/auth';

const styles = {
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
  },
};
export default function Router() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    if (loading) {
      return (
        <div style={styles.loading}>
          <text>Carregando...</text>
        </div>
      );
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const Public = ({ children }) => {
    const { authenticated } = useContext(AuthContext);
    if (authenticated) {
      return <Navigate to="/" />;
    }
    return children;
  };
  Private.propTypes = {
    children: PropTypes.node.isRequired,
  };
  Public.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return useRoutes([
    {
      path: '/dashboard',
      element: (
        <Private>
          <DashboardLayout />
        </Private>
      ),
      children: [
        {
          path: 'app',
          element: (
            <Private>
              <DashboardApp />
            </Private>
          ),
        },
        {
          path: 'business/list',
          element: (
            <Private>
              <BusinessList />
            </Private>
          ),
        },
        {
          path: 'business/create',
          element: (
            <Private>
              <BusinessAdd />
            </Private>
          ),
        },
        {
          path: 'business/list/edit',
          element: (
            <Private>
              <BusinessEdit />
            </Private>
          ),
        },
        {
          path: 'credenciado/list',
          element: (
            <Private>
              <AccreditedList />
            </Private>
          ),
        },
        {
          path: 'credenciado/create',
          element: (
            <Private>
              <AccreditedAdd />
            </Private>
          ),
        },
        {
          path: 'credenciado/list/edit',
          element: (
            <Private>
              <AccrediteEdit />
            </Private>
          ),
        },
        {
          path: 'agendamentos',
          element: (
            <Private>
              <Schedule />
            </Private>
          ),
        },
        {
          path: 'Historico',
          element: (
            <Private>
              <History />
            </Private>
          ),
        },
        {
          path: 'Pendente',
          element: (
            <Private>
              <SchedulePending />
            </Private>
          ),
        },
        {
          path: 'colaboradores/criar',
          element: (
            <Private>
              <CollaboratorAdd />
            </Private>
          ),
        },
        {
          path: 'colaboradores/list',
          element: (
            <Private>
              <CollaboratorList />
            </Private>
          ),
        },
        {
          path: 'gestao',
          element: (
            <Private>
              <Management />
            </Private>
          ),
        },
        {
          path: 'Settings',
          element: (
            <Private>
              <Settings />
            </Private>
          ),
        },
        {
          path: '/dashboard/settings/userinfo',
          element: (
            <Private>
              <UserInfo />
            </Private>
          ),
        },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        {
          path: '/',
          element: (
            <Private>
              <Navigate to="/dashboard/app" />{' '}
            </Private>
          ),
        },
        {
          path: 'login',
          element: (
            <Public>
              <Login />
            </Public>
          ),
        },
        // { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
