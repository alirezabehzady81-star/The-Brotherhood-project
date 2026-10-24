import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdPerson,
  MdSchool,
  MdBookmarks,
  MdComment,
  MdFavorite,
  MdSecurity,
} from "react-icons/md";

const menuItems = [
  { title: "داشبورد", to: "/dashboard", icon: <MdDashboard /> },
  { title: "اطلاعات کاربری", to: "/dashboard/profile", icon: <MdPerson /> },
  { title: "دوره های من", to: "/dashboard/my-courses", icon: <MdSchool /> },
  { title: "دوره های رزرو شده", to: "/dashboard/reserved", icon: <MdBookmarks /> },
  { title: "دیدگاه های من", to: "/dashboard/comments", icon: <MdComment /> },
  { title: "علاقه مندی ها", to: "/dashboard/favorites", icon: <MdFavorite /> },
  { title: "تنظیمات امنیتی", to: "/dashboard/security", icon: <MdSecurity /> },
];

export default function Sidebar() {
  return (
    <nav
      dir="rtl"
      className="flex w-[283px] flex-col gap-1.5 rounded-xl bg-[#01CEC9] "
    >
      {menuItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/dashboard"}
          className={({ isActive }) =>
            `group flex items-center gap-2 rounded-r-[10px] px-4 py-3 text-sm no-underline
             transition-all duration-200 active:scale-[0.98]
             ${
               isActive
                 ? "bg-white font-bold text-[#14c9b9] shadow-md    "
                 : "text-[#0b3b36] hover:bg-white hover:text-[#14c9b9] hover:shadow-md hover:border-l-[#E48900] hover:border-l-4 " 
             }`
          }
        >
          {({ isActive }) => (
            <>
       
              <span
                className={`flex text-lg transition-all duration-200 ${
                  isActive
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {item.icon}
              </span>
              <span>{item.title}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
    

  );
}