import React from 'react'
import editBtn from "./../../../../../../assets/pictures/common/Edit.svg";
import userBtn from "./../../../../../../assets/pictures/common/User2.svg";

const ProfileInfo = ({ title, value }) => (
  <div className="flex items-center gap-[6px]">
    <p className="text-[17px] text-[rgba(171,171,171,1)]">{title} :</p>
    <p className="text-[17px] text-[rgba(204,110,0,1)]">{value}</p>
  </div>
)

const UserProfile = () => {
  return (
    <div className="relative flex flex-col w-full p-[40px] bg-[rgba(246,255,255,1)] rounded-[10px] shadow-[0px_1px_3px_rgba(0,0,0,0.25)]">
        <div className="absolute right-[42px] top-[-25px] w-[50px] h-[50px] rounded-[10px] bg-[rgba(247,247,247,1)] flex items-center justify-center">
          <img src={userBtn}/>
        </div>
      {/* Profile Information */}
      <div className="grid grid-cols-2 gap-[50px]">

        {/* Right Section */}
        <div className="flex flex-col gap-[35px]">
          <ProfileInfo title="نام و نام خانوادگی" value="فلان فلانی زاده" />
          <ProfileInfo title="کد ملی" value="--" />
          <ProfileInfo title="ایمیل" value="info@gmail.com" />
          <ProfileInfo title="تاریخ تولد" value="78/05/11" />
          <ProfileInfo title="جنسیت" value="--" />

          <div className="flex flex-col gap-[4px]">
            <p className="text-right text-[17px] leading-[1.8] text-[rgba(171,171,171,1)]">درباره من :</p>
            <p className="text-[17px] text-[rgba(204,110,0,1)] text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
          </div>

        </div>

        {/* Left Section */}
        <div className="flex items-start justify-between gap-[25px]">
          <div className="flex flex-col gap-[35px] flex-1">
            <ProfileInfo title="شماره همراه" value="09392229999" />
            <ProfileInfo title="تلگرام" value="--" />
            <ProfileInfo title="لینکدین" value="--" />
            <ProfileInfo title="آدرس" value="مازندران - ساری - میدان خزر" />
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[35px]">
                <ProfileInfo title="طول جغرافیایی" value="--" />
                <ProfileInfo title="عرض جغرافیایی" value="--" />
              </div>

              <div className="w-[120px] h-[120px] shrink-0 rounded-full bg-[rgba(242,242,242,1)] shadow-[0px_1px_3px_rgba(0,0,0,0.25)]">
                {/* Map Image */}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Edit Button */}
      <button className="flex items-center justify-center gap-[8px] w-[113px] h-[30px] border border-[rgba(1,206,201,1)] rounded-[5px] text-[14px] text-[rgba(0,86,83,1)] mx-auto mt-[40px]">
        ویرایش
        <img src={editBtn}/>
      </button>

    </div>
  )
}

export default UserProfile




