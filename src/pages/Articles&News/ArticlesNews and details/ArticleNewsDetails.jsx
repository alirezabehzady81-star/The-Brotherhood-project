
import React from 'react'
import { Outlet } from 'react-router-dom'
import NewsCard from './Card'
import { BigCard } from './BigCard'
import ContentFooter from './ContentFooter'
import Comment from './Comment'

import RelatedCourses from "./CourseCard";



export  function  ArticleNewsDetails() {
  const courses = [
  { id: 1, title: "دوره تخصصی ترفند های طراحی فرانت اند", image: "/src/img/ff1800fa69286aff4819156512be6e0b2ffd22d9.jpg", href: "" },
  { id: 2, title: "دوره تخصصی ترفند های طراحی فرانت اند", image: "/src/img/ff1800fa69286aff4819156512be6e0b2ffd22d9.jpg", href: "" },
  { id: 3, title: "دوره تخصصی ترفند های طراحی فرانت اند", image: "/src/img/ff1800fa69286aff4819156512be6e0b2ffd22d9.jpg", href: "" },
  { id: 4, title: "دوره تخصصی ترفند های طراحی فرانت اند", image: "/src/img/ff1800fa69286aff4819156512be6e0b2ffd22d9.jpg", href: "" },
];
  const choice = [
  { id: 1, title: "همه چیز در مورد انگولار", image: "/src/img/f4e701a9a7f2a7fb0c9fd179bc58e1671a7757b9 (4).png", href: "" },
  { id: 2, title: "چگونه برای سایتمان پشتیبان بهتری باشیم ؟", image: "/src/img/5e73b9912271dcd8eb60c42cda58f1642e6503a8.jpg", href: "" },
  { id: 3, title: "چرا فیگما را انتخاب کنیم؟", image: "/src/img/fbbfaff3f58b4edefff1cdd827e82897ce1e29f8.png", href: "" },

];
  return (
    <div className='h-[3219px]'> 
 <div className="w-full h-30  bg-[#F9F9F9]">
        <Outlet/>
      </div>
<div dir='rtl' className="mx-25 space-x-4 mt-10 w-[1250px] bg-[#F9F9F9] h-[2700px] flex flex-row  ">
<section className="flex flex-col   h-[2000px] w-[753px]  space-y-4">
<NewsCard
  title="ری اکت چیست و چه کاربرد هایی دارد؟ + ۵ دلیل استفاده از ری اکت"
  author="مهدی اصغری"
  date="1403/01/18"
  views={56}
  link=""
/>
<BigCard/>
<ContentFooter/>
<Comment/>
</section>
<section className=' gap-4 w-[479px] h-fit flex flex-col' >
<div className= ' rounded-[10px] rounded-tl-[66px] h-[328px]  bg-gradient-to-r from-[#E48900] from-50% to-[#01CEC9] to-75% px-5 py-2.5 font-medium text-white w-full  h-328px'>
  <img src="/src/img/5d93e8727f023368593e6eaee700ca9a187b7367 (1).jpg" alt="" className="w-[457px] h-[306px] rounded-[10px] rounded-tl-[66px]" />
</div>
<RelatedCourses courses={courses} className="" />
<RelatedCourses courses={choice} className="" />
</section>


</div>

    </div>
  )
}
