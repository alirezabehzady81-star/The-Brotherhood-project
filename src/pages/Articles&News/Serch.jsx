import { FiSearch } from "react-icons/fi";

export default function NewsHeader({
  title = "اخبار و مقالات",
  caption = "با ما خودت رو به روز کن",
  placeholder = "چی میخوای یاد بدونی؟...",
  onSearch,
}) {
  return (
    <section dir="rtl" className="w-full max-w-xl">
      <div className="flex items-center gap-2 ">
        <span className="size-2.5 rounded-full bg-teal-400" />
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      </div>
      <p className="text-right mt-2 text-xm text-gray-400">{caption}</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch?.(new FormData(e.currentTarget).get("q"));
        }}
        className="relative mt-8 flex h-16 w-full items-center rounded-xl bg-white px-5 shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
      >
        <input
          type="text"
          name="q"
          placeholder={placeholder}
          className="h-full w-full bg-transparent pl-16 text-sm text-slate-700 outline-none placeholder:text-gray-400"
        />
        <button
          type="submit"
          aria-label="جستجو"
          className="absolute top-1/2 left-2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-orange-500 text-xl text-white transition hover:bg-orange-600"
        >
          <FiSearch />
        </button>
      </form>
    </section>
  );
}
