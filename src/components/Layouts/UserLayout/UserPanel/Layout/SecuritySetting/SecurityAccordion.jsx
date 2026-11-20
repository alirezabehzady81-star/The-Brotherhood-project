
import React from 'react'
import accordionArrow from "./../../../../../../assets/pictures/common/accordionArrow.svg"

const SecurityAccordion = ({ title, isOpen, onToggle, children }) => {
  return (
    <div>
      <button type="button" onClick={onToggle} className="relative flex items-center justify-between w-full">
        <div className="absolute w-full h-[1px] bg-[rgba(242,242,242,1)]" />
        <span className="relative bg-white pl-[15px]">{title}</span>
        <img src={accordionArrow} alt="" className={`relative bg-white p-[7px] w-[26px] h-[26px] object-contain transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
      </button>

      <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="py-[15px]">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default SecurityAccordion
