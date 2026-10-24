import { MdLogout } from "react-icons/md";

export default function LogoutButton({ onLogout }) {


  return (
    <button
      type="button"
      onClick={onLogout}
      dir="rtl"
      className="flex w-[117px] h-[25px] cursor-pointer  flex-wrap whitespace-nowrap m-auto
                  font-medium text-[#003B39] transition-all duration-200
                 hover:bg-white/30 active:scale-[0.98]"
    >
      <MdLogout className="text-xl  w-6 h-6 transition-transform duration-200 group-hover:-translate-x-1" />
      <span className="w-[89px] h-[24px] flex flex-wrap">خروج از حساب</span>
    </button>
  );
}