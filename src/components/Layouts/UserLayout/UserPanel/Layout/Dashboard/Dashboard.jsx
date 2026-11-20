import React, { useState } from 'react'
import courseBtn from "./../../../../../../assets/pictures/common/course.svg";
import basketBtn from "./../../../../../../assets/pictures/common/basket.svg";
import belltBtn from "./../../../../../../assets/pictures/common/Bell.svg";
import Infocard from '../../../../../common/Infocard/Infocard';

const Dashboard = () => {
    const [news, setNews] = useState([
    { id: 1, title: "عنوان خبر اول", date: "1405/08/29", isNew: true },
    { id: 2, title: "عنوان خبر دوم", date: "1405/08/28", isNew: false },
    { id: 3, title: "عنوان خبر سوم", date: "1405/08/27", isNew: true },
  ])
  return (
    <div>
      {/* Head */}
      <div className="w-[800px] flex items-center justify-between">

        <Infocard
          title="4 دوره"
          description="شرکت کرده اید"
          icon={courseBtn}
          color="rgba(0,180,175,1)"
        />
        <Infocard
          title="2 دوره"
          description="رزرو کرده اید"
          icon={basketBtn}
          color="rgba(255, 184, 0, 1)"
        />
        <p className="w-[192px] text-[16px] text-[rgba(171,171,171,1)] text-center"> برای شرکت در دوره ها باید حداقل ٪ ۸۰ از پروفایل خود را تکمیل کنید</p>

        <div className="w-[110px] h-[110px] rounded-full flex items-center justify-center bg-[conic-gradient(from_90deg,rgba(228,137,0,1)_60%,rgba(0,0,0,0.25)_60%)] p-[6px] shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[25px] text-[rgba(0,106,103,1)]">
            60%
          </div>
        </div>
      </div>

      {/* Latest News and Articles  */}
      <div className="relative w-[800px] px-[41px] pb-[24px] mt-[55px] rounded-[10px] bg-[rgba(246,255,255,1)] shadow-[0_1px_3px_rgba(0,0,0,0.25)]">
        <div className="absolute left-[42px] top-[-25px] w-[50px] h-[50px] rounded-[10px] bg-[rgba(247,247,247,1)] shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex items-center justify-center">
          <img src={belltBtn}  className="w-[22px] h-[22px] object-contain" />
        </div>
        <h3 className="py-[15px] text-right">جدیدترین اخبار مقالات</h3>
        {news.map((item, index) => (
          <div key={item.id}>
            <div className="flex justify-between items-center py-2">
              <div className="flex gap-2 text-[rgba(85,85,85,1)]">
                {item.title}
                {item.isNew && <span className="text-[rgba(220,0,0,1)]">جدید</span>}
              </div>
              <span className="text-[rgba(153,153,153,1)]">{item.date}</span>
            </div>

            {index !== news.length - 1 && (
              <div className="border-t border-dashed border-[rgba(170,170,170,1)]" />
            )}
          </div>
        ))}
      </div>


      {/* Spacing */}
      <div className="w-full h-[1px] bg-[rgba(242,242,242,1)] mt-[32px] mb-[22px]"></div>


      {/* Courses Section */}
      <div className="grid grid-cols-2 gap-[24px]">
        {/* Right Section */}
        <div className="flex flex-col">
          <h3 className="text-right text-[18px] text-[rgba(119,119,119,1)]">دوره‌های در حال برگزاری:</h3>

          {/* Course Cards */}
          <div className="flex flex-col gap-[12px] mt-[20px]">
            {/* CourseCard */}
            {/* CourseCard */}
          </div>

          <div className="text-center text-[11px] text-[rgba(183,183,183,1)] mt-[20px] cursor-pointer">مشاهده بیشتر &gt;</div>
        </div>

        {/* Left Section */}
        <div className="flex flex-col">
          <h3 className="text-right text-[18px] text-[rgba(119,119,119,1)]">دوره‌های پیشنهادی:</h3>
          {/* Course Cards */}
          <div className="flex flex-col gap-[12px] mt-[20px]">
            {/* CourseCard */}
            {/* CourseCard */}
          </div>
          <div className="text-center text-[11px] text-[rgba(183,183,183,1)] mt-[20px] cursor-pointer">مشاهده بیشتر &gt;</div>
        </div>

      </div>


















    </div>
  )
}

export default Dashboard