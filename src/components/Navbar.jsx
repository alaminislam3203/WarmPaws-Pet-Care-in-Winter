import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import userIcon from '../assets/user.png';
import LogoIcon from '../assets/LogoIcon.png';
import { HiMenu, HiX } from 'react-icons/hi';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success(' You Logged Out Successfully!'))
      .catch(() => toast.error('❌ Logout failed! Please try again.'));
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-1 rounded-md text-sm font-medium transition-colors duration-300 ${
            isActive
              ? 'bg-white text-[#045494] font-bold shadow-md'
              : 'text-white hover:bg-white hover:text-[#045494]'
          }`
        }
        onClick={() => setIsOpen(false)}
      >
        Home
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          `px-3 py-1 rounded-md text-sm font-medium transition-colors duration-300 ${
            isActive
              ? 'bg-white text-[#045494] font-bold shadow-md'
              : 'text-white hover:bg-white hover:text-[#045494]'
          }`
        }
        onClick={() => setIsOpen(false)}
      >
        Services
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `px-3 py-1 rounded-md text-sm font-medium transition-colors duration-300 ${
            isActive
              ? 'bg-white text-[#045494] font-bold shadow-md'
              : 'text-white hover:bg-white hover:text-[#045494]'
          }`
        }
        onClick={() => setIsOpen(false)}
      >
        My Profile
      </NavLink>
    </>
  );

  return (
    <nav
      className="shadow-md px-6 py-2 sm:py-3 relative"
      style={{ backgroundColor: '#045494' }}
    >
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src={LogoIcon}
            alt="Logo"
            className="w-14 h-14 sm:w-16 sm:h-16"
          />
          <div className="flex flex-col justify-center">
            <span className="text-lg sm:text-xl font-bold text-white leading-tight">
              WarmPaws
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-gray-100 border px-1 py-[1px] mt-1 inline-block">
              Pet Care in Winter
            </span>
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-4">{navLinks}</div>

        {/* User Info */}
        <div className="flex items-center gap-3 relative">
          <div className="relative group">
            <img
              className="w-9 h-9 rounded-full cursor-pointer border border-gray-300 object-cover"
              src={user?.photoURL || userIcon}
              alt="User Avatar"
              onError={e => (e.target.src = userIcon)}
            />

            {user && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white text-gray-700 text-sm rounded-lg shadow-md p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <p className="font-semibold text-center">
                  {user.displayName || 'User'}
                </p>
                <p className="text-xs text-center text-gray-500">
                  {user.email}
                </p>
              </div>
            )}
          </div>

          {/* Auth Buttons (Desktop) */}
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-primary px-3 py-1 text-sm hidden md:block"
            >
              LogOut
            </button>
          ) : (
            <div className="hidden md:flex gap-2">
              <Link
                to="/auth/login"
                className="btn btn-primary px-3 py-1 text-sm"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="btn btn-primary px-3 py-1 text-sm bg-white text-[#045494] hover:bg-gray-200 font-semibold"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={toggleMenu}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full shadow-md flex flex-col items-center py-4 gap-4 md:hidden z-50"
          style={{ backgroundColor: '#FF6B6B' }}
        >
          {navLinks}
          {user ? (
            <button onClick={handleLogOut} className="btn btn-primary w-3/4">
              LogOut
            </button>
          ) : (
            <div className="flex flex-col gap-3 w-3/4">
              <Link to="/auth/login" className="btn btn-primary w-full">
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="btn bg-white text-[#045494] font-semibold hover:bg-gray-200 w-full"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
