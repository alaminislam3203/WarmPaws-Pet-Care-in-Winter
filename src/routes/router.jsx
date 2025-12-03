import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Layouts
import HomeLayout from '../layouts/HomeLayout';
import AuthLayout from '../layouts/AuthLayout';

// Pages
import Home from '../pages/Home';
import Services from '../pages/Services';
import ServiceDetails from '../pages/ServiceDetails';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import NotFound from '../pages/NotFound';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import RefundPolicy from '../pages/RefundPolicy';
import ShippingPolicy from '../pages/ShippingPolicy';
import About from '../pages/About';
import Contact from '../pages/Contact';
import EditProfile from '../pages/EditProfile';

// Provider
import PrivateRoute from '../provider/PrivateRoute';
import AllWinterCareTips from '../pages/AllWinterCareTips';
import AllVets from '../pages/AllVets';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'services', element: <Services /> },

      { path: 'services/:serviceId', element: <ServiceDetails /> },
      { path: 'tips', element: <AllWinterCareTips /> },
      { path: 'vets', element: <AllVets /> },

      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'edit-profile',
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-service', element: <TermsOfService /> },
      { path: 'refund-policy', element: <RefundPolicy /> },
      { path: 'shipping-policy', element: <ShippingPolicy /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
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
    element: <NotFound />,
  },
]);

export default router;
