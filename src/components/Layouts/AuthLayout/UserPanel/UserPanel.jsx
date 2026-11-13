import React, { useState } from 'react'
import UserPanelMenu from './UserPanelMenu'
import { Link } from 'react-router-dom'
const UserPanel = () => {
    const   [menuState, setmenuState] = useState([
        {id: 1, name: "داشبورد", pageRoute: "/"},
        {id: 2, name: "اطلاعات کاربری", pageRoute: "/"},
        {id: 3, name: "دوره های من", pageRoute: "/"},
        {id: 4, name: "دوره های رزرو شده", pageRoute: "/"},
        {id: 5, name: "دیدگاه های من", pageRoute: "/"},
        {id: 6, name: "علاقه مندی ها", pageRoute: "/"},
        {id: 7, name: "تنظیمات امنیتی", pageRoute: "/"}
    ]) 
  return (
    <div className="m-auto w-312.5 h-203.25 rounded-[15px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden flex">
        <div className="w-77 h-full bg-[#01CEC9] flex flex-col items-center">
            <div className="mt-11.75 w-31.25 h-31.25 rounded-full bg-[whitesmoke]"></div>
            <div className="">فلان فلانی خوش آمدید</div>
            <div className="">
                {
                    menuState.map((item, index) => {
                        return(
                            <UserPanelMenu key={index} pageName={item.name} pageRouter={item.pageRoute}/>
                        )
                    })
                }
            </div>
            <div className="mt-auto mb-14">خروج از حساب </div>
        </div>
        <div className="w-full h-full flex flex-col items-center relative">
            <Link to="/" className="w-7.5 h-7.5 absolute top-7.75 left-8">
                <img src="/src/assets/pictures/common/Home.svg" alt="Home" />
            </Link>
        </div>
    </div>
  )
}

export default UserPanel