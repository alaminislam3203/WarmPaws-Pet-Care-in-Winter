import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    // === Name Validation ===
    if (name.length < 5) {
      toast.error('Name should be more than 5 characters');
      return;
    }

    // === Password Validation ===
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    } else if (!uppercasePattern.test(password)) {
      toast.error('Password must have at least one uppercase letter');
      return;
    } else if (!lowercasePattern.test(password)) {
      toast.error('Password must have at least one lowercase letter');
      return;
    }

    // === Create User ===
    createUser(email, password)
      .then(result => {
        const user = result.user;
        updateUser({ displayName: name })
          .then(() => {
            setUser({ ...user, displayName: name });
            toast.success('Account created successfully!');
            setTimeout(() => navigate('/'), 1500);
          })
          .catch(error => {
            console.error(error);
            setUser(user);
          });
      })
      .catch(error => {
        toast.error(`❌ ${error.message}`);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gray-100 px-4">
      <div className="card bg-white w-full max-w-sm shadow-2xl py-6 px-5 rounded-xl">
        <h2 className="font-semibold text-2xl text-center mb-3">
          Sign Up Your Account
        </h2>

        <form onSubmit={handleRegister} className="card-body px-0">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label font-medium">Name</label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your full name"
              required
            />

            {/* Email */}
            <label className="label font-medium mt-3">Email</label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />

            {/* Password */}
            <label className="label font-medium mt-3">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="input input-bordered w-full pr-10"
                placeholder="Enter password"
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button
              type="submit"
              className="btn w-full text-white mt-6 font-semibold rounded-lg transition duration-300"
              style={{ backgroundColor: '#40E0D0' }}
              onMouseEnter={e => (e.target.style.backgroundColor = '#2ec4b6')}
              onMouseLeave={e => (e.target.style.backgroundColor = '#40E0D0')}
            >
              Sign Up
            </button>

            <p className="font-semibold text-center pt-5">
              Already have an account?{' '}
              <Link className="text-blue-600 hover:underline" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
