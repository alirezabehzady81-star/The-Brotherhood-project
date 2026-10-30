// import React from 'react'
import { CorsesHeroSection } from "./../../../../components/partials/heroSections/CorsesHeroSection/CorsesHeroSection";
import trashPic from "../../../../assets/pictures/courses/icons8-trash-can 1.svg";
import { FilterBox } from "./components/FilterBox/FilterBox";
import sortPic from "../../../../assets/pictures/courses/1470039561556277129 1.svg";
import { GoChevronDown } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { BiGridAlt } from "react-icons/bi";
import coursePic from "../../../../assets/pictures/courses/figma-icon-512x512-vdap7urx 1.svg";
import { FaRegUser } from "react-icons/fa6";
import academiPic from "../../../../assets/pictures/courses/academic hat.svg";
import levelPic from "../../../../assets/pictures/courses/Frame.svg";
import starPic from "../../../../assets/pictures/courses/stars.svg";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { useQuery } from "react-query";
import axios from "axios";
import { useEffect } from "react";
import { getCourseList } from "../../../../services/courses/getCourseList";

const CourseItem = () => {
  // useEffect(() => {
  const { data, isLoading } = getCourseList();

  console.log(data)
  // console.log("data ==>", data.courseFilterDtos);

  // }, [])

  return (
    <div className="flex flex-col items-center">
      {/* heroSection */}
      <CorsesHeroSection />
      <div className="border flex gap-4.75">
        {/* filter section */}
        <div className="flex flex-col gap-4.5 border items-center border-[#ccc] rounded-[10px] w-77.75 h-220 shadow-(0px_1px_2px_0_black)]">
          <div className="w-68 h-11.25 bg-[#E7E7E7] rounded-[5px_5px_1px_1px] flex justify-between px-2.5 items-center bg-[url(../../../../../../../public/images/courses/Frame.svg)] bg-no-repeat bg-position-[235px_50%]">
            {/* <img className="w-5.5 h-5.5" src={filtersPic} /> */}
            <h3 className="text-[18px] text-[#333333] font-normal indent-8.75">
              فیلتر ها
            </h3>
            <img className="w-6.25 h-6.25" src={trashPic} />
          </div>
          <FilterBox />
        </div>
        {/* main section */}
        <div className="border w-299.5 h-220 flex flex-col">
          {/* sort section */}
          <div className="border w-full h-12.5 flex justify-between">
            <div className="border w-52 h-full flex justify-between items-center px-2.5 rounded-[5px_5px_0_0] shadow-[0_1px_3px_0_#00000040_0.5] text-[22px] font-normal">
              <img className="w-6.75 h-4.5" src={sortPic} />
              جدید ترین
              <GoChevronDown className="h-5 w-5" />
            </div>
            {/* sort changer buttons */}
            <div className="border w-25 h-full flex justify-between">
              <div className="border h-full w-11.25 rounded-[1px_10px_1px_1px] flex justify-center items-center">
                <FiMenu className="w-8.25 h-8.25" />
              </div>
              <div className="border h-full w-11.25 rounded-[10px_1px_1px_1px] bg-[#E7E7E7] flex justify-center items-center">
                <BiGridAlt className="w-8.25 h-8.25" />
              </div>
            </div>
          </div>
          {/* course items show section */}
          <div className="border w-full h-full py-2.5 px-5 flex flex-wrap gap-8">
            {/* course item */}
            {data?.courseFilterDtos.map((item, index) => {
              return (
                <div className="relative w-70.25 h-85.5 flex flex-col items-center justify-end">
                  {/* corse image */}
                  <div className="absolute top-0 w-61.5 h-40 rounded-[10px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] bg-[url(../../../../../../../public/images/courses/Rectangle24.svg)] bg-cover flex justify-center items-center">
                    <img
                      className="w-18.75 h-18.75 rounded-[42.5px]"
                      src={coursePic}
                    />
                  </div>
                  {/* corse info */}
                  <div className="w-70.5 h-80.5 rounded-[15px] shadow-[0px_1px_2px_0_rgba(0,0,0,0.25)] flex flex-col justify-center text-[#888888]">
                    {/* info wrapper */}
                    <div className="w-full absolute top-42 flex flex-col gap-3.5 items-center">
                      <h2 className="text-[20px] font-bold text-[#444444] px-5">
                        دوره پیشرفته دیزاین
                      </h2>
                      {/* info wrapper */}
                      <div className="flex justify-between items-center">
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
            })}

            {/* page navigation section */}
          </div>
            <div className="border w-52 h-6.25 mx-auto flex justify-between items-center">
              <div className="border w-6.25 h-6.25 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25) rounded-[25px] flex justify-center items-center">
                <FiArrowRight />
              </div>
              <div
                dir="ltr"
                className="flex h-full justify-center items-center gap-1.25"
              >
                <div className="border bg-[#FFB800] w-6.25 h-6.25 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25) rounded-[25px] flex justify-center items-center">
                  1
                </div>
                <div className="border w-6.25 h-6.25 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25) rounded-[25px] flex justify-center items-center">
                  2
                </div>
                ...
                <div className="border w-6.25 h-6.25 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25) rounded-[25px] flex justify-center items-center">
                  6
                </div>
                <div className="border w-6.25 h-6.25 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25) rounded-[25px] flex justify-center items-center">
                  7
                </div>
              </div>
              <div className="border w-6.25 h-6.25 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25) rounded-[25px] flex justify-center items-center">
                <FiArrowLeft />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export { CourseItem };
