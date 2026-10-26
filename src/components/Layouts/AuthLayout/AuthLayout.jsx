// import React from 'react'
import { LoginButton } from "../../common/LoginButton/LoginButton";
import { Menu } from "../../common/MainLayout/Header/Menu/Menu";
import { Logo } from "./../../core/icons/Logo/Logo";
import Image from "./img/Image";
// import Top from "./top/Top";
import Hero_content from './heroboy/Hero_content';
import Category from './category/Category';
import Curses from "./cursoe-section/Curses";
import BestTeacher from "./best-teacher/BestTeacher";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      
      {/* header */}
      <div className=" w-full h-30 flex justify-center items-end">
        <div className="h-12.5 w-312 mb-4.25 flex justify-between items-center">
          <Logo />
          <Menu />

          <div className="flex items-center gap-3" dir="ltr">
            <LoginButton />
            <Image />
          </div>
          
        </div>
         
      </div>
<div className="mx-auto w-full max-w-[1440px] px-4">
<Hero_content/>
<Category/>
<Curses/>

<BestTeacher/>
</div>
    
      {/* footer */}
      <div className="border h-25"></div>
    </div>
  );
};

export { AuthLayout };
