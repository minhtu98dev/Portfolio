import { navLink } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  const handleLinkClick = () => {
    // Đóng menu khi người dùng bấm vào một liên kết
    closeNav();
  };

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black/90  w-full h-screen`}
      >
        {/* nav links */}
        <div
          className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#050107] space-y-6 z-[10000]`}
        >
          {navLink.map((navLink) => {
            return (
              <Link
                key={navLink.id}
                href={navLink.url}
                onClick={handleLinkClick}
              >
                <p className="nav_link text-[20px] ml-12 pb-2 sm:text-[30px] hover:scale-110 duration-200">
                  {navLink.label}
                </p>
              </Link>
            );
          })}
          {/* close button */}
          <CgClose
            onClick={closeNav}
            className="absolute text-white top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
