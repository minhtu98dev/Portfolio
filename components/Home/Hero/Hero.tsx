import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";

type Props = {
  currentLang: "vi" | "en"; // Nhận ngôn ngữ từ props
};

const Hero = ({ currentLang }: Props) => {
  const info = BaseInfo[currentLang]; // Lấy thông tin theo ngôn ngữ
  const cvFile =
    currentLang === "vi" ? "/CV_Pham_Minh_Tu.pdf" : "/CV_MinhTu - ENGLISH.pdf";
  const cvFileName =
    currentLang === "vi" ? "CV_Pham_Minh_Tu.pdf" : "CV_MinhTu - ENGLISH.pdf";

  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Thông tin giới thiệu */}
          <div>
            <h1 className="text-2xl md:text-3xl mb-5 text-gray-300 font-semibold">
              {currentLang === "vi" ? "Tôi là" : "I'm"} {info.name}
            </h1>
            <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3.5rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
              {info.position}
            </h1>
            <p className="mt-6 text-sm md:text-base text-white opacity-60">
              {info.description}
            </p>

            {/* Nút Download CV */}
            <a href={cvFile} download={cvFileName}>
              <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2">
                <span>{currentLang === "vi" ? "Tải CV" : "Download CV"}</span>
                <FaDownload />
              </button>
            </a>
          </div>

          {/* Ảnh đại diện */}
          <div className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden">
            <Image
              src={info.profilePic}
              alt={info.name}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
