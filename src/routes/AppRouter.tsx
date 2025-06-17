// src/routes/AppRouter.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
// import InstructorLayout from '../layouts/InstructorLayout';
// import Dashboard from '../pages/instructor/Dashboard';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rute untuk Otentikasi */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lupa-password" element={<ForgotPasswordPage />} />
        {/* <Route path="/registrasi" element={...} /> */}

        {/* Contoh Rute untuk Instruktur yang sudah login */}
        {/* <Route path="/instructor" element={<InstructorLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          ...rute instruktur lainnya
        </Route> */}

        {/* Rute default, arahkan ke login */}
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;