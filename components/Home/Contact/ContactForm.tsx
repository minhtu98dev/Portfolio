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
          setSuccessMessage("Tin nhắn của bạn đã được gửi thành công!");
        },
        (error) => {
          console.error("Lỗi gửi email:", error);
          setErrorMessage(`Ối! Đã xảy ra lỗi. Error: ${error.text}`); // Hiển thị thông báo lỗi chi tiết
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };
  console.log(formData);

  return (
    <div className="bg-[#140c1c] rounded-lg p-5 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-4 font-bold">
        Hãy Cùng Làm Việc Với Tôi!
      </h1>
      <p className="text-gray-200 mt-5 lg:text-base text-xs md:text-sm">
        Chúng ta có thể cùng hợp tác để tạo ra những sản phẩm web chất lượng
        cao. Hãy để tôi giúp bạn hiện thực hóa các ý tưởng, xây dựng các ứng
        dụng web mạnh mẽ và tối ưu hóa trải nghiệm người dùng.
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
            placeholder="Họ"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Tên"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div className="flex flex-col mt-5 md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Địa chỉ Email"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Số điện thoại"
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
              Tùy chọn
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
          placeholder="Lời nhắn"
        ></textarea>

        <div className="mt-4">
          <button
            type="submit"
            disabled={isSending}
            className="px-6 py-3 font-medium bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-200 rounded-full"
          >
            {isSending ? "Gửi ..." : "Gửi lời nhắn"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
