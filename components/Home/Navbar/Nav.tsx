"use client";
import { navLink } from "@/constant/constant";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { HiBars3BottomRight } from "react-icons/hi2";
import React, { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#240b39]" : ""
      } h-[10vh] z-[10] w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Image
          src="/images/logo2.0.png"
          alt="logo"
          width={120}
          height={120}
          className="ml-[-1.5rem] sm:ml-0 hover:scale-110 duration-200"
        />

        {/* Navigation Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLink.map((nav) => (
              <ScrollLink
                key={nav.id}
                to={nav.url.replace("#", "")}
                smooth={true}
                duration={300}
                spy={true}
                offset={-50}
                className="nav_link hover:scale-110 duration-200 cursor-pointer"
              >
                {nav.label}
              </ScrollLink>
            ))}
          </div>
        </div>

        {/* Contact Button & Mobile Menu */}
        <div className="flex space-x-2">
          <div className="flex items-center space-x-4">
            <ScrollLink
              to="contacts"
              smooth={true}
              duration={800}
              offset={-50}
              className="cursor-pointer"
            >
              <button className="md:px-10 md:py-3 font-roboto px-8 py-3 text-blue-900 font-semibold sm:text-base text-sm bg-white hover:bg-gray-300 transition-all duration-200 rounded-lg">
                Liên hệ với tôi
              </button>
            </ScrollLink>
          </div>

          {/* Burger Menu Icon */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
