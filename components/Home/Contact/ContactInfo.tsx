import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

type Props = {
  currentLang: "vi" | "en"; // Chỉ định ngôn ngữ hiện tại
};

const ContactInfo = ({ currentLang }: Props) => {
  // Lấy thông tin liên hệ theo ngôn ngữ
  const data = contactData[currentLang];

  if (!data) {
    return <p>Không có thông tin liên lạc cho ngôn ngữ này.</p>; // Nếu không có dữ liệu cho ngôn ngữ, hiển thị thông báo
  }

  return (
    <div>
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">
            {currentLang === "vi" ? "Số điện thoại" : "Phone Number"}
          </h1>
          <h1 className="text-base sm:text-xl text-white opacity-70">
            {data.phone}
          </h1>
        </div>
      </div>
      <div className="flex items-center mt-8 mb-8 space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaMap className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">
            {currentLang === "vi" ? "Email của tôi" : "My Email"}
          </h1>
          <h1 className="text-base sm:text-xl text-white opacity-70">
            {data.email}
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaEnvelope className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">
            {currentLang === "vi" ? "Địa chỉ" : "Address"}
          </h1>
          <h1 className="text-base sm:text-xl text-white opacity-70">
            {data.address}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
