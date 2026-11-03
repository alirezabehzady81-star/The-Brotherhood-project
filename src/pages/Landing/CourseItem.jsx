
import coursePic from "../../assets/pictures/courses/figma-icon-512x512-vdap7urx 1.svg";
import { FaRegUser } from "react-icons/fa6";
import academiPic from "../../assets/pictures/courses/academic hat.svg";
import levelPic from "../../assets/pictures/courses/Frame.svg";
import starPic from "../../assets/pictures/courses/stars.svg";

const CourseItem = () => {


  return (

    <div dir="rtl" className="relative w-70.25 h-85.5 flex flex-col items-center justify-end ">
      {/* corse image */}
      <div className="absolute top-0 w-61.5 h-40 rounded-[10px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] bg-[url(../../../../../../../public/images/courses/Rectangle24.svg)] bg-cover flex justify-center items-center">
        <img className="w-18.75 h-18.75 rounded-[42.5px]" src={coursePic} />
      </div>
      {/* corse info */}
      <div className="w-70.5 h-80.5 rounded-[15px] shadow-[0px_1px_2px_0_rgba(0,0,0,0.25)] flex flex-col justify-center text-[#888888]">
        {/* info wrapper */}
        <div className="w-full absolute top-42 flex flex-col gap-3.5 items-center">
          <h2 className="text-[20px] font-bold text-[#444444] px-5">
            دوره پیشرفته دیزاین
          </h2>
          {/* info wrapper */}
          <div className="flex w-full justify-between  text-right ">
            <div className="text-[#888888] h-4.5 px-4.5 flex indent-2.5">
              <FaRegUser className="w-4.25 h-4.5" />
              حامد نظری
            </div>
            <div className="flex justify-end px-5 items-center">
              5.0
              <img className="w-4 h-4 mr-2.5" src={academiPic} />
            </div>
          </div>
          {/* course level info */}
          <div className="w-full flex justify-between items-center">
            <div className="px-5 flex text-[15px] font-normal indent-2">
              <img src={levelPic} />
              مقدماتی
            </div>
            <div className="px-5 flex">
              <img className="w-4.5 h-4.5" src={starPic} />
              <img className="w-4.5 h-4.5" src={starPic} />
              <img className="w-4.5 h-4.5" src={starPic} />
              <img className="w-4.5 h-4.5" src={starPic} />
            </div>
          </div>
          <div className="border-t-2 border-[#ddd] w-60.75 h-9 text-end text-[#006865] leading-9 bg-[url(../../../../../../../public/images/courses/addToShoppingCard.svg)] bg-no-repeat bg-position-[200px_100%] bg-size-[24px_24px] pt-2.5">
            1,450,000 تومان
          </div>
        </div>
      </div>
    </div>
    
  );
};

export { CourseItem };
