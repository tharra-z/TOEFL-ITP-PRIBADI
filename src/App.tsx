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


// src/App.tsx
import AppRouter from "./routes/AppRouter";

function App() {
  return <AppRouter />;
}

export default App;
