// import React from 'react'
import { LoginButton } from "../../common/LoginButton/LoginButton";
import { Logo } from "./../../core/icons/Logo/Logo";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* header */}
      <div className="border w-full h-30 flex justify-center items-end">
        <div className="h-12.5 w-312 mb-4.25 flex justify-between items-center">
          <Logo/>
          <LoginButton/>
        </div>
      </div>
        {/* footer */}
        <div className="border h-25">
        
        </div>
    </div>
  );
};

export { AuthLayout };
