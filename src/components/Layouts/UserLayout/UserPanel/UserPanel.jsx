import React, { useState } from 'react'
import UserPanelMenu from './UserPanelMenu'
import { Link, Outlet } from 'react-router-dom'
import profile1 from "./../../../../assets/pictures/profile/profile(1).png";

const UserPanel = () => {
    const   [menuState, setmenuState] = useState([
        {id: 1, name: "داشبورد", pageRoute: "/userpanel/dashboard"},
        {id: 2, name: "اطلاعات کاربری", pageRoute: "/userpanel/userprofile"},
        {id: 3, name: "دوره های من", pageRoute: "/userpanel/mycourses"},
        {id: 4, name: "دوره های رزرو شده", pageRoute: "/userpanel/myreservecourse"},
        {id: 5, name: "دیدگاه های من", pageRoute: "/userpanel/mycomments"},
        {id: 6, name: "علاقه مندی ها", pageRoute: "/userpanel/myfavorites"},
        {id: 7, name: "تنظیمات امنیتی", pageRoute: "/userpanel/securitysetting"}
    ]) 
  return (
    <div className="m-auto w-312.5 h-203.25 rounded-[15px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden flex">
        <div className="w-77 h-full bg-[#01CEC9] flex flex-col items-center text-[20px] text-[rgba(0,59,57,1)]">
            <div className="mt-11.75 w-31.25 h-31.25 rounded-full bg-[whitesmoke]"><img src={profile1} alt="" /></div>
            <div className="text-[20px] mt-[21px] overflow-hidden">فلان فلانی خوش آمدید</div>
            
            {/* Spacing */}
            <div className="w-[calc(100%-50px)] h-[1px] mx-[25px] my-[30px] bg-[rgba(20,186,182,1)] shrink-0"></div>

            {/* Menu */}
            <div className="w-[calc(100%-25px)] mr-[25px]">
                {
                    menuState.map((item, index) => {
                        return (
                            <UserPanelMenu
                                key={index}
                                pageName={item.name}
                                pageRouter={item.pageRoute}
                            />
                        )
                    })
                }
            </div>

            {/* Logout Button */}
            <div className="mt-auto mb-14">خروج از حساب </div>
        </div>
        <div className="w-full h-full flex flex-col items-center relative py-[100px] px-[70px]">
            <Link to="/" className="w-7.5 h-7.5 absolute top-7.75 left-8">
                <img src="/src/assets/pictures/common/Home.svg" alt="Home" />
            </Link>
            <Outlet/>
        </div>
    </div>
  )
}

export default UserPanel