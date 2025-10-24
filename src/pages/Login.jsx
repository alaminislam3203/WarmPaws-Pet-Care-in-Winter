import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [emailInput, setEmailInput] = useState('');
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || '/';

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        toast.success('Login successful! ', {
          position: 'top-center',
          autoClose: 1500,
          theme: 'colored',
        });

        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1600);
      })
      .catch(err => {
        toast.error(err.code || 'Login failed. Please try again.', {
          position: 'top-center',
          autoClose: 2000,
          theme: 'colored',
        });
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success('Logged in with Google! ', {
          position: 'top-center',
          autoClose: 1500,
          theme: 'colored',
        });
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1600);
      })
      .catch(err => {
        toast.error(err.code || 'Google login failed. Try again.', {
          position: 'top-center',
          autoClose: 2000,
          theme: 'colored',
        });
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-50">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center mb-4">
          Login to your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
            value={emailInput}
            onChange={e => setEmailInput(e.target.value)}
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />

          <div className="flex justify-start mb-2">
            <Link
              to="/auth/forgot-password"
              state={{ email: emailInput }}
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password..?
            </Link>
          </div>

          <button type="submit" className="btn btn-neutral mt-2 w-full">
            Login
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500 font-semibold">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full border border-base rounded-lg py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
          >
            <FcGoogle size={24} />
            <span className="font-medium">Login with Google</span>
          </button>

          <p className="font-semibold text-center pt-5 text-sm">
            Don't have an account?{' '}
            <Link className="text-secondary" to="/auth/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
};

export default Login;
