import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

import userIcon from '../assets/user.png';
import LogoIcon from '../assets/LogoIcon.png';

import { HiMenu, HiX } from 'react-icons/hi';
import { ImProfile } from 'react-icons/im';
import {
  FaSignOutAlt,
  FaSignInAlt,
  FaPlusCircle,
  FaPaw,
  FaStethoscope,
} from 'react-icons/fa';
import {
  MdHome,
  MdInfo,
  MdContactMail,
  MdHomeRepairService,
  MdTipsAndUpdates,
} from 'react-icons/md';

import toast from 'react-hot-toast';
import { FcPrivacy } from 'react-icons/fc';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // LIVE UPDATE STATES
  const [liveName, setLiveName] = useState('');
  const [livePhoto, setLivePhoto] = useState('');

  // Load localStorage OR fallback user data
  const loadLiveProfile = () => {
    const storedName = localStorage.getItem('userName');
    const storedPhoto = localStorage.getItem('userPhoto');

    setLiveName(storedName || user?.displayName || 'User');
    setLivePhoto(storedPhoto || user?.photoURL || userIcon);
  };

  // Initial Load
  useEffect(() => {
    loadLiveProfile();
  }, [user]);

  useEffect(() => {
    const handleStorageChange = () => {
      loadLiveProfile();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success('You logged out successfully!'))
      .catch(() => toast.error('Logout failed!'));

    setShowDropdown(false);
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            isActive
              ? 'bg-white text-primary font-bold shadow-md'
              : 'text-white hover:bg-white/20 hover:text-white'
          }`
        }
      >
        <MdHome className="text-lg" /> Home
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            isActive
              ? 'bg-white text-primary font-bold shadow-md'
              : 'text-white hover:bg-white/20 hover:text-white'
          }`
        }
      >
        <MdHomeRepairService className="text-lg" /> All Services
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            isActive
              ? 'bg-white text-primary font-bold shadow-md'
              : 'text-white hover:bg-white/20 hover:text-white'
          }`
        }
      >
        <MdInfo className="text-lg" /> About Us
      </NavLink>

      <NavLink
        to="/vets"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            isActive
              ? 'bg-white text-primary font-bold shadow-md'
              : 'text-white hover:bg-white/20 hover:text-white'
          }`
        }
      >
        <FaStethoscope className="text-lg" /> Vets
      </NavLink>

      <NavLink
        to="/tips"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            isActive
              ? 'bg-white text-primary font-bold shadow-md'
              : 'text-white hover:bg-white/20 hover:text-white'
          }`
        }
      >
        <MdTipsAndUpdates className="text-lg" /> Tips
      </NavLink>
    </>
  );

  return (
    <nav
      className="
        fixed top-0 left-1/2 transform -translate-x-1/2 
        z-50 w-full max-w-7xl 
        bg-gradient-to-r from-[#0A183B] via-[#0F2A53] to-[#163A6B]
        shadow-lg py-3 rounded-lg
    "
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span
              className="text-2xl font-extrabold bg-gradient-to-r 
                from-[#FFB764] via-[#FFD56A] to-[#FF9F43]
                text-transparent bg-clip-text drop-shadow-[0_2px_6px_rgba(255,175,90,0.55)]
                tracking-wide flex items-center text-yellow-400"
            >
              <FaPaw className="mr-2" /> WarmPaws
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-3">{navLinks}</div>

          {/* User + Auth */}
          <div className="flex items-center gap-4">
            {user && (
              <div className="relative">
                <img
                  src={livePhoto}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white/60 object-cover cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                  onError={e => (e.target.src = userIcon)}
                />

                {/* Dropdown Animated */}
                <div
                  className={`
                    absolute right-0 mt-3 w-40 bg-white rounded-lg shadow-lg z-50
                    transform transition-all duration-300 overflow-hidden 
                    ${
                      showDropdown
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }
                `}
                >
                  <Link
                    to="/profile"
                    onClick={() => setShowDropdown(false)}
                    className="px-12 py-3 hover:bg-gray-100 text-gray-800 flex items-center gap-2 border-b"
                  >
                    <ImProfile /> Profile
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="px-12 py-3 hover:bg-red-600 hover:text-white text-red-600 flex items-center gap-2"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              </div>
            )}

            {!user && (
              <div className="hidden md:flex gap-3">
                <Link
                  to="/auth/login"
                  className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg shadow hover:bg-gray-200 font-semibold"
                >
                  <FaSignInAlt /> Login
                </Link>

                <Link
                  to="/auth/signup"
                  className="flex items-center gap-2 bg-yellow-400 text-primary px-4 py-2 rounded-lg shadow hover:bg-yellow-300 font-semibold"
                >
                  <FaPlusCircle /> Register
                </Link>
              </div>
            )}

            <button
              className="md:hidden text-3xl text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden flex flex-col items-center gap-4 bg-[#0A183B] text-white mt-3 rounded-lg 
          transition-all duration-300 overflow-hidden
          ${isOpen ? 'max-h-[500px] opacity-100 py-5' : 'max-h-0 opacity-0'}
        `}
      >
        {navLinks}

        {!user && (
          <div className="flex flex-col w-3/4 gap-3">
            <Link
              to="/auth/login"
              className="flex items-center justify-center gap-2 bg-white text-primary py-2 rounded-lg shadow"
            >
              <FaSignInAlt /> Login
            </Link>

            <Link
              to="/auth/signup"
              className="flex items-center justify-center gap-2 bg-yellow-400 text-primary py-2 rounded-lg shadow"
            >
              <FaPlusCircle /> Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
