
import { FiCalendar, FiEye } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";
 import { Link } from "react-router-dom";
import { GetArticleList } from "../../services/ArticleNews/ArticleNews";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export function WithAvatar() {
  
  const articleData = useSelector((state) => state.article)

  const {data, refetch}= GetArticleList(articleData.params)

  console.log("data ==>", data)

  useEffect(() => {
    refetch()
  }, [articleData.params,refetch])

  // const data = []
  return (
    <div className=" w-230 h-fit  my-4  gap-5 flex flex-wrap justify-center">
      {data?.news?.map((item) => (
      <div className="w-72.25 gap-0 overflow-hidden p-0 h-95.25" >
        <img 
          alt="انگولار بهتر است یا ری اکت؟"
          className="block h-42.5 mt-0 rounded-[18px] w-full object-cover "
          loading="lazy"
          src="/src/img/Rectangle 95.svg"
        />

        <div dir="rtl" className=" text-right text overflow-hidden gap-2 px-4 h-30 pt-2 pb-0">
          <p className="text-bold w-full font-bold text-slate-800 ">
            {item.title}
          </p>
          <p className="text-[11px] font-normal  leading-7 text-gray-400">
          {item.googleDescribe}
         
          </p>
        </div>

        <div dir="rtl" className="flex flex-col  gap-3 p-0 px-3">
          <div className="flex w-full items-center justify-between border-t border-gray-200 pt-3 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <FiCalendar className="text-base text-teal-500" />
              1403/01/18
            </span>
            <span className="flex items-center gap-1.5">
              56 بازدید
              <FiEye className="text-base text-teal-500" />
            </span>
          </div>

          <Link
          to={"/ArticlesNewsDetail"}

            
            className="flex items-center justify-center gap-0.5 text-xs font-semibold text-orange-500"
          >
            <MdKeyboardArrowLeft dir="rtl" className=" text-base" />
            مطالعه بیشتر
          </Link>
        </div>
      </div>
        ))};
    </div>
  );
}