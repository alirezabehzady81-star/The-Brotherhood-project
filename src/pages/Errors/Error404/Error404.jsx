import React from 'react'
import { LoginButton } from '../../../components/common/LoginButton/LoginButton'
import { Logo } from '../../../components/core/icons/Logo/Logo'
import { SocialMedia } from '../../../components/common/SocialMedia/SocialMedia'
import { Email } from '../../../components/common/Email/Email'
import img404 from "./../../../assets/pictures/Image/404 1.png";

const Error404 = () => {
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

<div className="relative w-[834px] h-[536px] mt-[109px] mx-auto rounded-[30px] bg-gradient-to-br from-[rgba(228,137,0,0.5)] to-[rgba(1,206,201,0.5)] backdrop-blur-[4px]">
  <img src={img404} className='absolute bottom-[30px] left-[-79px]'/>
  <h1 className="font-[cherry] text-[90px] text-center text-[rgba(0,59,57,0.1)] drop-shadow-[0_4px_4px_#00000040]">
    !Error 404
  </h1>

  <div className="flex flex-col items-start pr-[99px]">
    <p className="text-[55px] text-[rgba(0,59,57,1)]">نداریم!</p>
    <p className="mt-[47px] text-[24px] text-[rgba(0,104,101,1)]">فکر کنم راهتو گم کردی رفیق!</p>
    <p className="mt-[10px] text-[24px] text-[rgba(0,104,101,1)]">صفحه مورد نظر شما اینجا موجود نیست</p>
    <button type="button" className="w-[172px] h-[35px] mt-[63px] rounded-[21px] bg-[rgba(228,137,0,1)] text-[rgba(0,59,57,1)] text-[14px]">
      برگشت به صفحه نخست
    </button>
  </div>
</div>

      {/* footer */}
      <div className="flex h-28 gap-2 justify-end items-center px-24">
        {}
        <SocialMedia />
        <Email />
      </div>
    </div>
  )
}

export default Error404