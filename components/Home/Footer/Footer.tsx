import Image from "next/image";
import Link from "next/link"; // Import Link
import React from "react";

type Props = {
  currentLang: "vi" | "en"; // Nhận ngôn ngữ từ props
  changeLang: (lang: "vi" | "en") => void; // Hàm thay đổi ngôn ngữ
};

const Footer = ({ currentLang }: Props) => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715] font-roboto">
      <div>
        <Image
          src="/images/logo2.0.png"
          alt="logo"
          height={120}
          width={120}
          className="mx-auto"
        />
      </div>
      <div className="flex items-center flex-wrap justify-center space-x-10 mt-4 text-white font-bold">
        {/* Các liên kết */}
        <Link href="#home">
          <div>{currentLang === "vi" ? "Trang chủ" : "Home"}</div>
        </Link>
        <Link href="#services">
          <div>{currentLang === "vi" ? "Dịch vụ" : "Services"}</div>
        </Link>
        <Link href="#project">
          <div>{currentLang === "vi" ? "Dự án" : "Projects"}</div>
        </Link>
        <Link href="#contact">
          <div>{currentLang === "vi" ? "Liên hệ" : "Contact"}</div>
        </Link>
      </div>

      <p className="text-white text-opacity-60 text-center mt-6">
        {currentLang === "vi"
          ? "© 2024 Tất cả bản quyền được bảo lưu bởi Minh Tú"
          : "© 2024 All rights reserved by Minh Tu"}
      </p>
    </div>
  );
};

export default Footer;
