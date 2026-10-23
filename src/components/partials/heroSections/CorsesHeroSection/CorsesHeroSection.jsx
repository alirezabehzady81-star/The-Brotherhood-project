// import React from 'react'
import { SearchBox } from "../../../common/SearchBox/SearchBox";
import pic1 from "../../../../assets/pictures/common/coursesHeroSectionShape1.svg";

const CorsesHeroSection = () => {
  return (
    <div className="h-103 w-287 border">
      <div className="flex flex-col gap-6.75 justify-center w-full h-67.75 bg-[#EBF9F982] rounded-[15px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)]">
        {/* titles */}
        <div className="w-85.5 h-23 mr-7.75">
          <div className="text-[35px] font-bold text-[#000000]">
            {" "}
            <span className="ml-2.5 inline-block w-3.25 h-3.25 rounded-[13px] bg-[#01CEC9] bg-position-(50px)"></span>
            دوره های آموزشی
          </div>
          <p className="text-[#AAAAAA] text-[20px] font-normal indent-2.5">
            به روز ترین دوره هایی که میتونید پیدا کنید
          </p>
        </div>
        {/* search box */}
        <div className="mr-13.75">
          <SearchBox />
        </div>
        {/* images */}
        <div className="absolute">
          <img src={pic1} />
        </div>
      </div>
    </div>
  );
};

export { CorsesHeroSection };
