import { NavLink } from "react-router-dom";

// icons
import dashboardIcon from "../../assets/icons/Dashboard.svg"
import riwayatTransaksiIcon from "../../assets/icons/riwayatTransaksi.svg"
import kelolaPaketIcon from "../../assets/icons/kelolaPaket.svg"
import KelolaStrukturIcon from "../../assets/icons/kelolaStruktur.svg"
import notifikasiIcon from "../../assets/icons/notifikasi.svg"
import pantauDaftarIcon from "../../assets/icons/pantauDaftar.svg"
import seleksiIcon from "../../assets/icons/seleksi.svg"
import profileIcon from "../../assets/icons/profile.svg"


// image
import Logo from "../../assets/image/logo.jpeg";

// Daftar menu navigasi
const menuItems = [
  { label: "Dashboard Admin", to: "/", icon: <img src={dashboardIcon} alt="Dashboard" className="w-5 h-5" /> },
  { label: "Kelola Instruktur", to: "/kelolaInstruktur", icon: <img src={KelolaStrukturIcon} alt="Dashboard" className="w-5 h-5" /> },
  { label: "Kelola Paket Kursus", to: "/kelolaPaket", icon: <img src={kelolaPaketIcon} alt="Dashboard" className="w-5 h-5" /> },
  { label: "Pantau Daftar Peserta", to: "/pantauPeserta", icon: <img src={pantauDaftarIcon} alt="Dashboard" className="w-5 h-5" /> },
  { label: "Seleksi Skor Awal", to: "/seleksiSkor", icon: <img src={seleksiIcon} alt="Dashboard" className="w-5 h-5" /> },
  { label: "Riwayat Transaksi", to: "/riwayatTransaksi", icon: <img src={riwayatTransaksiIcon} alt="Dashboard" className="w-5 h-5" /> },
  { label: "Notifikasi Admin", to: "/notifikasiAdmin", icon: <img src={notifikasiIcon} alt="Dashboard" className="w-5 h-5" /> },
  { label: "Profil Saya", to: "/profilSaya", icon: <img src={profileIcon} alt="Dashboard" className="w-5 h-5" /> },
];

export default function Sidebar() {
  return (
    <aside className="w-[20rem] z-50 h-screen overflow-y-auto bg-primary text-white fixed top-0 left-0 p-4">
      <img src={Logo} alt="Telkom University" className="w-auto"/>
      <nav className="space-y-2 block mt-8">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 p-4 rounded-[10px]  ${
                isActive ? "border border-borderColor" : ""
              }`
            }
          >
            {item.icon}
            <span className="text-[20px]">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
