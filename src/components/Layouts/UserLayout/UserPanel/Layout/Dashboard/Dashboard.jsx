import React from 'react'
import courseBtn from "./../../../../../../assets/pictures/common/course.svg";
import basketBtn from "./../../../../../../assets/pictures/common/basket.svg";
import Infocard from '../../../../../common/Infocard/Infocard';

const Dashboard = () => {
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
    </div>
  )
}

export default Dashboard