
import React from 'react'
import securityBtn from "./../../../../../../assets/pictures/common/Security.svg"
import SecurityAccordionList from './SecurityAccordionList'

const SecuritySettings = () => {
  return (
    <div className="relative w-full text-[16px] text-[rgba(157,157,157,1)]">

      {/* Title */}
      <div className="relative flex items-center justify-center mb-[40px]">
        <div className="absolute w-full h-[1px] bg-[rgba(242,242,242,1)]" />
        <img src={securityBtn} alt="" className="absolute right-[42px] top-[-10px] w-[50px] h-[50px] rounded-[10px] bg-[rgba(247,247,247,1)]" />
        <p className="relative px-[15px] bg-white text-[20px]">تنظیمات امنیتی</p>
      </div>

      <SecurityAccordionList />

    </div>
  )
}

export default SecuritySettings
