import React from "react";
import { servicesData } from "@/Data/data"; // Dữ liệu dịch vụ
import ServiceCard from "./ServiceCard"; // Component hiển thị mỗi dịch vụ
import SectionHeading from "@/components/Helper/SectionHeading"; // Tiêu đề phần dịch vụ

type Props = {
  currentLang: "vi" | "en"; // Chỉ định ngôn ngữ hiện tại
};

const Services = ({ currentLang }: Props) => {
  const services = servicesData[currentLang]; // Lấy dịch vụ theo ngôn ngữ

  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>
        {currentLang === "vi" ? "Dịch Vụ" : "Services"}
      </SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20">
        {services.map((service) => (
          <div key={service.id}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
