"use client"; // Đánh dấu đây là client-side component
import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs

type Props = {
  currentLang: "vi" | "en"; // Nhận ngôn ngữ từ props
};

const ContactForm = ({ currentLang }: Props) => {
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
  const [formError, setFormError] = useState(""); // Thêm trạng thái lỗi form

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

  // Hàm kiểm tra form trước khi gửi
  const validateForm = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message ||
      !formData.option
    ) {
      setFormError(
        currentLang === "vi"
          ? "Vui lòng điền đầy đủ thông tin!"
          : "Please fill out all fields!"
      );
      return false;
    }
    setFormError(""); // Reset lỗi form nếu đã điền đủ thông tin
    return true;
  };

  // Hàm gửi email
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return; // Nếu form không hợp lệ thì không gửi email

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
          setSuccessMessage(
            currentLang === "vi"
              ? "Tin nhắn của bạn đã được gửi thành công!"
              : "Your message has been sent successfully!"
          );
        },
        (error) => {
          console.error("Lỗi gửi email:", error);
          setErrorMessage(
            currentLang === "vi"
              ? `Ối! Đã xảy ra lỗi. Error: ${error.text}`
              : `Oops! Something went wrong. Error: ${error.text}` // Hiển thị thông báo lỗi chi tiết
          );
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-5 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-4 font-bold">
        {currentLang === "vi"
          ? "Hãy Cùng Làm Việc Với Tôi!"
          : "Come work with me!"}
      </h1>
      <p className="text-gray-200 mt-5 lg:text-base text-xs md:text-sm">
        {currentLang === "vi"
          ? "Chúng ta có thể cùng hợp tác để tạo ra những sản phẩm web chất lượng cao. Hãy để tôi giúp bạn hiện thực hóa các ý tưởng, xây dựng các ứng dụng web mạnh mẽ và tối ưu hóa trải nghiệm người dùng."
          : "We can work together to create high-quality web products. Let me help you turn your ideas into reality, build powerful web applications, and optimize user experience."}
      </p>

      {/* Hiển thị thông báo thành công hoặc lỗi */}
      {successMessage && (
        <p className="text-green-500 text-center mt-4">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-500 text-center mt-4">{errorMessage}</p>
      )}

      {/* Hiển thị thông báo lỗi nếu thiếu thông tin */}
      {formError && (
        <p className="text-red-500 text-center mt-4">{formError}</p>
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
            placeholder={currentLang === "vi" ? "Họ" : "First Name"}
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder={currentLang === "vi" ? "Tên" : "Last Name"}
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div className="flex flex-col mt-5 md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={
              currentLang === "vi" ? "Địa chỉ Email" : "Email Address"
            }
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={
              currentLang === "vi" ? "Số điện thoại" : "Phone Number"
            }
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
              {currentLang === "vi" ? "Tùy chọn" : "Option"}
            </option>
            <option value="frontend">
              {currentLang === "vi"
                ? "Frontend Developer"
                : "Frontend Developer"}
            </option>
            <option value="backend">
              {currentLang === "vi" ? "Backend Developer" : "Backend Developer"}
            </option>
            <option value="fullstack">
              {currentLang === "vi"
                ? "Fullstack Developer"
                : "Fullstack Developer"}
            </option>
          </select>
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder={currentLang === "vi" ? "Lời nhắn" : "Message"}
        ></textarea>

        <div className="mt-4">
          <button
            type="submit"
            disabled={isSending}
            className="px-6 py-3 font-medium bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-200 rounded-full"
          >
            {isSending
              ? currentLang === "vi"
                ? "Gửi ..."
                : "Sending ..."
              : currentLang === "vi"
              ? "Gửi lời nhắn"
              : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
