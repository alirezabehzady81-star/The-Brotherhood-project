import React from 'react'

const Infocard = ({ title, description, icon, color }) => {
  return (
    <div className="w-[190px] h-[77px] relative rounded-[5px] bg-[rgba(249,249,249,1)] shadow-[0_0_2px_rgba(0,0,0,0.25)]">

      <div
        className="absolute w-[57px] h-[57px] rounded-full left-[19px] top-[-28px] flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <img
          src={icon}
          alt=""
          className="w-[30px] h-[30px] object-contain"
        />
      </div>

      <p className="text-[30px]" style={{ color }}>
        {title}
      </p>

      <p className="text-[18px] text-[rgba(167,167,167,1)]">
        {description}
      </p>

    </div>
  )
}

export default Infocard
