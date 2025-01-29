"use client";
import React, { useState } from "react";
import ResNav from "@/components/Home/Navbar/ResNav";
import Home from "@/components/Home/Home";
import Footer from "@/components/Home/Footer/Footer";

const Page = () => {
  const [currentLang, setCurrentLang] = useState<"vi" | "en">("vi");

  const toggleLanguage = () => {
    setCurrentLang((prevLang) => (prevLang === "vi" ? "en" : "vi"));
  };

  return (
    <div>
      <ResNav toggleLanguage={toggleLanguage} currentLang={currentLang} />
      <Home currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </div>
  );
};

export default Page;
