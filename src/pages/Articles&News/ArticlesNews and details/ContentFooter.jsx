function ContentFooter() {
  return (
    <div dir="rtl" className="w-full max-w-[754px] space-y-3">
      {/* نوار بارگیری محتوا */}
      <div className="flex items-center justify-between rounded border border-sky-400 bg-white px-4 py-3 text-sm text-gray-700">
        <span>بارگیری محتوا</span>
        <div className="flex items-center gap-2 text-gray-500">
          <span>فایل ها</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M7 3h7l5 5v13H7V3z" />
            <path d="M14 3v5h5" />
          </svg>
        </div>
      </div>

      {/* ردیف امتیاز و اشتراک‌گذاری */}
      <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm">
        {/* امتیاز */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>امتیاز ۳۵ نفر</span>
          <div className="flex text-yellow-400">
            {"★★★★☆".split("").map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>

        {/* اکشن‌ها */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <button className="flex items-center gap-1">👎 <span>۱</span></button>
          <button className="flex items-center gap-1">👍 <span>۲۵</span></button>
          <button className="flex items-center gap-1">اشتراک گذاری</button>
        </div>
      </div>
    </div>
  );
}
export default ContentFooter