import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Name validation
    if (name.length < 5) {
      toast.error('Name should be more than 5 characters', {
        position: 'top-center',
        autoClose: 2500,
        theme: 'colored',
      });
      return;
    }

    // Password validation
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long', {
        position: 'top-center',
        autoClose: 2500,
        theme: 'colored',
      });
      return;
    } else if (!uppercasePattern.test(password)) {
      toast.error('Password must have at least one uppercase letter', {
        position: 'top-center',
        autoClose: 2500,
        theme: 'colored',
      });
      return;
    } else if (!lowercasePattern.test(password)) {
      toast.error('Password must have at least one lowercase letter', {
        position: 'top-center',
        autoClose: 2500,
        theme: 'colored',
      });
      return;
    }

    // Create user
    createUser(email, password)
      .then(result => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success('Account Signup successfully!', {
              position: 'top-center',
              autoClose: 2000,
              theme: 'colored',
            });
            setTimeout(() => navigate('/'), 2000);
          })
          .catch(error => {
            console.log(error);
            setUser(user);
          });
      })
      .catch(error => {
        toast.error(error.message, {
          position: 'top-center',
          autoClose: 3000,
          theme: 'colored',
        });
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          SignUp your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            <label className="label">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="input w-full pr-10"
                placeholder="Password"
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              SignUp
            </button>

            <p className="font-semibold text-center pt-5">
              Already Have An Account?{' '}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
};

export default Register;
