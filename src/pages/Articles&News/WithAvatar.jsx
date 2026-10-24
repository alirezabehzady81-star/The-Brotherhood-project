import { Card } from "@heroui/react";
import { FiCalendar, FiEye } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";
 import { Link } from "react-router-dom";
export function WithAvatar() {
  return (
    <div>
      <Card className="w-[291px] gap-0 overflow-hidden p-0 h-[381px]" >
        <img
          alt="انگولار بهتر است یا ری اکت؟"
          className="block h-[170px] mt-0 rounded-[18px] w-full object-cover "
          loading="lazy"
          src="/src/img/f4e701a9a7f2a7fb0c9fd179bc58e1671a7757b9.png"
        />

        <Card.Header dir="rtl" className=" text-right text gap-2 px-4 pt-2 pb-0">
          <Card.Title className="text-bold w-full font-bold text-slate-800">
            انگولار بهتر است یا ری اکت؟
          </Card.Title>
          <Card.Description className="text-[11px] font-normal  leading-7 text-gray-400">
            angular یا react کدام بهتر است؟ اگه شما تو حوزه طراحی و برنامه نویسی
            وب فعالیت داشته باشین، قطعا اسم تکنولوژی هایی مثل react و angular رو
            ...
          </Card.Description>
        </Card.Header>

        <Card.Footer dir="rtl" className="flex flex-col gap-3 p-0 px-3">
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
        </Card.Footer>
      </Card>
    </div>
  );
}