import { Outlet } from 'react-router-dom'
// import CustomStyless from './CustomStyles'
import PaginationBasic from './Pagination'
import { WithAvatar } from './WithAvatar'
import PostListCard from './Rectangle'
import NewsHeader from './Serch'
import { CustomStyless } from './CustomStyles'


const suggestedPosts = [
  { id: 1, title: "چرا فیگما؟", image: "/src/img/ff1800fa69286aff4819156512be6e0b2ffd22d9.jpg", to: "/ArticlesNewsDetail" },
  { id: 2, title: "چگونه یک مدیر پروژه باشیم؟", image: "/src/img/5e73b9912271dcd8eb60c42cda58f1642e6503a8.jpg", to: "/ArticlesNewsDetail" },
  { id: 3, title: "سرعت تکنولوژی در قرن ۲۱", image: "/src/img/9c30dd1cf8af56fc7574b0826c5cc94ef1f6daf9.jpg", to: "/ArticlesNewsDetail" },
];

const podcasts = [
  { id: 1, title: "شروع یادگیری توسعه وب با ری اکت", image: "/src/img/70e7c3e96999230dd6ccc094e8d803664da58e76.jpg", to: "/ArticlesNewsDetail" },
  { id: 2, title: "شروع یادگیری توسعه وب با ری اکت", image: "/src/img/70e7c3e96999230dd6ccc094e8d803664da58e76.jpg", to: "/ArticlesNewsDetail" },
  { id: 3, title: "شروع یادگیری توسعه وب با ری اکت", image: "/src/img/70e7c3e96999230dd6ccc094e8d803664da58e76.jpg", to: "/ArticlesNewsDetail" },
];

const courses = [
  { id: 1, title: "دوره جامع انگولار", image: "/src/img/f4e701a9a7f2a7fb0c9fd179bc58e1671a7757b9 (4).png", to: "/ArticlesNewsDetail" },
  { id: 2, title: "دوره جامع فیگما", image: "/src/img/fbbfaff3f58b4edefff1cdd827e82897ce1e29f8.png", to: "/ArticlesNewsDetail" },
  { id: 3, title: "دوره جامع ری اکت", image: "/src/img/f4e701a9a7f2a7fb0c9fd179bc58e1671a7757b9 (3).png", to: "/ArticlesNewsDetail" },
];
 const ArticlesNews= () => {


  return (
    <div className="w-[1440px] h-[2342px]">
      <div className="w-full h-30">
        <Outlet/>
      </div>
      <section className=''  >
  <div className='w-[1150px] bg-[#F9F9F9]  mx-auto h-[540px] flex flex-col p-6 lg:flex-row top-11.75  relative '>
        <div className=" mx-auto h-[270px] lg:mx-0 lg:mb-0 ">
           <img src="/src/img/Screenshot 2026-10-16 233230.png"  className=" w-[549px] h-[500px]  mt-0"/>
        </div>
        <div className="flex flex-col space-y-10 lg:mt-16  ml-6 lg:w-1/2  ">
       
        <NewsHeader/>
        </div>
  </div>
      </section>
        <section >
  <div className="mt-20 w-full min-h-180 flex flex-col lg:flex-row p-6 bg-[#f9f9f9]">
<div className="w-[298px] h-fit flex flex-col p-6 bg-[#FFFFFF] space-y-5  ">
<aside className="flex flex-col gap-8">
      <PostListCard
        title="مطالب پیشنهادی"
        caption="این مطالب هم میتونه برای‌تون جالب باشه"
        items={suggestedPosts}
      />

      <PostListCard
        title="پادکست ها"
        caption="با ما بشنوید و بیاموزید"
        items={podcasts}

      />

      <PostListCard
        title="محبوب ترین دوره ها"
        caption="بهترین دوره‌هایی که میتونید یاد بگیرید"
        items={courses}

      />
    </aside>


</div>
        <div  name="" className=" w-[923px] mx-auto flex flex-col  ">
          <div dir="rtl" className="  h-[50px] flex flex-row gap-3 text-left">
          <h2 className="text-[#005351] text-[27px] mr-1.5  font-bold"> جدیدترین اخبار و مقالات </h2>
        <CustomStyless/>  

          </div>
           
                <div className=" w-[923px] h-fit  my-4  gap-5 flex flex-wrap justify-center">
                  <WithAvatar/>
                  <WithAvatar/>
                  <WithAvatar/>
                  <WithAvatar
                  
                  />
                  <WithAvatar/>
                  <WithAvatar/>
                  <WithAvatar/>
                  <WithAvatar/>
                  <WithAvatar/>


                </div>
<div className="mt-2.5">
  <PaginationBasic/>
</div>

        </div>


    </div>


        </section>


    </div>
  )
}
export default ArticlesNews