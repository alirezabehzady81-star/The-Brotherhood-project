import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

function CourseCard({ title, image, href = "#" }) {
  return (
    <div
      dir="rtl"
      className="flex items-center gap-3 rounded-lg bg-white p-2.5 shadow-sm ring-1 ring-gray-100"
    >
      <img
        src={image}
        alt={title}
        className="h-[72px] w-28 shrink-0 rounded-md object-cover"
      />

      <div className="text-right flex min-w-0 flex-1 flex-col justify-between gap-3 self-stretch">
        <h3 className="text-sm font-bold leading-6 text-[#005653]">{title}</h3>

        <Link
          to={href}
         dir="ltr"
          className="  inline-flex items-center gap-1 text-xs text-[#01CEC9] transition hover:text-[#00a8a4]"
        >
          <FiChevronLeft size={14} />
          <span>مشاهده دوره</span>
        </Link>
      </div>
    </div>
  );
}

export default function RelatedCourses({ courses = [], className = "" }) {
  return (
    <section
      dir="rtl"
      className={`overflow-hidden rounded-lg border border-gray-200 bg-gray-50 ${className}`}
    >
      <header className="bg-gray-200 px-4 py-3">
        <h2 className="text-base font-bold text-gray-700">دوره های مرتبط</h2>
      </header>

      <div className="flex flex-col gap-3 p-3">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}