import LoginPage from "../pages/auth/LoginPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswoedPage";
import ResetPassword from "../pages/auth/ResetPassword";
import RegistrationPage from "../pages/auth/RegistrationPage";
import VerificationLink from "../pages/auth/VerificationLink"
import StudentLayout from "../layouts/StudentLayout";
import StudentDashboard from "../pages/students/StudentDashboard";
import ProfilePage from "../pages/students/ProfilPage";
import InitialScore from "../pages/students/InitialScore";
import CreateInitialScore from "../pages/students/CreateInitialScore";
import StudyPlanSubmission from "../pages/students/StudyPlanSubmission";
import StudyPlanSubmissionCreate from "../pages/students/StudyPlanSubmissionCreate";
import StudyPlanSubmissionDetail from "../pages/students/StudyPlanSubmissionDetail";
import StudentFeedback from "../pages/students/StudentPlanFeedback";
import SubscribePage from "../pages/students/SubscribePage";
import SubscribeForm from "../pages/students/SubscribeForm";
import SubscribeHistory from "../pages/students/SubscribeHistory";
import InstructurPage from "../pages/students/InstructurPage";
// import InstructorLayout from '../layouts/InstructorLayout';
// import Dashboard from '../pages/instructor/Dashboard';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/AdminView/Dashboard";
import KelolaInstruktur from "../pages/AdminView/KelolaInstruktur";
import KelolaPaket from "../pages/AdminView/KelolaPaket";
import PantauDaftarPeserta from "../pages/AdminView/PantauDaftarPeserta";
import SeleksiSkorAwal from "../pages/AdminView/SeleksiSkorAwal";
import RiwayatTransaksi from "../pages/AdminView/RiwayatTransaksi";
import NotifikasiAdmin from "../pages/AdminView/NotifikasiAdmin";
import ProfilSaya from "../pages/AdminView/ProfilSaya";
import UbahKetersediaan from "../pages/AdminView/KelolaInstruktur/UbahKetersediaan";
import TambahInstruktur from "../pages/AdminView/KelolaInstruktur/TambahInstruktur";
import TambahPaket from "../pages/AdminView/KelolaPaket/TambahPaket";
import UbahDetail from "../pages/AdminView/KelolaPaket/UbahDetail";
import AktivasiPaket from "../pages/AdminView/KelolaPaket/Aktivasi";
import DetailPengajuan from "../pages/AdminView/SeleksiSkorAwal/DetailPengajuan";

const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>
        {/* Rute untuk Otentikasi */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lupa-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verifikasi-link" element={<VerificationLink/>} />

        <Route path="/registrasi" element={<RegistrationPage />} />

        {/* Rute dengan prefix /student */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="profil" element={<ProfilePage />} />
          <Route path="instruktur" element={<InstructurPage />} />
          <Route path="awal" element={<InitialScore />} />
          <Route path="awal/create" element={<CreateInitialScore />} />
          <Route path="rencana" element={<StudyPlanSubmission />} />
          <Route
            path="rencana/detail/:id"
            element={<StudyPlanSubmissionDetail />}
          />
          <Route
            path="rencana/detail/:id/feedback"
            element={<StudentFeedback />}
          />
          <Route
            path="rencana/create"
            element={<StudyPlanSubmissionCreate />}
          />

          <Route path="langganan" element={<SubscribePage />} />
          <Route path="langganan/form" element={<SubscribeForm />} />
          <Route path="langganan/riwayat" element={<SubscribeHistory />} />
          <Route path="pembayaran" element={<SubscribeHistory />} />

        </Route>

        {/* Rute default, arahkan ke login */}
        <Route path="/" element={<LoginPage />} />

        <Route path="/" element={<Dashboard />} />
        <Route path="/kelolaInstruktur" element={<KelolaInstruktur />} />
        <Route path="/kelolaPaket" element={<KelolaPaket />} />
        <Route path="/pantauPeserta" element={<PantauDaftarPeserta />} />
        <Route path="/seleksiSkor" element={<SeleksiSkorAwal />} />
        <Route path="/riwayatTransaksi" element={<RiwayatTransaksi />} />
        <Route path="/notifikasiAdmin" element={<NotifikasiAdmin />} />
        <Route path="/profilSaya" element={<ProfilSaya />} />
        <Route path="/UbahKetersediaan" element={<UbahKetersediaan />} /> {/* Ubah Ketersediaan Kelola Instruktur */}
        <Route path="/tambahInstruktur" element={<TambahInstruktur />} /> {/* Tambah Kelola Instruktur */}
        <Route path="/tambahPaket" element={<TambahPaket />} /> {/* Tambah Kelola Paket */}
        <Route path="/ubahDetail" element={<UbahDetail />} /> {/* Ubah Detail Paket Kursus */}
        <Route path="/aktivasi" element={<AktivasiPaket />} /> {/* Aktivasi Paket */}
        <Route path="/detailPengajuan" element={<DetailPengajuan />} /> {/* Detail Pengajuan Seleksi */}

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
