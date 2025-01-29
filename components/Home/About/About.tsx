import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

type Props = {
  currentLang: "vi" | "en"; // Nhận ngôn ngữ từ props
};

const About = ({ currentLang }: Props) => {
  const info = aboutInfo[currentLang] || aboutInfo["vi"]; // Đảm bảo có dữ liệu mặc định

  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>
        {currentLang === "vi" ? "Về Tôi" : "About Me"}
      </SectionHeading>

      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text section */}
        <div>
          <h1 className="text-bg text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-200">
            {info.title}
          </h1>
          <p className="text-gray-500 mt-6 text-base">{info.description}</p>

          <div className="mt-8">
            {[
              {
                labelVi: "Phát triển Frontend",
                labelEn: "Frontend Development",
                color: "bg-blue-800",
              },
              {
                labelVi: "Phát triển Backend",
                labelEn: "Backend Development",
                color: "bg-orange-800",
              },
              {
                labelVi: "Phát triển Full Stack",
                labelEn: "Full Stack Development",
                color: "bg-green-800",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 mb-6">
                <div
                  className={`w-7 h-7 ${item.color} flex flex-col items-center justify-center`}
                >
                  <FaCheck className="text-white" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                  {currentLang === "vi" ? item.labelVi : item.labelEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
          {[
            {
              src: "/images/customer.png",
              value: info.client,
              labelVi: "Khách Hàng Hài Lòng",
              labelEn: "Happy Clients",
            },
            {
              src: "/images/experience.png",
              value: info.experience,
              labelVi: "Năm Kinh Nghiệm",
              labelEn: "Years of Experience",
            },
            {
              src: "/images/completed.png",
              value: info.project,
              labelVi: "Dự Án Hoàn Thành",
              labelEn: "Completed Projects",
            },
            {
              src: "/images/rocket.png",
              value: info.website,
              labelVi: "Trang Web Đã Ra Mắt",
              labelEn: "Websites Launched",
            },
          ].map((item, index) => (
            <div key={index}>
              <Image
                src={item.src}
                alt="image"
                height={80}
                width={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-white text-center">
                {item.value}
              </p>
              <p className="text-base lg:text-lg text-gray-400 text-center">
                {currentLang === "vi" ? item.labelVi : item.labelEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
