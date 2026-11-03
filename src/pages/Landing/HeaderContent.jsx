import NewsHeader from "./Serch";

export const HeaderContent = () => {
  return (
    <div>
      <div dir="rtl" className="w-100% h-[652px] flex relative justify-center ">
        <div className=" w-[650px] h-[652px] flex justify-center ">
          <div className="m-auto w-[520px] h-[280px] space-y-3 flex flex-col ">
            <div className="w-[354px] h-[90px] flex flex-row gap-2">
              <h1 className="font-bold text-[60px] text-[#434343] ">عنوان</h1>
              <h1 className="font-bold text-[60px] text-[#01CEC9]">آموزشگاه</h1>
            </div>

            <div className=" flex flex-col ">
              <span className="font-normal text-[20px]  text-[#555555] text-right ">
                مرجع اموزش زنده و تعاملی برنامه نویسی حوزه وب{" "}
              </span>
              <span className="font-normal text-[20px]  text-[#555555] text-right flex-row-reverse">
                با دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی
              </span>
            </div>
            <NewsHeader />
          </div>
        </div>

        <div dir="ltr" className="w-1/2 flex relative">
          <div className=" h-112.5 content-around ">
            <img
              src="/src/img/hero section main shape.svg"
              alt=""
              className=""
            />
          </div>
          <div className=" h-50 w-34.75 content-around absolute -top-23">
            <img src="/src/img/1000 student.svg" alt="" className="" />
          </div>
        </div>
           <div className=" h-50 w-34.75 content-around absolute bottom-20 items-center">
            <img src="/src/img/50 teacher.svg" alt="" className="" />
          </div>
      </div>
    </div>
  );
};
