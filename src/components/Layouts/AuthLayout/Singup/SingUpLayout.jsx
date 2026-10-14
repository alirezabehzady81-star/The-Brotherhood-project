// import React from 'react'
// import components
// import { Outlet } from "react-router-dom";
import { Email } from "../../../common/Email/Email";
import { LoginButton } from "../../../common/LoginButton/LoginButton";
import { SocialMedia } from "../../../common/SocialMedia/SocialMedia";
import { Logo } from "../../../core/icons/Logo/Logo";

const SingUpLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* header */}
      <div className="w-full h-30 flex justify-center items-end">
        <div className="h-12.5 w-312 mb-4.25 flex justify-between items-center">
          <Logo />
          <LoginButton />
        </div>
      </div>
      {/* content */}
      <div className="flex justify-center">
        <div className="w-238 h-157.75 flex justify-around">
          <div className="flex flex-col gap-17 py-25.5 text-[24px] text-[#006865] font-bold text-left">
            <div>ثبت نام</div>
            <div>ورود</div>
          </div>
          <div className="flex items-center justify-center w-217.25 h-157.75 bg-[url(../../../../../../public/images/Layout/AuthLayout/Rectangle81.svg)] bg-no-repeat bg-contain">
            <div className="flex border w-97.25 h-100 bg-[url(../../../../../../../public/images/Layout/AuthLayout/Rectangle84.svg)] bg-position-[50%] bg-cover bg-no-repeat rounded-[15px]"></div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex h-28 gap-2 justify-end items-center px-24">
        <SocialMedia />
        <Email />
      </div>
    </div>
  );
};

export { SingUpLayout };
