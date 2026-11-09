// import React from "react";
import { CorsesHeroSection } from "../../components/partials/heroSections/CorsesHeroSection/CorsesHeroSection.jsx";
import trashPic from "../../assets/pictures/courses/icons8-trash-can 1";
import { FilterBox } from "../../components/common/FilterBox/FilterBox";
import sortPic from "../../assets/pictures/courses/1470039561556277129 1.svg";
import { GoChevronDown } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { BiGridAlt } from "react-icons/bi";
import { Footer } from "../../components/partials/Footer/Footer";
import { Header } from "../../components/partials/Header/Header";
import { CourseItem } from "./components/CourseItem/CourseItem";
import { PagePagination } from "../../components/common/PagePagination/PagePagination";
import {
  catgoryFilter,
  timeLineFilter,
  levelFilter,
} from "./../../core/filterBoxItems.js";

const CoursesPage = () => {

  const courseList = [
    {
      id: 1,
      courName: "دوره پیشرفته دیزاین",
      courTeacher: "حامد نظری",
      courScore: 5,
      courLevel: "مقدماتی",
      courPrice: "1,450,000",
    },
    {
      id: 2,
      courName: "دوره پیشرفته react",
      courTeacher: "محمدرضا ساداتی",
      courScore: 5,
      courLevel: "پیشرفته",
      courPrice: "3,000,000",
    },
    {
      id: 3,
      courName: "دوره پیشرفته css",
      courTeacher: "اصغر پلنگ",
      courScore: 3,
      courLevel: "متوسط",
      courPrice: "2,000,000",
    },
    {
      id: 4,
      courName: "دوره پیشرفته js",
      courTeacher: "مسیح درخشانی",
      courScore: 5,
      courLevel: "پیشرفته",
      courPrice: "1,500,000",
    },
    {
      id: 5,
      courName: "دوره پیشرفته دیزاین",
      courTeacher: "متین باند",
      courScore: 5,
      courLevel: "پیشرفته",
      courPrice: "1,450,000",
    },
    {
      id: 6,
      courName: "دوره هوش مصنوعی گروک",
      courTeacher: "ایلان ماسک",
      courScore: 4.5,
      courLevel: "خیلی پیشرفته",
      courPrice: "2,000,000",
    },
    {
      id: 7,
      courName: "مهندسی نرم افزار",
      courTeacher: "محمدرضا ساداتی",
      courScore: 5,
      courLevel: "بزودی",
      courPrice: "2,000,001",
    },
    {
      id: 8,
      courName: "دوره بک اند",
      courTeacher: "اصغر انجین",
      courScore: 5,
      courLevel: "مقدماتی",
      courPrice: "1,450,000",
    },
    {
      id: 9,
      courName: "دوره بک اند",
      courTeacher: "اصغر انجین",
      courScore: 5,
      courLevel: "مقدماتی",
      courPrice: "1,450,000",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      {/* corses page */}
      <div className="pt-7.5 pb-2.25 flex justify-center">
        <div className="flex flex-col items-center">
          {/* heroSection */}
          <CorsesHeroSection />
          <div className="flex gap-4.75">
            {/* filter section */}
            <div className="flex flex-col gap-4.5 items-center border-[#ccc] rounded-[10px] w-77.75 h-220 shadow-(0px_1px_2px_0_black)]">
              <div className="w-68 h-11.25 bg-[#E7E7E7] rounded-[5px_5px_1px_1px] flex justify-between px-2.5 items-center bg-[url(../../../../../../../public/images/courses/Frame.svg)] bg-no-repeat bg-position-[235px_50%]">
                {/* <img className="w-5.5 h-5.5" src={filtersPic} /> */}
                <h3 className="text-[18px] text-[#333333] font-normal indent-8.75">
                  فیلتر ها
                </h3>
                <img className="w-6.25 h-6.25" src={trashPic} />
              </div>
              {/* category filter */}
              <FilterBox filterName="تکنولوژی" filterItems={catgoryFilter} />
              {/* timLine filter */}
              <FilterBox filterName="وضعیت" filterItems={timeLineFilter} />
              {/* course Level filter */}
              <FilterBox filterName="سطح" filterItems={levelFilter} />
            </div>
            {/* main section */}
            <div className="flex flex-col gap-2.5">
              {/* sort section */}
              <div className="w-[95%] h-12.5 flex justify-between">
                <div className="w-52 h-full flex justify-between items-center px-2.5 rounded-[5px_5px_0_0] shadow-[0_1px_3px_0_rgba(0,0,0,0.4)] text-[22px] font-normal">
                  <img className="w-6.75 h-4.5" src={sortPic} />
                  جدید ترین
                  <GoChevronDown className="h-5 w-5" />
                </div>
                {/* sort changer buttons */}
                <div className="w-25 h-full flex justify-between">
                  <div className="h-full w-11.25 rounded-[1px_10px_1px_1px] flex justify-center items-center shadow-[0_1px_3px_0_rgba(0,0,0,0.4)]">
                    <FiMenu className="w-8.25 h-8.25" />
                  </div>
                  <div className="h-full w-11.25 rounded-[10px_1px_1px_1px] bg-[#E7E7E7] flex justify-center items-center shadow-[0_1px_3px_0_rgba(0,0,0,0.4)]">
                    <BiGridAlt className="w-8.25 h-8.25" />
                  </div>
                </div>
              </div>
              {/* course items show section */}
              <div className="w-299.5 h-full py-2.5 px-5 flex flex-wrap justify-evenly gap-5 mt-4 mb-6">
                {/* corse items */}
                {courseList.map((item) => {
                  return (
                    <CourseItem
                      key={item.id}
                      title={item.courName}
                      teacher={item.courTeacher}
                      score={item.courScore}
                      price={item.courPrice}
                      level={item.courLevel}
                    />
                  );
                })}
              </div>
              {/* page navigation */}
              <PagePagination />
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export { CoursesPage };
