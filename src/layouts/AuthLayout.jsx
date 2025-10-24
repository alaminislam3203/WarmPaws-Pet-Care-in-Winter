import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      {/* Navbar */}
      <header className="w-full pb-4">
        <Navbar />
      </header>

      {/* Page Content */}
      <main className="flex-grow w-full py-5">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AuthLayout;
