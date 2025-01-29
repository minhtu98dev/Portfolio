import { navLink } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
  currentLang: "vi" | "en"; // Nhận giá trị currentLang từ ResNav
};

const MobileNav = ({ closeNav, showNav, currentLang }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"; // Điều khiển menu di chuyển vào/ra

  const handleLinkClick = () => {
    closeNav(); // Đóng menu khi người dùng nhấn vào một liên kết
  };

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black/90 w-full h-screen`}
      >
        {/* Navigation Links */}
        <div
          className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#050107] space-y-6 z-[10000]`}
        >
          {/* Render các liên kết dựa trên ngôn ngữ */}
          {(navLink[currentLang] || []).map((nav) => (
            <Link
              key={nav.id}
              href={nav.url}
              onClick={handleLinkClick}
              className="nav_link"
            >
              <p className="text-[20px] ml-12 pb-2 sm:text-[30px] hover:scale-110 duration-200">
                {nav.label}
              </p>
            </Link>
          ))}

          {/* Nút đóng menu */}
          <CgClose
            onClick={closeNav}
            className="absolute text-white top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
