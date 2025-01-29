"use client";
import { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

type Props = {
  toggleLanguage: () => void;
  currentLang: "vi" | "en";
};

const ResNav = ({ toggleLanguage, currentLang }: Props) => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      <Nav
        openNav={showNavHandler}
        toggleLanguage={toggleLanguage}
        currentLang={currentLang}
      />
      <MobileNav
        showNav={showNav}
        closeNav={closeNavHandler}
        currentLang={currentLang}
      />
    </div>
  );
};

export default ResNav;
