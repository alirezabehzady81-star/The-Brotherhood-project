import { FiUser, FiCornerUpLeft, FiThumbsUp, FiThumbsDown } from "react-icons/fi";

export default function CommentItem({
  name ,
  email ,
  date ,
  likes ,
  dislikes ,
  avatar,
  onReply,
  onLike,
  onDislike,
  size,
  ring=''
}) {
  return (
    <div
      dir="rtl"
      className="flex items-center justify-between gap-4 border-b border-gray-200 px-4 py-3"
    >
  
      <div className="flex items-center gap-3">
        <div    className={` ${ring}   object-cover ring-2 ring-[#22d3c5] ring-offset-2 ring-offset-white flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-200 text-gray-400 `}> 
          {avatar ? (
            <img src={avatar} alt={name} className="h-full w-full object-cover " />
          ) : (
            <FiUser size={24}  />
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 text-sm">
            <span className="font-bold text-gray-800">{name}</span>
            <span className="text-gray-400">|</span>
            <span dir="ltr" className="text-gray-700">
              {email}
            </span>
          </div>
          <span className="text-xs text-gray-400">{date}</span>
        </div>
      </div>


      <div dir="ltr" className="flex items-center gap-2">
        <button
          onClick={onReply}
          aria-label="پاسخ"
          className="rounded-full p-2 text-[#22d3c5] transition hover:bg-[#22d3c5]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
        >
          <FiCornerUpLeft size={size} />
        </button>

        <button
          onClick={onLike}
          className="inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-[13px] text-orange-500 transition hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
        >
          <FiThumbsUp size={size} />
          <span>{likes.toLocaleString("fa-IR")}</span>
        </button>

        <button
          onClick={onDislike}
          className="inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-[13px] text-orange-500 transition hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
        >
          <FiThumbsDown size={size} />
          <span>{dislikes.toLocaleString("fa-IR")}</span>
        </button>
      </div>
    </div>
  );
}