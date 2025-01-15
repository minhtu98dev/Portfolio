import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>Về Tôi</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* text */}
        <div>
          <h1 className="text-bg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="text-gray-500 mt-6 text-base">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center ">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Frontend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center ">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Backend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center ">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Full Stack Development
              </p>
            </div>
          </div>
        </div>
        {/* stats */}
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
          <div>
            <Image
              src="/images/customer.png"
              alt="image"
              height={80}
              width={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-white text-center">
              {aboutInfo.client}
            </p>
            <p className="text-base lg:text-lg text-gray-400 text-center">
              Khách Hàng Hài Lòng
            </p>
          </div>
          <div>
            <Image
              src="/images/experience.png"
              alt="image"
              height={80}
              width={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-white text-center">
              {aboutInfo.experience}
            </p>
            <p className="text-base lg:text-lg text-gray-400 text-center">
              Năm Kinh Nghiệm
            </p>
          </div>
          <div>
            <Image
              src="/images/completed.png"
              alt="image"
              height={80}
              width={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-white text-center">
              {aboutInfo.project}
            </p>
            <p className="text-base lg:text-lg text-gray-400 text-center">
              Dự Án Hoàn Thành
            </p>
          </div>
          <div>
            <Image
              src="/images/rocket.png"
              alt="image"
              height={80}
              width={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-white text-center">
              {aboutInfo.website}
            </p>
            <p className="text-base lg:text-lg text-gray-400 text-center">
              Trang Web Đã Ra Mắt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
