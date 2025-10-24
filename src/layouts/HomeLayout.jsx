import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../pages/Services';
import WinterCareTips from '../pages/WinterCareTips';
import ExpertVets from '../pages/ExpertVets';
import ProductsSection from '../components/ProductsSection';

const HomeLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full">
        <Outlet />

        {isHome && (
          <>
            {/* Services Section */}
            <section className="mt-10 w-full">
              <Services />
            </section>

            {/* Winter Care Tips Section */}
            <section className="mt-14 w-full">
              <WinterCareTips />
            </section>

            {/* Expert Vets Section */}
            <section className="mt-14 w-full">
              <ExpertVets />
            </section>

            {/*Products Section */}
            <section className="mt-14 w-full">
              <ProductsSection />
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
