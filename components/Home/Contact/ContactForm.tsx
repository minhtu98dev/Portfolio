/* eslint-disable react/no-unescaped-entities */
"use client"; // Đánh dấu đây là client-side component

import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    option: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // Thêm thông báo thành công
  const [errorMessage, setErrorMessage] = useState(""); // Thêm thông báo lỗi

  // Hàm để cập nhật dữ liệu form
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Hàm gửi email
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage(""); // Reset success message
    setErrorMessage(""); // Reset error message

    // Gửi thông tin form qua EmailJS
    emailjs
      .send(
        "service_rsianw3", // Service ID của bạn
        "template_4rbuaqo", // Template ID của bạn
        formData, // Dữ liệu form
        "J3j2wWjlup4SVReFA" // Public User ID của bạn
      )
      .then(
        (response) => {
          console.log("Email gửi thành công:", response);
          setSuccessMessage("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Lỗi gửi email:", error);
          setErrorMessage(`Oops! Something went wrong. Error: ${error.text}`); // Hiển thị thông báo lỗi chi tiết
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };
  console.log(formData);

  return (
    <div className="bg-[#140c1c] rounded-lg sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let's work together!
      </h1>
      <p className="text-gray-200 mt-5 lg:text-base text-xs md:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae quia
        excepturi corrupti repellendus. Aliquid!
      </p>

      {/* Hiển thị thông báo thành công hoặc lỗi */}
      {successMessage && (
        <p className="text-green-500 text-center mt-4">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-500 text-center mt-4">{errorMessage}</p>
      )}

      {/* input */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 block w-full overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div className="flex flex-col mt-5 md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div>
          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Fullstack Developer</option>
          </select>
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder="Message"
        ></textarea>

        <div className="mt-4">
          <button
            type="submit"
            disabled={isSending}
            className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-200 rounded-full"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
