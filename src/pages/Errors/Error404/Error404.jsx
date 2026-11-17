import React from 'react'
import { LoginButton } from '../../../components/common/LoginButton/LoginButton'
import { Logo } from '../../../components/core/icons/Logo/Logo'
import { SocialMedia } from '../../../components/common/SocialMedia/SocialMedia'
import { Email } from '../../../components/common/Email/Email'

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

        <div className="w-[834px] h-[536px] mt-[109px] mx-auto rounded-[30px] bg-gradient-to-br from-[#e48900bf] to-[#01CEC9BF] backdrop-blur-[4px]">
          <h1 className="font-[cherry] text-[90px] text-center text-[#003B390D] drop-shadow-[0_4px_4px_#00000040]">
            Error 404!
          </h1>
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