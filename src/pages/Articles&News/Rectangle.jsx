import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
export default function PostListCard({
  title,
  caption,
  items = [],
  linkText = "مشاهده مطلب",
  imageClassName = "rounded-full",
}) {
  return (
    <section
    dir="rtl"
      className="w-full text-right max-w-sm rounded-2xl bg-white px-4 py-6 shadow-md"
    >
      <h3 className="text-center text-base font-bold text-slate-800">
        {title}
      </h3>
      <p className="mt-2 mb-6 text-center text-[11px] text-gray-400">
        {caption}
      </p>

      <ul dir="" className="flex  flex-col gap-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="relative flex items-center gap-3 rounded-xl bg-white p-3 shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
          >
            <img
              src={item.image}
              alt={item.title}
              className={`absolute -top-2 rounded-full -left-2 size-20 object-cover ${imageClassName}`}
            />

            <div className="ml-20 flex flex-1 flex-col gap-2 py-3">
              <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
              <Link
                to={item.to ?? "#"}
                className="flex w-full items-center justify-between text-[11px] font-medium text-teal-500"
              >
                {linkText}
                <MdKeyboardArrowLeft className="text-sm" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
