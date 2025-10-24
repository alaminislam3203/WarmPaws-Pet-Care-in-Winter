import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ForgotPassword = () => {
  const location = useLocation();
  const emailFromState = location.state?.email || '';
  const [email, setEmail] = useState(emailFromState);

  const handleReset = e => {
    e.preventDefault();
    // Gmail redirect
    window.location.href = `https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox=${email}`;
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-50 px-4">
      <div className="card bg-white w-full max-w-sm shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        <form onSubmit={handleReset} className="flex flex-col gap-4">
          <label className="label">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary w-full mt-2">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
