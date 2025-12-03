import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WinterCareTips from '../pages/WinterCareTips';
import ExpertVets from '../pages/ExpertVets';
import ProductsSection from '../components/ProductsSection';
import PopularServices from '../pages/PopularServices';

const HomeLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar */}

      <header className="pt-24 bg-gray-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full bg-gray-50">
        <Outlet />

        {isHome && (
          <>
            {/* Services Section */}
            <section className="w-full">
              <PopularServices />
            </section>

            {/* Winter Care Tips Section */}
            <section className="w-full">
              <WinterCareTips />
            </section>

            {/* Expert Vets Section */}
            <section className="w-full">
              <ExpertVets />
            </section>

            {/*Products Section */}
            <section className="w-full">
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
