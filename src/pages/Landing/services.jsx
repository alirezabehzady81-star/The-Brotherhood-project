
export default function Services(){ 
  return (
    <section dir="rtl" className="relative w-full flex  py-12">
      <div className="mx-auto flex flex-col justify-center items-center max-w-6xl px-6">

        <div className="text-center">
          <h2 className="inline-flex items-center gap-2 text-3xl font-extrabold text-gray-900">
            خدمات ما
            <span className="h-2.5 w-2.5 rounded-full bg-[#01CEC9]" />
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            مجموعه ای از تمام آنچه شما نیاز دارید
          </p>
        </div>
        <div dir="rtl" className="flex items-center gap-5 w-[1069px] h-[355px] pr-24 relative mt-[140px]">
          <div className=" h-50 w-34.75 content-around absolute -top-23">
            <img src="/src/img/services item1.svg" alt="" className="" />
          </div>
         <div className=" h-50 w-34.75 content-around absolute top-25 mr-60">
            <img src="/src/img/services item2.svg" alt="" className="" />
          </div>
          <div className=" h-50 w-34.75 content-around absolute mr-120 -top-23">
            <img src="/src/img/services item3.svg" alt="" className="" />
          </div>
          <div className=" h-50 w-34.75 content-around absolute mr-180 top-25">
            <img src="/src/img/services item4.svg" alt="" className="" />
          </div>




        </div>



      </div>
    </section>
  );
}