// import React from 'react'
import { Outlet } from "react-router-dom";
// import components
import { Email } from "../../common/Email/Email";
import { Logo } from "../../core/icons/Logo/Logo";
import { SocialMedia } from "../../common/SocialMedia/SocialMedia";
import { LoginButton } from "../../common/LoginButton/LoginButton";

const AuthWrapper = () => {
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
      <Outlet />
      {/* footer */}
      <div className="flex h-28 gap-2 justify-end items-center px-24">
        {}
        <SocialMedia />
        <Email />
      </div>
    </div>
  );
};

export { AuthWrapper };
