// import React from 'react'

// import components
import { Menu } from "../../common/MainLayout/Header/Menu/Menu";
import { Logo } from "../../core/icons/Logo/Logo";

const Header = () => {
  return (
    <div className="border w-full h-30 flex justify-center items-end">
      <div className="border w-311.75 h-12.5 mb-3 flex">
        <Logo />
        <Menu />
      </div>
    </div>
  );
};

export { Header };
