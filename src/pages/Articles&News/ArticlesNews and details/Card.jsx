import { FiUser, FiCalendar, FiEye } from "react-icons/fi";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { Link } from "react-router-dom";

export default function NewsCard({ title, author, date, views,  }) {
    
  return (
    <div
      dir="rtl"
      className="hover:pointer-coarse block w-[753px] rounded-tr-4xl bg-gradient-to-l from-teal-100 via-teal-50 to-orange-50 px-6 py-6 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-center gap-2">
        <span className="size-2 shrink-0 rounded-full bg-teal-400" />
        <h3 className="text- font-bold text-[#005351]">{title}</h3>
      </div>

      <div className="mt-6 flex items-center gap-5 text-[11px] text-gray-400">
        <span className="flex items-center gap-1.5">
          <FiEye className="text-sm" />
          {views} بازدید
        </span>

        <span className="flex items-center gap-1.5">
          <FiCalendar className="text-sm" />
          {date}
        </span>

        <span className="flex items-center gap-1.5">
          <FiUser className="text-sm" />
          {author}
        </span>

        <button
          type="button"
          aria-label="ذخیره"
          onClick={(e) => e.preventDefault()}
          className="mr-auto text-lg text-teal-500 hover:text-teal-600"
        >
          <MdOutlineBookmarkBorder />
        </button>
      </div>
    </div>
  );
}