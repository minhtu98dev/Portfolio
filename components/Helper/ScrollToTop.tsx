"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const scrollTo = () => {
      if (window.scrollY > 0) {
        window.scrollTo({
          top: window.scrollY - 200,
          behavior: "smooth",
        });
        requestAnimationFrame(scrollTo);
      }
    };
    scrollTo();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none transition-all duration-300 transform hover:scale-110"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
