import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

import userIcon from '../assets/user.png';
import { FaUserAlt, FaEnvelope, FaRegUserCircle, FaEdit } from 'react-icons/fa';

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Load localStorage OR Auth Data
  const loadProfileData = () => {
    const storedName = localStorage.getItem('userName');
    const storedPhoto = localStorage.getItem('userPhoto');

    setName(storedName || user?.displayName || 'No Name');
    setPhoto(storedPhoto || user?.photoURL || userIcon);
  };

  useEffect(() => {
    if (!user) {
      navigate('/auth/login');
    } else {
      loadProfileData();
      setLoading(false);
    }
  }, [user, navigate]);

  // Live update when EditProfile updates localStorage
  useEffect(() => {
    const handleStorageUpdate = () => loadProfileData();
    window.addEventListener('storage', handleStorageUpdate);

    return () => window.removeEventListener('storage', handleStorageUpdate);
  }, []);

  if (!user || loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 py-10 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-7">
        <h2 className="text-3xl font-extrabold text-center mb-8 flex justify-center items-center gap-2">
          <FaRegUserCircle className="text-[#0A183B] text-4xl" />
          My Profile
        </h2>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={photo}
            alt="User"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-md mb-4"
            onError={e => {
              e.target.onerror = null;
              e.target.src = userIcon;
            }}
          />
        </div>

        {/* User Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-sm">
            <FaUserAlt className="text-2xl text-[#0A183B]" />
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="text-lg font-semibold">{name}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-sm">
            <FaEnvelope className="text-2xl text-[#0A183B]" />
            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="text-gray-700">{user?.email}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/edit-profile')}
          className="w-full mt-7 flex items-center justify-center gap-2 bg-[#0A183B] text-white py-3 rounded-lg shadow-md hover:bg-[#132a55] transition-all duration-300 font-semibold"
        >
          <FaEdit className="text-lg" /> Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
