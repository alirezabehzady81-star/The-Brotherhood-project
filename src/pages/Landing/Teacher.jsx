
export const TeacherContent = ({
  title = "محبوب ترین دسته بندی ها",
  caption = "گستره وسیعی از محبوب ترین دوره ها",

}) => {
  return (
    <>
<div className="w-100% h-[100px] flex justify-center mt-10">
<div className="w-[370px] h-[90px] flex flex-col items-center ">
      <div className="flex items-center gap-2 ">
        <span className="size-2.5 rounded-full bg-teal-400" />
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      </div>
      <p className="text-right mt-2 text-xm text-gray-400">{caption}</p>
</div>
</div>
<div className="flex w-100% h-[496px] relative justify-center items-center-safe">
<div className=" w-100% h-[496px] relative ">
<img src="/src/img/Rectangle 15.svg" alt="" className="flex relative" />

<div className="w-full h-full flex absolute  top-0 justify-between">

<div className=" w-[395px] h-[400px]  ml-50 -top-3">
<img src="/src/img/teacher slider.svg" alt="" className="" />
</div>

<div className="  h-[262px] w-1/2 mt-20  items-center">
        <div className=" w-[450px] h-full flex justify-center m-auto ">
          <div className="h-[280px] space-y-1 items-center justify-center flex flex-col w-full">
            <div dir="rtl" className="w-full h-[60px] text-right flex flex-row gap-1">
              <p className="font-bold text-[25px] flex flex-row text-[#003231] ">برترین اساتید</p>
              <p className="font-bold text-[25px] text-[#006865]">رو همینجا پیدا می کنید!!</p>
            </div>

            <div className=" flex flex-col justify-center items-center ">
              <span className="font-normal text-[20px]  text-[#555555] text-right ">
                برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی
              </span>
              <span className="font-normal text-[20px]  text-[#555555] text-right flex-row-reverse">
              استان مازندران رو بهتر بشناسیم !
              </span>
            </div>
     
          </div>
        </div>
</div>

</div>

</div>

</div>

    </>
  )
}
export default TeacherContent