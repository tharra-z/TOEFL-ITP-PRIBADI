// src/pages/auth/RegistrationPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import { Eye, EyeOff } from 'lucide-react';

// SVG untuk Ikon Google
const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.956 0 8.327-3.417 8.327-8.544 0-.637-.057-1.251-.166-1.843z" />
    </svg>
);

const RegistrationPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout>
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Buat Akun Baru</h2>
        <p className="mt-2 text-sm text-gray-600">
          Isi form di bawah ini untuk mendaftar sebagai peserta kursus.
        </p>
      </div>

      <div className="mt-8">
        {/* --- Tombol Social Media (Opsional) --- */}
        <div className="space-y-4">
            <button
                type="button"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <GoogleIcon />
                <span className="ml-3">Daftar dengan Google</span>
            </button>
            {/* Anda bisa menambahkan tombol lain di sini jika perlu */}
        </div>

        {/* --- Separator "OR" --- */}
        <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm">ATAU</span>
            <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* --- Form Registrasi --- */}
        <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Nama Depan</label>
                    <input type="text" id="first-name" name="first-name" required className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm" />
                </div>
                <div className="w-full">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Nama Belakang</label>
                    <input type="text" id="last-name" name="last-name" required className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm" />
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Alamat Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm" />
            </div>

            <div>
                <label htmlFor="password"className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1 relative">
                    <input id="password" name="password" type={showPassword ? 'text' : 'password'} required className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center pr-3">
                        {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                    </button>
                </div>
            </div>
            
            <div className="flex items-center">
                <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                <label htmlFor="terms-and-privacy" className="ml-2 block text-sm text-gray-900">
                    Saya setuju dengan{' '}
                    <a href="#" className="font-medium text-red-700 hover:text-red-600">Syarat & Ketentuan</a>
                </label>
            </div>

            <div>
                <button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-[#E5A923] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                    Buat Akun
                </button>
            </div>
        </form>

        <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
                Sudah punya akun?{' '}
                <Link to="/login" className="font-medium text-red-700 hover:text-red-600">
                    Masuk
                </Link>
            </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegistrationPage;
