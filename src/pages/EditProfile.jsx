import React, { useEffect, useState } from 'react';
import { FaUserAlt, FaImage, FaSave } from 'react-icons/fa';
import userIcon from '../assets/user.png';
import toast, { Toaster } from 'react-hot-toast';

export default function EditProfile() {
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [preview, setPreview] = useState('');

  // Load saved data from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    const storedPhoto = localStorage.getItem('userPhoto');

    if (storedName) setName(storedName);
    if (storedPhoto) {
      setPhotoURL(storedPhoto);
      setPreview(storedPhoto);
    }
  }, []);

  const handlePhotoChange = e => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setPreview(imgUrl);
      setPhotoURL(imgUrl);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Save to localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('userPhoto', photoURL);

    // Trigger storage event manually (for live updates in same tab)
    window.dispatchEvent(new Event('storage'));

    // Show toast notification
    toast.success('Profile updated successfully!', {
      position: 'top-center',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-12 px-4">
      <Toaster position="top-center" />
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-7">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <FaUserAlt className="text-[#0A183B]" />
          Edit Profile
        </h2>

        <div className="flex flex-col items-center mb-6">
          <img
            src={preview || userIcon}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-md mb-4"
            onError={e => {
              e.target.onerror = null;
              e.target.src = userIcon;
            }}
          />

          <label className="cursor-pointer flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-lg shadow hover:bg-gray-300 transition">
            <FaImage className="text-xl text-[#0A183B]" />
            <span>Select New Photo</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </label>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg shadow">
            <FaUserAlt className="text-xl text-[#0A183B]" />
            <input
              type="text"
              className="w-full bg-transparent outline-none"
              placeholder="Enter your full name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#0A183B] text-white py-3 rounded-lg shadow-md hover:bg-[#152d5a] transition-all duration-300 font-semibold"
          >
            <FaSave className="text-lg" />
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
