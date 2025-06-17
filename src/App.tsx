import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/AdminView/Dashboard";
import KelolaInstruktur from "./pages/AdminView/KelolaInstruktur";
import KelolaPaket from "./pages/AdminView/KelolaPaket";
import PantauDaftarPeserta from "./pages/AdminView/PantauDaftarPeserta";
import SeleksiSkor from "./pages/AdminView/SeleksiSkorAwal";
import RiwayatTransaksi from "./pages/AdminView/RiwayatTransaksi";
import NotifikasiAdmin from "./pages/AdminView/NotifikasiAdmin";
import ProfilSaya from "./pages/AdminView/ProfilSaya";
import UbahKetersediaan from "./pages/AdminView/KelolaInstruktur/UbahKetersediaan";
import TambahInstruktur from "./pages/AdminView/KelolaInstruktur/TambahInstruktur";
import TambahPaket from "./pages/AdminView/KelolaPaket/TambahPaket";
import UbahDetail from "./pages/AdminView/KelolaPaket/UbahDetail"; //Ubah Detail Paket
import AktivasiPaket from "./pages/AdminView/KelolaPaket/Aktivasi"; //Aktivasi Paket
import DetailPengajuan from "./pages/AdminView/SeleksiSkorAwal/DetailPengajuan"; // Detail Pengajuan Seleksi


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/kelolaInstruktur" element={<KelolaInstruktur />} />
        <Route path="/kelolaPaket" element={<KelolaPaket />} />
        <Route path="/pantauPeserta" element={<PantauDaftarPeserta />} />
        <Route path="/seleksiSkor" element={<SeleksiSkor />} />
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
    </Router>
  );
}
