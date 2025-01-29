import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

type Props = {
  currentLang: "vi" | "en"; // Chỉ định ngôn ngữ hiện tại
};

const Contact = ({ currentLang }: Props) => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] mx-auto items-center gap-10 mt-10">
        {/* form */}
        <div>
          <ContactForm currentLang={currentLang} />
        </div>
        {/* info */}
        <div className="xl:mx-auto">
          <ContactInfo currentLang={currentLang} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
