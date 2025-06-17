import { useState, useEffect } from "react";

// icons
import notifikasiIcon from "../../assets/icons/notifRed.svg"

// image
import profil from "../../assets/image/profil.png";

export default function Header({ title, note }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full flex justify-between items-center bg-white p-4 sticky top-0 z-10 transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}>
      {/* Keterangan Halaman */}
      <div>
        <h1 className="text-[28px] font-semibold text-primary">{title}</h1>
        <p className="text-[18px] mt-2 text-textHeader">{note}</p>
      </div>
      {/* Notifikasi & Foto Profil */}
      <div className="relative group cursor-pointer gap-6 flex items-center">
        <img src={notifikasiIcon} alt="" className="w-6"/>
        {/* profil open */}
        <div onClick={() => setOpen(!open)}>
          <img src={profil} alt="" className="w-[44px] h-[44px]" />
        </div>
      </div>
      {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 duration-200 bg-white text-primary hover:bg-primary hover:text-white rounded-md shadow-lg z-50 translate-y-14 -translate-x-10">
            <ul className="">
              <a href="">
                <li className="px-4 py-2 cursor-pointer">
                Logout
              </li>
              </a>
            </ul>
          </div>
        )}
    </header>
  );
}
