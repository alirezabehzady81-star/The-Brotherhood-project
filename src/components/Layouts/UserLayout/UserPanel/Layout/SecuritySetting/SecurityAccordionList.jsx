
import React, { useState } from 'react'
import hideEyeBtn from "./../../../../../../assets/pictures/common/HideEye.svg"
import saveBtn from "./../../../../../../assets/pictures/common/Save.svg"
import SecurityAccordion from './SecurityAccordion'

const menus = [
  'تغییر رمز عبور',
  'تایید ورود دو مرحله ای',
  'ایمیل بازیابی',
]

const SecurityAccordionList = () => {
  const [activeAccordion, setActiveAccordion] = useState(-1)
  const [showPasswords, setShowPasswords] = useState([false, false, false])

  const toggleAccordion = (index) => setActiveAccordion((prev) => prev === index ? -1 : index)

  const togglePassword = (index) => {
    setShowPasswords((prev) => prev.map((value, i) => i === index ? !value : value))
  }

  return (
    <div className="flex flex-col gap-[25px]">
      {menus.map((menu, index) => (
        <SecurityAccordion key={index} title={menu} isOpen={activeAccordion === index} onToggle={() => toggleAccordion(index)}>

          {/* Change Password */}
          {index === 0 && (
            <div className="flex flex-col items-center">
              <div className="flex items-end justify-center gap-[15px]">
                {['رمز عبور فعلی', 'رمز عبور جدید', 'تکرار رمز عبور'].map((title, i) => (
                  <div key={i} className="flex flex-col gap-[6px]">
                    <p className="text-[13px] text-[rgba(151,151,151,1)]">{title}</p>
                    <div className="relative w-[220px] h-[40px]">
                      <input type={showPasswords[i] ? 'text' : 'password'} className="w-full h-full rounded-[5px] bg-[rgba(251,251,251,1)] shadow-[inset_0px_1px_3px_rgba(0,0,0,0.2)] pr-[42px] pl-[16px] py-[11px] text-left text-[14px] text-[rgba(0,83,81,1)] outline-none" />
                      <button type="button" onClick={() => togglePassword(i)} className="absolute right-[14px] top-1/2 -translate-y-1/2">
                        <img src={hideEyeBtn} alt="" className="w-[18px] h-[18px] object-contain" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button type="button" className="flex items-center justify-center gap-[7px] w-[132px] h-[30px] mt-[47px] rounded-[25px] bg-[rgba(0,224,219,1)] text-[13px] text-[rgba(0,59,57,1)]">
                ذخیره تغییرات
                <img src={saveBtn} alt="" className="w-[15px] h-[15px] object-contain" />
              </button>
            </div>
          )}

          {/* Two-Factor Authentication */}
          {index === 1 && (
            <div className="flex items-center justify-center gap-[8px]">
              <p className="text-[15px] text-[rgba(0,80,78,1)]">مایل به ورود دومرحله‌ای هستم</p>
              <input type="checkbox" className="appearance-none w-[15px] h-[15px] rounded-[3px] bg-[rgba(255,255,255,1)] shadow-[inset_0px_1px_3px_rgba(0,0,0,0.25)] cursor-pointer checked:bg-[rgba(0,80,78,1)] checked:after:content-['✓'] checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white checked:after:text-[11px]" />
            </div>
          )}

          {/* Recovery Email */}
          {index === 2 && (
            <div className="flex flex-col items-center">
              <div className="w-[285px] flex justify-start mb-[6px]">
                <p className="text-[13px] text-[rgba(151,151,151,1)]">ایمیل جدید</p>
              </div>
              <input type="email" placeholder="example@gmail.com" className="w-[285px] h-[40px] rounded-[5px] bg-[rgba(251,251,251,1)] shadow-[inset_0px_1px_3px_rgba(0,0,0,0.2)] px-[12px] text-left text-[14px] placeholder:text-[rgba(211,211,211,1)] outline-none" />
            </div>
          )}

        </SecurityAccordion>
      ))}
    </div>
  )
}

export default SecurityAccordionList
