import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import Services from '../pages/Services';
import ServiceDetails from '../pages/ServiceDetails';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import AuthLayout from '../layouts/AuthLayout';
import PrivateRoute from '../provider/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'services', element: <Services /> },
      {
        path: 'services/:serviceId',
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Register /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
    ],
  },
  {
    path: '*',
    element: (
      <h2 className="text-center text-3xl mt-10 text-red-600 font-semibold">
        Error 404 — Page Not Found
      </h2>
    ),
  },
]);

export default router;
