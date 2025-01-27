import Image from "next/image";
import Link from "next/link"; // Import Link
import React from "react";

const Footer = () => {
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
        <Link href="#home">
          <div>Trang chủ</div>
        </Link>
        <Link href="#services">
          <div>Dịch vụ</div>
        </Link>
        <Link href="#project">
          <div>Dự án</div>
        </Link>
        <Link href="#contact">
          <div>Liên hệ</div>
        </Link>
      </div>
      <p className="text-white text-opacity-60 text-center mt-6">
        © 2024 Tất cả bản quyền được bảo lưu bởi Minh Tú
      </p>
    </div>
  );
};

export default Footer;
