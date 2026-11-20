import React, { useState } from 'react'
import courseBtn from "./../../../../../../assets/pictures/common/course.svg";
import basketBtn from "./../../../../../../assets/pictures/common/basket.svg";
import Infocard from '../../../../../common/Infocard/Infocard';

const Dashboard = () => {
    const [news, setNews] = useState([
    { id: 1, title: "عنوان خبر اول", date: "1405/08/29", isNew: true },
    { id: 2, title: "عنوان خبر دوم", date: "1405/08/28", isNew: false },
    { id: 3, title: "عنوان خبر سوم", date: "1405/08/27", isNew: true },
  ])
  return (
    <div>Dashboard
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



      <div className="w-[800px] px-[41px] pb-[24px] rounded-[10px] bg-[rgba(246,255,255,1)] shadow-[0_1px_3px_rgba(0,0,0,0.25)]">
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





















    </div>
  )
}

export default Dashboard