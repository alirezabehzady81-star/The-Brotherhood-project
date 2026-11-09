// import { FilterBox } from "./components/FilterBox/FilterBox";

import coursePic from "../../../../assets/pictures/courses/figma-icon-512x512-vdap7urx 1.svg";
import { FaRegUser } from "react-icons/fa6";
import academiPic from "../../../../assets/pictures/courses/academic hat.svg";
import levelPic from "../../../../assets/pictures/courses/Frame.svg";
import starPic from "../../../../assets/pictures/courses/stars.svg";
import addToBasketPic from "../../../../assets/pictures/courses/addToShoppingCard.svg";

const CourseItem = ({ title, teacher, score, level, price }) => {
  return (
    <div className="relative w-70.25 h-85.5 flex flex-col items-center justify-end hover:cursor-pointer">
      {/* corse image */}
      <div className="absolute top-0 w-61.5 h-40 rounded-[10px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] bg-[url(../../../../../../../public/images/courses/Rectangle24.svg)] bg-cover flex justify-center items-center">
        <img className="w-18.75 h-18.75 rounded-[42.5px]" src={coursePic} />
      </div>
      {/* corse info */}
      <div className="w-70.5 h-80.5 rounded-[15px] shadow-[0px_1px_2px_0_rgba(0,0,0,0.25)] flex flex-col justify-center text-[#888888]">
        {/* info wrapper */}
        <div className="w-full absolute top-42 flex flex-col gap-3.5 items-center">
          <h2 className="text-[20px] font-bold text-[#444444] px-5">{title}</h2>
          {/* info wrapper */}
          <div className="w-full flex justify-between px-4.5">
            <div className="text-[#888888] h-4.5 flex indent-2.5">
              <FaRegUser className="w-4.25 h-4.5" />
              {teacher}
            </div>
            <div className="flex justify-end items-center">
              {score}
              <img className="w-4 h-4 mr-2.5" src={academiPic} />
            </div>
          </div>
          {/* course level info */}
          <div className="w-full flex justify-between items-center px-5">
            <div className="flex text-[15px] font-normal indent-2">
              <img src={levelPic} />
              {level}
            </div>
            <div className="flex">
              <img className="w-4.5 h-4.5" src={starPic} />
              <img className="w-4.5 h-4.5" src={starPic} />
              <img className="w-4.5 h-4.5" src={starPic} />
              <img className="w-4.5 h-4.5" src={starPic} />
            </div>
          </div>
          <div className="border-t-2 border-[#ddd] w-60.75 h-9 text-end text-[#006865] pt-2.5 flex justify-between items-center px-3">
            <img src={addToBasketPic} className="w-6 h-6" />
            {price} تومان
          </div>
        </div>
      </div>
    </div>
  );
};

export { CourseItem };
