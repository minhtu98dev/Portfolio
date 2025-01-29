"use client";
import { navLink } from "@/constant/constant";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { HiBars3BottomRight } from "react-icons/hi2";
import React, { useEffect, useState, useCallback } from "react";
import { MdLanguage } from "react-icons/md";

type Props = {
  openNav: () => void;
  toggleLanguage: () => void;
  currentLang: "vi" | "en";
};

const Nav = ({ openNav, toggleLanguage, currentLang }: Props) => {
  const [navBg, setNavBg] = useState(false);

  // Xử lý hiệu ứng đổi màu navbar khi scroll
  const handleScroll = useCallback(() => {
    setNavBg(window.scrollY >= 90);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Đảm bảo navLink không bị lỗi
  const links = navLink[currentLang] || [];

  return (
    <div
      className={`fixed w-full top-0 left-0 z-10 transition-all duration-200 ${
        navBg ? "bg-[#240b39]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 bg-gray-800 text-white mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo2.0.png"
            alt="logo"
            width={120}
            height={120}
            className="ml-[-1.5rem] sm:ml-0 hover:scale-110 duration-200"
          />
        </div>

        {/* Các liên kết nav trên desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          {links.length > 0 ? (
            links.map((nav) => (
              <ScrollLink
                key={nav.id}
                to={nav.url.replace("#", "")}
                smooth={true}
                duration={300}
                spy={true}
                offset={-50}
                className="nav_link text-white hover:scale-110 duration-200 cursor-pointer"
              >
                {nav.label}
              </ScrollLink>
            ))
          ) : (
            <p className="text-gray-400">No links available</p>
          )}
        </div>

        {/* Button chuyển ngôn ngữ */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="text-white flex items-center gap-2 justify-center bg-gray-700 px-4 py-2 rounded-lg font-bold hover:bg-gray-600 transition-all duration-200"
          >
            <MdLanguage size={25} />
            {currentLang === "vi" ? "English" : "Vietnam"}
          </button>

          {/* Icon mobile menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="lg:hidden text-white w-8 h-8 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
