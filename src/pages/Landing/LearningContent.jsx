
import { CourseItem } from './CourseItem'
import { DefaultValue } from './Slider'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

export const LearningContent = ({
  title = "دوره های آموزشی",
  caption = "به روز ترین دوره هایی که میتونید پیدا کنید",

}) => {
  return (
    <>
      <div className="w-100% h-[100px] flex justify-center">
<div className="w-[370px] h-[90px] flex flex-col items-center ">
      <div className="flex items-center gap-2 ">
        <span className="size-2.5 rounded-full bg-teal-400" />
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      </div>
      <p className="text-right mt-2 text-xm text-gray-400">{caption}</p>
</div>
</div>
<div className="flex w-100% h-[496px] relative justify-center items-center-safe">
  <div className="w-[324px] h-[420px] absolute right-[40px] opacity-5">
<img src="../../img/Rectangle 23.svg" alt="" className="w-full h-full opacity-1" />
  </div>
<div   className="w-full h-full flex justify-center items-center">
  <div dir='rtl' className="flex items-center absolute left-40 top-10  gap-1.5">
<p className="">همه دوره ها</p>
<IoIosArrowBack />
  </div>
 <div  className="flex items-center absolute left-28  bottom-40 ">
  <IoIosArrowDropright  className='size-[35px]'/>
</div>


 <div  className="flex items-center absolute left-28  bottom-30 ">
  <IoIosArrowDropleft className='size-[35px]'/>
</div>

  <div className="flex w-[1187px] h-[323px] gap-10 absolute ">
    <CourseItem />
    <CourseItem/>
    <CourseItem/>
    <CourseItem/>
    
  </div>
  </div>
</div>
<div className="flex w-full justify-center">
<DefaultValue/>
</div>
    </>
  )
}
export default LearningContent
