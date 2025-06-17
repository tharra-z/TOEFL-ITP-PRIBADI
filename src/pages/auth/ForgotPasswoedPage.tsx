// src/pages/auth/ForgotPasswordPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';

const ForgotPasswordPage: React.FC = () => {
  return (
    <AuthLayout>
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Lupa Password</h2>
        <p className="mt-2 text-sm text-gray-600">
          Kami akan mengirimkan tautan untuk mengatur ulang kata sandi anda
        </p>
      </div>

      <form className="mt-6 space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Alamat email
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-[#E5A923] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Kirim tautan
          </button>
        </div>
      </form>

      <div className="mt-6">
        <p className="text-center text-sm text-gray-600">
          Kembali ke{' '}
          <Link to="/login" className="font-medium text-red-700 hover:text-red-600">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;